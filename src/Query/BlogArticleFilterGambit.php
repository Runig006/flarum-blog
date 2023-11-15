<?php

namespace V17Development\FlarumBlog\Query;

use Flarum\User\User;
use Flarum\Filter\FilterInterface;
use Flarum\Filter\FilterState;
use Flarum\Search\AbstractRegexGambit;
use Flarum\Search\SearchState;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Database\Query\Builder;

class BlogArticleFilterGambit extends AbstractRegexGambit implements FilterInterface
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        // Get Flarum settings
        $this->settings = $settings;
    }

    protected function getGambitPattern()
    {
        return 'blog:(.+)';
    }

    public function getFilterKey(): string
    {
        return 'blog';
    }

    protected function conditions(SearchState $search, array $matches, $negate)
    {
        $position = (int) trim($matches[1]) ?? 0;
        $position = (int) $position;
        $this->buildQuery($search->getQuery(), $position, $negate);
    }

    public function filter(FilterState $filterState, $filterValue, bool $negate)
    {
        $position = (int) trim($filterValue) ?? 0;
        $position = (int) $filterValue;
        $this->buildQuery($filterState->getQuery(), $position, $negate);
    }

    protected function buildQuery(Builder $query, int $position = null, bool $negate = false)
    {
        $tagsArray = explode("|", $this->settings->get('blog_tags', ''));

        $query->where(function (Builder $query) use ($negate, $tagsArray, $position) {
            $query->whereIn('discussions.id', function (Builder $query) use ($tagsArray) {
                $query->select('discussion_id')
                    ->from('discussion_tag')
                    ->whereIn('tag_id', $tagsArray);
            }, 'and', $negate);
            $query->whereIn('discussions.id', function (Builder $query) use ($position) {
                $query->select('discussion_id')
                    ->from('blog_meta')
                    ->where('is_pending_review', false);
                if ($position !== null) {
                    $query->where('position', $position);
                }
            }, 'and', $negate);
        });
    }
}
