<?php

namespace V17Development\FlarumBlog\Query;

use Flarum\Search\AbstractRegexGambit;
use Flarum\Search\SearchState;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Database\Query\Builder;

class FeaturedArticleFilterGambit extends AbstractRegexGambit
{

    public function __construct()
    {
    }

    protected function getGambitPattern()
    {
        return 'is:featured';
    }

    protected function conditions(SearchState $search, array $matches, $negate)
    {
        $search->getQuery()->where(function (Builder $query) use ($negate) {
            $query->whereIn('discussions.id', function (Builder $query) {
                $query->select('discussion_id')
                    ->from('blog_meta')
                    ->where('is_featured', true)
                    ->where('is_pending_review', false);
            }, 'and', $negate);
        });
    }
}
