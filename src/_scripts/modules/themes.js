export default function themes() {
    return {
        paletteData: [],

        get palettes() {
            return this.paletteData;
        },

        async getThemes() {
            const response = await fetch('/assets/themes.json')
            await response.json()
                .then(data => { 
                    this.paletteData = data; 
                })
                .catch(error => console.error(error));
        },

        /* old: [
            {
                name: "default",
                container: "Content--dark",
                preview: "bg-yellow-500"
            },
            {
                name: "neon",
                container: "Content--dark Content--neon",
                preview: "bg-red-500"
            },
            {
                name: "light",
                container: "Content--light",
                preview: "bg-white"
            }
        ], */

        current: this.$persist('default'),
        
        choose(choice) {
            if(this.current != choice) 
            {
                this.current = choice;
            }
        },

        baseThemeClass() {
            if(!this.palettes.length) return '';
            return this.palettes.find(container => container.name == this.current).container;
        },

        choicePreview(choice) {
            if(!choice && !this.palettes) return '';

            if(!choice && this.palettes) 
            {
                return `${this.palettes.find(bg => bg.name == choice).preview}`
            }
            
            return `${this.palettes.find(bg => bg.name == choice).preview} ${choice == this.current ? 'active' : ''}`;
        },

        async init() {
            await this.getThemes();
        }
    }
}