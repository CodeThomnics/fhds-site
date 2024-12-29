// import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';
import intersect from 'tailwindcss-intersect';
import tailwindcssMotion from "tailwindcss-motion";

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: '#fce3cf',
					200: '#f8c79f',
					300: '#f5aa6e',
					400: '#f18e3e',
					500: '#ee720e',
					600: '#be5b0b',
					700: '#8f4408',
					800: '#5f2e06',
					900: '#301703'
				},
				secondary: {
					100: '#e6e6e6',
					200: '#cdcdcd',
					300: '#b3b5b5',
					400: '#9a9c9c',
					500: '#818383',
					600: '#676969',
					700: '#4d4f4f',
					800: '#343434',
					900: '#1a1a1a'
				},
				accent: {
					100: '#eae2d5',
					200: '#d5c6ab',
					300: '#bfa982',
					400: '#aa8d58',
					500: '#95702e',
					600: '#775a25',
					700: '#59431c',
					800: '#3c2d12',
					900: '#1e1609'
				},
				'schakel-black': '#1d1d1b'
			},
			keyframes: {
				'flip-in-x': {
					'from': {
						transform: 'perspective(400px) rotate3d(1, 0, 0, -90deg)',
						animationTimingFunction: 'ease-in'
					},
					'40%': {
						transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)'
					},
					'60%': {
						transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)'
					},
					'80%': {
						transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)'
					},
					'to': {
						transform: 'perspective(400px)'
					}
				}
			},
			animation: {
				'flip-in-x': 'flip-in-x 1s ease'
			}
		},
	},
	plugins: [
		tailwindcssMotion,
		typographyPlugin,
		intersect,
	  ],
};

export default config;
