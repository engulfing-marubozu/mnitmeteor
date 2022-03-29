import React from 'react'
import SellFormNew from "../SellnowNew/sellnowform";
// import SellForm from "./SellNow/SellForm"
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
});
function ProductSellCard() {
	return (
		<ThemeProvider theme={theme}>
			{/* <SellForm /> */}
			<SellFormNew />
		</ThemeProvider >
	);
}
export default ProductSellCard;
