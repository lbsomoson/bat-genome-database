// This is the theme for the entire app.

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#3e99c0",
			dark: "#0185ad",
			black: "#000000",
			gray: "#a8a8a8",
			white: "#f8f8f8",
		},
		white: {
			main: "#f8f8f8",
		},
		gray: {
			main: "#a8a8a8",
		},
	},

	typography: {
		fontFamily: [
			"Inter",
			"Roboto",
			'"Helvetica Neue"',
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
});
