import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import Discussion from 'flarum/common/models/Discussion';
import Badge from 'flarum/common/components/Badge';

export default function () {
  extend(Discussion.prototype, 'badges', function (badges) {
    if (this.tags()) {
      const blogTags = app.forum.attribute('blogTags') || [];
      const findblogTags = this.tags().filter((tag) => {
        return blogTags.indexOf(tag.id()) >= 0;
      });
      if (findblogTags.length == 0) {
        return;
      }
      if (app.forum.attribute('canWriteBlogPosts')) {
        badges.add('blog', <Badge label={app.translator.trans('v17development-flarum-blog.forum.badge.blog')} icon="fas fa-newspaper" type="blog" />);

        if (this.blogMeta() && this.blogMeta().isPendingReview() == true) {
          if (Date.parse(this.blogMeta().publishDate())) {
            badges.add('pending_date', <Badge label={app.translator.trans('v17development-flarum-blog.forum.badge.pending_date')} icon="fas fa-calendar" type="pending_date" />);
          } else {
            badges.add('pending', <Badge label={app.translator.trans('v17development-flarum-blog.forum.badge.pending')} icon="fas fa-clock" type="pending" />);
          }
        }
        if (this.blogMeta() == false) {
          badges.add('missing_meta', <Badge label={app.translator.trans('v17development-flarum-blog.forum.badge.missing_meta')} icon="fas fa-store-slash" type="missing_meta" />);
        }
      }
    }
  });
}