import themesData from '../../../assets/themes.json';

export default function themes() {
    return {
        get palettes() {
            return themesData;
        },

        current: this.$persist('default'),
        
        choose(choice) {
            if(this.current != choice) {
                this.current = choice;
            }
        },

        baseThemeClass() {
            return this.palettes.find(container => container.name == this.current).container;
        },

        choicePreview(choice) {
            if(!choice) {
                return;
            }
            
            return `${this.palettes.find(bg => bg.name == choice).preview} ${choice == this.current ? 'active' : ''}`;
        }
    }
}