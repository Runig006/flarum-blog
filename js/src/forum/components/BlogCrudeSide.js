import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';

export default class BlogCrudeSide extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.htmlSidebar = app.forum.attribute('htmlSideBar');
    console.log(this.htmlSidebar);
  }

  view() {
    return (
      <div className="BlogHtml">
        {m.trust(this.htmlSidebar)}
      </div>
    );
  }
}
