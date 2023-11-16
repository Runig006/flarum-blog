<?php

namespace V17Development\FlarumBlog\Api;

use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;

class AttachForumSerializerAttributes
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
    public function __invoke(ForumSerializer $serializer, $model, $attributes)
    {
        // Populate forum settings
        $attributes['blogTags'] = explode("|", $this->settings->get('blog_tags', ''));
        $attributes['blogRedirectsEnabled'] = $this->settings->get('blog_redirects_enabled', 'both');
        $attributes['blogCommentsEnabled'] = $this->settings->get('blog_allow_comments', true);
        $attributes['blogHideTags'] = $this->settings->get('blog_hide_tags', true);
        $attributes['blogDefaultImage'] = $this->settings->get('blog_default_image_path', null);
        $attributes['canWriteBlogPosts'] = $serializer->getActor()->can('blog.writeArticles');
        $attributes['blogAddHero'] = $this->settings->get('blog_add_hero', true);
        $attributes['htmlSideBar'] = $this->settings->get('blog_html_sidebar', null);
        return $attributes;
    }
}
