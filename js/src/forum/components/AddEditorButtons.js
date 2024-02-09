import { extend } from 'flarum/extend';
import TextEditor from 'flarum/components/TextEditor';
import TextEditorButton from 'flarum/components/TextEditorButton';

export default function () {
    extend(TextEditor.prototype, 'toolbarItems', function (items) {
        items.add('center', (
            <TextEditorButton onclick={() => {
                let selection = this.attrs.composer.editor.getSelectionRange();
                this.attrs.composer.editor.insertAt(selection[1], '[/center]');
                this.attrs.composer.editor.insertAt(selection[0], '[center]');
            }} icon="fas fa-align-center"
            >
                {app.translator.trans('v17development-flarum-blog.forum.buttons.center_tooltip')}
            </TextEditorButton>
        ),100);

        items.add('score', (
            <TextEditorButton onclick={() => {
                this.attrs.composer.editor.insertAtCursor('[score]50[/score]');
            }} icon="far fa-star"
            >
                {app.translator.trans('v17development-flarum-blog.forum.buttons.score_tooltip')}
            </TextEditorButton>
        ),100);

        items.add('review', (
            <TextEditorButton onclick={() => {
                let selection = this.attrs.composer.editor.getSelectionRange();
                this.attrs.composer.editor.insertAt(selection[1], '[/review]');
                this.attrs.composer.editor.insertAt(selection[0], '[review]');
            }} icon="far fa-comment"
            >
                {app.translator.trans('v17development-flarum-blog.forum.buttons.review_tooltip')}
            </TextEditorButton>
        ),100);

        items.add('carousel', (
            <TextEditorButton onclick={() => {
                let selection = this.attrs.composer.editor.getSelectionRange();
                this.attrs.composer.editor.insertAt(selection[1], '[/carousel]');
                this.attrs.composer.editor.insertAt(selection[0], '[carousel]');
            }} icon="far fa-images"
            >
                {app.translator.trans('v17development-flarum-blog.forum.buttons.carousel_tooltip')}
            </TextEditorButton>
        ),100);
    });
}