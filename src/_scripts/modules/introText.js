import anime from 'animejs';
import splt from 'spltjs';

export default function introText() {
    return {
        get length() {
            
        },
        async init() {
            await this.$nextTick();
            splt({
                // reveal: true
            })

            anime({
                targets:  `.tagline .char`,
                scale: [1, 1.3, 1],
                opacity: [0,1],
                direction: 'alternate',
                loop: false,
                steps: 72,
                delay: anime.stagger(15),
            })
        }
    }
}