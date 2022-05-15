import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
export const DevButton = styled("button")({
  maxWidth: "160px",
  padding: "10px 18px",
  color: "#fff",
  fontSize: "20px",
  fontWeight: 600,
  border: "none",
  borderRadius: "10px 10px 10px 10px",
  cursor: "pointer",
  transition: "all, 240ms ease-in-out",
  background:
    "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(91, 45, 163, 1) 0%, rgba(101, 60, 165, 0.8802871490393032) 97%)",
  "&:hover": {
    filter: "brightness(1.08)",
  },
});
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
    margin: "5rem 0rem",
    "@media(max-width:900px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  reverseContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "5rem 0rem",
    "@media(max-width:900px)": {
      flexDirection: "column-reverse",
      alignItems: "center",
    },
  },
  startCntContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "50%",
    "@media(max-width:900px)": {
      alignItems: "center",
      width: "480px",
    },
    "@media(max-width:520px)": {
      width: "95%",
    },
  },
  endCntContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "50%",
    "@media(max-width:900px)": {
      alignItems: "center",
      width: "480px",
    },
    "@media(max-width:520px)": {
      width: "95%",
    },
  },
  contentBox: {
    width: "92%",
    fontWeight: "bold",
    fontSize: "17px",
    color: "#000000",
    margin: "1rem 0rem ",
    "@media(max-width:900px)": {
      margin: "0.5rem 0rem ",
      width: "96%",
    },
  },
  imageBox: {
    display: "flex",
    justifyContent: "center",
    width: "50%",
    height: "360px",
    "@media(max-width:900px)": {
      width: "480px",
      margin: "0rem 0rem",
    },
    "@media(max-width:520px)": {
      width: "95%",
    },
  },
  image: {
    width: "100%",
    height: "360px",
    objectFit: "contain",
  },
  buttonBox: {
    width: "92%",
    "@media(max-width:900px)": {
      margin: "1rem 0rem ",
      width: "96%",
    },
  },
});
