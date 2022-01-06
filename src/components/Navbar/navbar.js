import React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import MymenuBar from "./Categories/MenuBar";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[500],
  "&:hover": {
    backgroundColor: deepPurple[700],
    borderColor: deepPurple[700],
  },
}));
const OutlinedButton = styled(Button)(({ theme }) => ({
  borderColor: deepPurple[500],
  color: "inherit",
  "&:hover": {
    backgroundColor: deepPurple[700],
    borderColor: deepPurple[700],
    boxShadow: "none",
    color: "#ffffff",
  },
}));

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
});

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="relative"
        p
        color="transparent"
        sx={{ flexDirection: "row", justifyContent: "center" }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* Menu Bar function ++++++++=++++++++++++++++++++++ */}
              <MymenuBar menuClose={handleCloseNavMenu} />
              
            </Menu>
          </Box>
          <Stack direction="row" justifyContent="center" >
            <AcUnitIcon
              sx={{ display: { xs: "flex" }, fontSize: { xs: 18, sm: 24 } }}
            />
            <Typography
              variant="h5"
              color="inherit"
              noWrap
              sx={{
                mr: { xs: 11, sm: 20, md: 50, lg: 75 },
                fontWeight: 700,
                fontSize: { xs: "15px", sm: "20px" },
                display: { xs: "flex" },
              }}
            >
              Mnit Market
            </Typography> 
          </Stack>

          <Stack spacing={{ xs: 1, sm: 2, md: 4 }} direction="row">
            <Stack  spacing={{ xs: 1, sm: 2, md: 3 }} direction="row" display={{ sm: "flex", xs: "none" } }>
              <Button variant="text" color="inherit">
                Home
              </Button>
              <Button variant="text" color="inherit">
                About
              </Button>
              <OutlinedButton variant="outlined">Login</OutlinedButton>
            </Stack>
            <ColorButton
              sx={{ fontSize: { xs: "9px", sm: "16px" } }}
              variant="contained"
            >
              Sell Now
            </ColorButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;
