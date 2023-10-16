import { extend } from 'flarum/extend';
import app from 'flarum/forum/app';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';
import BlogPostSettingsModal from './Modals/BlogPostSettingsModal';
import Button from 'flarum/common/components/Button';

export default function () {
    extend(DiscussionControls, 'userControls', function (items, discussion, context) {
        if (!discussion || discussion.isHidden() || !('flarum-blog' in flarum.extensions || !!discussion.blogMeta())) {
            return;
        }
        if (app.forum.attribute('canWriteBlogPosts') == false) {
            return;
        }
        items.add('separator1', <li className="Dropdown-separator" />, -10);
        items.add(
            'gotoBlog',
            Button.component(
                {
                    icon: 'fas fa-newspaper',
                    onclick: () => {
                        m.route.set(app.route('blogArticle', {
                            id: discussion.slug(),
                        }));
                    },
                },
                app.translator.trans('v17development-flarum-blog.forum.tools.goto_blog')
            ), -10
        );

        items.add(
            'articleSettings',
            Button.component(
                {
                    className: 'Button',
                    onclick: () => app.modal.show(BlogPostSettingsModal, { discussion }),
                    icon: 'fas fa-cogs',
                },
                app.translator.trans('v17development-flarum-blog.forum.tools.article_settings')
            ),
            -10
        );

        if (app.forum.attribute('canApproveBlogPosts') && discussion.blogMeta().isPendingReview()) {
            items.add(
                'approve',
                Button.component(
                    {
                        className: 'Button',
                        onclick: () => {
                            discussion.blogMeta().save({
                                isPendingReview: false,
                            }).then(
                                () => {
                                    app.alerts.show(
                                        Alert,
                                        { type: 'success' },
                                        app.translator.trans('v17development-flarum-blog.forum.review_article.approve_article_approved')
                                    );
                                },
                                (response) => {
                                    this.loading = false;
                                    this.handleErrors(response);
                                }
                            );
                        },
                        icon: 'fas fa-thumbs-up',
                    },
                    app.translator.trans('v17development-flarum-blog.forum.review_article.approve_article')
                ),
                -10
            );
        }
    });
}