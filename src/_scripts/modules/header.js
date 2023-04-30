import anime from 'animejs';
import splt from 'spltjs';

export default function Header() {
    return {
        init() {
        },

        trackMouse(event) {
            anime({
                targets: ['h1 span.text-9xl'],
                translateY: [event.clientY / 100],
                translateX: [event.clientX / 50],
                direction: 'linear',
                easing: 'easeInOutCirc'
            })
            // console.log(event)

            
            /* anime({
                targets: ['.back svg', `.${this.$el.className} .char`],
                translateY: [0, -15, 0],
                direction: 'linear',
                loop: false,
                delay: anime.stagger(25),
                easing: 'easeInOutCirc'
            }); */
        }
    }
}