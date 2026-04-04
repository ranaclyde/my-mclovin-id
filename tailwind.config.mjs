/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				hawaii: {
					navy:       '#0a0f1e',
					dark:       '#060b16',
					card:       '#0d1528',
					input:      '#111827',
					steel:      '#1e3a5f',
					gold:       '#f59e0b',
					'gold-light': '#fbbf24',
					'blue-light': '#38bdf8',
				},
			},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
