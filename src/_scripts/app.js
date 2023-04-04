// import splt from 'spltjs';
// import anime from 'animejs';
import Alpine from 'alpinejs';

import introText from './modules/introText';
import backButton from './modules/backButton';

window.Alpine = Alpine

document.addEventListener('alpine:init', () => {
    

    Alpine.data('introText', introText)
    Alpine.data('backButton', backButton)

})

Alpine.start()
