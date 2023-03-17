/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'bts-gray': '#565659',
				'bts-light-gray': '#8F92A6',
				'bts-brown': '#8C613B',
				'bts-light-brown': '#BF9B8E',
				'bts-black': '#0D0D0D'
			}
		}
	},
	plugins: []
};
