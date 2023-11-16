import { extend } from 'flarum/extend';
import app from 'flarum/forum/app';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';
import BlogPostSettingsModal from './Modals/BlogPostSettingsModal';
import Button from 'flarum/common/components/Button';
import Tooltip from 'flarum/common/components/Tooltip';
import Alert from 'flarum/common/components/Alert';

export default function () {
    extend(DiscussionControls, 'userControls', function (items, discussion, context) {
        // If the discussion is:
        // - Not a discusion...yeah dont have a clue why
        // - Is hidden
        // - The blog extension is not enabled
        // - This person cant write blogs
        // Dont waste any time
        if (!discussion || discussion.isHidden() || !'flarum-blog' in flarum.extensions || app.forum.attribute('canWriteBlogPosts') == false) {
            return;
        }

        // Find the tags that are "blog tags", find if this blog has any of that tags
        const blogTags = app.forum.attribute('blogTags') || [];
        const findblogTags = discussion.tags().filter((tag) => {
            return blogTags.indexOf(tag.id()) >= 0;
        });
        if (findblogTags.length == 0) {
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
                    onclick: () => app.modal.show(BlogPostSettingsModal, { article: discussion }),
                    icon: 'fas fa-cogs',
                },
                app.translator.trans('v17development-flarum-blog.forum.tools.article_settings')
            ),
            -10
        );

        if (discussion.attribute('canBeApprove')) {
            let sucess = 'v17development-flarum-blog.forum.review_article.approve_article_approved';
            let icon = 'fas fa-thumbs-up';
            let text = 'v17development-flarum-blog.forum.review_article.approve_article';

            let disabled = false;
            let title = "";

            if (discussion.blogMeta().isPendingReview() == false) {
                sucess = 'v17development-flarum-blog.forum.review_article.approve_article_dissaproved';
                icon = 'fas fas fa-thumbs-down';
                text = 'v17development-flarum-blog.forum.review_article.dissaprove_article';
            }

            if (discussion.blogMeta() == false) {
                disabled = true;
                title = app.translator.trans('v17development-flarum-blog.forum.tools.tooltip.missing_meta');
            }
            items.add(
                'approve',
                <Tooltip text={title}>
                    <Button className='Button' icon={icon} disabled={disabled} onclick={() => {
                        discussion.blogMeta().save({
                            isPendingReview: !discussion.blogMeta().isPendingReview(),
                        }).then(
                            () => {
                                app.alerts.show(
                                    Alert,
                                    { type: 'success' },
                                    app.translator.trans(sucess)
                                );
                            },
                            (response) => {
                                this.loading = false;
                                this.handleErrors(response);
                            }
                        );
                    }}
                    >
                        {app.translator.trans(text)}
                    </Button>
                </Tooltip>,
                -10
            );
        }
    });
}