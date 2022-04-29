import { Tabs, Tab,Button } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
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
  fontSize: "0.8rem",
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
