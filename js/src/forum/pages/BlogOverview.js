import app from 'flarum/forum/app';

import IndexPage from 'flarum/components/IndexPage';
import Page from 'flarum/common/components/Page';
import Button from 'flarum/common/components/Button';
import Link from 'flarum/common/components/Link';
import LanguageDropdown from '../components/LanguageDropdown/LanguageDropdown';
import BlogOverviewItem from '../components/BlogOverviewItem';
import BlogTop from '../components/BlogTop';
import BlogCrudeSide from '../components/BlogCrudeSide';
import BlogSideArticles from '../components/BlogSideArticles';

export default class BlogOverview extends Page {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle(app.translator.trans('v17development-flarum-blog.forum.blog'));

    this.bodyClass = 'BlogOverviewPage';

    this.isLoading = true;
    this.articles = [];
    this.languages = app.store.all('discussion-languages');
    this.currentSelectedLanguage = m.route.param('lang') ? m.route.param('lang') : app.translator.formatter.locale;

    // Send history push
    app.history.push('blog');
    this.loadArticles();
  }

  // Load blog overview
  loadArticles() {
    this.reloadData();
    m.redraw();
  }

  reloadData() {
    let query = 'blog:0';
    if (this.languages !== null && this.languages.length >= 1) {
      query += ` language:${this.currentSelectedLanguage}`;
    }
    this.isLoading = true;
    let promise = app.store.find('discussions', {
      page: {
        page: 1,
        limit: 18,
      },
      filter: {
        q: query,
      },
      sort: '-createdAt',
    });
    promise.then(values => {
      if (values.length === 0) {
        this.isLoading = false;
        m.redraw();
        return;
      }
      this.articles = values;
      this.isLoading = false;
      m.redraw();
    });
  }

  title() {
    if (!m.route.param('slug')) {
      return <h2>{app.translator.trans('v17development-flarum-blog.forum.recent_posts')}</h2>;
    }

    const tag = app.store.all('tags').filter((tag) => tag.slug() === m.route.param('slug'));

    return (
      <h2>
        {tag && tag[0] && tag[0].name()}
        <small>
          {' '}
          - <Link href={app.route('blog')}>{app.translator.trans('v17development-flarum-blog.forum.return_to_overview')}</Link>
        </small>
      </h2>
    );
  }

  view() {
    const defaultImage = app.forum.attribute('blogDefaultImage')
      ? `url(${app.forum.attribute('baseUrl') + '/assets/' + app.forum.attribute('blogDefaultImage')})`
      : null;

    return [
      app.forum.attribute('blogAddHero') == true && IndexPage.prototype.hero(),
      <div className={'FlarumBlogOverview'}>
        <div className={'container'}>
          <div className={'BlogFeatured'}>
            <div className={'BlogOverviewButtons'}>
              {app.forum.attribute('canWriteBlogPosts') && (
                <Button className={'Button'} onclick={() => this.newArticle()} icon={'fas fa-pencil-alt'}>
                  {app.translator.trans('v17development-flarum-blog.forum.compose.write_article')}
                </Button>
              )}

              {this.languages !== null && this.languages.length >= 1 && (
                <LanguageDropdown
                  selected={this.currentSelectedLanguage}
                  onclick={(language) => {
                    this.currentSelectedLanguage = language;

                    m.route.set(document.location.pathname, {
                      lang: language,
                    });

                    this.reloadData();
                  }}
                />
              )}
            </div>
            {this.title()}
          </div>
          {<BlogTop />}
          <hr />
          <div className={'BlogScrubber'}>
            <div className={'BlogList'}>
              {this.isLoading && [false, false, false, false, false].map((state) => {
                return (
                  <div className={`BlogList-item BlogList-item-${state === true ? 'sized' : 'default'} BlogList-item-ghost`}>
                    <div className={'BlogList-item-photo FlarumBlog-default-image'}></div>
                    <div className={'BlogList-item-content'}>
                      <h4>&nbsp;</h4>
                      <p>&nbsp;</p>

                      <div className={'data'}>
                        <span>
                          <i className={'far fa-wave'} />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {!this.isLoading && this.articles.length >= 1 && this.articles.map((article) =>
                <BlogOverviewItem article={article} defaultImage={defaultImage}
                />)}

              {<BlogSideArticles />}
              {<BlogCrudeSide />}
            </div>
            <div class="Form--centered">
              <Link href={app.route('blogList')} className={'FlarumBlog-reached-load-more'}>
                <Button class={'Button'}>
                  {app.translator.trans('v17development-flarum-blog.forum.read_more')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>,
    ];
  }

  newArticle() {
    let tags = [];

    // Get current category
    const currentCategory = app.store.getBy('tags', 'slug', m.route.param('slug'));

    if (currentCategory) {
      tags.push(currentCategory);
    }

    // Redirect to the composer
    m.route.set(
      app.route('blogComposer', {
        tags: tags.map((tag) => tag.id()).join(),
        lang: this.languages.length > 0 ? this.currentSelectedLanguage : undefined,
      })
    );
  }
}
