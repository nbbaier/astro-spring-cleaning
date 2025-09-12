import alchemy from "alchemy";
import { Astro, WranglerJson } from "alchemy/cloudflare";

const app = await alchemy("astro-spring-cleaning");

export const website = await Astro("website", { name: `${app.name}` });

await WranglerJson({ worker: website });

console.log({
	url: website.url,
});

await app.finalize();
