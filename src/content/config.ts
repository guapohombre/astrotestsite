import { defineCollection, z } from "astro:content";

const peopleCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    company: z.string(),
    role: z.string(),
    year: z.number(),
  }),
});

export const collections = {
  people: peopleCollection,
};
