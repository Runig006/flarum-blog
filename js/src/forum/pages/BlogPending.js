import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import LinkButton from 'flarum/common/components/LinkButton';
import IndexPage from 'flarum/forum/components/IndexPage';
import DiscussionListState from 'flarum/forum/states/DiscussionListState';
import GlobalSearchState from 'flarum/forum/states/GlobalSearchState';

export default function () {

    extend(IndexPage.prototype, 'navItems', function (items) {
        if (app.session.user && app.forum.attribute('canApproveBlogPosts')) {
            const params = app.search.stickyParams();

            items.add(
                'blogPending',
                <LinkButton href={app.route('blogPending', params)} icon="fas fa-clock">
                    {app.translator.trans('v17development-flarum-blog.forum.pending')}
                </LinkButton>,
                50
            );
        }
    });

    extend(IndexPage.prototype, 'setTitle', function () {
        if (app.current.get('routeName') === 'blogPending') {
            app.setTitle(app.translator.trans('v17development-flarum-blog.forum.pending'));
        }
    });

    extend(GlobalSearchState.prototype, 'params', function (params) {
        // We can't set `q` here directly, as that would make the search bar
        // think that text has been entered, and display the "clear" button.
        params.onBlogPending = app.current.get('routeName') === 'blogPending';
    });

    extend(DiscussionListState.prototype, 'requestParams', function (params) {
        if (typeof params.include === 'string') {
            params.include = [params.include];
        } else {
            params.include?.push('blogMeta', 'firstPost', 'user');
        }
        if (app.current.get('routeName') === 'blogPending') {
            params.filter = params.filter ?? {};
            params.filter.blogpending = 1;
        }
    });
}