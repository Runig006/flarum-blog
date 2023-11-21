import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';

export default class BlogCrude extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.htmlSidebar = app.forum.attribute('htmlSideBar');
  }

  view() {
    return (
      <>
        {m.trust(this.htmlSidebar)}
      </>
    );
  }
}
