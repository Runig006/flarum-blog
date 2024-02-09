import CommentPost from 'flarum/forum/components/CommentPost';
import { extend } from 'flarum/common/extend';
import BlogTop from './BlogTop';

export default function carousel() {
    extend(CommentPost.prototype, 'oncreate', function (vnode) {
        this.element.querySelectorAll('.carousel').forEach((node) => {
            initialCarousel(node);
        });
    });

    function initialCarousel(carousel) {
        var interval = setInterval(() => {
            moveCarousel(carousel, 1);
        }, 2048)

        let buttons = carousel.querySelectorAll('.carousel-button');
        buttons.item(0).onclick = () => {
            clearInterval(interval);
            moveCarousel(carousel, -1)
        };
        buttons.item(1).onclick = () => {
            clearInterval(interval);
            moveCarousel(carousel, 1)
        };
    }

    function moveCarousel(carousel, direction) {
        let list = carousel.querySelector('.carousel-list');
        let item = carousel.querySelector('.carousel-list > *');
        let maxScroll = list.scrollWidth - list.clientWidth;
        let scrollAvailable = maxScroll - list.scrollLeft;
        let widthToMove = item.clientWidth + 5;

        if (direction > 0 && scrollAvailable < widthToMove) {
            list.scrollLeft = 0;
        }

        switch (true) {
            // Go the first item if is the max
            case direction > 0 && scrollAvailable < widthToMove:
                list.scrollLeft = 0;
                break;
            // Go the last item if is the min
            case direction < 0 && scrollAvailable >= maxScroll - widthToMove/4:
                list.scrollLeft = maxScroll;
                break;
            default:
                list.scrollLeft += (direction * (widthToMove) * 1);
                break;
        }
    }

    return {
        initialCarousel: initialCarousel
    };
}