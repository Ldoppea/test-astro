
import { z, defineCollection } from 'astro:content';
const sponsorsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    name: z.string(),
  }),
});

export const collections = {
  'sponsors': sponsorsCollection,
};