import { makeStyles } from "@mui/styles";
export const FooterStyle = makeStyles({
  mainBox: {
    position:"absolute",
    bottom:0,
    width:"100%",
    backgroundColor: "#f5f5f5",
    padding: "12px 72px",
    "@media(max-width:1200px)": {
      padding: "12px 38px",
    },
    "@media(max-width:900px)": {
      padding: "12px 24px",
    },
    "@media(max-width:600px)": {
      padding: "12px 18px",
    },
  },
  itemContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: "12px",
    borderBottom: "1px solid #e0e0e0",
    "@media(max-width:600px)": {
      justifyContent: "space-between",
    },
    "@media(max-width:500px)": {
      alignItems: "flex-start",
    },
  },
  linkFixer: {
    marginRight: "4rem",
    "@media(max-width:600px)": {
      marginRight: "2rem",
    },
  },
  linkWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  headingTypo: {
    fontWeight: "bold",
    fontSize: "16px",
    marginLeft: "2px",
    "@media(max-width:680px)": {
      fontSize: "14px",
    },
  },
  linkTypo: {
    fontSize: "12px",
    "@media(max-width:680px)": {
      fontSize: "11px",
    },
  },
  linkStyle: {
    textDecoration: "none",
  },
  iconBox: {
    display: "flex",
    flexDirection: "row",
    "@media(max-width:500px)": {
      flexDirection: "column",
    },
  },
  iconButton: {
    backgroundColor: "#9575cd",
    margin: "0.5rem",
    "@media(max-width:680px)": {
      margin: "0.25rem",
    },
  },
  Icon: {
    color: "black",
    fontSize: "32px",
    "@media(max-width:680px)": {
      fontSize: "28px",
    },
    "@media(max-width:500px)": {
      fontSize: "16px",
    },
  },
});
