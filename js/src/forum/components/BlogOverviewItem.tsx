import Component from 'flarum/common/Component';
import Link from 'flarum/common/components/Link';
import Tooltip from 'flarum/common/components/Tooltip';
import humanTime from 'flarum/common/helpers/humanTime';
import icon from 'flarum/common/helpers/icon';
import Discussion from 'flarum/common/models/Discussion';
import classList from 'flarum/common/utils/classList';
import ItemList from 'flarum/common/utils/ItemList';
import app from 'flarum/forum/app';
import type Mithril from 'mithril';

interface Attrs {
  article: Discussion;
  defaultImage: string;
}

export default class BlogOverviewItem extends Component<Attrs> {
  titleItems(): ItemList<Mithril.Children> {
    const { article } = this.attrs;
    const items = new ItemList<Mithril.Children>();
    items.add('title', <>{article.title()}</>, 100);
    return items;
  }

  dataItems(): ItemList<Mithril.Children> {
    const { article } = this.attrs;
    const items = new ItemList<Mithril.Children>();
    items.add(
      'createdAt',
      <span class="BlogList-item-details-createdAt">
        {icon('far fa-clock')} {humanTime(article.createdAt())}
      </span>,
      100
    );
    return items;
  }

  contentItems(): ItemList<Mithril.Children> {
    const { article } = this.attrs;
    const summary = article.blogMeta()?.summary?.() || '';
    const items = new ItemList<Mithril.Children>();
    items.add('title', <h4>{this.titleItems().toArray()}</h4>, 100);
    if (summary) {
      items.add('summary', <p class="summary">{summary}</p>, 80)
    };
    items.add('data', <div class="data">{this.dataItems().toArray()}</div>, 60);

    return items;
  }

  getImage(): string {
    const { article, defaultImage } = this.attrs;

    return article.blogMeta()?.featuredImage?.() ? article.blogMeta().featuredImage() : defaultImage;
  }

  view(vnode: Mithril.Vnode<Attrs, this>) {
    const { article, defaultImage } = this.attrs;

    const blogImage = this.getImage();

    const isSized = article.blogMeta()?.isSized?.();

    return (
      <Link
        href={app.route('blogArticle', {
          id: `${article.slug()}`,
        })}
        className={classList(
          'BlogList-item',
          {
            'BlogList-item-sized': isSized,
            'BlogList-item-default': !isSized,
          },
          article.tags().map((tag) => `BlogList-item-category-${tag.id()}`)
        )}
      >
        {blogImage !== defaultImage &&
          <div class={classList('BlogList-item-photo')}>
            <img src={blogImage} />
          </div>
        }

        <div class="BlogList-item-content">{this.contentItems().toArray()}</div>
      </Link>
    );
  }
}
