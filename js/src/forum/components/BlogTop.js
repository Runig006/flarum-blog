import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import FeaturedBlogItem from '../components/FeaturedBlogItem';
import Button from 'flarum/common/components/Button';
import carousel from './Carousel';

export default class BlogTop extends Component {
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
        let query = 'blog:1';
        if (this.languages !== null && this.languages.length >= 1) {
            query += ` language:${this.currentSelectedLanguage}`;
        }
        this.isLoading = true;
        let promise = app.store.find('discussions', {
            page: {
                page: 1,
                limit: 12,
            },
            filter: {
                q: query,
            },
            sort: '-createdAt',
        });
        promise.then(values => {
            this.articles = values;
            this.isLoading = false;
            carousel().initialCarousel(document.querySelector('.carousel'));
            m.redraw();
        });
    }

    view() {
        const defaultImage = app.forum.attribute('blogDefaultImage')
        return (
            <>
                {!this.isLoading &&
                    this.articles?.length >= 1 &&
                    this.articles.slice(0,3).map((article) => <FeaturedBlogItem article={article} defaultImage={defaultImage} />
                )}
                <div class="carousel">
                    <Button className={'Button carousel-button'} icon={'fas fa-arrow-left'}> </Button>
                    <div class="carousel-list">
                        {/* Ghost data */}
                        {this.isLoading && [...new Array(4).fill(undefined)].map(() => (
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
                            this.articles?.length >= 4 &&
                            this.articles.slice(3).map((article) => <FeaturedBlogItem article={article} defaultImage={defaultImage} />
                        )}
                    </div>
                    <Button className={'Button carousel-button'} icon={'fas fa-arrow-right'}> </Button>
                </div>
            </>
        );
    }
}