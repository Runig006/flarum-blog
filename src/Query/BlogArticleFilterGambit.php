<?php

namespace V17Development\FlarumBlog\Query;

use Flarum\Discussion\Discussion;
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
        $position = (int) trim($matches[1]);
        $position = (int) $position;
        $this->buildQuery($search->getQuery(), $position, $negate);
    }

    public function filter(FilterState $filterState, $filterValue, bool $negate)
    {
        $position = (int) trim($filterValue);
        $position = (int) $filterValue;
        $this->buildQuery($filterState->getQuery(), $position, $negate);
    }

    protected function buildQuery(Builder $query, int $position = null, bool $negate = false)
    {
        $tagsArray = explode("|", $this->settings->get('blog_tags', ''));
        $featured = [];
        if($position === 0 ){
            $clonedQuery = clone $query;
            $featured = $this->getFetured($clonedQuery, $tagsArray);
        }

        $query->where(function (Builder $query) use ($negate, $tagsArray, $position, $featured) {
            $this->tagsQuery($query, $tagsArray, $negate);
            $this->pendingQuery($query, $negate);
            if($position > 0 ){
                $this->queryPosition($query, $position ,$negate);
            }
            if(count($featured)){
                $query->whereNotIn('discussions.id', $featured);
            }
        });

    }


    protected function getFetured($query, $tagsArray)
    {
        return $query->where(function (Builder $query) use ($tagsArray) {
            $this->tagsQuery($query, $tagsArray, 0);
            $this->pendingQuery($query, 0);
            $query->whereIn('discussions.id', function (Builder $query){
                $query->select('discussion_id')
                    ->from('blog_meta')
                    ->where('position', 1);
            });
        })->orderByDesc('created_at')->limit(3)->pluck('id');
    }

    private function tagsQuery($query, $tagsArray, $negate){
        $query->whereIn('discussions.id', function (Builder $query) use ($tagsArray) {
            $query->select('discussion_id')
                ->from('discussion_tag')
                ->whereIn('tag_id', $tagsArray);
        }, 'and', $negate);
        return $query;
    }

    private function pendingQuery($query, $negate){
        $query->whereIn('discussions.id', function (Builder $query) {
            $query->select('discussion_id')
                ->from('blog_meta')
                ->where('is_pending_review', false);
        }, 'and', $negate);
    }

    private function queryPosition($query, $position, $negate){
        $terst = $position;
        $query->whereIn('discussions.id', function (Builder $query) use($position){
            $query->select('discussion_id')
                ->from('blog_meta')
                ->where('position', $position);
        });
        return $query;
    }
}
