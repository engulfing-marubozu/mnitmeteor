import React, { useEffect } from "react";
import { Box, Avatar } from "@mui/material";
import BookIcon1 from "./SliderIcons/books-2.svg";
import ElectronicsIcon from "./SliderIcons/computer_icon.svg";
import BicycleIcon from "./SliderIcons/cycle-2.svg";
import ClothIcon from "./SliderIcons/clothes.svg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useParams, useNavigate } from "react-router-dom";
import { StyledTab, StyledTabs, HomePageStyle } from "./homePageStyling";
export default function CategorySlider() {
  // =========================================================CLICKHANDLERS============================================================================================================
  const params = useParams();
  const paramstoIndex = {
    books: 0,
    clothes: 1,
    electronics: 2,
    cycle: 3,
    others: 4,
  };
  const [value, setValue] = React.useState(false);

  // ================================TAB CLICK HANDLERS
  const Navigate = useNavigate();
  const TabClickHandler = (flag) => {
    Navigate(`/product/${flag}`);
  };
  useEffect(() => {
    const tabValue =
      typeof paramstoIndex[params.category] === "undefined"
        ? false
        : paramstoIndex[params.category];
    setValue(tabValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.category]);
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
              alt="ClothIcon"
              src={ClothIcon}
              className={classes.avatar}
              variant="rounded"
            />
          }
          label="Clothes"
          onClick={() => {
            TabClickHandler("clothes");
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
              alt="BicycleIcon"
              src={BicycleIcon}
              className={classes.avatar}
              variant="rounded"
            />
          }
          label="Bicycles"
          onClick={() => {
            TabClickHandler("cycle");
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
