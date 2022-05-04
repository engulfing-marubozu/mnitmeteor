import { makeStyles } from "@mui/styles";
export const FooterStyle = makeStyles({
  mainBox: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#f5f5f5",
    padding: "14px 72px",
    "@media(max-width:1200px)": {
      padding: "16px 38px",
    },
    "@media(max-width:900px)": {
      padding: "16px 24px",
    },
    "@media(max-width:600px)": {
      padding: "16px 18px",
    },
  },
  itemContainer: {
    display: "flex",
    paddingBottom: "12px",
    justifyContent: "space-between",
    "@media(max-width:500px)": {
      flexDirection:"column",
      justifyContent:"flex-start",
      // alignItems: "flex-start",
    },
  },
  linkStyle: {
    textDecoration: "none",
  },
});
