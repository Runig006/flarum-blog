<?php

namespace V17Development\FlarumBlog\BlogMeta\Commands;

use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Discussion\DiscussionRepository;
use Flarum\Discussion\Event\Hidden;
use Flarum\Discussion\Event\Started;
use Flarum\Settings\SettingsRepositoryInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use V17Development\FlarumBlog\BlogMeta\BlogMeta;
use V17Development\FlarumBlog\BlogMeta\BlogMetaValidator;
use Illuminate\Support\Arr;
use V17Development\FlarumBlog\Event\BlogMetaSaving;

class CreateBlogMetaHandler
{
    /**
     * @var DiscussionRepository
     */
    protected $discussion;

    /**
     * @var TranslatorInterface
     */
    protected $translator;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var BlogMetaValidator
     */
    protected $validator;

    /**
     * @var Dispatcher
     */
    protected $dispatcher;

    public function __construct(DiscussionRepository $discussion, TranslatorInterface $translator, SettingsRepositoryInterface $settings, BlogMetaValidator $validator, Dispatcher $dispatcher)
    {
        $this->discussion = $discussion;
        $this->translator = $translator;
        $this->settings = $settings;
        $this->validator = $validator;
        $this->dispatcher = $dispatcher;
    }

    /**
     * Handle new support blog meta
     */
    public function handle(CreateBlogMeta $command)
    {
        $actor = $command->actor;

        // Make sure the actor can edit blog-data
        $actor->assertCan('blog.writeArticles');

        // Data
        $data = $command->data;

        // Validate discussion exists
        $discussionId = Arr::get($data, 'relationships.discussion.data.id');
        $discussion = $this->discussion->findOrFail($discussionId, $actor);

        // Check if the user can publish his own articles
        $canPublish = $actor->can('blog.canApprovePosts') ||  $discussion->user->id == $actor->id;

        // Create new blog meta
        $blogMeta = BlogMeta::firstOrNew([
            'discussion_id' => $discussion->id
        ]);

        $blogMeta->discussion_id = $discussion->id;

        $blogMeta->featured_image = Arr::get($data, 'attributes.featuredImage', null);
        $blogMeta->summary = Arr::get($data, 'attributes.summary', null);
        $blogMeta->position = Arr::get($data, 'attributes.position', 0);
        $blogMeta->is_sized = Arr::get($data, 'attributes.isSized', false);

        $blogMeta->is_pending_review = true;

        //If we have a publish date, dont give a fuck...is """pending review"""
        if ($canPublish && Arr::has($data, 'attributes.publishDate')) {
            $blogMeta->publish_date = Arr::get($data, 'attributes.publishDate', false);
            if ($blogMeta->publish_date) {
                $blogMeta->is_pending_review = true;
            }
        }

        // Allow extensions to add their own attributes
        $this->dispatcher->dispatch(
            new BlogMetaSaving($blogMeta, $actor, $data)
        );

        $event = $blogMeta->is_pending_review ? Hidden::class : Started::class;
        $this->dispatcher->dispatch(new $event($blogMeta->discussion, $actor));

        // Validate
        $this->validator->assertValid($blogMeta->getDirty());

        $blogMeta->save();

        return $blogMeta;
    }
}
