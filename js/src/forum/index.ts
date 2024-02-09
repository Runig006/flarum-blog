import app from 'flarum/forum/app';
import Model from 'flarum/common/Model';
import Tag from 'flarum/tags/common/models/Tag';
import Discussion from 'flarum/common/models/Discussion';
import IndexPage from 'flarum/forum/components/IndexPage';

import BlogOverview from './pages/BlogOverview';
import redirector from './utils/redirector';
import BlogMeta from '../common/Models/BlogMeta';
import extendTagOverview from './utils/extendTagOverview';
import discussionRouting from './utils/discussionRouting';
import BlogComposer from './pages/BlogComposer';
import compat from './compat';
import addSidebarNav from './utils/addSidebarNav';

import BlogItem from './pages/BlogItem';
import addPreferences from './utils/addPreferences';
import UserCard from './components/UserCard';
import AddDiscussionControls from './components/AddDiscussionControls';
import AddEditorButtons from './components/AddEditorButtons';
import AddBadges from './components/AddBadges';
import BlogPending from './pages/BlogPending';
import BlogList from './pages/BlogList';

import Carousel from './components/Carousel';
import ThreadsList from './pages/ThreadsList';


// Register Flarum Blog
app.initializers.add(
  'v17development-flarum-blog',
  (app) => {
    /* ROUTES */
    app.routes.blog = { path: '/blog', component: BlogOverview };

    app.routes.blogCategory = {
      path: '/blog/category/:slug',
      component: BlogOverview,
    };

    app.routes.blogComposer = {
      path: '/blog/compose',
      component: BlogComposer,
    };

    app.routes.blogPending = {
      path: '/blog/pending',
      component: IndexPage,
    };

    app.routes.blogList = {
      path: '/blog/list',
      component: IndexPage,
    };

    app.routes.threadsList = {
      path: '/thread/list',
      component: IndexPage,
    };

    app.routes.blogArticle = { path: '/blog/:id', component: BlogItem };

    app.routes['blogArticle.near'] = {
      path: '/blog/:id/:near',
      component: BlogItem,
    };

    app.store.models.blogMeta = BlogMeta;

    Discussion.prototype.blogMeta = Model.hasOne<BlogMeta>('blogMeta');
    Tag.prototype.isBlog = Model.attribute<boolean>('isBlog');

    // Redirect discussions/tags to their blog post/overview
    redirector();

    // Extend tag overview.
    // Hide tags which are used as blog category
    extendTagOverview();

    // Make that blog articles have a blog route and not a discussion route
    discussionRouting();

    // Add a link to the blog to the IndexPage sidebar, if enabled.
    addSidebarNav();

    //////
    // CUSTOM RUNIG006
    //////

    // Custom the User Card
    addPreferences();
    UserCard();

    // Add Buttons badges and more
    AddEditorButtons();
    AddDiscussionControls();
    AddBadges();
    
    // Add special views
    BlogPending();
    BlogList();
    ThreadsList();

    // Enable the Carousel login in the comments
    // The button is in EditorButtons
    Carousel();
  },
  -100000
);

compat();
