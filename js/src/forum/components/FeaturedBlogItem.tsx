import Component from 'flarum/common/Component';
import Link from 'flarum/common/components/Link';
import Tooltip from 'flarum/common/components/Tooltip';
import humanTime from 'flarum/common/helpers/humanTime';
import icon from 'flarum/common/helpers/icon';
import Discussion from 'flarum/common/models/Discussion';
import ItemList from 'flarum/common/utils/ItemList';
import classList from 'flarum/common/utils/classList';
import app from 'flarum/forum/app';
import type Mithril from 'mithril';

interface Attrs {
  article: Discussion;
  defaultImage: string;
}

export default class FeaturedBlogItem extends Component<Attrs> {
  topItems(): ItemList<Mithril.Children> {
    const { article } = this.attrs;
    const items = new ItemList<Mithril.Children>();
    items.add(
      'tags',
      <span class="BlogFeatured-list-item-tags">
        {article.tags()?.map((tag) => (
          <span class="dataItem">{tag.name()}</span>
        ))}
      </span>,
      100
    );

    // Sticky is an optional dependency, so we can't
    // assume method existence.
    if (article.isSticky?.()) {
      items.add('sticky', <span class="BlogFeatured-list-item-isSticky dataItem">{icon('fas fa-thumbtack')}</span>, 80);
    }

    if (article.blogMeta()?.isPendingReview?.() || article.isHidden()) {
      items.add('hidden', <span class="BlogFeatured-list-item-isHidden dataItem">{icon('fas fa-eye-slash')}</span>, 60);
    }

    if (article.blogMeta()?.isPendingReview?.()) {
      let title = app.translator.trans('v17development-flarum-blog.forum.review_article.pending_review_title'); 
      let text = app.translator.trans('v17development-flarum-blog.forum.review_article.pending_review');
      let iconName = "far fa-clock";
      if (Date.parse(article.blogMeta().publishDate())) {
        title = app.translator.trans('v17development-flarum-blog.forum.review_article.withdraw_review_title');
        text = app.translator.trans('v17development-flarum-blog.forum.review_article.withdraw_review');
        iconName = "far fa-calendar";
      }
      items.add(
        'pendingReview',
        <Tooltip text={text} position="bottom">
          <span class="BlogFeatured-list-item-pendingReview dataItem">
            {icon(iconName)}  {title}
          </span>
        </Tooltip>,
        40
      );
    }

    return items;
  }

  dataItems(): ItemList<Mithril.Children> {
    const { article } = this.attrs;
    const items = new ItemList<Mithril.Children>();
    items.add(
      'createdAt',
      <span class="BlogFeatured-list-item-details-createdAt">
        {icon('far fa-clock')} {humanTime(article.createdAt())}
      </span>,
      100
    );
    return items;
  }

  view(vnode: Mithril.Vnode<Attrs, this>) {
    const { article, defaultImage } = this.attrs;
    const blogImage = article.blogMeta()?.featuredImage?.() ? `url(${article.blogMeta().featuredImage()})` : defaultImage;
    return (
      <Link href={app.route('blogArticle', {id: `${article.slug()}`,})}
        className={classList(
          'BlogFeatured-list-item',
          article.tags().map((tag) => `BlogFeatured-list-item-category-${tag.id()}`),
          'FlarumBlog-default-image'
        )}
        style={{ backgroundImage: blogImage }}
      >
        <div class="BlogFeatured-list-item-top">{this.topItems().toArray()}</div>

        <div className={'BlogFeatured-list-item-details'}>
          <h4>{article.title()}</h4>

          <div className={'data'}>{this.dataItems().toArray()}</div>
        </div>
      </Link>
    );
  }
}
