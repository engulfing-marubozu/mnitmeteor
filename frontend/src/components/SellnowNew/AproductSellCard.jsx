import React, { useEffect } from 'react'
import SellFormNew from "./sellnowform";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
const theme = createTheme({
	palette: {
		primary: {
			main: '#512da8',
		},
		secondary: {
			main: '#edf2ff',
		},
	},
	typography: {
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
});

function AproductSellCard() {
	useEffect(() => {
		window.scrollTo(0, 0);
	})
	return (
		<ThemeProvider theme={theme}>
			<SellFormNew />
		</ThemeProvider >
	);
}
export default AproductSellCard;
