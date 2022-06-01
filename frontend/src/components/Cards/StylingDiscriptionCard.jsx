import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
export const Wrapper = styled("div")({
  width: "100 %",
  height: "100 %",
  display: "flex",
  justifyContent: "center",
  marginTop: "60px",
  marginBottom: "40px",

  "@media(max-width: 1200px)": {
    width: "100 %",
    flexDirection: "column",
    alignItems: "center",
  },
  "@media(max-width: 600px)": {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "30px",
    marginBottom: "30px",
  },
  "@media (max-width: 480px)": {
    marginTop: "0px",
  },
});
export const BoxContainer = styled("div")({
  width: "45%",
  display: "flex",
  "@media (max-width: 1200px)": {
    width: "80%",
  },
  "@media (max-width: 900px)": {
    width: "90%",
  },
  "@media (max-width: 600px)": {
    width: "92%",
  },
  "@media (max-width: 480px)": {
    width: "100%",
  },
});
export const TextContainer = styled("div")({
  width: "45%",
  display: "flex",
  flexDirection: "column",
  paddingLeft: "10px",
  "@media(max-width: 1200px)": {
    width: "80%",
  },
  "@media(max-width: 900px)": {
    width: "90%",
    paddingLeft: "0px",
  },
  "@media(max-width: 600px)": {
    width: "92%",
    paddingLeft: "0px",
  },
});

export const DescriptionStyle = makeStyles({
  title: {
    fontWeight: "bold",
    fontSize: "1.85rem",
    padding: "0 2rem",
    "@media(max-width:1200px)": {
      fontSize: "1.7rem",
      padding: "1rem 0 0rem",
    },
    "@media(max-width:600px)": {
      fontSize: "1.3rem",
    },
  },
  date: {
    fontSize: "0.875rem",
    fontWeight: "bold",
    padding: "0rem 2.1rem 1rem",
    "@media(max-width:1200px)": {
      padding: "0 0.2rem 1rem",
    },
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: "2rem",
    "@media(max-width:1200px)": {
      paddingLeft: "0rem",
    },
  },
  buttonStyle: {
    marginRight: "1rem",
    fontSize: "1rem",
    fontWeight: "bold",
    "@media(max-width:900px)": {
      fontSize: "0.7rem",
    },
    "@media(max-width:480px)": {
      fontSize: "0.6rem",
    },
  },
  descpHeading: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    padding: "1.35rem 2rem 0",
    "@media(max-width:1200px)": {
      padding: "1rem 0 0",
      fontSize: "1.25rem",
    },
    "@media(max-width:600px)": {
      padding: "1rem 0 0",
      fontSize: "0.95rem",
    },
  },
  descrp: {
    fontSize: "1rem",
    padding: "0 2rem",
    "@media(max-width:1200px)": {
      padding: "0 0 0",
    },
  },
});
