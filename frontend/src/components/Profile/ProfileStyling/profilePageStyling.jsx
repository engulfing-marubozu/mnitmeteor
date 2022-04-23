import * as React from "react";
import { styled } from "@mui/material/styles";
import { Tabs, Tab, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import poster from "../Images/poster1.jpg";
export const ProfileBoxStyle = makeStyles({
  parentBox: {
    width: "100%",
    height:"100%",
    display: "flex",
    flexDirection: "row",
    "@media (max-width:600px)": {
      flexDirection: "column",
    },
  },
  bannerBack: {
    backgroundImage: `url(${poster})`,
    width: "100%",
    height: "280px",
    borderRadius: 0,
    display: "flex",
    alignItems: "flex-end",
  },
  detailBox: {
    width: "30%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width:600px)": {
      width: "100%",
      alignItems: "flex-start",
    },
  },
  profileImage: {
    width: "138px",
    height: "138px",
    position: "absolute",
    top: "-4.2rem",
    "@media (max-width:600px)": {
      width: "100px",
      height: "100px",
      top: "-3rem",
      left: "24px",
    },
  },
  imgBox: {
    width: "100%",
    height: "280px",
    objectFit: "cover",
  },
  //   ==================================================
  smlUserBox: {
    display: "none",
    "@media(max-width:600px)": {
      display: "flex",
    },
  },
  //   ==================================================
  useName: {
    margin: "74px 0px 10px 0px",
    "@media (max-width:600px)": {
      margin: "0 0  0 8rem ",
      display: "none",
    },
  },
  detailContainer: {
    "@media (max-width:600px)": {
      margin: "0.5rem 0  0 8rem ",
    },
  },
  detailTypo: {
    paddingLeft: "1rem",
    fontSize: "1rem",
    "@media(max-width:600px)": {
      fontSize: "12px",
      paddingLeft: "0.5rem",
    },
  },
  nameTypo: {
    fontSize: "24px",
    color: "#5e35b1",
    fontWeight: "bold",
    "@media(max-width:600px)": {
      color: "white",
      fontSize: "16px",
      margin: "0 0  0 8rem ",
    },
  },
  flexBox: {
    display: "flex",
    flexDirection: "row",
  },
  iconStyle: {
    fontSize: "24px",
    "@media(max-width:600px)": {
      fontSize: "16px",
    },
  },
  tabBox: {
    width: "70%",
    height:"100%",
    margin: "30px 0px 0px",
    "@media(max-width:600px)": {
      width: "100%",
    },
  },
  //   =================================================
});

export const ProfileTabs = styled(Tabs)({
  width: "100%",
  //   "@media(max-width:600px)":{
  //       marginLeft:"24px",
  //   }
});

export const ProfileTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    color: "rgba(0, 0, 0, 0.85)",
    "&:hover": {
      //   color: ,
      opacity: 1,
    },
  })
);

export const ExpandMore = styled(({ expand, ...other }) => {
  return (
    <Button sx={{ color: "#5e35b1", py: 0.2 }} {...other} size="small">
      {!expand && "update"}
      {expand && "cancel"}
    </Button>
  );
})(({ theme, expand }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
