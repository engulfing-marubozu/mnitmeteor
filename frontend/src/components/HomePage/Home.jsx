import  React , { useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CategorySlider from "./Slider";
import { AccountContext } from "../_ContextFolder/accountContext";
const theme = createTheme();

export default function Home() {
  const userData = useContext(AccountContext)
  console.log(userData);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* +======================================================================= */}
      <Paper
        display="flex"
        sx={{ bgcolor: "#212121", height: 280, borderRadius: 0 }}
      ></Paper>

      {/*  Bannner============================================================================== */}

      {/*  CATEGORY BAR++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <CategorySlider></CategorySlider>

      <Outlet />
    </ThemeProvider>
  );
}
