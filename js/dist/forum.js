/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/Models/BlogMeta.js":
/*!***************************************!*\
  !*** ./src/common/Models/BlogMeta.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogMeta)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/mixin */ "flarum/common/utils/mixin");
/* harmony import */ var flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2__);



var BlogMeta = /*#__PURE__*/function (_mixin) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogMeta, _mixin);
  function BlogMeta() {
    return _mixin.apply(this, arguments) || this;
  }
  return BlogMeta;
}(flarum_common_utils_mixin__WEBPACK_IMPORTED_MODULE_2___default()((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()), {
  discussion: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('discussion'),
  featuredImage: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('featuredImage'),
  summary: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('summary'),
  isFeatured: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('isFeatured'),
  isSized: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('isSized'),
  isPendingReview: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('isPendingReview'),
  publishDate: flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('publishDate')
}));


/***/ }),

/***/ "./src/forum/compat.js":
/*!*****************************!*\
  !*** ./src/forum/compat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @flarum/core/forum */ "@flarum/core/forum");
/* harmony import */ var _flarum_core_forum__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Models_BlogMeta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Models/BlogMeta */ "./src/common/Models/BlogMeta.js");
/* harmony import */ var _components_ArticleSubscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ArticleSubscription */ "./src/forum/components/ArticleSubscription.js");
/* harmony import */ var _components_BlogCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/BlogCategories */ "./src/forum/components/BlogCategories.js");
/* harmony import */ var _components_BlogItemSidebar_BlogAuthor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/BlogItemSidebar/BlogAuthor */ "./src/forum/components/BlogItemSidebar/BlogAuthor.js");
/* harmony import */ var _components_BlogItemSidebar_BlogItemSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/BlogItemSidebar/BlogItemSidebar */ "./src/forum/components/BlogItemSidebar/BlogItemSidebar.js");
/* harmony import */ var _components_BlogOverviewItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/BlogOverviewItem */ "./src/forum/components/BlogOverviewItem.tsx");
/* harmony import */ var _components_BlogPostController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/BlogPostController */ "./src/forum/components/BlogPostController.js");
/* harmony import */ var _components_Composer_Composer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Composer/Composer */ "./src/forum/components/Composer/Composer.js");
/* harmony import */ var _components_Composer_ComposerPreview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Composer/ComposerPreview */ "./src/forum/components/Composer/ComposerPreview.js");
/* harmony import */ var _components_FeaturedBlogItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/FeaturedBlogItem */ "./src/forum/components/FeaturedBlogItem.tsx");
/* harmony import */ var _components_ForumNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ForumNav */ "./src/forum/components/ForumNav.js");
/* harmony import */ var _components_LanguageDropdown_Language__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/LanguageDropdown/Language */ "./src/forum/components/LanguageDropdown/Language.js");
/* harmony import */ var _components_LanguageDropdown_LanguageDropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/LanguageDropdown/LanguageDropdown */ "./src/forum/components/LanguageDropdown/LanguageDropdown.js");
/* harmony import */ var _components_Modals_BlogPostSettingsModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/Modals/BlogPostSettingsModal */ "./src/forum/components/Modals/BlogPostSettingsModal.js");
/* harmony import */ var _components_Modals_RenameArticleModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/Modals/RenameArticleModal */ "./src/forum/components/Modals/RenameArticleModal.js");
/* harmony import */ var _pages_BlogItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/BlogItem */ "./src/forum/pages/BlogItem.js");
/* harmony import */ var _pages_BlogOverview__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/BlogOverview */ "./src/forum/pages/BlogOverview.js");


















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  Object.assign(_flarum_core_forum__WEBPACK_IMPORTED_MODULE_0__.compat, {
    'v17development/blog/components/BlogItemSidebar': _components_BlogItemSidebar_BlogItemSidebar__WEBPACK_IMPORTED_MODULE_5__["default"],
    'v17development/blog/components/BlogAuthor': _components_BlogItemSidebar_BlogAuthor__WEBPACK_IMPORTED_MODULE_4__["default"],
    'v17development/blog/components/Composer/Composer': _components_Composer_Composer__WEBPACK_IMPORTED_MODULE_8__["default"],
    'v17development/blog/components/Composer/ComposerPreview': _components_Composer_ComposerPreview__WEBPACK_IMPORTED_MODULE_9__["default"],
    'v17development/blog/components/LanguageDropdown/Language': _components_LanguageDropdown_Language__WEBPACK_IMPORTED_MODULE_12__["default"],
    'v17development/blog/components/LanguageDropdown/LanguageDropdown': _components_LanguageDropdown_LanguageDropdown__WEBPACK_IMPORTED_MODULE_13__["default"],
    'v17development/blog/components/Modals/BlogPostSettingsModal': _components_Modals_BlogPostSettingsModal__WEBPACK_IMPORTED_MODULE_14__["default"],
    'v17development/blog/components/Modals/RenameArticleModal': _components_Modals_RenameArticleModal__WEBPACK_IMPORTED_MODULE_15__["default"],
    'v17development/blog/components/ArticleSubscription': _components_ArticleSubscription__WEBPACK_IMPORTED_MODULE_2__["default"],
    'v17development/blog/components/BlogCategories': _components_BlogCategories__WEBPACK_IMPORTED_MODULE_3__["default"],
    'v17development/blog/components/BlogOverviewItem': _components_BlogOverviewItem__WEBPACK_IMPORTED_MODULE_6__["default"],
    'v17development/blog/components/BlogPostController': _components_BlogPostController__WEBPACK_IMPORTED_MODULE_7__["default"],
    'v17development/blog/components/FeaturedBlogItem': _components_FeaturedBlogItem__WEBPACK_IMPORTED_MODULE_10__["default"],
    'v17development/blog/components/ForumNav': _components_ForumNav__WEBPACK_IMPORTED_MODULE_11__["default"],
    'v17development/blog/pages/BlogItem': _pages_BlogItem__WEBPACK_IMPORTED_MODULE_16__["default"],
    'v17development/blog/pages/BlogOverview': _pages_BlogOverview__WEBPACK_IMPORTED_MODULE_17__["default"],
    'v17development/blog/models/BlogMeta': _common_Models_BlogMeta__WEBPACK_IMPORTED_MODULE_1__["default"]
  });
});

/***/ }),

/***/ "./src/forum/components/AddBadges.js":
/*!*******************************************!*\
  !*** ./src/forum/components/AddBadges.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addSubscriptionBadge)
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/models/Discussion */ "flarum/common/models/Discussion");
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Badge */ "flarum/common/components/Badge");
/* harmony import */ var flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_3__);




function addSubscriptionBadge() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__.extend)((flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'badges', function (badges) {
    var blogTags = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('blogTags') || [];
    var findblogTags = this.tags().filter(function (tag) {
      return blogTags.indexOf(tag.id()) >= 0;
    });
    if (findblogTags.length == 0) {
      return;
    }
    badges.add('blog', m((flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_3___default()), {
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('flarum-subscriptions.forum.badge.following_tooltip'),
      icon: "fas fa-newspaper",
      type: "blog"
    }));
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().forum.attribute('canApproveBlogPosts') && (this.blogMeta() == false || this.blogMeta().isPendingReview())) {
      badges.add('pending', m((flarum_common_components_Badge__WEBPACK_IMPORTED_MODULE_3___default()), {
        label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('flarum-subscriptions.forum.badge.following_tooltip'),
        icon: "fas fa-clock",
        type: "pending"
      }));
    }
  });
}

/***/ }),

/***/ "./src/forum/components/AddDiscussionControls.js":
/*!*******************************************************!*\
  !*** ./src/forum/components/AddDiscussionControls.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/utils/DiscussionControls */ "flarum/forum/utils/DiscussionControls");
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modals_BlogPostSettingsModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modals/BlogPostSettingsModal */ "./src/forum/components/Modals/BlogPostSettingsModal.js");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_2___default()), 'userControls', function (items, discussion, context) {
    var _this = this;
    // If the discussion is:
    // - Not a discusion...yeah dont have a clue why
    // - Is hidden
    // - The blog extension is not enabled
    // - This person cant write blogs
    // Dont waste any time
    if (!discussion || discussion.isHidden() || !'flarum-blog' in flarum.extensions || flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('canWriteBlogPosts') == false) {
      return;
    }

    // Find the tags that are "blog tags", find if this blog has any of that tags
    var blogTags = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('blogTags') || [];
    var findblogTags = discussion.tags().filter(function (tag) {
      return blogTags.indexOf(tag.id()) >= 0;
    });
    if (findblogTags.length == 0) {
      return;
    }
    items.add('separator1', m("li", {
      className: "Dropdown-separator"
    }), -10);
    items.add('gotoBlog', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default().component({
      icon: 'fas fa-newspaper',
      onclick: function onclick() {
        m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route('blogArticle', {
          id: discussion.slug()
        }));
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.tools.goto_blog')), -10);
    items.add('articleSettings', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default().component({
      className: 'Button',
      onclick: function onclick() {
        return flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_Modals_BlogPostSettingsModal__WEBPACK_IMPORTED_MODULE_3__["default"], {
          article: discussion
        });
      },
      icon: 'fas fa-cogs'
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.tools.article_settings')), -10);
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('canApproveBlogPosts') && (discussion.blogMeta() == false || discussion.blogMeta().isPendingReview())) {
      var disabled = false;
      var title = "";
      if (discussion.blogMeta() == false) {
        disabled = true;
        title = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.tools.tooltip.missing_meta');
      }
      items.add('approve', m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_5___default()), {
        text: title
      }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
        className: "Button",
        icon: "fas fa-thumbs-up",
        disabled: disabled,
        onclick: function onclick() {
          discussion.blogMeta().save({
            isPendingReview: false
          }).then(function () {
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().alerts.show(Alert, {
              type: 'success'
            }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.review_article.approve_article_approved'));
          }, function (response) {
            _this.loading = false;
            _this.handleErrors(response);
          });
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.review_article.approve_article'))), -10);
    }
  });
}

/***/ }),

/***/ "./src/forum/components/AddEditorButtons.js":
/*!**************************************************!*\
  !*** ./src/forum/components/AddEditorButtons.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/TextEditor */ "flarum/components/TextEditor");
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/TextEditorButton */ "flarum/components/TextEditorButton");
/* harmony import */ var flarum_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'toolbarItems', function (items) {
    var _this = this;
    items.add('center', m((flarum_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_2___default()), {
      onclick: function onclick() {
        var selection = _this.attrs.composer.editor.getSelectionRange();
        _this.attrs.composer.editor.insertAt(selection[1], '[/center]');
        _this.attrs.composer.editor.insertAt(selection[0], '[center]');
      },
      icon: "fas fa-align-center"
    }, app.translator.trans('v17development-flarum-blog.forum.buttons.center_tooltip')), 100);
    items.add('score', m((flarum_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_2___default()), {
      onclick: function onclick() {
        _this.attrs.composer.editor.insertAtCursor('[score]50[/score]');
      },
      icon: "far fa-star"
    }, app.translator.trans('v17development-flarum-blog.forum.buttons.score_tooltip')), 100);
    items.add('review', m((flarum_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_2___default()), {
      onclick: function onclick() {
        var selection = _this.attrs.composer.editor.getSelectionRange();
        _this.attrs.composer.editor.insertAt(selection[1], '[/review]');
        _this.attrs.composer.editor.insertAt(selection[0], '[review]');
      },
      icon: "far fa-comment"
    }, app.translator.trans('v17development-flarum-blog.forum.buttons.review_tooltip')), 100);
  });
}

/***/ }),

/***/ "./src/forum/components/ArticleSubscription.js":
/*!*****************************************************!*\
  !*** ./src/forum/components/ArticleSubscription.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ArticleSubscription)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__);





var ArticleSubscription = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ArticleSubscription, _Component);
  function ArticleSubscription() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = ArticleSubscription.prototype;
  _proto.view = function view() {
    var currentSubscriptionState = this.attrs.discussion.subscription();
    var preferences = app.session.user.preferences();
    var notifyEmail = preferences['notify_newPost_email'];
    var notifyTooltip = flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_3___default()(app.translator.trans(notifyEmail ? 'flarum-subscriptions.forum.sub_controls.notify_email_tooltip' : 'flarum-subscriptions.forum.sub_controls.notify_alert_tooltip'));
    var title = app.translator.trans('flarum-subscriptions.forum.sub_controls.not_following_button');
    var icon = 'far fa-star';

    // Following
    if (currentSubscriptionState === 'follow') {
      title = app.translator.trans('flarum-subscriptions.forum.sub_controls.following_button');
      icon = 'fas fa-star';
    }
    return m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_4___default()), {
      text: notifyTooltip,
      position: "bottom"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: "Button BlogArticleSubscription SubscriptionMenu-button--" + currentSubscriptionState,
      icon: icon,
      onclick: this.saveSubscription.bind(this, this.attrs.discussion, ['follow', 'ignore'].indexOf(currentSubscriptionState) !== -1 ? null : 'follow')
    }, title));
  };
  _proto.saveSubscription = function saveSubscription(discussion, subscription) {
    discussion.save({
      subscription: subscription
    });
  };
  return ArticleSubscription;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/BlogCategories.js":
/*!************************************************!*\
  !*** ./src/forum/components/BlogCategories.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogCategories)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__);



var BlogCategories = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogCategories, _Component);
  function BlogCategories() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = BlogCategories.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.blogCategories = app.forum.attribute('blogTags');
  };
  _proto.view = function view() {
    var _this = this;
    return m("div", {
      className: "BlogCategories BlogSideWidget"
    }, m("h3", null, app.translator.trans('v17development-flarum-blog.forum.categories')), this.blogCategories && this.blogCategories.map(function (tagId) {
      var tag = app.store.getById('tags', tagId);
      if (!tag) return null;
      var tags = [];
      var showSubTags = _this.blogCategories.length === 1 || tag.slug() === m.route.param('slug');

      // Add tags
      app.store.all('tags').forEach(function (_tag) {
        if (_tag.isChild() && _tag.parent() === tag) {
          if (_tag.slug() === m.route.param('slug')) {
            showSubTags = true;
          }
          tags.push(_this.categoryItem(_tag));
        }
      });
      return showSubTags ? [_this.categoryItem(tag)].concat(tags) : _this.categoryItem(tag);
    }));
  }

  // Category item
  ;
  _proto.categoryItem = function categoryItem(tag) {
    return m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: app.route('blogCategory', {
        slug: tag.slug()
      }),
      className: "BlogSideWidget-item BlogSideWidget-item-" + tag.id() + " " + (tag.isChild() && app.forum.attribute('blogCategoryHierarchy') == true ? 'BlogSideWidget-item-child' : '')
    }, m("span", {
      className: tag.icon() === '' ? 'BlogSideWidget-item-colored' : '',
      style: {
        backgroundColor: tag.icon() === '' ? tag.color() : null
      }
    }, m("i", {
      className: tag.icon()
    })), tag.name());
  };
  return BlogCategories;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/BlogCrudeSide.js":
/*!***********************************************!*\
  !*** ./src/forum/components/BlogCrudeSide.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogCrudeSide)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);



var BlogCrudeSide = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogCrudeSide, _Component);
  function BlogCrudeSide() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = BlogCrudeSide.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.htmlSidebar = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('htmlSideBar');
  };
  _proto.view = function view() {
    return m("div", {
      className: "BlogHtml"
    }, m.trust(this.htmlSidebar));
  };
  return BlogCrudeSide;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/components/BlogItemSidebar/BlogAuthor.js":
/*!************************************************************!*\
  !*** ./src/forum/components/BlogItemSidebar/BlogAuthor.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogAuthor)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5__);






var BlogAuthor = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogAuthor, _Component);
  function BlogAuthor() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = BlogAuthor.prototype;
  _proto.view = function view() {
    var author = !this.attrs.loading ? this.attrs.article ? this.attrs.article.user() : this.attrs.user : null;
    var background = null;
    if (author && author.cover()) {
      var coverUrl = author.cover();
      if (coverUrl) {
        background = "url(" + coverUrl + ")";
      }
    }
    return m("div", {
      className: 'FlarumBlog-Article-Author'
    }, m("div", {
      className: "FlarumBlog-Article-Author-background " + (this.attrs.loading ? 'FlarumBlog-Author-Ghost' : ''),
      style: {
        backgroundColor: author && author.color() ? author.color() : null,
        backgroundImage: background
      }
    }), m("div", {
      className: 'FlarumBlog-Article-Author-Avatar'
    }, author ? m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5___default()), {
      href: app.route('user', {
        username: author.username()
      })
    }, author.data.attributes.blogImage ? m("img", {
      "class": "Avatar",
      loading: "lazy",
      src: author.data.attributes.blogImage,
      alt: ""
    }) : flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default()(author)) : m("span", {
      className: 'Avatar FlarumBlog-Author-Ghost'
    })), author && m("div", {
      className: 'FlarumBlog-Article-Author-Info'
    }, m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_5___default()), {
      href: app.route('user', {
        username: author.username()
      }),
      className: 'FlarumBlog-Article-Author-Name'
    }, author.data.attributes.blogName ? m("div", null, m("p", null, author.data.attributes.blogName), m("small", null, " ", "@" + author.displayName())) : m("div", null, author.displayName())), m("p", {
      className: 'FlarumBlog-Article-Author-Bio'
    }, author.bio && author.bio()), m("ul", {
      className: 'FlarumBlog-Article-Author-Extended'
    }, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(this.items().toArray()))), this.attrs.loading && m("div", null, m("span", {
      className: 'FlarumBlog-Article-Author-Name FlarumBlog-Author-Ghost'
    }, "\xA0"), m("p", {
      className: 'FlarumBlog-Article-Author-Bio FlarumBlog-Author-Ghost'
    }, "\xA0"), m("p", {
      className: 'FlarumBlog-Article-Author-Bio FlarumBlog-Author-Ghost'
    }, "\xA0"), m("p", {
      className: 'FlarumBlog-Article-Author-Bio FlarumBlog-Author-Ghost'
    }, "\xA0")));
  };
  _proto.items = function items() {
    return new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default())();
  };
  return BlogAuthor;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/BlogItemSidebar/BlogItemSidebar.js":
/*!*****************************************************************!*\
  !*** ./src/forum/components/BlogItemSidebar/BlogItemSidebar.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogItemSidebar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BlogAuthor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BlogAuthor */ "./src/forum/components/BlogItemSidebar/BlogAuthor.js");
/* harmony import */ var _BlogCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BlogCategories */ "./src/forum/components/BlogCategories.js");
/* harmony import */ var _ForumNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ForumNav */ "./src/forum/components/ForumNav.js");







var BlogItemSidebar = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogItemSidebar, _Component);
  function BlogItemSidebar() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = BlogItemSidebar.prototype;
  _proto.view = function view() {
    return m("div", {
      className: 'FlarumBlog-Article-Sidebar'
    }, m("ul", null, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_3___default()(this.items().toArray())));
  };
  _proto.items = function items() {
    var itemlist = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default())();
    itemlist.add('author', _BlogAuthor__WEBPACK_IMPORTED_MODULE_4__["default"].component(this.attrs), 0);
    itemlist.add('categories', _BlogCategories__WEBPACK_IMPORTED_MODULE_5__["default"].component(this.attrs), 0);
    itemlist.add('nav', _ForumNav__WEBPACK_IMPORTED_MODULE_6__["default"].component(this.attrs), 0);
    return itemlist;
  };
  return BlogItemSidebar;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/BlogOverviewItem.tsx":
/*!***************************************************!*\
  !*** ./src/forum/components/BlogOverviewItem.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogOverviewItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/humanTime */ "flarum/common/helpers/humanTime");
/* harmony import */ var flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_8__);









var BlogOverviewItem = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogOverviewItem, _Component);
  function BlogOverviewItem() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = BlogOverviewItem.prototype;
  _proto.titleItems = function titleItems() {
    var _article$blogMeta, _article$blogMeta2;
    var article = this.attrs.article;
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7___default())();
    items.add('title', m('[', null, article.title()), 100);
    if ((_article$blogMeta = article.blogMeta()) != null && _article$blogMeta.isPendingReview != null && _article$blogMeta.isPendingReview() || article.isHidden()) {
      items.add('hidden', flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default()('fas fa-eye-slash', {
        "class": 'BlogList-item-hidden'
      }), 80);
    }
    if ((_article$blogMeta2 = article.blogMeta()) != null && _article$blogMeta2.isPendingReview != null && _article$blogMeta2.isPendingReview()) {
      items.add('pendingReview', m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3___default()), {
        text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().translator.trans('v17development-flarum-blog.forum.review_article.pending_review')
      }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default()('far fa-clock', {
        "class": 'BlogList-item-pendingReview'
      })), 40);
    }
    return items;
  };
  _proto.dataItems = function dataItems() {
    var _article$user;
    var article = this.attrs.article;
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7___default())();
    items.add('createdAt', m("span", {
      "class": "BlogList-item-details-createdAt"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default()('far fa-clock'), " ", flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4___default()(article.createdAt())), 100);
    items.add('author', m("span", {
      "class": "BlogList-item-details-author"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default()('far fa-user'), " ", ((_article$user = article.user()) == null || _article$user.displayName == null ? void 0 : _article$user.displayName()) || flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().translator.trans('core.lib.username.deleted_text')), 80);
    items.add('replies', m("span", {
      "class": "BlogList-item-details-replies"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default()('far fa-comment'), " ", (article.commentCount() || 1) - 1), 60);
    return items;
  };
  _proto.contentItems = function contentItems() {
    var _article$blogMeta3;
    var article = this.attrs.article;
    var summary = ((_article$blogMeta3 = article.blogMeta()) == null || _article$blogMeta3.summary == null ? void 0 : _article$blogMeta3.summary()) || '';
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_7___default())();
    items.add('title', m("h4", null, this.titleItems().toArray()), 100);
    if (summary) items.add('summary', m("p", null, summary), 80);
    items.add('data', m("div", {
      "class": "data"
    }, this.dataItems().toArray()), 60);
    return items;
  };
  _proto.getImage = function getImage() {
    var _article$blogMeta4;
    var _this$attrs = this.attrs,
      article = _this$attrs.article,
      defaultImage = _this$attrs.defaultImage;
    return (_article$blogMeta4 = article.blogMeta()) != null && _article$blogMeta4.featuredImage != null && _article$blogMeta4.featuredImage() ? "url(" + article.blogMeta().featuredImage() + ")" : defaultImage;
  };
  _proto.view = function view(vnode) {
    var _article$blogMeta5;
    var _this$attrs2 = this.attrs,
      article = _this$attrs2.article,
      defaultImage = _this$attrs2.defaultImage;
    var blogImage = this.getImage();
    var isSized = (_article$blogMeta5 = article.blogMeta()) == null || _article$blogMeta5.isSized == null ? void 0 : _article$blogMeta5.isSized();
    return m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().route('blogArticle', {
        id: "" + article.slug()
      }),
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6___default()('BlogList-item', {
        'BlogList-item-sized': isSized,
        'BlogList-item-default': !isSized
      }, article.tags().map(function (tag) {
        return "BlogList-item-category-" + tag.id();
      }))
    }, m("div", {
      "class": flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_6___default()('BlogList-item-photo', {
        'FlarumBlog-default-image': blogImage === defaultImage
      }),
      style: {
        backgroundImage: blogImage
      }
    }), m("div", {
      "class": "BlogList-item-content"
    }, this.contentItems().toArray()));
  };
  return BlogOverviewItem;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/BlogPostController.js":
/*!****************************************************!*\
  !*** ./src/forum/components/BlogPostController.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogPostController)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/tags/components/TagDiscussionModal */ "flarum/tags/components/TagDiscussionModal");
/* harmony import */ var flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/utils/DiscussionControls */ "flarum/forum/utils/DiscussionControls");
/* harmony import */ var flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Modals_BlogPostSettingsModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modals/BlogPostSettingsModal */ "./src/forum/components/Modals/BlogPostSettingsModal.js");
/* harmony import */ var flarum_forum_components_EditPostComposer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/forum/components/EditPostComposer */ "flarum/forum/components/EditPostComposer");
/* harmony import */ var flarum_forum_components_EditPostComposer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_EditPostComposer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/utils/extractText */ "flarum/common/utils/extractText");
/* harmony import */ var flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Modals_RenameArticleModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Modals/RenameArticleModal */ "./src/forum/components/Modals/RenameArticleModal.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_12__);













var BlogPostController = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogPostController, _Component);
  function BlogPostController() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = BlogPostController.prototype;
  _proto.init = function init() {
    this.loadedPost = false;
  };
  _proto.manageArticleButtons = function manageArticleButtons() {
    var _this = this;
    var article = this.attrs.article;
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_10___default())();

    // Working for GlowingBlue version
    var LanguageDiscussionModal = flarum.extensions['fof-discussion-language'] && typeof flarum.extensions['fof-discussion-language'].components !== 'undefined' ? flarum.extensions['fof-discussion-language'].components.LanguageDiscussionModal : null;

    // Rename article
    if (article.canRename()) {
      items.add('rename', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default().component({
        className: 'Button',
        onclick: function onclick() {
          return flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().modal.show(_Modals_RenameArticleModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
            article: article
          });
        },
        icon: 'fas fa-pencil-alt'
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().translator.trans('v17development-flarum-blog.forum.tools.rename_article')), 100);
    }
    var articlePost = article.firstPost();

    // Edit article
    items.add('edit', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default().component({
      className: 'Button',
      disabled: !articlePost || !articlePost.canEdit(),
      onclick: function onclick() {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().composer.load((flarum_forum_components_EditPostComposer__WEBPACK_IMPORTED_MODULE_8___default()), {
          post: articlePost
        });
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().composer.show();
      },
      icon: 'fas fa-edit'
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().translator.trans('v17development-flarum-blog.forum.tools.edit_article')), 90);

    // Article settings
    items.add('articleSettings', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default().component({
      className: 'Button',
      onclick: function onclick() {
        return flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().modal.show(_Modals_BlogPostSettingsModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
          article: article
        });
      },
      icon: 'fas fa-cogs'
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().translator.trans('v17development-flarum-blog.forum.tools.article_settings')), 80);

    // Update categories
    if (article.canTag()) {
      items.add('tag', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default().component({
        className: 'Button',
        onclick: function onclick() {
          return flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().modal.show((flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_2___default()), {
            discussion: article
          });
        },
        icon: 'fas fa-tag'
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().translator.trans('v17development-flarum-blog.forum.tools.update_category')), 70);
    }

    // Approve article
    if (article.blogMeta() && article.blogMeta().isPendingReview()) {
      items.add('separator1', m("li", {
        className: "Dropdown-separator"
      }), 65);
      items.add('approve', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default().component({
        className: 'Button',
        disabled: !flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().forum.attribute('canApproveBlogPosts'),
        onclick: function onclick() {
          article.blogMeta().save({
            isPendingReview: false
          }).then(function () {
            flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4___default()), {
              type: 'success'
            }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().translator.trans('v17development-flarum-blog.forum.review_article.approve_article_approved'));
          }, function (response) {
            _this.loading = false;
            _this.handleErrors(response);
          });
        },
        icon: 'fas fa-thumbs-up'
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().translator.trans('v17development-flarum-blog.forum.review_article.approve_article')), 60);
    }

    // Language
    if (article.canChangeLanguage && article.canChangeLanguage() && LanguageDiscussionModal) {
      items.add('lang', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default().component({
        icon: 'fas fa-globe',
        onclick: function onclick() {
          return flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().modal.show(LanguageDiscussionModal, {
            discussion: article
          });
        }
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().translator.trans('fof-discussion-language.forum.discussion_controls.change_language_button')), 50);
    }
    items.add('separator2', m("li", {
      className: "Dropdown-separator"
    }), 40);

    // Lock article
    if (article.canLock()) {
      items.add('lock', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default().component({
        className: 'Button',
        onclick: flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3___default().lockAction.bind(article),
        icon: "fas " + (article.isLocked() ? 'fa-comments' : 'fa-comment-slash')
      }, article.isLocked() ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().translator.trans('v17development-flarum-blog.forum.tools.enable_comments') : flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().translator.trans('v17development-flarum-blog.forum.tools.disable_comments')), 30);
    }

    // Hide/show/delete
    if (article.canHide()) {
      // Article is hidden
      if (article.isHidden()) {
        // Recover article
        items.add('recover', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default().component({
          className: 'Button',
          onclick: flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3___default().restoreAction.bind(article),
          icon: 'fas fa-eye'
        }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().translator.trans('v17development-flarum-blog.forum.tools.recover_article')), 20);

        // Delete article
        if (article.canDelete()) {
          items.add('delete', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default().component({
            className: 'Button',
            onclick: function onclick() {
              // Confirm deletion
              if (confirm(flarum_common_utils_extractText__WEBPACK_IMPORTED_MODULE_9___default()(flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().translator.trans('core.forum.discussion_controls.delete_confirmation')))) {
                // Redirect if the current page is an blog article
                if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().history.getCurrent().name === 'blogArticle') {
                  if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().previous)) {
                    flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().history.back();
                  } else {
                    m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().route('blog'));
                  }
                }
                return article["delete"]().then(function () {
                  m.redraw();
                });
              }
            },
            icon: 'far fa-trash-alt'
          }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().translator.trans('v17development-flarum-blog.forum.tools.delete_forever')), 10);
        }
      } else {
        // Hide article
        items.add('hide', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default().component({
          className: 'Button',
          onclick: flarum_forum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3___default().hideAction.bind(article),
          icon: 'fas fa-eye-slash'
        }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_12___default().translator.trans('v17development-flarum-blog.forum.tools.hide_article')), 0);
      }
    }
    return items;
  };
  _proto.view = function view() {
    var _this2 = this;
    var article = this.attrs.article;
    var articlePost = article.firstPost();
    return m("div", {
      className: 'FlarumBlog-Article-Content-Edit-Button'
    }, m("div", {
      className: 'FlarumBlog-Article-Content-Edit-Dropdown'
    }, flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_6___default().component({
      icon: 'fas fa-cog',
      label: 'Manage',
      buttonClassName: 'Button',
      menuClassName: 'Dropdown-menu--right',
      onshow: function onshow() {
        // Get post data to make sure they can edit the post
        if (articlePost && !articlePost.canEdit() && !_this2.loadedPost) {
          _this2.loadedPost = true;
          m.redraw();
        }
      }
    }, this.manageArticleButtons().toArray())));
  };
  return BlogPostController;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/Composer/Composer.js":
/*!***************************************************!*\
  !*** ./src/forum/components/Composer/Composer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Composer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/ComposerBody */ "flarum/forum/components/ComposerBody");
/* harmony import */ var flarum_forum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/TextEditor */ "flarum/common/components/TextEditor");
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ComposerPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ComposerPreview */ "./src/forum/components/Composer/ComposerPreview.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_5__);






var Composer = /*#__PURE__*/function (_ComposerBody) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Composer, _ComposerBody);
  function Composer() {
    return _ComposerBody.apply(this, arguments) || this;
  }
  var _proto = Composer.prototype;
  _proto.oninit = function oninit(vnode) {
    _ComposerBody.prototype.oninit.call(this, vnode);
    this.previewContent = false;
  }

  // Render
  ;
  _proto.view = function view() {
    var _this = this;
    var hasContent = this.composer.fields.content() && this.composer.fields.content() !== '';
    var loading = this.loading || this.attrs.disabled;
    return m("div", {
      className: "Flarum-Blog-Composer " + (loading ? 'Flarum-Blog-Composer-Loading' : '')
    }, m("div", {
      className: 'Flarum-Blog-Composer-tabs'
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: !this.previewContent && 'AricleComposerButtonSelected',
      onclick: function onclick() {
        return _this.previewContent = false;
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('v17development-flarum-blog.forum.composer.write')), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      className: this.previewContent && 'AricleComposerButtonSelected',
      onclick: function onclick() {
        return _this.previewContent = true;
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('v17development-flarum-blog.forum.composer.view'))), m("div", {
      className: "Composer Flarum-Blog-Composer-body " + (this.previewContent ? 'Flarum-Blog-Composer-HideEditor' : '')
    }, this.previewContent && m("div", {
      className: 'Flarum-Blog-Composer-preview'
    }, !hasContent && flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('v17development-flarum-blog.forum.composer.nothing_to_preview'), m(_ComposerPreview__WEBPACK_IMPORTED_MODULE_4__["default"], {
      content: this.composer.fields.content()
    })), flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_3___default().component({
      submitLabel: this.attrs.submitLabel || flarum_forum_app__WEBPACK_IMPORTED_MODULE_5___default().translator.trans('core.forum.composer_edit.submit_button'),
      placeholder: this.attrs.placeholder,
      disabled: loading,
      composer: this.composer,
      preview: this.jumpToPreview && this.jumpToPreview.bind(this),
      onchange: this.composer.fields.content,
      onsubmit: this.onsubmit.bind(this),
      value: this.composer.fields.content()
    })));
  }

  // Submit trigger
  ;
  _proto.onsubmit = function onsubmit() {
    if (this.attrs.onsubmit) {
      this.attrs.onsubmit();
    }
  };
  return Composer;
}((flarum_forum_components_ComposerBody__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/Composer/ComposerPreview.js":
/*!**********************************************************!*\
  !*** ./src/forum/components/Composer/ComposerPreview.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ComposerPreview)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);


var ComposerPreview = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ComposerPreview, _Component);
  function ComposerPreview() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = ComposerPreview.prototype;
  _proto.view = function view() {
    return m("div", null);
  };
  _proto.oncreate = function oncreate(vnode) {
    _Component.prototype.oncreate.call(this, vnode);
    s9e.TextFormatter.preview(vnode.attrs.content || '', vnode.dom);
  };
  return ComposerPreview;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/FeaturedBlogItem.tsx":
/*!***************************************************!*\
  !*** ./src/forum/components/FeaturedBlogItem.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FeaturedBlogItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Tooltip */ "flarum/common/components/Tooltip");
/* harmony import */ var flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/humanTime */ "flarum/common/helpers/humanTime");
/* harmony import */ var flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_8__);









var FeaturedBlogItem = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FeaturedBlogItem, _Component);
  function FeaturedBlogItem() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = FeaturedBlogItem.prototype;
  _proto.topItems = function topItems() {
    var _article$tags, _article$blogMeta, _article$blogMeta2;
    var article = this.attrs.article;
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default())();
    items.add('tags', m("span", {
      "class": "BlogFeatured-list-item-tags"
    }, (_article$tags = article.tags()) == null ? void 0 : _article$tags.map(function (tag) {
      return m("span", {
        "class": "dataItem"
      }, tag.name());
    })), 100);

    // Sticky is an optional dependency, so we can't
    // assume method existence.
    if (article.isSticky != null && article.isSticky()) {
      items.add('sticky', m("span", {
        "class": "BlogFeatured-list-item-isSticky dataItem"
      }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default()('fas fa-thumbtack')), 80);
    }
    if ((_article$blogMeta = article.blogMeta()) != null && _article$blogMeta.isPendingReview != null && _article$blogMeta.isPendingReview() || article.isHidden()) {
      items.add('hidden', m("span", {
        "class": "BlogFeatured-list-item-isHidden dataItem"
      }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default()('fas fa-eye-slash')), 60);
    }
    if ((_article$blogMeta2 = article.blogMeta()) != null && _article$blogMeta2.isPendingReview != null && _article$blogMeta2.isPendingReview()) {
      items.add('pendingReview', m((flarum_common_components_Tooltip__WEBPACK_IMPORTED_MODULE_3___default()), {
        text: flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().translator.trans('v17development-flarum-blog.forum.review_article.pending_review'),
        position: "bottom"
      }, m("span", {
        "class": "BlogFeatured-list-item-pendingReview dataItem"
      }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default()('far fa-clock'), " ", flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().translator.trans('v17development-flarum-blog.forum.review_article.pending_review_title'))), 40);
    }
    return items;
  };
  _proto.dataItems = function dataItems() {
    var _article$user;
    var article = this.attrs.article;
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default())();
    items.add('createdAt', m("span", {
      "class": "BlogFeatured-list-item-details-createdAt"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default()('far fa-clock'), " ", flarum_common_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4___default()(article.createdAt())), 100);
    items.add('author', m("span", {
      "class": "BlogFeatured-list-item-details-author"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default()('far fa-user'), " ", ((_article$user = article.user()) == null ? void 0 : _article$user.displayName()) || flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().translator.trans('core.lib.username.deleted_text')), 80);
    items.add('replies', m("span", {
      "class": "BlogFeatured-list-item-details-replies"
    }, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_5___default()('far fa-comment'), " ", article.commentCount() - 1), 60);
    return items;
  };
  _proto.view = function view(vnode) {
    var _article$blogMeta3;
    var _this$attrs = this.attrs,
      article = _this$attrs.article,
      defaultImage = _this$attrs.defaultImage;
    var blogImage = (_article$blogMeta3 = article.blogMeta()) != null && _article$blogMeta3.featuredImage != null && _article$blogMeta3.featuredImage() ? "url(" + article.blogMeta().featuredImage() + ")" : defaultImage;
    return m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_8___default().route('blogArticle', {
        id: "" + article.slug()
      }),
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_7___default()('BlogFeatured-list-item', article.tags().map(function (tag) {
        return "BlogFeatured-list-item-category-" + tag.id();
      }), 'FlarumBlog-default-image'),
      style: {
        backgroundImage: blogImage
      }
    }, m("div", {
      "class": "BlogFeatured-list-item-top"
    }, this.topItems().toArray()), m("div", {
      className: 'BlogFeatured-list-item-details'
    }, m("h4", null, article.title()), m("div", {
      className: 'data'
    }, this.dataItems().toArray())));
  };
  return FeaturedBlogItem;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/ForumNav.js":
/*!******************************************!*\
  !*** ./src/forum/components/ForumNav.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForumNav)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/SelectDropdown */ "flarum/common/components/SelectDropdown");
/* harmony import */ var flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_3__);




var ForumNav = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ForumNav, _Component);
  function ForumNav() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = ForumNav.prototype;
  _proto.view = function view() {
    return m("div", {
      className: "BlogForumNav BlogSideWidget"
    }, m("h3", null, app.translator.trans('v17development-flarum-blog.forum.forum_nav')), m("nav", {
      className: "IndexPage-nav sideNav"
    }, m((flarum_common_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_3___default()), {
      buttonClassName: "Button",
      className: "App-titleControl"
    }, this.navItems().toArray())));
  };
  _proto.navItems = function navItems() {
    return flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype.navItems();
  };
  return ForumNav;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/LanguageDropdown/Language.js":
/*!***********************************************************!*\
  !*** ./src/forum/components/LanguageDropdown/Language.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Language)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);


var Language = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Language, _Component);
  function Language() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = Language.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.languages = app.store.all('discussion-languages');
    this.options = this.languages.reduce(function (o, lang) {
      o[lang.code()] = m("span", null, m("i", {
        className: 'fas fa-globe'
      }), " ", lang.name());
      return o;
    }, this.attrs.extra || {});
  };
  _proto.view = function view() {
    var _this$attrs = this.attrs,
      language = _this$attrs.language,
      uppercase = _this$attrs.uppercase;
    var name = language.name() || '';
    return m("span", null, m("i", {
      className: 'fas fa-globe'
    }), "\xA0", uppercase ? name.toUpperCase() : name);
  };
  return Language;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/LanguageDropdown/LanguageDropdown.js":
/*!*******************************************************************!*\
  !*** ./src/forum/components/LanguageDropdown/LanguageDropdown.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LanguageDropdown)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Language */ "./src/forum/components/LanguageDropdown/Language.js");





var LanguageDropdown = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LanguageDropdown, _Component);
  function LanguageDropdown() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = LanguageDropdown.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.languages = app.store.all('discussion-languages');
    this.options = this.languages.reduce(function (o, lang) {
      o[lang.code()] = m(_Language__WEBPACK_IMPORTED_MODULE_4__["default"], {
        language: lang
      });
      return o;
    }, this.attrs.extra || {});
  };
  _proto.view = function view() {
    var _this = this;
    var selected = this.attrs.selected;
    return flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_2___default().component({
      buttonClassName: 'Button',
      label: this.options[selected] || this.options[this.attrs["default"]]
    }, Object.keys(this.options).map(function (key) {
      var defaultSelected;
      if (app.forum.attribute('fof-discussion-language.composerLocaleDefault')) {
        defaultSelected = 'any';
      } else {
        defaultSelected = app.translator.formatter.locale;
      }
      var isSelected = selected || defaultSelected;
      var active = key === isSelected;
      return flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default().component({
        active: active,
        icon: active ? 'fas fa-check' : true,
        onclick: function onclick() {
          return _this.attrs.onclick(key);
        }
      }, _this.options[key]);
    }));
  };
  return LanguageDropdown;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/Modals/BlogPostSettingsModal.js":
/*!**************************************************************!*\
  !*** ./src/forum/components/Modals/BlogPostSettingsModal.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogPostSettingsModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_selectFiles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/selectFiles */ "./src/forum/utils/selectFiles.ts");










var BlogPostSettingsModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(BlogPostSettingsModal, _Modal);
  function BlogPostSettingsModal() {
    return _Modal.apply(this, arguments) || this;
  }
  var _proto = BlogPostSettingsModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    if (this.attrs.article) {
      this.meta = this.attrs.article && this.attrs.article.blogMeta() ? this.attrs.article.blogMeta() : flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().store.createRecord('blogMeta');
    } else {
      this.meta = this.attrs.meta ? this.attrs.meta : flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().store.createRecord('blogMeta');
    }
    this.isNew = !this.meta.exists;
    this.summary = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.meta.summary() || '');
    this.featuredImage = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.meta.featuredImage() || '');
    this.isFeatured = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.meta.isFeatured() || false);
    this.isSized = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.meta.isSized() || false);
    this.isPendingReview = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.meta.isPendingReview() || false);
    this.publishDate = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.meta.publishDate() || '');
  };
  _proto.className = function className() {
    return 'Modal--small Support-Modal';
  };
  _proto.title = function title() {
    return flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('v17development-flarum-blog.forum.article_settings.title');
  };
  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, this.fields().toArray()));
  };
  _proto.fields = function fields() {
    var _this = this;
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_6___default())();
    items.add('summary', m("div", {
      className: "Form-group"
    }, m("label", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('v17development-flarum-blog.forum.article_settings.fields.summary.title'), ":"), m("textarea", {
      className: "FormControl",
      style: {
        maxWidth: '100%',
        minWidth: '100%',
        width: '100%',
        minHeight: '120px'
      },
      bidi: this.summary,
      placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('v17development-flarum-blog.forum.article_settings.fields.summary.placeholder')
    }), m("small", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('v17development-flarum-blog.forum.article_settings.fields.summary.helper_text'))), 30);
    var fofUploadButton = null;
    if ('fof-upload' in flarum.extensions && flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute('fof-upload.canUpload')) {
      var _require = __webpack_require__(/*! @fof-upload */ "@fof-upload"),
        _require$components = _require.components,
        Uploader = _require$components.Uploader,
        FileManagerModal = _require$components.FileManagerModal;
      var uploader = new Uploader();
      fofUploadButton = m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
        "class": "Button Button--icon",
        onclick: /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().modal.show(FileManagerModal, {
                  uploader: uploader,
                  onSelect: function onSelect(files) {
                    var file = flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().store.getById('files', files[0]);
                    _this.featuredImage(file.url());
                  }
                }, true);
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        })),
        icon: "fas fa-cloud-upload-alt"
      });
    }
    items.add('image', m("div", {
      className: "Form-group V17Blog-ArticleImage"
    }, m("label", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('v17development-flarum-blog.forum.article_settings.fields.image.title'), ":"), m("div", {
      "data-upload-enabled": !!fofUploadButton
    }, m("input", {
      type: "text",
      className: "FormControl",
      bidi: this.featuredImage,
      placeholder: "https://"
    }), fofUploadButton), m("small", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('v17development-flarum-blog.forum.article_settings.fields.image.helper_text')), this.featuredImage() !== '' && m("img", {
      src: this.featuredImage(),
      alt: "Article image",
      title: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('v17development-flarum-blog.forum.article_settings.fields.image.title'),
      style: {
        width: '100%',
        marginTop: '15px'
      }
    })), 30);
    items.add('sized', m("div", {
      className: "Form-group"
    }, flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8___default().component({
      state: this.isSized() == true,
      onchange: function onchange(val) {
        _this.isSized(val);
      }
    }, [m("b", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('v17development-flarum-blog.forum.article_settings.fields.highlight.title')), m("div", {
      className: "helpText",
      style: {
        fontWeight: 500
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('v17development-flarum-blog.forum.article_settings.fields.highlight.helper_text'))])), -10);
    items.add('featured', m("div", {
      className: "Form-group"
    }, flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_8___default().component({
      state: this.isFeatured() == true,
      onchange: function onchange(val) {
        _this.isFeatured(val);
      }
    }, [m("b", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('v17development-flarum-blog.forum.article_settings.fields.featured.title')), m("div", {
      className: "helpText",
      style: {
        fontWeight: 500
      }
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('v17development-flarum-blog.forum.article_settings.fields.featured.helper_text'))])), -10);
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute('canApproveBlogPosts')) {
      items.add('publishDate', m("div", {
        className: "Form-group"
      }, m("label", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('v17development-flarum-blog.forum.article_settings.fields.publishDate.title'), ":"), m("input", {
        type: "datetime-local",
        className: "FormControl",
        bidi: this.publishDate,
        placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('v17development-flarum-blog.forum.article_settings.fields.publishDate')
      }), m("small", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('v17development-flarum-blog.forum.article_settings.fields.publishDate.helper_text'))), -10);
    }
    items.add('submit', m("div", {
      className: "Form-group"
    }, flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default().component({
      type: 'submit',
      className: 'Button Button--primary SupportModal-save',
      loading: this.loading
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().translator.trans('core.forum.composer_edit.submit_button'))), -10);
    return items;
  };
  _proto.submitData = function submitData() {
    return {
      summary: this.summary(),
      featuredImage: this.featuredImage(),
      isFeatured: this.isFeatured(),
      isSized: this.isSized(),
      isPendingReview: this.isPendingReview(),
      publishDate: Date.parse(this.publishDate()) ? this.publishDate() : null,
      relationships: this.isNew && !this.attrs.isComposer ? {
        discussion: this.attrs.article
      } : null
    };
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;
    e.preventDefault();

    // Submit data
    if (this.attrs.onsubmit) {
      // Update attributes
      this.meta.pushData({
        attributes: this.submitData()
      });

      // Push
      this.attrs.onsubmit(this.meta);
      this.hide();
      return;
    }
    this.loading = true;
    this.meta.save(this.submitData()).then(function () {
      if (_this2.attrs.article) {
        _this2.attrs.article.pushData({
          relationships: {
            blogMeta: _this2.meta
          }
        });
      }
      _this2.hide();
      m.redraw();
    }, function (response) {
      _this2.loading = false;
      _this2.handleErrors(response);
    });
  };
  return BlogPostSettingsModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_4___default()));


/***/ }),

/***/ "./src/forum/components/Modals/RenameArticleModal.js":
/*!***********************************************************!*\
  !*** ./src/forum/components/Modals/RenameArticleModal.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RenameArticleModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4__);





var RenameArticleModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RenameArticleModal, _Modal);
  function RenameArticleModal() {
    return _Modal.apply(this, arguments) || this;
  }
  var _proto = RenameArticleModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    this.article = this.attrs.article;
    this.name = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_4___default()(this.article.title() || '');
    this.redirect = this.attrs.redirect;
  };
  _proto.className = function className() {
    return 'Modal--small Support-Modal';
  };
  _proto.title = function title() {
    return app.translator.trans('v17development-flarum-blog.forum.tools.rename_article');
  };
  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, this.fields().toArray()));
  };
  _proto.fields = function fields() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default())();
    items.add('name', m("div", {
      className: "Form-group"
    }, m("label", null, app.translator.trans('v17development-flarum-blog.forum.article.title'), ":"), m("input", {
      className: "FormControl",
      placeholder: app.translator.trans('v17development-flarum-blog.forum.article.title'),
      bidi: this.name
    })), 50);
    items.add('submit', m("div", {
      className: "Form-group"
    }, flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default().component({
      type: 'submit',
      className: 'Button Button--primary SupportModal-save',
      loading: this.loading
    }, app.translator.trans('core.forum.composer_edit.submit_button'))), -10);
    return items;
  };
  _proto.submitData = function submitData() {
    return {
      title: this.name()
    };
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this = this;
    e.preventDefault();
    this.loading = true;

    // Do not save
    if (this.attrs.onChange) {
      this.attrs.onChange(this.name());
      this.hide();
      return;
    }
    this.article.save({
      title: this.name()
    }).then(function () {
      _this.hide();

      // Redirect
      if (_this.redirect) {
        var url = "/blog/" + _this.article.slug();
        m.route.set(url, true);
        window.history.replaceState(null, document.title, url);
      }
    }, function (response) {
      _this.loading = false;
      _this.handleErrors(response);
    });
  };
  return RenameArticleModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/components/UserCard.js":
/*!******************************************!*\
  !*** ./src/forum/components/UserCard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/UserCard */ "flarum/forum/components/UserCard");
/* harmony import */ var flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_utils_UserControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/utils/UserControls */ "flarum/forum/utils/UserControls");
/* harmony import */ var flarum_forum_utils_UserControls__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_UserControls__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/helpers/avatar */ "flarum/common/helpers/avatar");
/* harmony import */ var flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/helpers/username */ "flarum/common/helpers/username");
/* harmony import */ var flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_username__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Dropdown */ "flarum/common/components/Dropdown");
/* harmony import */ var flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_forum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/forum/components/AvatarEditor */ "flarum/forum/components/AvatarEditor");
/* harmony import */ var flarum_forum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/helpers/listItems */ "flarum/common/helpers/listItems");
/* harmony import */ var flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_10__);











function getName(user) {
  var name = flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('core.lib.username.deleted_text');
  if (user && user.displayName()) {
    name = user.displayName();
  }
  if (user.data.attributes.blogName) {
    name += " | " + user.data.attributes.blogName;
  }
  return m("span", {
    className: "username"
  }, name);
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.override)((flarum_forum_components_UserCard__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'view', function (original) {
    var user = this.attrs.user;
    var controls = flarum_forum_utils_UserControls__WEBPACK_IMPORTED_MODULE_3___default().controls(user, this).toArray();
    var color = user.color();
    var badges = user.badges().toArray();
    var background = null;

    //We are doing a override...so...
    if (this.attrs.user.cover()) {
      var coverUrl = this.attrs.user.cover();
      if (coverUrl) {
        background = "url(" + coverUrl + ")";
      }
    }
    return m("div", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_10___default()('UserCard', this.attrs.className),
      style: color && {
        '--usercard-bg': color,
        '--background-image': background
      }
    }, m("div", {
      className: "darkenBackground"
    }, m("div", {
      className: "container"
    }, !!controls.length && m((flarum_common_components_Dropdown__WEBPACK_IMPORTED_MODULE_6___default()), {
      className: "UserCard-controls App-primaryControl",
      menuClassName: "Dropdown-menu--right",
      buttonClassName: this.attrs.controlsButtonClassName,
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('core.forum.user_controls.button'),
      accessibleToggleLabel: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('core.forum.user_controls.toggle_dropdown_accessible_label'),
      icon: "fas fa-ellipsis-v"
    }, controls), m("div", {
      className: "UserCard-profile"
    }, m("h1", {
      className: "UserCard-identity"
    }, this.attrs.editable ? m('[', null, m((flarum_forum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_8___default()), {
      user: user,
      className: "UserCard-avatar"
    }), getName(user)) : m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_7___default()), {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().route.user(user)
    }, m("div", {
      className: "UserCard-avatar"
    }, flarum_common_helpers_avatar__WEBPACK_IMPORTED_MODULE_4___default()(user, {
      loading: 'eager'
    })), getName(user))), !!badges.length && m("ul", {
      className: "UserCard-badges badges"
    }, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_9___default()(badges)), m("ul", {
      className: "UserCard-info"
    }, flarum_common_helpers_listItems__WEBPACK_IMPORTED_MODULE_9___default()(this.infoItems().toArray()))))));
  });
}

/***/ }),

/***/ "./src/forum/index.ts":
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_tags_common_models_Tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/tags/common/models/Tag */ "flarum/tags/common/models/Tag");
/* harmony import */ var flarum_tags_common_models_Tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_common_models_Tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/models/Discussion */ "flarum/common/models/Discussion");
/* harmony import */ var flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_BlogOverview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/BlogOverview */ "./src/forum/pages/BlogOverview.js");
/* harmony import */ var _utils_redirector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/redirector */ "./src/forum/utils/redirector.js");
/* harmony import */ var _common_Models_BlogMeta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Models/BlogMeta */ "./src/common/Models/BlogMeta.js");
/* harmony import */ var _utils_extendTagOverview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/extendTagOverview */ "./src/forum/utils/extendTagOverview.js");
/* harmony import */ var _utils_discussionRouting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/discussionRouting */ "./src/forum/utils/discussionRouting.js");
/* harmony import */ var _pages_BlogComposer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/BlogComposer */ "./src/forum/pages/BlogComposer.js");
/* harmony import */ var _compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./compat */ "./src/forum/compat.js");
/* harmony import */ var _utils_addSidebarNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/addSidebarNav */ "./src/forum/utils/addSidebarNav.js");
/* harmony import */ var _pages_BlogItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/BlogItem */ "./src/forum/pages/BlogItem.js");
/* harmony import */ var _utils_addPreferences__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/addPreferences */ "./src/forum/utils/addPreferences.js");
/* harmony import */ var _components_UserCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/UserCard */ "./src/forum/components/UserCard.js");
/* harmony import */ var _components_AddDiscussionControls__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/AddDiscussionControls */ "./src/forum/components/AddDiscussionControls.js");
/* harmony import */ var _components_AddEditorButtons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/AddEditorButtons */ "./src/forum/components/AddEditorButtons.js");
/* harmony import */ var _components_AddBadges__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/AddBadges */ "./src/forum/components/AddBadges.js");



















// Register Flarum Blog
flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('v17development-flarum-blog', function (app) {
  app.routes.blog = {
    path: '/blog',
    component: _pages_BlogOverview__WEBPACK_IMPORTED_MODULE_4__["default"]
  };
  app.routes.blogCategory = {
    path: '/blog/category/:slug',
    component: _pages_BlogOverview__WEBPACK_IMPORTED_MODULE_4__["default"]
  };
  app.routes.blogComposer = {
    path: '/blog/compose',
    component: _pages_BlogComposer__WEBPACK_IMPORTED_MODULE_9__["default"]
  };
  app.routes.blogArticle = {
    path: '/blog/:id',
    component: _pages_BlogItem__WEBPACK_IMPORTED_MODULE_12__["default"]
  };
  app.routes['blogArticle.near'] = {
    path: '/blog/:id/:near',
    component: _pages_BlogItem__WEBPACK_IMPORTED_MODULE_12__["default"]
  };
  app.store.models.blogMeta = _common_Models_BlogMeta__WEBPACK_IMPORTED_MODULE_6__["default"];
  (flarum_common_models_Discussion__WEBPACK_IMPORTED_MODULE_3___default().prototype).blogMeta = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne('blogMeta');
  (flarum_tags_common_models_Tag__WEBPACK_IMPORTED_MODULE_2___default().prototype).isBlog = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute('isBlog');

  // Redirect discussions/tags to their blog post/overview
  (0,_utils_redirector__WEBPACK_IMPORTED_MODULE_5__["default"])();

  // Extend tag overview.
  // Hide tags which are used as blog category
  (0,_utils_extendTagOverview__WEBPACK_IMPORTED_MODULE_7__["default"])();

  // Make that blog articles have a blog route and not a discussion route
  (0,_utils_discussionRouting__WEBPACK_IMPORTED_MODULE_8__["default"])();

  // Add a link to the blog to the IndexPage sidebar, if enabled.
  (0,_utils_addSidebarNav__WEBPACK_IMPORTED_MODULE_11__["default"])();
  (0,_utils_addPreferences__WEBPACK_IMPORTED_MODULE_13__["default"])();
  (0,_components_UserCard__WEBPACK_IMPORTED_MODULE_14__["default"])();
  (0,_components_AddEditorButtons__WEBPACK_IMPORTED_MODULE_16__["default"])();
  (0,_components_AddDiscussionControls__WEBPACK_IMPORTED_MODULE_15__["default"])();
  (0,_components_AddBadges__WEBPACK_IMPORTED_MODULE_17__["default"])();
}, -100000);
(0,_compat__WEBPACK_IMPORTED_MODULE_10__["default"])();

/***/ }),

/***/ "./src/forum/pages/BlogComposer.js":
/*!*****************************************!*\
  !*** ./src/forum/pages/BlogComposer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogComposer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_BlogItemSidebar_BlogAuthor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BlogItemSidebar/BlogAuthor */ "./src/forum/components/BlogItemSidebar/BlogAuthor.js");
/* harmony import */ var _components_Modals_RenameArticleModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modals/RenameArticleModal */ "./src/forum/components/Modals/RenameArticleModal.js");
/* harmony import */ var flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/tags/components/TagDiscussionModal */ "flarum/tags/components/TagDiscussionModal");
/* harmony import */ var flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Modals_BlogPostSettingsModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Modals/BlogPostSettingsModal */ "./src/forum/components/Modals/BlogPostSettingsModal.js");
/* harmony import */ var _components_Composer_Composer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Composer/Composer */ "./src/forum/components/Composer/Composer.js");
/* harmony import */ var _components_LanguageDropdown_LanguageDropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/LanguageDropdown/LanguageDropdown */ "./src/forum/components/LanguageDropdown/LanguageDropdown.js");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_11__);












var BlogComposer = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogComposer, _Page);
  function BlogComposer() {
    return _Page.apply(this, arguments) || this;
  }
  var _proto = BlogComposer.prototype;
  _proto.oninit = function oninit(vnode) {
    var _this = this;
    _Page.prototype.oninit.call(this, vnode);
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().setTitle(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.blog'));

    // User cannot write blogs
    if (!flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('canWriteBlogPosts')) {
      m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route('blog'));
      return;
    }

    // Send history push
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().history.push('blogComposer');

    // Get languages (if enabled)
    this.languages = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('discussion-languages') || [];

    // Set body class
    this.bodyClass = 'BlogItemPage BlogItemPage--composer';

    // Article data
    this.articleLanguage = m.route.param('lang') ? m.route.param('lang') : (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator).locale;
    this.article = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.createRecord('discussions');
    this.blogMeta = null;
    this.tags = [];

    // Pre-select tags
    if (m.route.param().tags) {
      var tagList = Array.isArray(m.route.param().tags) ? m.route.param().tags : m.route.param().tags.split(',');
      if (m.route.param().tags.length > 0) {
        tagList.forEach(function (tagId) {
          var foundTag = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.getById('tags', tagId);
          if (foundTag) {
            _this.tags.push(foundTag);
          }
        });
      }
    }
    this.isSaving = false;
  };
  _proto.openTagsModal = function openTagsModal(e) {
    var _this2 = this;
    if (e === void 0) {
      e = null;
    }
    if (e) {
      e.preventDefault();
    }
    if (this.isSaving) return;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show((flarum_tags_components_TagDiscussionModal__WEBPACK_IMPORTED_MODULE_7___default()), {
      selectedTags: this.tags,
      onsubmit: function onsubmit(tags) {
        _this2.tags = tags;
      }
    });
  };
  _proto.openNameArticleModal = function openNameArticleModal(e) {
    var _this3 = this;
    if (e === void 0) {
      e = null;
    }
    if (e) {
      e.preventDefault();
    }
    if (this.isSaving) return;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_components_Modals_RenameArticleModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      article: this.article,
      onChange: function onChange(title) {
        _this3.article.pushData({
          attributes: {
            title: title
          }
        });
      }
    });
  };
  _proto.openBlogSettings = function openBlogSettings(e) {
    var _this4 = this;
    e.preventDefault();
    if (this.isSaving) return;
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_components_Modals_BlogPostSettingsModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
      meta: this.blogMeta,
      onsubmit: function onsubmit(meta) {
        return _this4.blogMeta = meta;
      }
    });
  };
  _proto.view = function view() {
    return m("div", {
      className: 'FlarumBlogItem'
    }, m("div", {
      className: 'container'
    }, this.pageItems().toArray()));
  };
  _proto.pageItems = function pageItems() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_11___default())();
    items.add('toolButtons', m("div", {
      className: "FlarumBlog-ToolButtons"
    }, m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route('blog'),
      className: "Button",
      loading: this.isSaving,
      icon: "fas fa-angle-left"
    }, m("i", {
      "class": "icon fas fa-angle-left Button-icon"
    }), m("span", {
      "class": "Button-label"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.return_to_overview')))), 100);
    items.add('article', m("div", {
      className: 'FlarumBlog-Article'
    }, this.articleWrapperItems().toArray()), 90);
    return items;
  };
  _proto.articleWrapperItems = function articleWrapperItems() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_11___default())();
    items.add('container', m("div", {
      className: "FlarumBlog-Article-Container"
    }, this.articleItems().toArray()), 100);
    items.add('sidebar', m("div", {
      className: "FlarumBlog-Article-Sidebar"
    }, m(_components_BlogItemSidebar_BlogAuthor__WEBPACK_IMPORTED_MODULE_5__["default"], {
      user: (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().session).user
    })), 90);
    return items;
  };
  _proto.articleItems = function articleItems() {
    var _this5 = this;
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_11___default())();
    var defaultImage = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('blogDefaultImage') ? "url(" + (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('baseUrl') + '/assets/' + flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('blogDefaultImage')) + ")" : null;
    var blogImage = this.blogMeta && this.blogMeta.featuredImage() ? "url(" + this.blogMeta.featuredImage() + ")" : defaultImage;
    items.add('content', m("div", {
      className: "FlarumBlog-Article-Content"
    }, m("div", {
      className: "FlarumBlog-Article-Image FlarumBlog-default-image",
      style: {
        backgroundImage: blogImage,
        cursor: 'pointer'
      },
      onclick: function onclick(e) {
        return _this5.openBlogSettings(e);
      }
    }), m("div", {
      className: 'FlarumBlog-Article-Content-Edit-Button'
    }, m("div", {
      className: this.languages.length === 0 ? 'FlarumBlog-Article-Content-Edit-Dropdown' : 'FlarumBlog-Article-Content-EditButtons'
    }, this.languages !== null && this.languages.length >= 1 && m(_components_LanguageDropdown_LanguageDropdown__WEBPACK_IMPORTED_MODULE_10__["default"], {
      selected: this.articleLanguage,
      onclick: function onclick(language) {
        return _this5.articleLanguage = language;
      }
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: 'Button',
      onclick: function onclick(e) {
        return _this5.openBlogSettings(e);
      },
      icon: 'fas fa-pencil-alt',
      loading: this.isSaving
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.composer.update_settings')))), m("div", {
      className: 'FlarumBlog-Article-Categories'
    }, this.tags.map(function (tag) {
      return m("button", {
        "class": "Button Button--text",
        onclick: function onclick(e) {
          return _this5.openTagsModal(e);
        }
      }, tag.name());
    }), m("button", {
      "class": "Button Button--text",
      onclick: function onclick(e) {
        return _this5.openTagsModal(e);
      }
    }, this.tags.length === 0 ? flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.composer.select_category') : flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.composer.edit_categories'), ' ', m("i", {
      className: 'fas fa-edit'
    }))), m("div", {
      className: 'FlarumBlog-Article-Post'
    }, m("h1", {
      onclick: function onclick() {
        return _this5.openNameArticleModal();
      },
      className: "FlarumBlog-Article-Title",
      style: {
        cursor: 'pointer'
      }
    }, this.article && this.article.title() && this.article.title() !== '' ? this.article.title() : flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.composer.no_title'), m("button", {
      "class": "Button Button--text",
      onclick: function onclick(e) {
        return e.preventDefault();
      }
    }, m("i", {
      className: 'fas fa-edit'
    }))), m("div", {
      className: "Post-body"
    }, m(_components_Composer_Composer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      composer: (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer),
      originalContent: '',
      submitLabel: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.composer.post_article'),
      placeholder: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.composer.enter_message_here'),
      onsubmit: function onsubmit() {
        return _this5.create();
      },
      disabled: this.isSaving
    })))), 100);
    items.add('commentsPlaceholder', m("div", {
      className: "FlarumBlog-Article-Comments"
    }, m("h4", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.comment_section.comments'), " (0)"), m("div", {
      className: "Post-body"
    }, m("blockquote", {
      "class": "uncited"
    }, m("div", null, m("span", {
      className: "fas fa-ban",
      style: {
        marginRight: '5px'
      }
    }), ' ', flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.composer.comment_section'))))), 90);
    return items;
  };
  _proto.create = function create() {
    var _this6 = this;
    var blogTags = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('blogTags') || [];

    // Force tags
    if (this.tags.length === 0) {
      this.openTagsModal();
      return;
    }

    // Force title
    if (!this.article.title() || this.article.title() === '') {
      this.openNameArticleModal();
      return;
    }

    // Find blog tags
    var findblogTags = this.tags.filter(function (tag) {
      return blogTags.indexOf(tag.id()) >= 0;
    });

    // No blog tags selected
    if (findblogTags.length === 0) {
      alert(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.composer.no_blog_tags_selected'));
      return;
    }
    if ((this.blogMeta === null || !this.blogMeta.featuredImage() && !flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('blogDefaultImage') || !this.blogMeta.summary()) && !confirm(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.composer.post_without_blog_info'))) {
      return;
    }
    var relationships = {
      tags: this.tags
    };

    // Add languages if possible
    if (this.languages.length > 0) {
      relationships.language = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.getBy('discussion-languages', 'code', this.articleLanguage);
    }
    var data = {
      title: this.article.title(),
      content: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().composer.fields.content(),
      relationships: relationships,
      blogMeta: this.blogMeta !== null ? {
        featuredImage: this.blogMeta.featuredImage(),
        summary: this.blogMeta.summary(),
        isSized: this.blogMeta.isSized()
      } : null
    };
    this.isSaving = true;
    this.article.save(data).then(function (article) {
      setTimeout(function () {
        // Redirect to the article
        m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route('blogArticle', {
          id: "" + article.slug()
        }));
      }, 500);
    })["catch"](function () {
      _this6.isSaving = false;
      m.redraw();
    });
  };
  return BlogComposer;
}((flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/forum/pages/BlogItem.js":
/*!*************************************!*\
  !*** ./src/forum/pages/BlogItem.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/components/CommentPost */ "flarum/forum/components/CommentPost");
/* harmony import */ var flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/components/PostStream */ "flarum/forum/components/PostStream");
/* harmony import */ var flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_forum_states_PostStreamState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/forum/states/PostStreamState */ "flarum/forum/states/PostStreamState");
/* harmony import */ var flarum_forum_states_PostStreamState__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_states_PostStreamState__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_BlogPostController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BlogPostController */ "./src/forum/components/BlogPostController.js");
/* harmony import */ var _components_BlogItemSidebar_BlogItemSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BlogItemSidebar/BlogItemSidebar */ "./src/forum/components/BlogItemSidebar/BlogItemSidebar.js");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _BlogOverview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BlogOverview */ "./src/forum/pages/BlogOverview.js");
/* harmony import */ var flarum_common_helpers_fullTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/common/helpers/fullTime */ "flarum/common/helpers/fullTime");
/* harmony import */ var flarum_common_helpers_fullTime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_fullTime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_ArticleSubscription__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ArticleSubscription */ "./src/forum/components/ArticleSubscription.js");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/common/utils/classList */ "flarum/common/utils/classList");
/* harmony import */ var flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_15__);
















var BlogItem = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogItem, _Page);
  function BlogItem() {
    return _Page.apply(this, arguments) || this;
  }
  var _proto = BlogItem.prototype;
  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().setTitle(flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().translator.trans('v17development-flarum-blog.forum.blog'));

    // Send history push
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().history.push('blogArticle');
    this.bodyClass = 'BlogItemPage';
    this.near = m.route.param('near') || 0;
    this.loading = true;
    this.found = false;
    this.article = null;
    this.loadBlogItem();
  }

  // Load blog overview
  ;
  _proto.loadBlogItem = function loadBlogItem() {
    var preloadBlogOverview = flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().preloadedApiDocument();
    if (preloadBlogOverview) {
      // We must wrap this in a setTimeout because if we are mounting this
      // component for the first time on page load, then any calls to m.redraw
      // will be ineffective and thus any configs (scroll code) will be run
      // before stuff is drawn to the page.
      setTimeout(this.show.bind(this, preloadBlogOverview), 0);
    } else {
      flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().store.find('discussions', m.route.param('id').split('-')[0]).then(this.show.bind(this))["catch"](function () {
        m.redraw();
      });
    }
    m.redraw();
  }

  // Show blog post
  ;
  _proto.show = function show(article) {
    var _this = this;
    // Set article data
    this.article = article;

    // Update title
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().setTitle(article.title() + " - " + flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().translator.trans('v17development-flarum-blog.forum.blog'));
    this.loading = false;
    var includedPosts = [];
    if (article.payload && article.payload.included) {
      var articleId = article.id();
      includedPosts = article.payload.included.filter(function (record) {
        return record.type === 'posts' && record.relationships && record.relationships.discussion && record.relationships.discussion.data.id === articleId;
      }).map(function (record) {
        return flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().store.getById('posts', record.id);
      }).sort(function (a, b) {
        return a.id() - b.id();
      }).slice(0, 20);
    }
    this.stream = new (flarum_forum_states_PostStreamState__WEBPACK_IMPORTED_MODULE_5___default())(article, includedPosts);

    // Scroll to specific post
    if (this.near) {
      this.stream.goToNumber(this.near || 0, true).then(function () {
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().current.set('discussion', article);
        flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().current.set('stream', _this.stream);
      });
    }

    // Read post on load
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().session).user && !article.lastReadPostNumber()) {
      article.save({
        lastReadPostNumber: 1
      });
    }
    m.redraw();
  };
  _proto.postItems = function postItems() {
    var _this$article2, _this$article3;
    var articlePost = null;
    if (!this.loading && this.article) {
      var _this$article;
      articlePost = (_this$article = this.article) == null || _this$article.firstPost == null ? void 0 : _this$article.firstPost();
    }
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_13___default())();
    items.add('title', m("h1", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_12___default()('FlarumBlog-Article-Title', {
        'FlarumBlog-Article-GhostTitle': this.loading
      })
    }, (this == null || (_this$article2 = this.article) == null || _this$article2.title == null ? void 0 : _this$article2.title()) || 'Ghost title', ((_this$article3 = this.article) == null || _this$article3.isHidden == null ? void 0 : _this$article3.isHidden()) && "(" + flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().translator.trans('v17development-flarum-blog.forum.hidden') + ")"), 100);
    items.add('publishDate', m("div", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_12___default()('FlarumBlog-Article-PublishDate', {
        'FlarumBlog-Article-GhostPublishDate': this.loading
      })
    }, this.article ? flarum_common_helpers_fullTime__WEBPACK_IMPORTED_MODULE_10___default()(this.article.createdAt()) : m("span", null, "\xA0")), 80);
    if (this.loading) {
      items.add('skeleton', [0, 1, 2].map(function () {
        return m("div", null, m("p", {
          className: 'FlarumBlog-Article-GhostParagraph'
        }, "\xA0"), m("p", {
          className: 'FlarumBlog-Article-GhostParagraph'
        }, "\xA0"), m("p", {
          className: 'FlarumBlog-Article-GhostParagraph'
        }, "\xA0"), m("p", null, "\xA0"));
      }), 60);
    }
    if (!this.loading) {
      var _this$article$blogMet, _this$article4;
      if ((_this$article$blogMet = (_this$article4 = this.article).blogMeta) != null && (_this$article$blogMet = _this$article$blogMet.call(_this$article4)) != null && _this$article$blogMet.isPendingReview != null && _this$article$blogMet.isPendingReview()) {
        items.add('review', m("div", {
          className: 'Post-body'
        }, m("blockquote", {
          "class": "uncited",
          style: {
            fontSize: '16px'
          }
        }, m("div", null, flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_14___default()('far fa-clock', {
          style: {
            marginRight: '5px'
          }
        }), ' ', flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().translator.trans('v17development-flarum-blog.forum.review_article.pending_review')))), 60);
      }
      if (articlePost) {
        items.add('post', m((flarum_forum_components_CommentPost__WEBPACK_IMPORTED_MODULE_3___default()), {
          post: articlePost
        }), 40);
      }
    }
    return items;
  };
  _proto.contentItems = function contentItems() {
    var _this$article5, _this$article6, _app$session$user, _this$article7, _this$article8, _this$article9;
    var defaultImage = flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().forum.attribute('blogDefaultImage') ? "url(" + flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().forum.attribute('baseUrl') + "/assets/" + flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().forum.attribute('blogDefaultImage') + ")" : null;
    var blogImage = (_this$article5 = this.article) != null && (_this$article5 = _this$article5.blogMeta()) != null && _this$article5.featuredImage != null && _this$article5.featuredImage() ? "url(" + this.article.blogMeta().featuredImage() + ")" : defaultImage;
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_13___default())();
    items.add('image', m("div", {
      className: flarum_common_utils_classList__WEBPACK_IMPORTED_MODULE_12___default()('FlarumBlog-Article-Image FlarumBlog-default-image', {
        'FlarumBlog-Article-GhostImage': this.loading
      }),
      style: {
        backgroundImage: blogImage,
        opacity: (_this$article6 = this.article) != null && _this$article6.isHidden != null && _this$article6.isHidden() ? 0.4 : null
      }
    }), 100);
    if (this.article && ((_app$session$user = (flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().session).user) != null && _app$session$user.canEdit != null && _app$session$user.canEdit() || (_this$article7 = this.article) != null && _this$article7.canRename != null && _this$article7.canRename() || (_this$article8 = this.article) != null && _this$article8.posts != null && (_this$article8 = _this$article8.posts()) != null && (_this$article8 = _this$article8[0]) != null && _this$article8.canEdit != null && _this$article8.canEdit())) {
      items.add('editArticle', m(_components_BlogPostController__WEBPACK_IMPORTED_MODULE_6__["default"], {
        article: this.article
      }), 80);
    }

    // Article Categories
    items.add('categories', m("div", {
      className: "FlarumBlog-Article-Categories"
    }, !this.loading && ((_this$article9 = this.article) == null || _this$article9.tags == null || (_this$article9 = _this$article9.tags()) == null ? void 0 : _this$article9.map(function (tag) {
      return m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_8___default()), {
        href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().route('blogCategory', {
          slug: tag.slug()
        })
      }, tag.name());
    })), this.loading && [0, 1].map(function () {
      return m("span", {
        className: "FlarumBlog-Article-GhostCategory"
      }, "Category");
    })), 60);
    items.add('post', m("div", {
      className: 'FlarumBlog-Article-Post'
    }, this.postItems().toArray()), 40);
    return items;
  };
  _proto.articleItems = function articleItems() {
    var _this$article10, _this$article11;
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_13___default())();
    items.add('content', m("div", {
      className: "FlarumBlog-Article-Content"
    }, this.contentItems().toArray()), 100);
    if (!(this != null && (_this$article10 = this.article) != null && _this$article10.isLocked != null && _this$article10.isLocked() && (this == null || (_this$article11 = this.article) == null || _this$article11.commentCount == null ? void 0 : _this$article11.commentCount()) === 1)) {
      var _this$article12;
      items.add('comments', m("div", {
        className: 'FlarumBlog-Article-Comments'
      }, !this.loading && (flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().session).user && this.article.subscription && (!this.article.isLocked || this.article.isLocked && !this.article.isLocked()) && m(_components_ArticleSubscription__WEBPACK_IMPORTED_MODULE_11__["default"], {
        discussion: this.article
      }), m("h4", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().translator.trans('v17development-flarum-blog.forum.comment_section.comments'), " (", this.article ? this.article.commentCount() - 1 : 0, ")"), !this.loading && ((_this$article12 = this.article) == null || _this$article12.isLocked == null ? void 0 : _this$article12.isLocked()) && m("div", {
        className: 'Post-body'
      }, m("blockquote", {
        "class": "uncited"
      }, m("div", null, m("span", {
        className: 'far fa-lock',
        style: {
          marginRight: '5px'
        }
      }), ' ', flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().translator.trans('v17development-flarum-blog.forum.comment_section.locked')))), !this.loading && this.article && flarum_forum_components_PostStream__WEBPACK_IMPORTED_MODULE_4___default().component({
        discussion: this.article,
        stream: this.stream,
        onPositionChange: this.positionChanged.bind(this)
      })), 75);
    }
    return items;
  };
  _proto.view = function view() {
    return [flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().forum.attribute('blogAddHero') == true && flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype.hero(), m("div", {
      className: 'FlarumBlogItem'
    }, m("div", {
      className: 'container'
    }, m("div", {
      className: 'FlarumBlog-ToolButtons'
    }, m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_8___default()), {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().route('blog'),
      className: 'Button',
      onclick: function onclick(e) {
        if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().previous.matches(_BlogOverview__WEBPACK_IMPORTED_MODULE_9__["default"])) {
          e.preventDefault();
          history.back();
        }
      }
    }, m("i", {
      "class": "icon fas fa-angle-left Button-icon"
    }), m("span", {
      "class": "Button-label"
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().translator.trans('v17development-flarum-blog.forum.return_to_overview')))), m("div", {
      className: 'FlarumBlog-Article'
    }, m("div", {
      className: 'FlarumBlog-Article-Container'
    }, this.articleItems().toArray()), m(_components_BlogItemSidebar_BlogItemSidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      article: this.article,
      loading: this.loading
    }))))];
  };
  _proto.positionChanged = function positionChanged(startNumber, endNumber) {
    var article = this.article;
    if ((flarum_forum_app__WEBPACK_IMPORTED_MODULE_15___default().session).user && endNumber > (article.lastReadPostNumber() || 0)) {
      article.save({
        lastReadPostNumber: endNumber
      });
      m.redraw();
    }
  };
  return BlogItem;
}((flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/pages/BlogOverview.js":
/*!*****************************************!*\
  !*** ./src/forum/pages/BlogOverview.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogOverview)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_BlogCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BlogCategories */ "./src/forum/components/BlogCategories.js");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_LanguageDropdown_LanguageDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LanguageDropdown/LanguageDropdown */ "./src/forum/components/LanguageDropdown/LanguageDropdown.js");
/* harmony import */ var _components_ForumNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ForumNav */ "./src/forum/components/ForumNav.js");
/* harmony import */ var _components_BlogOverviewItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BlogOverviewItem */ "./src/forum/components/BlogOverviewItem.tsx");
/* harmony import */ var _components_FeaturedBlogItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/FeaturedBlogItem */ "./src/forum/components/FeaturedBlogItem.tsx");
/* harmony import */ var _components_BlogCrudeSide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/BlogCrudeSide */ "./src/forum/components/BlogCrudeSide.js");












var BlogOverview = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogOverview, _Page);
  function BlogOverview() {
    return _Page.apply(this, arguments) || this;
  }
  var _proto = BlogOverview.prototype;
  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().setTitle(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.blog'));
    this.bodyClass = 'BlogOverviewPage';
    this.isLoading = true;
    this.featuredPosts = [];
    this.posts = [];
    this.languages = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('discussion-languages');
    this.currentSelectedLanguage = m.route.param('lang') ? m.route.param('lang') : (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator).formatter.locale;

    // Send history push
    flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().history.push('blog');
    this.loadBlogOverview();
    this.featuredCount = parseInt(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('blogFeaturedCount'));
    this.showCategories = true;
    this.showForumNav = true;
    this.scrollTimeout = setTimeout(this.scroll.bind(this, 1), 5000);

    //Yeah...hacky as fuck, but i dont know any other way
    if (window.innerWidth <= 799) {
      console.log("mobile");
      var t = this;
      setTimeout(function () {
        if (document.getElementsByClassName('BlogFeatured-list')) {
          document.getElementsByClassName('BlogFeatured-list')[0].addEventListener('touchmove', function () {
            clearTimeout(t.scrollTimeout);
          }, {
            once: true
          });
        }
      }, 1024);
    }
  };
  _proto.onremove = function onremove(vNode) {
    clearTimeout(this.scrollTimeout);
  };
  _proto.scroll = function scroll(direction) {
    clearTimeout(this.scrollTimeout);
    var list = document.querySelector('.BlogFeatured-list');
    var item = document.querySelector('.BlogFeatured-list-item');
    var maxScroll = list.scrollWidth - list.clientWidth;
    var scrollAvailable = maxScroll - list.scrollLeft;
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
    this.scrollTimeout = setTimeout(this.scroll.bind(this, 1), 5000);
  }

  // Load blog overview
  ;
  _proto.loadBlogOverview = function loadBlogOverview() {
    var preloadBlogOverview = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().preloadedApiDocument();
    if (preloadBlogOverview && Array.isArray(preloadBlogOverview) && preloadBlogOverview.length > 0) {
      // We must wrap this in a setTimeout because if we are mounting this
      // component for the first time on page load, then any calls to m.redraw
      // will be ineffective and thus any configs (scroll code) will be run
      // before stuff is drawn to the page.
      var featured = [];
      var normal = [];
      preloadBlogOverview.forEach(function (entry) {
        if (entry.data.attributes.isFeatured) {
          featured.push(entry);
        } else {
          normal.push(entry);
        }
        ;
      });
      setTimeout(this.show.bind(this, normal, featured), 0);
    } else {
      this.reloadData();
    }
    m.redraw();
  };
  _proto.reloadData = function reloadData() {
    var _this = this;
    var normalQ = "-is:featured is:blog" + (m.route.param('slug') ? " tag:" + m.route.param('slug') : '');
    var featuredQ = "is:featured is:blog" + (m.route.param('slug') ? " tag:" + m.route.param('slug') : '');
    if (this.languages !== null && this.languages.length >= 1) {
      normalQ += " language:" + this.currentSelectedLanguage;
      featuredQ += " language:" + this.currentSelectedLanguage;
    }
    this.isLoading = true;
    var normalPromise = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.find('discussions', {
      page: {
        page: 1,
        limit: 23
      },
      filter: {
        q: normalQ
      },
      sort: '-createdAt'
    });
    var featuredPromise = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.find('discussions', {
      page: {
        page: 1,
        limit: 15
      },
      filter: {
        q: featuredQ
      },
      sort: '-createdAt'
    });
    var promises = [normalPromise, featuredPromise];
    Promise.all(promises).then(function (values) {
      setTimeout(_this.show.bind(_this, values[0], values[1]), 0);
    });
  }

  // Show blog posts
  ;
  _proto.show = function show(articles, featured) {
    if (articles.length === 0 && featured.length === 0) {
      this.isLoading = false;
      m.redraw();
      return;
    }
    if (featured.length < 3) {
      var needed = 3 - featured.length;
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
  };
  _proto.title = function title() {
    if (!m.route.param('slug')) {
      return m("h2", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.recent_posts'));
    }
    var tag = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.all('tags').filter(function (tag) {
      return tag.slug() === m.route.param('slug');
    });
    return m("h2", null, tag && tag[0] && tag[0].name(), m("small", null, ' ', "- ", m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_6___default()), {
      href: flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route('blog')
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.return_to_overview'))));
  };
  _proto.view = function view() {
    var _this2 = this;
    var defaultImage = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('blogDefaultImage') ? "url(" + (flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('baseUrl') + '/assets/' + flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('blogDefaultImage')) + ")" : null;
    return [flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('blogAddHero') == true && flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default().prototype.hero(), m("div", {
      className: 'FlarumBlogOverview'
    }, m("div", {
      className: 'container'
    }, m("div", {
      className: 'BlogFeatured'
    }, m("div", {
      className: 'BlogOverviewButtons'
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('canWriteBlogPosts') && m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: 'Button',
      onclick: function onclick() {
        return _this2.newArticle();
      },
      icon: 'fas fa-pencil-alt'
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.forum.compose.write_article')), this.languages !== null && this.languages.length >= 1 && m(_components_LanguageDropdown_LanguageDropdown__WEBPACK_IMPORTED_MODULE_7__["default"], {
      selected: this.currentSelectedLanguage,
      onclick: function onclick(language) {
        _this2.currentSelectedLanguage = language;
        m.route.set(document.location.pathname, {
          lang: language
        });
        _this2.reloadData();
      }
    })), this.title(), m("div", {
      "class": "BlogFeatured-carousel"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: 'Button BlogFeatured-button',
      onclick: function onclick() {
        return _this2.scroll(-1);
      },
      icon: 'fas fa-arrow-left'
    }, " "), m("div", {
      "class": "BlogFeatured-list"
    }, this.isLoading && [].concat(new Array(3).fill(undefined)).map(function () {
      return m("div", {
        "class": "BlogFeatured-list-item BlogFeatured-list-item-ghost"
      }, m("div", {
        "class": "BlogFeatured-list-item-details"
      }, m("h4", null, "\xA0"), m("div", {
        "class": "data"
      }, m("span", null, m("i", {
        "class": "far fa-wave"
      })))));
    }), !this.isLoading && this.featuredPosts.length >= 0 && this.featuredPosts.map(function (article) {
      return m(_components_FeaturedBlogItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        article: article,
        defaultImage: defaultImage
      });
    })), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: 'Button BlogFeatured-button',
      onclick: function onclick() {
        return _this2.scroll(1);
      },
      icon: 'fas fa-arrow-right'
    }, " "))), m("div", {
      className: 'BlogScrubber'
    }, m("div", {
      className: 'BlogList'
    }, this.isLoading && [false, false, true, false].map(function (state) {
      return m("div", {
        className: "BlogList-item BlogList-item-" + (state === true ? 'sized' : 'default') + " BlogList-item-ghost"
      }, m("div", {
        className: 'BlogList-item-photo FlarumBlog-default-image'
      }), m("div", {
        className: 'BlogList-item-content'
      }, m("h4", null, "\xA0"), m("p", null, "\xA0"), m("div", {
        className: 'data'
      }, m("span", null, m("i", {
        className: 'far fa-wave'
      })))));
    }), !this.isLoading && this.posts.length >= 1 && this.posts.map(function (article) {
      return m(_components_BlogOverviewItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        article: article,
        defaultImage: defaultImage
      });
    })), m("div", {
      className: 'Sidebar'
    }, m(_components_BlogCrudeSide__WEBPACK_IMPORTED_MODULE_11__["default"], null), this.showCategories && m(_components_BlogCategories__WEBPACK_IMPORTED_MODULE_5__["default"], null), this.showForumNav && m(_components_ForumNav__WEBPACK_IMPORTED_MODULE_8__["default"], null)))))];
  };
  _proto.newArticle = function newArticle() {
    var tags = [];

    // Get current category
    var currentCategory = flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().store.getBy('tags', 'slug', m.route.param('slug'));
    if (currentCategory) {
      tags.push(currentCategory);
    }

    // Redirect to the composer
    m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_1___default().route('blogComposer', {
      tags: tags.map(function (tag) {
        return tag.id();
      }).join(),
      lang: this.languages.length > 0 ? this.currentSelectedLanguage : undefined
    }));
  };
  return BlogOverview;
}((flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/forum/utils/addPreferences.js":
/*!*******************************************!*\
  !*** ./src/forum/utils/addPreferences.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/FieldSet */ "flarum/common/components/FieldSet");
/* harmony import */ var flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_SettingsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/SettingsPage */ "flarum/common/components/SettingsPage");
/* harmony import */ var flarum_common_components_SettingsPage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_SettingsPage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_9__);










/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.extend)((flarum_common_components_SettingsPage__WEBPACK_IMPORTED_MODULE_6___default().prototype), 'oninit', function () {
    //I dont have a fucking clue why it need to be here and not in the "settingsItems" extend
    this.blogSettings = {
      name: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.user.preferences().blogName || null),
      image: flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_7___default()(this.user.preferences().blogImage || null)
    };
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.extend)((flarum_common_components_SettingsPage__WEBPACK_IMPORTED_MODULE_6___default().prototype), 'settingsItems', function (items) {
    if (flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('canWriteBlogPosts') == false) {
      return;
    }
    items.add('blog-options', flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_5___default().component({
      label: flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('v17development-flarum-blog.forum.user_settings.settings'),
      className: 'blog-settings'
    }, this.blogOptions().toArray()));
  });
  (flarum_common_components_SettingsPage__WEBPACK_IMPORTED_MODULE_6___default().prototype)['blogOptions'] = function () {
    var _this = this;
    var fofUploadButton = null;
    if ('fof-upload' in flarum.extensions && flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('fof-upload.canUpload')) {
      var _require = __webpack_require__(/*! @fof-upload */ "@fof-upload"),
        _require$components = _require.components,
        Uploader = _require$components.Uploader,
        FileManagerModal = _require$components.FileManagerModal;
      var uploader = new Uploader();
      fofUploadButton = m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
        "class": "Button Button--icon",
        onclick: /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().modal.show(FileManagerModal, {
                  uploader: uploader,
                  onSelect: function onSelect(files) {
                    _this.blogSettings.image(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().store.getById('files', files[0]).url());
                    console.log(_this.blogSettings);
                  }
                }, true);
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        })),
        icon: "fas fa-cloud-upload-alt"
      });
    }
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_8___default())();
    items.add('blog-name', m("div", {
      className: "Form-group"
    }, m("label", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('v17development-flarum-blog.forum.user_settings.name'), ":"), m("input", {
      type: "text",
      className: "FormControl",
      bidi: this.blogSettings.name
    })));
    items.add('blog-image', m("div", {
      className: "Form-group"
    }, m("label", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('v17development-flarum-blog.forum.user_settings.image'), ":"), m("div", {
      style: "display:flex"
    }, m("input", {
      type: "text",
      className: "FormControl",
      placeholder: "https://",
      bidi: this.blogSettings.image
    }), fofUploadButton), m("img", {
      src: this.blogSettings.image(),
      height: "100"
    })));
    items.add('blog-save', m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      "class": "Button",
      onclick: /*#__PURE__*/(0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        var promise;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              promise = _this.user.savePreferences({
                blogName: _this.blogSettings.name,
                blogImage: _this.blogSettings.image
              });
              promise.then(function () {
                m.redraw();
                flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_9___default()), {
                  type: 'success'
                }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('v17development-flarum-blog.forum.user_settings.save_alert'));
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))
    }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('v17development-flarum-blog.forum.user_settings.save')));
    return items;
  };
}

/***/ }),

/***/ "./src/forum/utils/addSidebarNav.js":
/*!******************************************!*\
  !*** ./src/forum/utils/addSidebarNav.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addSidebarNav)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/LinkButton */ "flarum/common/components/LinkButton");
/* harmony import */ var flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__);



function addSidebarNav() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'navItems', function (items) {
    if (app.forum.attribute('blogAddSidebarNav') && app.forum.attribute('blogAddSidebarNav') !== '0') {
      items.add('blog', m((flarum_common_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default()), {
        icon: "fas fa-comment",
        href: app.route('blog')
      }, app.translator.trans('v17development-flarum-blog.forum.blog')), 15);
    }
    /*
    if (app.forum.attribute('canWriteBlogPosts')) {
      var blogsP = app.search.stickyParams();
      blogsP.filter = {
        q: "is:blog"
      };
      items.add(
        'articles',
        <LinkButton href={app.route('index', blogsP)} icon="far fa-newspaper">
          {app.translator.trans('v17development-flarum-blog.forum.articles')}
        </LinkButton>,
        -10
      );
    }
    if (app.forum.attribute('canApproveBlogPosts')) {
      var pendingP = app.search.stickyParams();
      pendingP.filter = {
        q: "is:pending"
      };
      items.add(
        'pending',
        <LinkButton href={app.route('index', pendingP)} icon="fas fa-check-double">
          {app.translator.trans('v17development-flarum-blog.forum.pending')}
        </LinkButton>,
        -10
      );
    }
    */
    return items;
  });
}

/***/ }),

/***/ "./src/forum/utils/discussionRouting.js":
/*!**********************************************!*\
  !*** ./src/forum/utils/discussionRouting.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  // Save the original function before we override it
  var original_discussion_route = app.route.discussion;

  /**
   * Generate a URL to a discussion OR a Blog Article.
   *
   * CORE_CODE_OVERRIDE: This overrides the standard function from flarum/core.
   * The code is inspired from js/src/forum/routes.js and now handles different types of discussions.
   * It will try to keep the original function executed if the discussion being
   * processed isn't a blog article.
   *
   * @param {Discussion} discussion
   * @param {Integer} [near]
   * @return {String}
   */
  app.route.discussion = function (discussion, near) {
    var discussionRedirectEnabled = app.forum.attribute('blogRedirectsEnabled') === 'both' || app.forum.attribute('blogRedirectsEnabled') === 'discussions_only';
    var shouldRedirect = false;
    if (discussionRedirectEnabled && discussion.tags().length > 0) {
      var blogTags = app.forum.attribute('blogTags');
      var foundTags = discussion.tags().filter(function (tag) {
        return blogTags.indexOf(tag.id()) >= 0 || tag.parent() && blogTags.indexOf(tag.parent().id()) >= 0;
      });
      if (foundTags.length > 0) {
        shouldRedirect = true;
      }
    }
    if (shouldRedirect) {
      return discussion.lastReadPostNumber() > 1 ? app.route('blogArticle.near', {
        id: discussion.slug(),
        near: discussion.lastReadPostNumber()
      }) : app.route('blogArticle', {
        id: discussion.slug()
      });
    } else {
      return original_discussion_route(discussion, near);
    }
  };
}

/***/ }),

/***/ "./src/forum/utils/extendTagOverview.js":
/*!**********************************************!*\
  !*** ./src/forum/utils/extendTagOverview.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extendTagOverview)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/tags/components/TagsPage */ "flarum/tags/components/TagsPage");
/* harmony import */ var flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_2__);
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



function extendTagOverview() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'view', function (markup) {
    var _this = this;
    // Pending xhr to load all tags, throw back loading indicator.
    if (this.loading) {
      return markup;
    }
    if (app.forum.attribute('blogHideTags') == false) return markup;

    // Get blog tag ID's
    var blogTags = app.forum.attribute('blogTags') || [];
    var tag_tiles_parent = findChild(markup, 'TagsPage-content', true);
    var tag_tiles = tag_tiles_parent == null ? void 0 : tag_tiles_parent.children[0];
    if (!tag_tiles_parent || !tag_tiles) return markup;

    // Map through the tiles and remove tiles that are part of the blog
    tag_tiles.children = tag_tiles.children.map(function (tile, i) {
      return blogTags.indexOf(_this.tags[i].id()) >= 0 ? null : tile;
    });
    return markup;
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'navItems', function (items) {
    if (app.forum.attribute('blogHideTags') == false) return items;
    var blogTags = app.forum.attribute('blogTags') || [];
    blogTags.forEach(function (id) {
      items.remove("tag" + id);
    });
    return items;
  });
}
function findChild(parent, childClass, recursive, maxDepth, depth) {
  if (recursive === void 0) {
    recursive = false;
  }
  if (maxDepth === void 0) {
    maxDepth = 50;
  }
  if (depth === void 0) {
    depth = 0;
  }
  var children = getChildren(parent);
  var child = null;
  for (var i = 0; i < children.length; i++) {
    var _children$i;
    var childClassName = ((_children$i = children[i]) == null || (_children$i = _children$i.attrs) == null ? void 0 : _children$i.className) || '';
    if (childClassName.includes(childClass)) {
      child = children[i];
      break;
    }
  }

  // Recursive search
  if (recursive && !child && depth < maxDepth) {
    for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
      var subParent = _step.value;
      var subChild = findChild(subParent, childClass, true, maxDepth, depth + 1);
      if (subChild) {
        return subChild;
      }
    }
  }
  return child;
}
function getChildren(parent) {
  if (Array.isArray(parent)) {
    return parent;
  }
  var children = (parent == null ? void 0 : parent.children) || [];
  if (!Array.isArray(children)) {
    return [];
  }
  return children;
}

/***/ }),

/***/ "./src/forum/utils/redirector.js":
/*!***************************************!*\
  !*** ./src/forum/utils/redirector.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/DiscussionPage */ "flarum/forum/components/DiscussionPage");
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  // Redirect tag to blog category
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.extend)((flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_0___default().prototype), 'oncreate', function () {
    var tag = this.currentTag();
    var tagRedirectEnabled = flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute('blogRedirectsEnabled') === 'both' || flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute('blogRedirectsEnabled') === 'tags_only';

    // Only trigger when it's a tag page and the redirects are enabled
    if (tag && tagRedirectEnabled) {
      var blogTags = flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute('blogTags');

      // Tag is inside list
      if (blogTags.indexOf(tag.id()) >= 0 || tag.parent() && blogTags.indexOf(tag.parent().id()) >= 0) {
        m.route.set(flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().route('blog'));
      }
    }
  });

  // Redirect discussion to blog article
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_2__.override)((flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'show', function (original, discussion) {
    var discussionRedirectEnabled = flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute('blogRedirectsEnabled') === 'both' || flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute('blogRedirectsEnabled') === 'discussions_only';
    if (discussionRedirectEnabled && discussion && discussion && discussion.tags().length > 0) {
      var blogTags = flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().forum.attribute('blogTags');
      var foundTags = discussion.tags().filter(function (tag) {
        return blogTags.indexOf(tag.id()) >= 0 || tag.parent() && blogTags.indexOf(tag.parent().id()) >= 0;
      });

      // Only redirect if the discussion has blog tags
      if (foundTags.length > 0) {
        // Redirect to blog article
        var url = flarum_forum_app__WEBPACK_IMPORTED_MODULE_3___default().route('blogArticle', {
          id: discussion.slug()
        });
        m.route.set(url, null, {
          replace: true
        });
        return null;
      }
    }
    return original(discussion);
  });
}

/***/ }),

/***/ "./src/forum/utils/selectFiles.ts":
/*!****************************************!*\
  !*** ./src/forum/utils/selectFiles.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Asynchronously select file(s).
 *
 * @param contentType The content type of files you wish to select. For instance, use "image/*" to select all types of images.
 * @param multiple Indicates if the user can select multiple files.
 * @returns A promise of a file or array of files in case the multiple parameter is true.
 */

function selectFiles(contentType, multiple) {
  return new Promise(function (resolve) {
    var input = document.createElement('input');
    input.type = 'file';
    input.multiple = multiple;
    input.accept = contentType;
    input.onchange = function (_) {
      var files = Array.from(input.files || []);
      if (multiple) resolve(files);else resolve(files[0]);
    };
    input.click();
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectFiles);

/***/ }),

/***/ "@flarum/core/forum":
/*!******************************!*\
  !*** external "flarum.core" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core;

/***/ }),

/***/ "@fof-upload":
/*!**************************************************!*\
  !*** external "flarum.extensions['fof-upload']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.extensions['fof-upload'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Alert'];

/***/ }),

/***/ "flarum/common/components/Badge":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Badge']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Badge'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Dropdown":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Dropdown']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Dropdown'];

/***/ }),

/***/ "flarum/common/components/FieldSet":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/FieldSet']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/FieldSet'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/LinkButton":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/LinkButton']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LinkButton'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Page":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Page']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Page'];

/***/ }),

/***/ "flarum/common/components/SelectDropdown":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['common/components/SelectDropdown']" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/SelectDropdown'];

/***/ }),

/***/ "flarum/common/components/SettingsPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['common/components/SettingsPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/SettingsPage'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/components/TextEditor":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditor']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/TextEditor'];

/***/ }),

/***/ "flarum/common/components/Tooltip":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['common/components/Tooltip']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Tooltip'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/avatar":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/avatar']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/avatar'];

/***/ }),

/***/ "flarum/common/helpers/fullTime":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/fullTime']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/fullTime'];

/***/ }),

/***/ "flarum/common/helpers/humanTime":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/humanTime']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/humanTime'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/common/helpers/listItems":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/listItems']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/listItems'];

/***/ }),

/***/ "flarum/common/helpers/username":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/username']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/helpers/username'];

/***/ }),

/***/ "flarum/common/models/Discussion":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/models/Discussion']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/models/Discussion'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ }),

/***/ "flarum/common/utils/classList":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/utils/classList']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/classList'];

/***/ }),

/***/ "flarum/common/utils/extractText":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/utils/extractText']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/extractText'];

/***/ }),

/***/ "flarum/common/utils/mixin":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/utils/mixin']" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/mixin'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/TextEditor":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditor']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/TextEditor'];

/***/ }),

/***/ "flarum/components/TextEditorButton":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditorButton']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['components/TextEditorButton'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/AvatarEditor":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/AvatarEditor']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/AvatarEditor'];

/***/ }),

/***/ "flarum/forum/components/CommentPost":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/CommentPost']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/CommentPost'];

/***/ }),

/***/ "flarum/forum/components/ComposerBody":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/ComposerBody']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/ComposerBody'];

/***/ }),

/***/ "flarum/forum/components/DiscussionPage":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionPage']" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionPage'];

/***/ }),

/***/ "flarum/forum/components/EditPostComposer":
/*!**************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/EditPostComposer']" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/EditPostComposer'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ }),

/***/ "flarum/forum/components/PostStream":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/PostStream']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/PostStream'];

/***/ }),

/***/ "flarum/forum/components/UserCard":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/UserCard']" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/UserCard'];

/***/ }),

/***/ "flarum/forum/states/PostStreamState":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/states/PostStreamState']" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/states/PostStreamState'];

/***/ }),

/***/ "flarum/forum/utils/DiscussionControls":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/utils/DiscussionControls']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/utils/DiscussionControls'];

/***/ }),

/***/ "flarum/forum/utils/UserControls":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['forum/utils/UserControls']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/utils/UserControls'];

/***/ }),

/***/ "flarum/tags/common/models/Tag":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['tags/common/models/Tag']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['tags/common/models/Tag'];

/***/ }),

/***/ "flarum/tags/components/TagDiscussionModal":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['tags/components/TagDiscussionModal']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['tags/components/TagDiscussionModal'];

/***/ }),

/***/ "flarum/tags/components/TagsPage":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['tags/components/TagsPage']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['tags/components/TagsPage'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map