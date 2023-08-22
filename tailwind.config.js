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
			}
		}
	},
	plugins: []
};
