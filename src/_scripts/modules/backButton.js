import anime from 'animejs';

export default function backButton() {
    return {
        over() {
            anime({
                targets:  `.${this.$el.className} .char`,
                translateY: [0, -15, 0],
                direction: 'linear',
                loop: false,
                delay: anime.stagger(25),
                easing: 'easeInOutCirc'
            });
        }
    }
}