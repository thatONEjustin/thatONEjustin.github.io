---
layout: post
author: justin
title:  "Simple Alpine Theme Selector"
date:   2023-04-22 23:04:05 -0500
tags: obsidian
summary: Okay so I've learned some things about Jekyll front matter, and properlly formatted posts. But this is about a theme selector.
---
## Okay so instead of 1 color scheme, I built a theme selector

The code will be below. For now this is just a really really really basic example of swapping classes in and out. I think with how I wrote the components, I'll assign elements to the schema in a more efficient way. I just wanted progress for now.

here's some HTML:
```html
<body x-data="Themes">
	<main>
		{% raw %}
		{% include header.html %} <!-- this is jekyll/liquid -->
		{% endraw %}
		<section
			class="Content Content--bubbles p-5"
			:class="baseThemeClass">
			{% raw %}
			{{ content }} <!-- this is jekyll/liquid -->
			{% endraw %}
		</section>
	</main>
	{% raw %}
	{% include footer.html %} <!-- this is jekyll/liquid -->

	<script defer src="{{ "/assets/js/app.js" | relative_url }}"></script>
	{% endraw %}
</body>
```

inside footer.html: 
```html
{% raw %}
<ul class="ThemeSelector">
	<li class="ThemeSelector-label">theme: </li>

	<template x-for="choice in themeChoices">
	<li>
		<a
			class="ThemeSelector-choice"
			@click.prevent="choose(choice)"
			:data-theme="`${choice}`"
			:class="choicePreview(choice)"></a>
	</li>
	</template>
</ul>
{% endraw %}
```

Here's some alpine:
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

CSS (using tailwind/@latest):
```css
{% raw %}
.ThemeSelector {
    @apply
        flex
        flex-row
        items-center
        mr-8;
  
    li {
        @apply
            mr-1
            cursor-pointer;
    }
  
    &-choice {
        @apply
            w-[16px]
            h-[16px]
            block
            border-2
            border-black
            transition-all
            ease-linear;

        &:hover {
            @apply
                border-0;
        }
    }
    
    &-label {
        @apply
            text-yellow-500
            font-bold
            text-sm;
    }
}
{% endraw %}
```