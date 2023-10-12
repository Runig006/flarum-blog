import app from 'flarum/forum/app';

import IndexPage from 'flarum/components/IndexPage';
import Page from 'flarum/common/components/Page';
import Button from 'flarum/common/components/Button';
import BlogCategories from '../components/BlogCategories';
import Link from 'flarum/common/components/Link';
import LanguageDropdown from '../components/LanguageDropdown/LanguageDropdown';
import ForumNav from '../components/ForumNav';
import BlogOverviewItem from '../components/BlogOverviewItem';
import FeaturedBlogItem from '../components/FeaturedBlogItem';
import BlogCrudeSide from '../components/BlogCrudeSide';

export default class BlogOverview extends Page {
  oninit(vnode) {
    super.oninit(vnode);

    app.setTitle(app.translator.trans('v17development-flarum-blog.forum.blog'));

    this.bodyClass = 'BlogOverviewPage';

    this.isLoading = true;
    this.featuredPosts = [];
    this.posts = [];

    this.languages = app.store.all('discussion-languages');

    this.currentSelectedLanguage = m.route.param('lang') ? m.route.param('lang') : app.translator.formatter.locale;

    // Send history push
    app.history.push('blog');

    this.loadBlogOverview();

    this.featuredCount = parseInt(app.forum.attribute('blogFeaturedCount'));

    this.showCategories = true;
    this.showForumNav = true;


    this.scrollTimeout = setTimeout(this.scroll.bind(this, 1), 10000);
  }

  scroll(direction) {
    clearTimeout(this.scrollTimeout);
    let list = document.querySelector('.BlogFeatured-list');
    let item = document.querySelector('.BlogFeatured-list-item');
    let maxScroll = list.scrollWidth - list.clientWidth;
    let scrollAvailable = maxScroll - list.scrollLeft;

    if (direction > 0 && scrollAvailable < item.clientWidth) {
      list.scrollLeft = 0;
    }

    switch (true) {
      case direction > 0 && scrollAvailable < item.clientWidth:
        list.scrollLeft = 0;
        break;
      case direction < 0 && scrollAvailable == maxScroll:
        list.scrollLeft = maxScroll;
        break;
      default:
        list.scrollLeft += direction * (item.clientWidth + 20);
        break;
    }

    this.scrollTimeout =  setTimeout(this.scroll.bind(this, 1), 5000);
  }

  // Load blog overview
  loadBlogOverview() {
    const preloadBlogOverview = app.preloadedApiDocument();
    if (preloadBlogOverview) {
      // We must wrap this in a setTimeout because if we are mounting this
      // component for the first time on page load, then any calls to m.redraw
      // will be ineffective and thus any configs (scroll code) will be run
      // before stuff is drawn to the page.
      let featured = [];
      let normal = [];
      preloadBlogOverview.forEach(entry => {
        if (entry.data.attributes.isFeatured) {
          featured.push(entry);
        } else {
          normal.push(entry);
        };
      });
      setTimeout(this.show.bind(this, normal, featured), 0);
    } else {
      this.reloadData();
    }

    m.redraw();
  }

  reloadData() {
    let normalQ = `-is:featured is:blog${m.route.param('slug') ? ` tag:${m.route.param('slug')}` : ''}`;
    let featuredQ = `is:featured is:blog${m.route.param('slug') ? ` tag:${m.route.param('slug')}` : ''}`;

    if (this.languages !== null && this.languages.length >= 1) {
      normalQ += ` language:${this.currentSelectedLanguage}`;
      featuredQ += ` language:${this.currentSelectedLanguage}`;
    }
    this.isLoading = true;
    let normalPromise = app.store.find('discussions', {
      page: {
        page: 1,
        limit: 23,
      },
      filter: {
        q: normalQ,
      },
      sort: '-createdAt',
    });
    let featuredPromise = app.store.find('discussions', {
      page: {
        page: 1,
        limit: 15,
      },
      filter: {
        q: featuredQ,
      },
      sort: '-createdAt',
    });
    let promises = [
      normalPromise,
      featuredPromise,
    ];
    Promise.all(promises).then(values => {
      setTimeout(this.show.bind(this, values[0], values[1]), 0);
    });
  }

  // Show blog posts
  show(articles, featured) {
    if (articles.length === 0 && featured.length === 0) {
      this.isLoading = false;
      m.redraw();
      return;
    }
    if (featured.length < 3) {
      let needed = 3 - featured.length;
      featured = featured.concat(articles.splice(0, needed));
    }
    if (articles.length > 20) {
      articles.splice(19);
    }

    // Set pagination
    this.hasMore = false;

    this.featuredPosts = featured;
    this.posts = articles;

    this.isLoading = false;

    m.redraw();
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

            <div class="BlogFeatured-carousel">
              <Button className={'Button BlogFeatured-button'} onclick={() => this.scroll(-1)} icon={'fas fa-arrow-left'}> </Button>
              <div class="BlogFeatured-list">
                {/* Ghost data */}
                {this.isLoading &&
                  [...new Array(3).fill(undefined)].map(() => (
                    <div class="BlogFeatured-list-item BlogFeatured-list-item-ghost">
                      <div class="BlogFeatured-list-item-details">
                        <h4>&nbsp;</h4>

                        <div class="data">
                          <span>
                            <i class="far fa-wave" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                {!this.isLoading &&
                  this.featuredPosts.length >= 0 &&
                  this.featuredPosts.map(
                    (article) => <FeaturedBlogItem article={article} defaultImage={defaultImage} />
                  )}
              </div>
              <Button className={'Button BlogFeatured-button'} onclick={() => this.scroll(1)} icon={'fas fa-arrow-right'}> </Button>
            </div>
          </div>

          <div className={'BlogScrubber'}>
            <div className={'BlogList'}>
              {this.isLoading &&
                [false, false, true, false].map((state) => {
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

              {!this.isLoading &&
                this.posts.length >= 1 &&
                this.posts.map((article) => <BlogOverviewItem article={article} defaultImage={defaultImage} />)}
            </div>

            <div className={'Sidebar'}>
              {<BlogCrudeSide/>}
              {this.showCategories && <BlogCategories />}
              {this.showForumNav && <ForumNav />}
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
