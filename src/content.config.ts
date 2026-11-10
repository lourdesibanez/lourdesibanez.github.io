import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const image = z.object({ src: z.string(), alt: z.string() });
const fit = z.enum(['logo', 'phone', 'cover']);

const projects = defineCollection({
  // ids look like "es/assist" / "en/assist"
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    kicker: z.string(),
    summary: z.string(),
    cardSummary: z.string(),
    order: z.number(),
    categories: z.array(z.enum(['diseno', 'backend', 'analisis', 'ia'])).default([]),
    tags: z.array(z.string()).default([]),
    cover: image.extend({ fit }),
    hero: z.object({ fit, images: z.array(image) }),
    /** Headline numbers shown on the project page, e.g. { value: '84.82%', label: 'Precision' } */
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    facts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    links: z
      .array(z.object({ label: z.string(), href: z.string(), kind: z.enum(['figma', 'github', 'play', 'demo', 'external']) }))
      .default([]),
    gallery: z
      .object({
        variant: z.enum(['default', 'phone']).default('default'),
        items: z.array(image.extend({ caption: z.string().optional() })),
      })
      .optional(),
  }),
});

export const collections = { projects };
