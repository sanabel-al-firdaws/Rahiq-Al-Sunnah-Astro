import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'رحيق السنن',
			tableOfContents: { minHeadingLevel: 1, maxHeadingLevel: 6 },
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'العربية',
					lang: 'ar',
					dir: 'rtl'
				},
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'كتب الحديث',

					// Each item here is one entry in the navigation menu.
					autogenerate: { directory: 'كتب الحديث' },

				},

				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
