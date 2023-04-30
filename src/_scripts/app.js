import Alpine from 'alpinejs';
import persist from '@alpinejs/persist';
 
import themes from './modules/themes';
import introText from './modules/introText';
import backButton from './modules/backButton';
import Header from './modules/header';

window.Alpine = Alpine

Alpine.plugin(persist)

document.addEventListener('alpine:init', () => {
    
    Alpine.data('Header', Header);
    Alpine.data('Themes', themes);
    Alpine.data('introText', introText)
    Alpine.data('backButton', backButton)


})

Alpine.start()
