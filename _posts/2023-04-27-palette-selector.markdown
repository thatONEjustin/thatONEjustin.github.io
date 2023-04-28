---
layout: post
author: justin
title:  "Upgrading from themes to a Palette Selector"
date:   2023-04-22 15:50:00 -0500
tags: obsidian
summary: So I moved to a more programmatic solution to my 'theme' selector.
---
## So the theme selector was a little hard coded. 
So I was using this alpine for a day or two for my site color selector: 
```js
{% raw %}
export default function Themes() {
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
{% endraw %}
```

But this was mostly just a hastily put together solution as a proof of concept for adjusting a website's classes based on user input. 

Since I wanted to make this more extensible, it's pretty obvious to move the `choicePreview(choice)` and `baseThemeClass` returns out of those functions.

Moving the container and preview classes to a new `palettes` collection also simplifies setting the classes easy. Just grab whatever theme/palette matches the current choice:
```js
{% raw %}
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
{% endraw %}
```