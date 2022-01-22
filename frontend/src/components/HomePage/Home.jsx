import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { Outlet, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Home() {
  const Navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* +======================================================================= */}
      <Paper
        display="flex"
        sx={{ bgcolor: "#212121", height: 150, borderRadius: 0 }}
      >
        {" "}
      </Paper>

      {/*  Bannner============================================================================== */}

      {/*  CATEGORY BAR++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <button
        onClick={() => {
          Navigate("/Product/Cycle");
        }}
      >
        {" "}
        cycles
      </button>
      <button
        onClick={() => {
          Navigate("/Product/Electronics");
        }}
      >
        {" "}
        Electronics
      </button>
      <button
        onClick={() => {
          Navigate("/Product/Cloth");
        }}
      >
        {" "}
        Clothes
      </button>
      <button
        onClick={() => {
          Navigate("/Product/Others");
        }}
      >
        {" "}
        Others
      </button>
      <Outlet />
    </ThemeProvider>
  );
}
