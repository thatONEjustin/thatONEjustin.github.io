import anime from 'animejs';
import splt from 'spltjs';

export default function backButton() {
    return {
        init() {
            splt({})
        },
        async over() {
            anime({
                targets: ['.back svg', `.${this.$el.className} .char`],
                translateY: [0, -15, 0],
                direction: 'linear',
                loop: false,
                delay: anime.stagger(25),
                easing: 'easeInOutCirc'
            });
        }
    }
}