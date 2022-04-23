
import React from "react";
import ProfileContentBox from "./newProfilePage/profileContentBox";
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

function Profile() {
  return (
    <ThemeProvider theme={theme}>
      {/* <ProfilePage /> */}
      <ProfileContentBox />
    </ThemeProvider>
  );
}

export default Profile;
