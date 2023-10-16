import { override } from 'flarum/common/extend';
import UserCard from 'flarum/forum/components/UserCard';


import app from 'flarum/forum/app';
import UserControls from 'flarum/forum/utils/UserControls';
import avatar from 'flarum/common/helpers/avatar';
import username from 'flarum/common/helpers/username';
import Dropdown from 'flarum/common/components/Dropdown';
import Link from 'flarum/common/components/Link';
import AvatarEditor from 'flarum/forum/components/AvatarEditor';
import listItems from 'flarum/common/helpers/listItems';
import classList from 'flarum/common/utils/classList';

function getName(user) {
  let name = app.translator.trans('core.lib.username.deleted_text');
  if (user && user.displayName()) {
    name = user.displayName();
  }
  if (user.data.attributes.blogName) {
    name += " | " + user.data.attributes.blogName;
  }
  return <span className="username">{name}</span>;
}

export default function () {
  override(UserCard.prototype, 'view', function (original) {
    const user = this.attrs.user;
    const controls = UserControls.controls(user, this).toArray();
    const color = user.color();
    const badges = user.badges().toArray();
    var background = null;

    //We are doing a override...so...
    if (this.attrs.user.cover()) {
      let coverUrl = this.attrs.user.cover();
      if (coverUrl) {
        background = `url(${coverUrl})`;
      }
    }

    return (
      <div className={classList('UserCard', this.attrs.className)} style={color && { '--usercard-bg': color, '--background-image':  background}}>
        <div className="darkenBackground">
          <div className="container">
            {!!controls.length && (
              <Dropdown
                className="UserCard-controls App-primaryControl"
                menuClassName="Dropdown-menu--right"
                buttonClassName={this.attrs.controlsButtonClassName}
                label={app.translator.trans('core.forum.user_controls.button')}
                accessibleToggleLabel={app.translator.trans('core.forum.user_controls.toggle_dropdown_accessible_label')}
                icon="fas fa-ellipsis-v"
              >
                {controls}
              </Dropdown>
            )}

            <div className="UserCard-profile">
              <h1 className="UserCard-identity">
                {this.attrs.editable ? (
                  <>
                    <AvatarEditor user={user} className="UserCard-avatar" />
                    {getName(user)}
                  </>
                ) : (
                  <Link href={app.route.user(user)}>
                    <div className="UserCard-avatar">{avatar(user, { loading: 'eager' })}</div>
                    {getName(user)}
                  </Link>
                )}
              </h1>

              {!!badges.length && <ul className="UserCard-badges badges">{listItems(badges)}</ul>}

              <ul className="UserCard-info">{listItems(this.infoItems().toArray())}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  });
}