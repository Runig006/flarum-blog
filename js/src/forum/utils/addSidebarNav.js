import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import LinkButton from 'flarum/common/components/LinkButton';

export default function addSidebarNav() {
  extend(IndexPage.prototype, 'navItems', function (items) {
    if (app.forum.attribute('blogAddSidebarNav') && app.forum.attribute('blogAddSidebarNav') !== '0') {
      items.add(
        'blog',
        <LinkButton icon="fas fa-comment" href={app.route('blog')}>
          {app.translator.trans('v17development-flarum-blog.forum.blog')}
        </LinkButton>,
        15
      );
    }
    if (app.forum.attribute('canWriteBlogPosts')) {
      var blogsP = app.search.stickyParams();
      blogsP.filter = {
        q: "is:blog"
      };
      items.add(
        'articles',
        <LinkButton href={app.route('index', blogsP)} icon="far fa-newspaper">
          {app.translator.trans('v17development-flarum-blog.forum.articles')}
        </LinkButton>,
        -10
      );
    }
    if (app.forum.attribute('canApproveBlogPosts')) {
      var pendingP = app.search.stickyParams();
      pendingP.filter = {
        q: "is:pending"
      };
      items.add(
        'pending',
        <LinkButton href={app.route('index', pendingP)} icon="fas fa-check-double">
          {app.translator.trans('v17development-flarum-blog.forum.pending')}
        </LinkButton>,
        -10
      );
    }
    return items;
  });
}
