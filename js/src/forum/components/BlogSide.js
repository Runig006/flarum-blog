import Component from 'flarum/common/Component';
import Link from 'flarum/common/components/Link';
import BlogCrude from './BlogCrude';

export default class BlogSide extends Component {
  oninit(vnode) {
    super.oninit(vnode);

    this.isLoading = true;
    this.articles = [];
    this.languages = app.store.all('discussion-languages');
    this.currentSelectedLanguage = m.route.param('lang') ? m.route.param('lang') : app.translator.formatter.locale;

    this.loadArticles();
  }

  // Load blog overview
  loadArticles() {
    this.reloadData();
    m.redraw();
  }

  reloadData() {
    let query = 'blog:2';
    if (this.languages !== null && this.languages.length >= 1) {
      query += ` language:${this.currentSelectedLanguage}`;
    }
    this.isLoading = true;
    let promise = app.store.find('discussions', {
      page: {
        page: 1,
        limit: 11,
      },
      filter: {
        q: query,
      },
      sort: '-createdAt',
    });
    promise.then(values => {
      if (this.attrs.article) {
        values = values.filter((v) => v.id() != this.attrs.article.id());
      } else {
        values = values.slice(0, 10);
      }
      this.articles = values;
      this.isLoading = false;
      m.redraw();
    });
  }

  view() {
    return (
      <div className="BlogSide">
        <ul>
          {!this.isLoading && this.articles.length >= 1 && this.articles.map((article) =>
            <li>
              <Link href={app.route('blogArticle', { id: article.slug() })}>
                {article.title()}
              </Link>
            </li>
          )}
        </ul>
        <BlogCrude/>
      </div>
    );
  }
}
