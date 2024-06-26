<?php

namespace V17Development\FlarumBlog\BlogMeta\Commands;

use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Foundation\ValidationException;
use Flarum\Discussion\DiscussionRepository;
use Flarum\Discussion\Event\Hidden;
use Flarum\Discussion\Event\Started;
use Flarum\Settings\SettingsRepositoryInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use V17Development\FlarumBlog\BlogMeta\BlogMeta;
use V17Development\FlarumBlog\BlogMeta\BlogMetaValidator;
use Illuminate\Support\Arr;
use V17Development\FlarumBlog\Event\BlogMetaSaving;

class UpdateBlogMetaHandler
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
    public function handle(UpdateBlogMeta $command)
    {
        $actor = $command->actor;

        // Make sure the actor can edit blog-data
        $actor->assertCan('blog.writeArticles');

        // Data
        $id = $command->id;
        $data = $command->data;

        // Validate ID
        if (empty($command->id) || !is_numeric($command->id)) {
            throw new ValidationException([
                'message' => $this->translator->trans(
                    'v17development-flarum-blog.forum.validation.missing_id'
                )
            ]);
        }

        // Update new blog meta
        $blogMeta = BlogMeta::findOrFail($command->id);

        // Check if the user can publish his own articles
        $canPublish = $actor->can('blog.canApprovePosts') || $blogMeta->discussion->user->id == $actor->id;
        

        // Featured image
        if (Arr::has($data, 'attributes.featuredImage')) {
            $blogMeta->featured_image = Arr::get($data, 'attributes.featuredImage', null);
        }

        // Summary
        if (Arr::has($data, 'attributes.summary')) {
            $blogMeta->summary = Arr::get($data, 'attributes.summary', null);
        }

        // Is featured
        if (Arr::has($data, 'attributes.position')) {
            $blogMeta->position = Arr::get($data, 'attributes.position', 0);
        }

        // Is sized
        if (Arr::has($data, 'attributes.isSized')) {
            $blogMeta->is_sized = Arr::get($data, 'attributes.isSized', false);
        }

        // Update pending review
        if ($canPublish && Arr::has($data, 'attributes.isPendingReview')) {
            $blogMeta->is_pending_review = Arr::get($data, 'attributes.isPendingReview', false);
        }

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
