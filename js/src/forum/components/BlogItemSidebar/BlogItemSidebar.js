import Component from 'flarum/common/Component';
import ItemList from 'flarum/common/utils/ItemList';
import listItems from 'flarum/common/helpers/listItems';
import BlogAuthor from './BlogAuthor';
import BlogSide from '../BlogSide';

export default class BlogItemSidebar extends Component {
  view() {
    return (
      <div className={'FlarumBlog-Article-Sidebar'}>
        <ul>{listItems(this.items().toArray())}</ul>
      </div>
    );
  }

  items() {
    const itemlist = new ItemList();
    itemlist.add('author', BlogAuthor.component(this.attrs), 0);
    itemlist.add('sidebar', BlogSide.component(this.attrs), 0);
    return itemlist;
  }
}
