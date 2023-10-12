import app from 'flarum/forum/app';
import Button from 'flarum/common/components/Button';
import { extend, override } from 'flarum/common/extend';
import FieldSet from 'flarum/common/components/FieldSet';
import SettingsPage from 'flarum/common/components/SettingsPage';
import Stream from 'flarum/common/utils/Stream';
import ItemList from 'flarum/common/utils/ItemList';
import Alert from 'flarum/common/components/Alert';

export default function () {

    extend(SettingsPage.prototype, 'oninit', function () {
        //I dont have a fucking clue why it need to be here and not in the "settingsItems" extend
        this.blogSettings = {
            name: Stream(this.user.preferences().blogName || null),
            image: Stream(this.user.preferences().blogImage || null)
        }
    });
    extend(SettingsPage.prototype, 'settingsItems', function (items) {
        if (app.forum.attribute('canWriteBlogPosts') == false) {
            return;
        }
        items.add(
            'blog-options',
            FieldSet.component(
                {
                    label: app.translator.trans('v17development-flarum-blog.forum.user_settings.settings'),
                    className: 'blog-settings',
                },
                this.blogOptions().toArray()
            )
        );
    });

    SettingsPage.prototype['blogOptions'] = function () {
        let fofUploadButton = null;
        if ('fof-upload' in flarum.extensions && app.forum.attribute('fof-upload.canUpload')) {
            const { components: { Uploader, FileManagerModal }, } = require('@fof-upload');
            const uploader = new Uploader();
            fofUploadButton = (
                <Button class="Button Button--icon" onclick={async () => {
                    app.modal.show(
                        FileManagerModal,
                        {
                            uploader: uploader,
                            onSelect: (files) => {
                                this.blogSettings.image(app.store.getById('files', files[0]).url());
                                console.log(this.blogSettings);
                            },
                        },
                        true
                    );
                }}
                    icon="fas fa-cloud-upload-alt"
                />
            );
        }

        const items = new ItemList();
        items.add(
            'blog-name',
            <div className="Form-group">
                <label>{app.translator.trans('v17development-flarum-blog.forum.user_settings.name')}:</label>
                <input type="text" className="FormControl" bidi={this.blogSettings.name}></input>
            </div>,
        );
        items.add(
            'blog-image',
            <div className="Form-group">
                <label>{app.translator.trans('v17development-flarum-blog.forum.user_settings.image')}:</label>
                <div style="display:flex">
                    <input type="text" className="FormControl" placeholder="https://" bidi={this.blogSettings.image} />
                    {fofUploadButton}
                </div>


                <img src={this.blogSettings.image()} height="100" />
            </div>,
        );
        items.add(
            'blog-save',
            <Button class="Button" onclick={async () => {
                let promise = this.user.savePreferences({ blogName: this.blogSettings.name, blogImage: this.blogSettings.image });
                promise.then(function () {
                    m.redraw();
                    app.alerts.show(Alert, { type: 'success' }, app.translator.trans('v17development-flarum-blog.forum.user_settings.save_alert'));
                });
            }}>
                {app.translator.trans('v17development-flarum-blog.forum.user_settings.save')}
            </Button>
        );
        return items;
    };
}