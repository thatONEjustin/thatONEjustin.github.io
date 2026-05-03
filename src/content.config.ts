import { marked } from 'marked';
import { truncateWords } from '@shahid19/stringjs'

import { getData } from "@js/helpers";
import { defineCollection } from "astro:content";

function preview(text: string, truncate: number = 0) {
    if (truncate >= 1 && truncate != null) {
        text = truncateWords(text, truncate)
    }

    const marked_down_text = marked.parse(text)
    const cleaned_text = marked_down_text?.replace(/<\/?[^>]+(>|$)/g, "")

    return cleaned_text
}

const blog_posts = defineCollection({
    loader: async () => {
        const data = await getData('blog-posts').then(r => r.json())
        const posts = data.data

        return posts.map(({ ...post }: any) => {
            const { documentId, slug, Content, Title } = post
            return {
                id: documentId,
                slug: slug,
                content: Content,
                preview: preview(Content, 15),
                title: Title
            }
        })
    },
});

export const collections = { "blog": blog_posts };
