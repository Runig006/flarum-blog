<?php

namespace V17Development\FlarumBlog\Listeners;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Exception\PermissionDeniedException;
use Flarum\Discussion\Event\Saving;
use V17Development\FlarumBlog\BlogMeta\BlogMeta;
use Illuminate\Support\Arr;

class CreateBlogMetaOnDiscussionCreate
{
    /**
     * CreateBlogMetaOnDiscussionCreate constructor.
     *
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        // Get Flarum settings
        $this->settings = $settings;
        $this->blogTags = explode("|", $this->settings->get('blog_tags', ''));
    }

    /**
     * @param $event
     */
    public function handle(Saving $event)
    {
        $discussion = $event->discussion;

        // After the tags are synced, check if it's a blog article
        $discussion->afterSave(function ($discussion) use ($event) {

            // Here it may happen that `$discussion->tags` gives an empty array because of a strange bug.
            // This can be reproduced when using the fof/discussion-language extension (v1.2.1)
            // For this reason we need to explictly reloag the tags relationship before using it here.
            $discussion->load('tags');

            // Make sure it's a blog base discussion!
            if ($discussion->blogMeta == null && $discussion->tags && $discussion->tags->whereIn('id', $this->blogTags)->count() > 0) {
                if (!$event->actor->can('blog.writeArticles')) {
                    throw new PermissionDeniedException;
                }

                // Auto approve if it does not require a review
                $blogMeta = BlogMeta::build(
                    $discussion->id,
                    Arr::get($event->data, 'attributes.blogMeta.featuredImage', null),
                    Arr::get($event->data, 'attributes.blogMeta.summary', null),
                    Arr::get($event->data, 'attributes.blogMeta.position', 0),
                    Arr::get($event->data, 'attributes.blogMeta.isSized', null),
                    true,
                    Arr::get($event->data, 'attributes.blogMeta.publishDate', null),
                );

                // Save meta
                $blogMeta->save();

                // Autolock articles
                if ($this->settings->get('blog_allow_comments', true) == false) {
                    $discussion->is_locked = true;
                    $discussion->save();
                }
            } else if ($discussion->blogMeta != null && $discussion->tags && $discussion->tags->whereIn('id', $this->blogTags)->count() == 0) {
                $discussion->blogMeta->delete();
            }
        });
    }
}
