import { extend } from 'flarum/extend';
import TextEditor from 'flarum/components/TextEditor';
import TextEditorButton from 'flarum/components/TextEditorButton';

export default function () {
    extend(TextEditor.prototype, 'toolbarItems', function (items) {
        items.add('score', (
            <TextEditorButton onclick={() => {
                this.attrs.composer.editor.insertAtCursor('[score]50[/score]');
            }} icon="far fa-star"
            >
                {app.translator.trans('v17development-flarum-blog.forum.buttons.score_tooltip')}
            </TextEditorButton>
        ));

        items.add('review', (
            <TextEditorButton onclick={() => {
                this.attrs.composer.editor.insertAtCursor('[review] :D [/review]');
            }} icon="far fa-comment"
            >
                {app.translator.trans('v17development-flarum-blog.forum.buttons.review_tooltip')}
            </TextEditorButton>
        ));
    });
}