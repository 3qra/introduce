import { defineCollection, z } from "astro:content";

const workLinkSchema = z.object({
  github: z.string().url().or(z.literal("")).optional(),
  demo: z.string().url().or(z.literal("")).optional(),
  article: z.string().url().or(z.literal("")).optional(),
});

const works = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.date(),
    status: z.enum(["idea", "in-progress", "released", "archived"]).default("in-progress"),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    thumbnail: z.string().optional(),
    links: workLinkSchema.default({}),
    visibility: z.enum(["public", "career", "private"]).default("public"),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
  }),
});

const learning = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.date(),
    category: z.string(),
    status: z.enum(["planned", "learning", "passed", "paused"]).default("learning"),
    tags: z.array(z.string()).default([]),
    visibility: z.enum(["public", "career", "private"]).default("public"),
  }),
});

const links = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      name: z.string(),
      url: z.string().url(),
      type: z.string(),
      identity: z.enum(["handle", "real_name", "anonymous"]),
      visibility: z.enum(["public", "career", "private"]),
      description: z.string().optional(),
    }),
  ),
});

export const collections = { works, blog, learning, links };
