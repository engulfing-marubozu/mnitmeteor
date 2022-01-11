import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import HomeCard from "../Cards/HomeCard";
import Paper from "@mui/material/Paper";
import ScrollBar from "./Slider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Home() {
  const Image = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* +======================================================================= */}
      <Paper display="flex" sx={{ bgcolor: "#212121", height: 150 }}>
        {" "}
      </Paper>

      {/*  Bannner============================================================================== */}

      {/*  CATEGORY BAR++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      <ScrollBar />

      {/* ======================================================================================== */}
      <main>
        <Container sx={{ py: 2 }} maxWidth={"lg"}>
          {/* End hero unit */}
          <Grid container spacing={{ xs: 2, sm: 4 }}>
            {Image.map((img, index) => {
              return (
                <Grid item xs={6} sm={4} lg={3} key={index}>
                  <HomeCard />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "#5e35b1", p: 2 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
