import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import LinkButton from 'flarum/common/components/LinkButton';
import IndexPage from 'flarum/forum/components/IndexPage';
import DiscussionListState from 'flarum/forum/states/DiscussionListState';

export default function () {

    extend(IndexPage.prototype, 'navItems', function (items) {
        const params = app.search.stickyParams();

        items.add(
            'threadsList',
            <LinkButton href={app.route('threadsList', params)} icon="fas fa-comment">
                {app.translator.trans('v17development-flarum-blog.forum.threads')}
            </LinkButton>,
            50
        );
    });

    extend(IndexPage.prototype, 'setTitle', function () {
        if (app.current.get('routeName') === 'threadsList') {
            app.setTitle(app.translator.trans('v17development-flarum-blog.forum.threads'));
        }
    });

    extend(DiscussionListState.prototype, 'requestParams', function (params) {
        if (typeof params.include === 'string') {
            params.include = [params.include];
        } else {
            params.include?.push('blogMeta', 'firstPost', 'user');
        }
        if (app.current.get('routeName') === 'threadsList') {
            params.filter = params.filter ?? {};
            params.filter['-blog'] = "";
        }
    });
}