import React, { useEffect } from "react";
import { Box, Avatar } from "@mui/material";
import BookIcon1 from "./SliderIcons/books-2.svg";
import ElectronicsIcon from "./SliderIcons/computer_icon.svg";
import BicycleIcon from "./SliderIcons/cycle-2.svg";
import ClothIcon from "./SliderIcons/clothes.svg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledTab, StyledTabs, HomePageStyle } from "./homePageStyling";
export default function CategorySlider() {
  // =========================================================CLICKHANDLERS============================================================================================================
  const location = useLocation();
  const [value, setValue] = React.useState(false);

  // ================================TAB CLICK HANDLERS
  const Navigate = useNavigate();
  const TabClickHandler = (flag) => {
    Navigate(`/product/${flag}`);
  };
  useEffect(() => {
    if (location.pathname === "/product/books") {
      setValue(0);
    } else if (location.pathname === "/product/cycle") {
      setValue(1);
    } else if (location.pathname === "/product/electronics") {
      setValue(2);
    } else if (location.pathname === "/product/uniform") {
      setValue(3);
    } else if (location.pathname === "/product/others") {
      setValue(4);
    } else {
      setValue(false);
    }
  }, [location.pathname, setValue]);
  // =======================================================================================================================================================================
  const classes = HomePageStyle();

  return (
    <Box className={classes.mainBox}>
      <StyledTabs value={value} variant="scrollable" scrollButtons={false}>
        <StyledTab
          icon={
            <Avatar
              alt="BookIcon"
              src={BookIcon1}
              className={classes.avatar}
              variant="rounded"
            />
          }
          label="Books"
          onClick={() => {
            TabClickHandler("books");
          }}
        />
        <StyledTab
          icon={
            <Avatar
              alt="BicycleIcon"
              src={BicycleIcon}
              className={classes.avatar}
              variant="rounded"
            />
          }
          label="Cycle"
          onClick={() => {
            TabClickHandler("cycle");
          }}
        />
        <StyledTab
          icon={
            <Avatar
              alt="ElectronicsIcon"
              src={ElectronicsIcon}
              className={classes.avatar}
              variant="rounded"
            />
          }
          label="Electronics"
          onClick={() => {
            TabClickHandler("electronics");
          }}
        />

        <StyledTab
          icon={
            <Avatar
              alt="ClothIcon"
              src={ClothIcon}
              className={classes.avatar}
              variant="rounded"
            />
          }
          label="Uniform"
          onClick={() => {
            TabClickHandler("uniform");
          }}
        />
        <StyledTab
          icon={
            <Avatar className={classes.otheravta} variant="rounded">
              <MoreHorizIcon sx={{ color: "black" }} />
            </Avatar>
          }
          label="Others"
          onClick={() => {
            TabClickHandler("others");
          }}
        ></StyledTab>
      </StyledTabs>
    </Box>
  );
}
