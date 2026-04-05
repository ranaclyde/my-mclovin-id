/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
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
			keyframes: {
				'fade-in': {
					'0%':   { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'slide-up': {
					'0%':   { opacity: '0', transform: 'translateY(24px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'scale-in': {
					'0%':   { opacity: '0', transform: 'scale(0.92)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
			},
			animation: {
				'fade-in':  'fade-in 500ms ease-out both',
				'slide-up': 'slide-up 500ms ease-out both',
				'scale-in': 'scale-in 500ms ease-out both',
			},
		},
	},
	plugins: [],
}
