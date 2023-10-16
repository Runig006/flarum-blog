<?php

namespace V17Development\FlarumBlog\Query;

use Flarum\Search\AbstractRegexGambit;
use Flarum\Search\SearchState;
use Illuminate\Database\Query\Builder;

class PendingValidationGambit extends AbstractRegexGambit
{

    public function __construct()
    {
    }

    protected function getGambitPattern()
    {
        return 'is:pending';
    }

    protected function conditions(SearchState $search, array $matches, $negate)
    {
        $search->getQuery()->where(function (Builder $query) use ($negate) {
            $query->whereIn('discussions.id', function (Builder $query) {
                $query->select('discussion_id')
                    ->from('blog_meta')
                    ->where('is_pending_review', true);
            }, 'and', $negate);
        });
    }
}
