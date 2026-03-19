import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const bookmarks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    url: z.string().optional(),
    icon: z.string().optional(),
    date: z.string().optional(),
  }),
});

export const collections = { blog, bookmarks };
