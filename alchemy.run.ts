import alchemy from "alchemy";
import { Astro } from "alchemy/cloudflare";

const app = await alchemy("astro-spring-cleaning");

export const website = await Astro("website", {
	name: `${app.name}`,
});

console.log({
	url: website.url,
});

await app.finalize();
