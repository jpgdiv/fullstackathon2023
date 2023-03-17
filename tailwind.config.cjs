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
				'bts-dark-brown': '#552413',
				'bts-black': '#0D0D0D'
			},
			backgroundImage: {
				'hero-light': "url('/hero-light.jpg')",
				'hero-dark': "url('/hero-dark.jpg')",
				'hero-contrast': "url('/hero-contrast.jpg')"
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
