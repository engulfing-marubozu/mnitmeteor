import React from "react";
import GlobalStyles from "@mui/material/GlobalStyles";
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
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { StyledMenu } from "./NavabarStyle";
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

export const theme = createTheme();

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar>
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MymenuBar menuClose={handleClose} />
            </StyledMenu>
          </Box>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{
              flexGrow: 1,
              justifyContent: "flex-left",
              ml: { xs: 1, md: 5 },
            }}
          >
            <AcUnitIcon
              sx={{ display: { xs: "flex" }, fontSize: { xs: 18, sm: 24 } }}
            />
            <Typography
              variant="h5"
              color="inherit"
              noWrap
              sx={{
                fontWeight: 700,
                fontSize: { xs: "15px", sm: "20px" },
                display: { xs: "flex" },
              }}
            >
              Mnit Market
            </Typography>
          </Stack>

          <Stack
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{ mr: { xs: 1, md: 5 } }}
            direction="row"
          >
            <Stack
              spacing={{ xs: 1, sm: 2, md: 3 }}
              direction="row"
              display={{ sm: "flex", xs: "none" }}
            >
              <Button
                variant="text"
                color="inherit"
                sx={{ fontSize: { sm: "12px", md: "15px" } }}
              >
                Home
              </Button>
              <Button
                variant="text"
                color="inherit"
                sx={{ fontSize: { sm: "12px", md: "15px" } }}
              >
                About
              </Button>
              <OutlinedButton
                variant="outlined"
                sx={{ fontSize: { sm: "12px", md: "15px" } }}
              >
                Login
              </OutlinedButton>
            </Stack>
            <ColorButton
              sx={{ fontSize: { xs: "9px", sm: "12px", md: "15px" } }}
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
