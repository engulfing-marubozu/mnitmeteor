import * as React from "react";
import { styled } from "@mui/material/styles";
import { Tabs, Tab, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import poster from "../Images/poster1.jpg";
import EditIcon from "@mui/icons-material/Edit";
export const ProfileBoxStyle = makeStyles({
  parentBox: {
    width: "100%",
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
  detailFixerBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    "@media (max-width:600px)": {
      alignItems: "flex-start",
    },
  },
  detailBox: {
    width: "30%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width:900px)": {
      width: "35%",
    },
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
  profileImage: {
    width: "138px",
    height: "138px",
    position: "absolute",
    top: "-4.2rem",
    "@media (max-width:900px)": {
      width: "110px",
      height: "110px",
      top: "-3rem",
    },
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
  profileImg: {
    objectFit: "contain",
    width: "100%",
    height: "138px",
    "@media (max-width:900px)": {
      height: "110px",
    },
    "@media (max-width:600px)": {
      height: "100px",
    },
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
    "@media (max-width:900px)": {
      margin: "68px 0px 10px 0px",
    },
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
    "@media(max-width:900px)": {
      fontSize: "14px",
      paddingLeft: "0.5rem",
    },
    "@media(max-width:600px)": {
      fontSize: "12px",
      paddingLeft: "0.5rem",
    },
  },
  nameTypo: {
    fontSize: "24px",
    color: "#5e35b1",
    fontWeight: "bold",
    textTransform: "uppercase",
    "@media(max-width:900px)": {
      fontSize: "20px",
    },
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
    height: "100%",
    margin: "30px 0px 0px",

    "@media(max-width:900px)": {
      width: "65%",
    },
    "@media(max-width:600px)": {
      width: "100%",
    },
  },
  cardContainer: {
    backgroundColor: "#b39ddb",
    minHeight: "360px",
  },
});
//   =================================================
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
      color: "#5e35b1",
      opacity: 1,
    },
  })
);

export const ExpandMore = styled(({ expand, ...other }) => {
  return (
    <IconButton sx={{ color: "#5e35b1", py: 0.2 }} {...other} size="small">
      <EditIcon sx={{ fontSize: { xs: "14px", sm: "20px" } }} />
    </IconButton>
  );
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
