export default function themes() {
    return {
        palettes: [
            {
                name: 'default',
                container: 'Content--dark',
                preview: 'bg-yellow-500'
            },
            {
                name: 'neon',
                container: 'Content--dark Content--neon',
                preview: 'bg-red-500'
            },
            {
                name: 'light',
                container: 'Content--light',
                preview: 'bg-white'
            },

        ],

        current: 'default',
        
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

            return this.palettes.find(bg => bg.name == choice).preview;
        }
    }
}