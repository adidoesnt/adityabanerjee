/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				xs: '300px',
				sm: '480px',
				md: '768px',
				lg: '1240px',
				widescreen: { raw: '(min-aspect-ratio: 10/8)' },
				tallscreen: { raw: '(max-aspect-ratio: 3/4)' }
			}
		}
	},
	plugins: []
};
