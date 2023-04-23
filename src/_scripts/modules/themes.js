
export default function themes() {
    return {
        themeChoices: ['default', 'neon'],
        current: 'default',
        choose(choice) {
            this.current = choice;
        },
        baseThemeClass() {
            return {
                'Content--dark' : this.current == 'default',
                'Content--dark Content--neon': this.current == 'neon',
            };
        },

        choicePreview(choice) {
            return {
                'bg-yellow-500' : choice == 'default',
                'bg-red-500' : choice == 'neon'
            }
        }
    }
}