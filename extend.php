<?php

namespace V17Development\FlarumBlog;

// Flarum classes

use Exception;
use Flarum\Api\Controller as FlarumController;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;
use Flarum\Discussion\Discussion;
use Flarum\Discussion\Event\Saving;
use Flarum\Discussion\Filter\DiscussionFilterer;
use Flarum\Discussion\Search\DiscussionSearcher;
use Flarum\Tags\Api\Serializer\TagSerializer;

// Controllers
use V17Development\FlarumBlog\Controller\BlogOverviewController;
use V17Development\FlarumBlog\Controller\BlogItemController;
use V17Development\FlarumBlog\Controller\BlogComposerController;

// Access
use V17Development\FlarumBlog\Access\ScopeDiscussionVisibility;
// API controllers
use V17Development\FlarumBlog\Api\AttachForumSerializerAttributes;
use V17Development\FlarumBlog\Api\AttatchTagSerializerAttributes;
use V17Development\FlarumBlog\Api\Controller\CreateBlogMetaController;
use V17Development\FlarumBlog\Api\Controller\UpdateBlogMetaController;
use V17Development\FlarumBlog\Api\Controller\UploadDefaultBlogImageController;
use V17Development\FlarumBlog\Api\Controller\DeleteDefaultBlogImageController;
use V17Development\FlarumBlog\Api\Serializer\BlogMetaSerializer;
// Listeners
use V17Development\FlarumBlog\Listeners\CreateBlogMetaOnDiscussionCreate;

// Models
use V17Development\FlarumBlog\BlogMeta\BlogMeta;

// Filters
use V17Development\FlarumBlog\Query\FilterDiscussionsForBlogPosts;
use V17Development\FlarumBlog\Query\BlogArticleFilterGambit;
use V17Development\FlarumBlog\Query\FeaturedArticleFilterGambit;

use Flarum\Extend\User as ExtendUser;
use Flarum\Api\Serializer\UserSerializer;

use V17Development\FlarumBlog\Console\AutoValidateCommand;
use V17Development\FlarumBlog\Console\AutoValidateSchedule;
use V17Development\FlarumBlog\Formatter\ScoreFormatter;
use V17Development\FlarumBlog\Query\PendingValidationGambit;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/Forum.less')
        ->route('/blog', 'blog.overview', BlogOverviewController::class)
        ->route('/blog/compose', 'blog.compose', BlogComposerController::class)
        ->route('/blog/pending', 'blog.pending')
        ->route('/blog/list', 'blog.list')
        ->route('/blog/category/{category}', 'blog.category', BlogOverviewController::class)
        ->route('/blog/{id:[\d\S]+(?:-[^/]*)?}', 'blog.post', BlogItemController::class)
    // Shall we add RSS?
    // ->get('/blog/rss.xml', 'blog.rss.xml', RSS::class)
    ,
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/Admin.less'),

    (new Extend\Routes('api'))
        ->post('/blogMeta', 'blog.meta', CreateBlogMetaController::class)
        ->patch('/blogMeta/{id}', 'blog.meta.edit', UpdateBlogMetaController::class)
        ->post('/blog_default_image', 'blog.default_image.upload', UploadDefaultBlogImageController::class)
        ->delete('/blog_default_image', 'blog.default_image.delete', DeleteDefaultBlogImageController::class),

    new Extend\Locales(__DIR__ . '/locale'),

    (new Extend\Model(Discussion::class))
        ->hasOne('blogMeta', BlogMeta::class, 'discussion_id'),

    (new Extend\ModelVisibility(Discussion::class))
        ->scope(ScopeDiscussionVisibility::class),

    (new Extend\ApiController(FlarumController\CreateDiscussionController::class))
        ->addInclude(['blogMeta', 'firstPost', 'user']),

    (new Extend\ApiController(FlarumController\ListDiscussionsController::class))
        ->addInclude(['blogMeta', 'firstPost', 'user']),

    (new Extend\ApiController(FlarumController\ShowDiscussionController::class))
        ->addInclude(['blogMeta', 'firstPost', 'user']),

    (new Extend\ApiController(FlarumController\UpdateDiscussionController::class))
        ->addInclude(['blogMeta', 'firstPost', 'user']),

    (new Extend\ApiSerializer(DiscussionSerializer::class))
        ->hasOne('blogMeta', BlogMetaSerializer::class),

    (new Extend\ApiSerializer(ForumSerializer::class))
        ->attributes(AttachForumSerializerAttributes::class),

    (new Extend\ApiSerializer(TagSerializer::class))
        ->attributes(AttatchTagSerializerAttributes::class),

    (new Extend\Event)
        ->listen(Saving::class, CreateBlogMetaOnDiscussionCreate::class),

    (new Extend\Filter(DiscussionFilterer::class))
        ->addFilterMutator(FilterDiscussionsForBlogPosts::class)
        ->addFilter(PendingValidationGambit::class)
        ->addFilter(BlogArticleFilterGambit::class),

    (new Extend\SimpleFlarumSearch(DiscussionSearcher::class))
        ->addGambit(BlogArticleFilterGambit::class)
        ->addGambit(FeaturedArticleFilterGambit::class)
        ->addGambit(PendingValidationGambit::class),

    (new ExtendUser())
        ->registerPreference('blogName', null, null)
        ->registerPreference('blogImage', null, null),

    (new Extend\ApiSerializer(UserSerializer::class))
        ->attributes(function ($serializer, $user, $attributes) {
            $attributes['blogName'] = $user->getPreference('blogName');
            $attributes['blogImage'] = $user->getPreference('blogImage');
            return $attributes;
        }),

    (new Extend\Formatter())
        ->configure(ScoreFormatter::class),

    (new Extend\Console())
        ->command(AutoValidateCommand::class)
        ->schedule(AutoValidateCommand::class, new AutoValidateSchedule()),
];
