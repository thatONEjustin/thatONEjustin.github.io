---
layout: default
---
## Blog
<div class="HomeBlog">
    {% for post in site.posts %}
    <article>
        <a href="{{ post.url }}">
            {{ post.title }}
        </a>
    </article>
    {% endfor %}
</div>