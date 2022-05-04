import { makeStyles } from "@mui/styles";
export const AdminPortelStyle = makeStyles({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    minHeight: "100vh",
    backgroundColor: "#212121",
    zIndex: 1200,
  },
});

export const AdminPanelStyle = makeStyles({
  closeIcon: {
    color: "white",
  },
  panelMainBox: {
    padding: "1.5rem",
    "@media(max-width:600px)": {
      padding: "0rem",
    },
  },
  headingAction: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0rem",
    "@media(max-width:600px)": {
      padding: "1rem",
    },
  },
  panelHeading: {
    fontSize: "28px",
    color: "white",
    "@media(max-width:600px)": {
      fontSize: "24px",
    },
  },
  buttonBox: {
    padding: "1rem 0rem",
    "@media(max-width:600px)": {
      padding: "0.5rem 1rem",
    },
  },
});
