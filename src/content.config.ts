import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const days = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/days" }),
	schema: z.object({
		title: z.string(),
	}),
});

export const collections = {
	days,
};
