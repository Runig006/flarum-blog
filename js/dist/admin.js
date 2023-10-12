/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/components/Modals/SelectCategoriesModal.js":
/*!**************************************************************!*\
  !*** ./src/admin/components/Modals/SelectCategoriesModal.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectCategoriesModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/admin/utils/saveSettings */ "flarum/admin/utils/saveSettings");
/* harmony import */ var flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__);






var SelectCategoriesModal = /*#__PURE__*/function (_Modal) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SelectCategoriesModal, _Modal);
  function SelectCategoriesModal() {
    return _Modal.apply(this, arguments) || this;
  }
  var _proto = SelectCategoriesModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    this.blogCategoriesOriginal = app.data.settings.blog_tags ? app.data.settings.blog_tags.split('|') : [];
    this.blogCategories = app.data.settings.blog_tags ? app.data.settings.blog_tags.split('|') : [];
    this.isSaving = false;
    this.hasChanges = false;
  };
  _proto.title = function title() {
    return 'Select blog categories';
  };
  _proto.className = function className() {
    return 'Modal modal-dialog FlarumBlog-TagsModal';
  };
  _proto.content = function content() {
    var _this = this;
    return m("div", null, m("div", {
      className: "Modal-body"
    }, m("p", null, "Please select one or more tags that are considered blog tags.", ' ', m("a", {
      href: app.forum.attribute('baseUrl') + '/blog',
      target: '_blank'
    }, "Visit your blog.")), m("table", {
      className: 'FlarumBlog-TagsTable'
    }, m("thead", null, m("th", {
      width: "35"
    }), m("th", null, "Tag name"), m("th", {
      width: "50"
    })), m("tbody", null, app.store.all('tags').length === 0 && m("tr", null, m("td", {
      colspan: "3"
    }, "You currently have no tags.")), app.store.all('tags').map(function (obj) {
      // Skip all tags who aren't main categories
      if (obj.parent()) {
        return;
      }

      // Toggle tag
      var toggleTag = function toggleTag() {
        var currentIndex = _this.blogCategories.indexOf(obj.id());
        _this.hasChanges = true;

        // Remove tag
        if (currentIndex >= 0) {
          _this.blogCategories.splice(currentIndex, 1);
        } else {
          // Add tag
          _this.blogCategories.push(obj.id());
        }
      };
      return m("tr", null, m("td", null, m("i", {
        className: obj.icon()
      })), m("td", {
        onclick: toggleTag
      }, obj.name()), m("td", null, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default()), {
        state: _this.blogCategories.indexOf(obj.id()) >= 0,
        onchange: toggleTag
      })));
    })))), m("div", {
      style: "padding: 25px 30px; text-align: center;"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_2___default()), {
      type: "submit",
      className: "Button Button--primary",
      loading: this.loading
    }, this.hasChanges ? 'Save changes' : 'Close')));
  }

  // Close or save setting
  ;
  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;
    e.preventDefault();
    if (!this.hasChanges) {
      this.hide();
      return;
    }
    this.isSaving = true;

    // Validate tags and prevent ghost tags (deleted tags)
    var validBlogTags = [];
    this.blogCategories.map(function (tagId) {
      if (app.store.getById('tags', tagId)) {
        validBlogTags.push(tagId);
      }
    });
    flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_4___default()({
      blog_tags: validBlogTags.join('|')
    }).then(function () {
      app.alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3___default()), {
        type: 'success'
      }, app.translator.trans('core.admin.settings.saved_message'));
      _this2.hide();
    })["catch"](function () {
      app.alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3___default()), {
        type: 'error'
      }, app.translator.trans('core.lib.error.generic_message'));
    }).then(function () {
      _this2.isSaving = false;
    });
  };
  return SelectCategoriesModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_admin_components_BasicsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/components/BasicsPage */ "flarum/admin/components/BasicsPage");
/* harmony import */ var flarum_admin_components_BasicsPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_BasicsPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/PermissionGrid */ "flarum/admin/components/PermissionGrid");
/* harmony import */ var flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_BlogSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/BlogSettings */ "./src/admin/pages/BlogSettings.js");




app.initializers.add('v17development-flarum-blog', function () {
  // Register extension settings page
  app.extensionData["for"]('v17development-blog').registerPage(_pages_BlogSettings__WEBPACK_IMPORTED_MODULE_3__["default"]);
  app.extensionData["for"]('v17development-blog').registerPermission({
    icon: 'fas fa-pencil-alt',
    label: app.translator.trans('v17development-flarum-blog.admin.permissions.write_articles'),
    permission: 'blog.writeArticles'
  }, 'blog', 90).registerPermission({
    icon: 'far fa-star',
    label: app.translator.trans('v17development-flarum-blog.admin.permissions.auto_approve_posts'),
    permission: 'blog.autoApprovePosts'
  }, 'blog', 90).registerPermission({
    icon: 'far fa-thumbs-up',
    label: app.translator.trans('v17development-flarum-blog.admin.permissions.approve_posts'),
    permission: 'blog.canApprovePosts'
  }, 'blog', 90);

  // Add addPermissions
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_admin_components_PermissionGrid__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'permissionItems', function (items) {
    // Add blog permissions
    items.add('blog', {
      label: app.translator.trans('v17development-flarum-blog.admin.blog'),
      children: this.attrs.extensionId ? app.extensionData.getExtensionPermissions(this.extensionId, 'blog').toArray() : app.extensionData.getAllExtensionPermissions('blog').toArray()
    }, 80);
  });
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_admin_components_BasicsPage__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'homePageItems', function (items) {
    items.add('blog', {
      path: '/blog',
      label: app.translator.trans('v17development-flarum-blog.admin.blog')
    });
  });
});

/***/ }),

/***/ "./src/admin/pages/BlogSettings.js":
/*!*****************************************!*\
  !*** ./src/admin/pages/BlogSettings.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogSettings)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/admin/utils/saveSettings */ "flarum/admin/utils/saveSettings");
/* harmony import */ var flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/FieldSet */ "flarum/common/components/FieldSet");
/* harmony import */ var flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Modals_SelectCategoriesModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Modals/SelectCategoriesModal */ "./src/admin/components/Modals/SelectCategoriesModal.js");
/* harmony import */ var flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/admin/components/UploadImageButton */ "flarum/admin/components/UploadImageButton");
/* harmony import */ var flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_9__);










var BlogSettings = /*#__PURE__*/function (_ExtensionPage) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogSettings, _ExtensionPage);
  function BlogSettings() {
    return _ExtensionPage.apply(this, arguments) || this;
  }
  var _proto = BlogSettings.prototype;
  _proto.oninit = function oninit(attrs) {
    var _app$data$settings$bl, _app$data$settings$bl2, _app$data$settings$bl3, _app$data$settings$bl4, _app$data$settings$bl5, _app$data$settings$bl6, _app$data$settings$bl7, _app$data$settings$bl8, _app$data$settings$bl9, _app$data$settings$bl10;
    _ExtensionPage.prototype.oninit.call(this, attrs);

    // Form
    this.hasChanges = false;
    this.isSaving = false;

    // Settings
    this.redirectsEnabled = (_app$data$settings$bl = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings.blog_redirects_enabled) != null ? _app$data$settings$bl : 'both';
    this.hideTagsInList = (_app$data$settings$bl2 = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings.blog_hide_tags) != null ? _app$data$settings$bl2 : true;
    this.allowComments = (_app$data$settings$bl3 = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings.blog_allow_comments) != null ? _app$data$settings$bl3 : true;
    this.hideOnDiscussionList = (_app$data$settings$bl4 = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings.blog_filter_discussion_list) != null ? _app$data$settings$bl4 : false;
    this.requiresReviewOnPost = (_app$data$settings$bl5 = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings.blog_requires_review) != null ? _app$data$settings$bl5 : false;
    this.addCategoryHierarchy = (_app$data$settings$bl6 = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings.blog_category_hierarchy) != null ? _app$data$settings$bl6 : true;
    this.addSidebarNav = (_app$data$settings$bl7 = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings.blog_add_sidebar_nav) != null ? _app$data$settings$bl7 : true;
    this.featuredCount = (_app$data$settings$bl8 = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings.blog_featured_count) != null ? _app$data$settings$bl8 : 3;
    this.blogAddHero = (_app$data$settings$bl9 = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings.blog_add_hero) != null ? _app$data$settings$bl9 : true;
    this.htmlSideBar = (_app$data$settings$bl10 = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings.blog_html_sidebar) != null ? _app$data$settings$bl10 : null;
    (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().forum).data.attributes.blog_default_imageUrl = flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('baseUrl') + "/assets/" + (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings.blog_default_image_path;
  };
  _proto.content = function content() {
    var _this = this;
    var blogCategoriesCount = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data).settings.blog_tags ? flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().data.settings.blog_tags.split('|').length : 0;
    return m("div", {
      className: "BasicsPage FlarumBlog"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: 'FlarumBlog-SelectCategories'
    }, blogCategoriesCount === 0 ? flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.no_categories_selected') : flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.selected_category_count', {
      count: blogCategoriesCount
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
      className: "Button",
      onclick: function onclick() {
        return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_components_Modals_SelectCategoriesModal__WEBPACK_IMPORTED_MODULE_8__["default"]);
      }
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.select_categories_button'))), flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_6___default().component({
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.blog_heading')
    }, [flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_7___default().component({
      state: this.allowComments == true,
      onchange: function onchange(val) {
        _this.allowComments = val;
        _this.hasChanges = true;
      }
    }, [m("b", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.allow_comments_label')), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.allow_comments_text'))]), flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_7___default().component({
      state: this.requiresReviewOnPost == true,
      onchange: function onchange(val) {
        _this.requiresReviewOnPost = val;
        _this.hasChanges = true;
      }
    }, [m("b", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.require_review_label')), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.require_review_text'))]), flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_7___default().component({
      state: this.hideOnDiscussionList == true,
      onchange: function onchange(val) {
        _this.hideOnDiscussionList = val;
        _this.hasChanges = true;
      }
    }, [m("b", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.hide_on_discussion_list_label')), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.hide_on_discussion_list_text'))]), flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_7___default().component({
      state: this.addSidebarNav == true,
      onchange: function onchange(val) {
        _this.addSidebarNav = val;
        _this.hasChanges = true;
      }
    }, [m("b", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.add_sidebar_nav_label')), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.add_sidebar_nav_text'))]), flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_7___default().component({
      state: this.blogAddHero == true,
      onchange: function onchange(val) {
        _this.blogAddHero = val;
        _this.hasChanges = true;
      }
    }, [m("b", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.add_hero_label')), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.add_hero_text'))]), m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.html_sidebar_label')), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.html_sidebar_text')), m("textarea", {
      "class": "FormControl",
      value: this.htmlSideBar,
      oninput: function oninput(e) {
        _this.htmlSideBar = e.target.value;
        _this.hasChanges = true;
      }
    }))]), flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_6___default().component({
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.categories_heading')
    }, [flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_7___default().component({
      state: this.hideTagsInList == true,
      onchange: function onchange(val) {
        _this.hideTagsInList = val;
        _this.hasChanges = true;
      }
    }, [m("b", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.hide_tags_in_taglist_label')), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.hide_tags_in_taglist_text'))]), flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_7___default().component({
      state: this.addCategoryHierarchy == true,
      onchange: function onchange(val) {
        _this.addCategoryHierarchy = val;
        _this.hasChanges = true;
      }
    }, [m("b", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.show_tag_hierarchy_label')), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.show_tag_hierarchy_text'))])]), flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_6___default().component({
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.redirects_heading')
    }, [flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_7___default().component({
      state: this.redirectsEnabled === 'both' || this.redirectsEnabled === 'discussions_only',
      onchange: function onchange(val) {
        if (val) {
          // Add
          if (_this.redirectsEnabled === 'tags_only') {
            _this.redirectsEnabled = 'both';
          } else if (_this.redirectsEnabled === 'none') {
            _this.redirectsEnabled = 'discussions_only';
          }
        } else {
          if (_this.redirectsEnabled === 'discussions_only') {
            _this.redirectsEnabled = 'none';
          } else {
            _this.redirectsEnabled = 'tags_only';
          }
        }
        _this.hasChanges = true;
      }
    }, [m("b", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.redirect_articles_label')), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.redirect_articles_text'))]), flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_7___default().component({
      state: this.redirectsEnabled === 'both' || this.redirectsEnabled === 'tags_only',
      onchange: function onchange(val) {
        if (val) {
          // Add
          if (_this.redirectsEnabled === 'discussions_only') {
            _this.redirectsEnabled = 'both';
          } else if (_this.redirectsEnabled === 'none') {
            _this.redirectsEnabled = 'tags_only';
          }
        } else {
          if (_this.redirectsEnabled === 'tags_only') {
            _this.redirectsEnabled = 'none';
          } else {
            _this.redirectsEnabled = 'discussions_only';
          }
        }
        _this.hasChanges = true;
      }
    }, [m("b", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.redirect_tags_label')), m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.redirect_tags_text'))])]), flarum_common_components_FieldSet__WEBPACK_IMPORTED_MODULE_6___default().component({
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.default_article_image_label')
    }, [m("div", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('v17development-flarum-blog.admin.settings.default_article_image_text')), flarum_admin_components_UploadImageButton__WEBPACK_IMPORTED_MODULE_9___default().component({
      name: 'blog_default_image'
    })]), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
      loading: this.isSaving,
      className: 'Button Button--primary',
      onclick: function onclick() {
        return _this.save();
      },
      disabled: !this.hasChanges
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('core.admin.settings.submit_button'))));
  }

  /**
   * Save data
   */;
  _proto.save = function save() {
    var _this2 = this;
    this.isSaving = true;
    flarum_admin_utils_saveSettings__WEBPACK_IMPORTED_MODULE_3___default()({
      blog_add_sidebar_nav: this.addSidebarNav,
      blog_redirects_enabled: this.redirectsEnabled,
      blog_hide_tags: this.hideTagsInList,
      blog_requires_review: this.requiresReviewOnPost,
      blog_allow_comments: this.allowComments,
      blog_category_hierarchy: this.addCategoryHierarchy,
      blog_filter_discussion_list: this.hideOnDiscussionList,
      blog_featured_count: this.featuredCount,
      blog_add_hero: this.blogAddHero,
      blog_html_sidebar: this.htmlSideBar
    }).then(function () {
      _this2.hasChanges = false;

      // Show saved message
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().alerts.show((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_4___default()), {
        type: 'success'
      }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('core.admin.settings.saved_message'));
    })["catch"](function () {}).then(function () {
      _this2.isSaving = false;
      m.redraw();
    });
  };
  return BlogSettings;
}((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/BasicsPage":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/BasicsPage']" ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/BasicsPage'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/admin/components/PermissionGrid":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['admin/components/PermissionGrid']" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/PermissionGrid'];

/***/ }),

/***/ "flarum/admin/components/UploadImageButton":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['admin/components/UploadImageButton']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/UploadImageButton'];

/***/ }),

/***/ "flarum/admin/utils/saveSettings":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['admin/utils/saveSettings']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/utils/saveSettings'];

/***/ }),

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Alert'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/FieldSet":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['common/components/FieldSet']" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/FieldSet'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

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
  !*** ./admin.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map