<?php

namespace V17Development\FlarumBlog\Query;

use Flarum\User\User;
use Flarum\Filter\FilterInterface;
use Flarum\Filter\FilterState;
use Flarum\Search\AbstractRegexGambit;
use Flarum\Search\SearchState;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Database\Query\Builder;

class PendingValidationGambit extends AbstractRegexGambit implements FilterInterface
{

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    protected function getGambitPattern()
    {
        return 'is:pending';
    }

    public function getFilterKey(): string
    {
        return 'blogpending';
    }

    protected function conditions(SearchState $search, array $matches, $negate)
    {
        $this->buildQuery($search->getQuery(), $search->getActor(), $negate);
    }

    public function filter(FilterState $filterState, $filterValue, bool $negate)
    {
        $this->buildQuery($filterState->getQuery(), $filterState->getActor(), $negate);
    }

    protected function buildQuery(Builder $query, User $actor, bool $negate)
    {
        $tagsArray = explode("|", $this->settings->get('blog_tags', ''));

        $query->where(function (Builder $query) use ($negate, $tagsArray) {
            $query->whereIn('discussions.id', function (Builder $query) {
                $query->select('discussion_id')
                    ->from('blog_meta')
                    ->where('is_pending_review', true);
            }, 'and', $negate);
            $query->orWhere(function (Builder $q) use ($tagsArray) {
                $q->whereIn('discussions.id', function (Builder $query) use ($tagsArray) {
                    $query->select('discussion_id')
                        ->from('discussion_tag')
                        ->whereIn('tag_id', $tagsArray);
                }, 'and');
                $q->whereNotIn('discussions.id', function (Builder $query) use ($tagsArray) {
                    $query->select('discussion_id')
                        ->from('blog_meta');
                }, 'and');
            });
        });
    }
}
