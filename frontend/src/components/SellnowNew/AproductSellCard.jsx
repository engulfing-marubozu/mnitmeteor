import React, { useEffect } from "react";
import SellFormNew from "./sellnowform";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#512da8",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
  typography: {
    fontFamily: ["Cabin", "sans-serif"].join(","),
  },
});

function AproductSellCard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <ThemeProvider theme={theme}>
      <SellFormNew />
    </ThemeProvider>
  );
}
export default AproductSellCard;
