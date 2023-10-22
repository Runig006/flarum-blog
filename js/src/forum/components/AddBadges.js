import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import Discussion from 'flarum/common/models/Discussion';
import Badge from 'flarum/common/components/Badge';

export default function addSubscriptionBadge() {
  extend(Discussion.prototype, 'badges', function (badges) {
    const blogTags = app.forum.attribute('blogTags') || [];
    const findblogTags = this.tags().filter((tag) => {
        return blogTags.indexOf(tag.id()) >= 0;
    });
    if (findblogTags.length == 0) {
        return;
    }
    badges.add('blog', <Badge label={app.translator.trans('flarum-subscriptions.forum.badge.following_tooltip')} icon="fas fa-newspaper" type="blog" />);

    if (app.forum.attribute('canApproveBlogPosts') && (this.blogMeta() == false || this.blogMeta().isPendingReview())) {
        badges.add('pending', <Badge label={app.translator.trans('flarum-subscriptions.forum.badge.following_tooltip')} icon="fas fa-clock" type="pending" />);
    }

  });
}