import { makeStyles } from "@mui/styles";

export const LinkStyle = makeStyles({
  mainBox: {
    padding: "14px 120px",
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
  heading: {
    width: "100%",
    textAlign: "end",
    fontFamily: "Cabin",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "26px",
    color: "#7547C6",
    "@media(max-width:600px)": {
      fontSize: "22px",
    },
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  contentContainer: {
    width: "50%",
    margin: "2rem 0rem",
  },
  contentBox: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "#000000",
  },
  imageBox: {
    width: "50%",
    height:"420px"
  },
});
