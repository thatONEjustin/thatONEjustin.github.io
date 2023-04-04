import splt from 'spltjs';
import Alpine from 'alpinejs';

import backButton from './modules/backButton';

splt({})

window.Alpine = Alpine

document.addEventListener('alpine:init', () => {
    Alpine.data('backButton', backButton)
    Alpine.start()
})
