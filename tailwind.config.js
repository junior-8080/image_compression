/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Urbanist", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				light: {
					DEFAULT: "#f2f2f2",
				},
				indigo: {
					DEFAULT: "#3D2D87",
					50: "#EAE6F2",
					100: "#CBC5E0",
					200: "#AB9CCE",
					300: "#8A76BA",
					400: "#735AAC",
					500: "#5A3F9F",
					600: "#543A9A",
					700: "#473290",
					800: "#3D2D87",
					900: "#2C2175",
				},
				orange: {
					DEFAULT: "#FF9909",
				},
				blue: {
					DEFAULT: "#5659E8",
					light: "#0072FF",
				},
				green: {
					DEFAULT: "#01C552",
					50: "#E6F7F0",
				},
				red: {
					DEFAULT: "#AD0105",
					50: "#FFCCCF",
					100: "#D51119",
					200: "#C60008",
					300: "#AD0105",
				},
				maroon: {
					DEFAULT: "#781872",
					50: "#F3E4F0",
					100: "#E6BBDB",
					200: "#D592C0",
					300: "#C266AC",
					400: "#B44796",
					500: "#A42886",
					600: "#972383",
					700: "#861F7B",
					800: "#781872",
					900: "#5D1164",
				},
				gray: {
					DEFAULT: "#A0A0A0",
					50: "#F7F6F2",
					100: "#F1F0EC",
					200: "#E3E2DE",
					300: "#C0BFBB",
					400: "#A2A19D",
					500: "#787974",
					600: "#64635F",
					700: "#454440",
					800: "#000000",
				},
				gradient: {
					// gradient with 3 colors
					DEFAULT: "linear-gradient(180deg, #3E2C87 0%, #9D2C81 100%)",
				},
			},
		},
	},
	plugins: [],
};
