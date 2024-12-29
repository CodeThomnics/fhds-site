// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-node';
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
	},
	preprocess: [mdsvex({
		extensions: ['.svx', '.md'],
		layout: {
			markdown: './src/lib/layouts/MarkdownLayout.svelte',
		}
	})],
    extensions: [".svelte",".md", ".svx"],
	build: {
		compress: {
		  algorithms: ['gzip', 'brotli'],
		  level: 9, // higher level for better compression
		},
	  },
};

export default config;
