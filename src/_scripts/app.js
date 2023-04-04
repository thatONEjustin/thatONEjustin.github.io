import splt from 'spltjs';
import Alpine from 'alpinejs';

import backButton from './modules/backButton';

window.Alpine = Alpine

document.addEventListener('alpine:init', () => {
    
    splt({})

    Alpine.data('backButton', backButton)

})

Alpine.start()
