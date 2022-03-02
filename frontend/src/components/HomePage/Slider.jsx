import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Avatar } from "@mui/material";
import BookIcon1 from "./SliderIcons/BookIcon1.svg";
import ElectronicsIcon from "./SliderIcons/ElectronicsIcon.svg";
import BicycleIcon from "./SliderIcons/BicycleIcon.svg";
import ClothIcon from "./SliderIcons/ClothIcon.svg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styled } from "@mui/material/styles";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// ================================================  STYLING TABS ======================================================================================================
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    width: "100%",
    backgroundColor: "#635ee7",
  },
});
const StyledTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: "Black",
  "&.Mui-selected": {
    color: "Black",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));
// ====================================================================MAIN FUNCTION ======================================================================================
export default function CategorySlider() {
  // =========================================================CLICKHANDLERS============================================================================================================
  const params = useParams();
  const paramstoIndex = {
    Book: 0,
    Cloth: 1,
    Electronics: 2,
    Cycle: 3,
    Others: 4,
  };
  const [value, setValue] = React.useState(false);
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  // ================================TAB CLICK HANDLERS
  const Navigate = useNavigate();
  const TabClickHandler = (flag) => {
    Navigate(`/Product/${flag}`);
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

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#C8C6C6",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <StyledTabs
        value={value}
        // onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
      >
        <StyledTab
          icon={
            <Avatar
              alt="BookIcon"
              src={BookIcon1}
              sx={{ width: { sm: 60, xs: 40 }, height: { sm: 60, xs: 40 } }}
              variant="rounded"
            />
          }
          label="Books"
          onClick={() => {
            TabClickHandler("Book");
          }}
        />
        <StyledTab
          icon={
            <Avatar
              alt="ClothIcon"
              src={ClothIcon}
              sx={{ width: { sm: 60, xs: 40 }, height: { sm: 60, xs: 40 } }}
              variant="rounded"
            />
          }
          label="Cloths"
          onClick={() => {
            TabClickHandler("Cloth");
          }}
        />
        <StyledTab
          icon={
            <Avatar
              alt="ElectronicsIcon"
              src={ElectronicsIcon}
              sx={{ width: { sm: 60, xs: 40 }, height: { sm: 60, xs: 40 } }}
              variant="rounded"
            />
          }
          label="Electronics"
          onClick={() => {
            TabClickHandler("Electronics");
          }}
        />
        <StyledTab
          icon={
            <Avatar
              alt="BicycleIcon"
              src={BicycleIcon}
              sx={{ width: { sm: 60, xs: 40 }, height: { sm: 60, xs: 40 } }}
              variant="rounded"
            />
          }
          label="Bicycles"
          onClick={() => {
            TabClickHandler("Cycle");
          }}
        />
        <StyledTab
          icon={
            <Avatar
              sx={{
                width: { sm: 60, xs: 40 },
                height: { sm: 60, xs: 40 },
                bgcolor: "transparent",
              }}
              variant="rounded"
            >
              <MoreHorizIcon sx={{ color: "black" }} />
            </Avatar>
          }
          label="Others"
          onClick={() => {
            TabClickHandler("Others");
          }}
        ></StyledTab>
      </StyledTabs>
    </Box>
  );
}
