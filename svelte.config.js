import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	plugins: [sveltekit()],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		files: {
			assets: 'static',
			routes: 'src/routes'
		},
		alias: {
			// this will match a file
			$lib: './src/lib',
			'$lib/*': './src/lib/*',
			$types: './src/types',
			'$types/*': './src/types/*',
			$stores: './src/stores',
			'$stores/*': './src/stores/*'
		}
	}
};

export default config;