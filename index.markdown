---
layout: default
---
## Blog
<div>
    {% for post in site.posts %}
    <article>
        <a href="{{ post.url }}">
            {{ post.title }}
        </a>
    </article>
    {% endfor %}
</div>