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
      <span class="BlogFeatured-item-tags">
        {article.tags()?.map((tag) => (
          <span class="dataItem">{tag.name()}</span>
        ))}
      </span>,
      100
    );
    return items;
  }

  dataItems(): ItemList<Mithril.Children> {
    const { article } = this.attrs;
    const items = new ItemList<Mithril.Children>();
    items.add(
      'createdAt',
      <span class="BlogFeatured-item-details-createdAt">
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
          'BlogFeatured-item',
          article.tags().map((tag) => `BlogFeatured-item-category-${tag.id()}`),
          'FlarumBlog-default-image'
        )}
        style={{ backgroundImage: blogImage }}
      >
        <div class="BlogFeatured-item-top">{this.topItems().toArray()}</div>

        <div className={'BlogFeatured-item-details'}>
          <h4>{article.title()}</h4>

          <div className={'data'}>{this.dataItems().toArray()}</div>
        </div>
      </Link>
    );
  }
}
