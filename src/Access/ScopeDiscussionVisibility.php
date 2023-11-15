<?php

namespace V17Development\FlarumBlog\Access;

use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;

class ScopeDiscussionVisibility
{
    /**
     * @param User $actor
     * @param Builder $query
     */
    public function __invoke(User $actor, Builder $query)
    {
        if(!$actor->hasPermission('blog.canApprovePosts') && !$actor->hasPermission('blog.writeArticles')) {
            $query->whereNotIn('discussions.id', function ($query) {
                return $query
                    ->select('discussion_id')
                    ->from('blog_meta')
                    ->where('is_pending_review', 1);
            });
        }
    }
}