import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import LinkButton from 'flarum/common/components/LinkButton';
import IndexPage from 'flarum/forum/components/IndexPage';
import DiscussionListState from 'flarum/forum/states/DiscussionListState';
import GlobalSearchState from 'flarum/forum/states/GlobalSearchState';

export default function () {

    extend(IndexPage.prototype, 'navItems', function (items) {
        const params = app.search.stickyParams();

        items.add(
            'blogList',
            <LinkButton href={app.route('blogList', params)} icon="fas fa-newspaper">
                {app.translator.trans('v17development-flarum-blog.forum.articles')}
            </LinkButton>,
            50
        );
    });

    extend(IndexPage.prototype, 'setTitle', function () {
        if (app.current.get('routeName') === 'blogList') {
            app.setTitle(app.translator.trans('v17development-flarum-blog.forum.articles'));
        }
    });

    extend(DiscussionListState.prototype, 'requestParams', function (params) {
        if (typeof params.include === 'string') {
            params.include = [params.include];
        } else {
            params.include?.push('blogMeta', 'firstPost', 'user');
        }
        if (app.current.get('routeName') === 'blogList') {
            params.filter = params.filter ?? {};
            params.filter.blog = 1;
        }
    });
}