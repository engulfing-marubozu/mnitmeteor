import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import deepPurple from "@mui/material/colors/deepPurple";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
export const StyledTabs = styled((props) => (
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
export const StyledTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
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

export const ModelOutlinedButton = styled(Button)(({ theme }) => ({
  lineHeight: 1.5,
  borderColor: deepPurple[700],
  color: "#512da8",
  fontSize: "0.6rem",
  backgroundColor: "transparent",
  "&:hover": {
    borderColor: deepPurple[700],
  },
}));
export const HomePageStyle = makeStyles({
  mainBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  avatar: {
    width: "3rem",
    height: "3rem",
    "media(max-width:600px)": {
      width: "3rem",
      height: "3rem",
    },
  },
  otheravta: {
    width: "3rem",
    height: "3rem",
    backgroundColor: "transparent",
    "media(max-width:600px)": {
      width: "3rem",
      height: "3rem",
    },
  },
});


export const BackgoundBox = styled("span")(({ image }) => ({
  position: "relative",
  width: "100%",
  display: "flex",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  opacity: "0.9",
  height: "280px",
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)),url(${image})`,
}));

export const TextContainer = styled("div")({
  position: "absolute",
  top: "8rem",
  left: "4.5rem",
  paddingRight: "4.5rem",
  "@media(max-width:1200px)": {
    left: "2.375rem",
    paddingRight: "2.375rem",
  },
  "@media(max-width:900px)": {
    left: "1.5rem",
    paddingRight: "1.5rem",
  },
  "@media(max-width:600px)": {
    left: "1.125rem",
    paddingRight: "1.125rem",
  },
});
export const MainTextBox = styled("h1")({
  margin: "0px",
  color: "white",
  "@media(max-width:600px)": {
    fontSize: "24px",
  },
});
export const SmallTextBox = styled("h3")({
  margin: "0px",
  color: "white",
  "@media(max-width:600px)": {
    fontSize: "16px", 
  },
});
