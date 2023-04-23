// import splt from 'spltjs';
// import anime from 'animejs';
import Alpine from 'alpinejs';

import themes from './modules/themes';
import introText from './modules/introText';
import backButton from './modules/backButton';

window.Alpine = Alpine


document.addEventListener('alpine:init', () => {
    
    Alpine.data('Themes', themes);
    Alpine.data('introText', introText)
    Alpine.data('backButton', backButton)


})

Alpine.start()
