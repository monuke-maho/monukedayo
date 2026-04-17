import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    emoji: z.emoji().default("🍜").optional(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().default(false),
  }),
});

export const collections = { blog };
