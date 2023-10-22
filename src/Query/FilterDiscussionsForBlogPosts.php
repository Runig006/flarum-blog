<?php

namespace V17Development\FlarumBlog\Query;

use Flarum\Filter\FilterState;
use Flarum\Query\QueryCriteria;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Discussion\Search\Gambit\FulltextGambit;
use Illuminate\Database\Query\Builder;

class FilterDiscussionsForBlogPosts
{
	/**
	 * FilterDiscussionsForBlogPosts constructor.
	 *
	 * @param SettingsRepositoryInterface $settings
	 */
	public function __construct(SettingsRepositoryInterface $settings)
	{
		// Get forum settings
		$this->settings = $settings;
	}

	/**
	 * @param FilterState $filter
	 * @param QueryCriteria $queryCriteria
	 */
	public function __invoke(FilterState $filter, QueryCriteria $queryCriteria)
	{
		// Do we need to filter?
		if (filter_var($this->settings->get('blog_filter_discussion_list'), FILTER_VALIDATE_BOOLEAN) === false) {
			return;
		}

		$activeGambits = $filter->getActiveFilters();
		$hideBlogPosts = true;

		// Loop through the active gambits
		foreach ($activeGambits as $gambit) {
			if (get_class($gambit) === BlogGambit::class) {
				$hideBlogPosts = false;
			}
			if (get_class($gambit) === FulltextGambit::class) {
				$hideBlogPosts = false;
			}
		}

		// Filter discussions from discussion list
		if ($hideBlogPosts) {
			$tagsArray = explode("|", $this->settings->get('blog_tags', ''));

			$filter->getQuery()
				->where(function ($query) use ($tagsArray) {
					$query->whereIn('discussions.id', function (Builder $query) use ($tagsArray) {
						$query->select('discussion_id')
							->from('discussion_tag')
							->whereIn('tag_id', $tagsArray);
					}, 'and');
					$query->whereIn('discussions.id', function (Builder $query) {
						$query->select('discussion_id')
							->from('blog_meta')
							->where('is_pending_review', false);
					}, 'and');
				});
		}
	}
}
