<?php

namespace V17Development\FlarumBlog\Api;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\DiscussionSerializer;

class AttachDiscussionSerializerAttributes
{
    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        // Get Flarum settings
        $this->settings = $settings;
    }

    /**
     * @param Serializing $event
     */
    public function __invoke(DiscussionSerializer $serializer, $model, $attributes)
    {
        $writer = $model->user->id;
        $actor = $serializer->getActor()?->id ?? null;
        $attributes['canBeApprove'] = $serializer->getActor()->can('blog.canApprovePosts') || $writer == $actor;
        return $attributes;
    }
}
