import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  mainBox: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "2.5rem 0rem",
    flexDirection: "column",
  },
  mainBoxSecond: {
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
    padding: "1rem 1rem",
    flexDirection: "column",
    "@media (max-width: 600px)": {
      alignItems: "center",
    },
  },

  // =======================================================================

  boldText: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    "@media (max-width: 600px)": {
      fontSize: "0.85rem",
    },
  },
  boldTextSecond: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    "@media (max-width: 700px)": {
      fontSize: "0.85rem",
    },
  },

  // ============================================================================
  headingText: {
    fontWeight: "bold",
    color: "#edf2ff",
    fontSize: "1.5rem",
    "@media (max-width: 600px)": {
      fontSize: "1.2rem",
    },
  },

  headingTextSecond: {
    fontWeight: "bold",
    color: "#edf2ff",
    fontSize: "1.5rem",
    "@media (max-width: 700px)": {
      fontSize: "1.2rem",
    },
  },
  // ==========================================================================
  paperStyle: {
    // width: "50%",
    width: "700px",
    height: "auto",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 1200px)": {
      width: "650px",
    },
    "@media (max-width: 900px)": {
      width: "520px",
    },
    "@media (max-width: 600px)": {
      width: "90%",
    },
  },
  paperStyleSecond: {
    width: "100%",
    height: "auto",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
  },

  // ====================================================================================================================
  headingBox: {
    backgroundColor: "#7e57c2",
    padding: "1.5rem 3rem",
    borderRadius: "1rem 1rem 0rem 0rem ",
    // borderBottom: "1px solid  #e0e0e0",
    "@media (max-width: 600px)": {
      padding: "1.5rem",
    },
  },

  headingBoxSecond: {
    backgroundColor: "#7e57c2",
    padding: "1.5rem 3rem",
    borderRadius: "1rem 1rem 0rem 0rem ",
    // borderBottom: "1px solid  #e0e0e0",
    "@media (max-width: 700px)": {
      padding: "1.5rem",
    },
  },

  // ======================================================================================================================
  ContentBox: {
    padding: "2rem 3rem",
    borderBottom: "1px solid  #e0e0e0",
    "@media (max-width: 600px)": {
      padding: " 1.3rem 1.5rem",
    },
  },

  ContentBoxSecond: {
    padding: "2rem 3rem",
    borderBottom: "1px solid  #e0e0e0",
    "@media (max-width: 700px)": {
      padding: " 1.3rem 1.5rem",
    },
  },

  // ===========================================================================================================================

  imageUploadBox: {
    border: (props) =>
      props.error && props.touched ? "1px solid #d50000" : "1px solid #bdbdbd",
    borderRadius: "4px",
    margin: "0.6rem 0rem 0rem ",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "&:hover": {
      border: (props) =>
        props.error && props.touched
          ? "1px solid #d50000"
          : "1px solid #212121",
    },
  },
  helperText: {
    fontWeight: "400",
    fontSize: "0.75rem",
    color: "rgba(0, 0, 0, 0.6)",
    margin: "3px 14px 0px ",
  },
  warningText: {
    fontWeight: "400",
    fontSize: "0.75rem",
    color: "#d50000",
    margin: "3px 14px 0px ",
  },

  //========================================================================================================
  container: {
    position: "relative",
    alignItems: "center",
    display: "flex",
    padding: "5px 16px",
    background: "#3f4257",
    borderRadius: "30px",
    color: "white",
    fontWeight: 400,
    fontSize: "14px",
    margin: "5px auto",
    transition: "all 0.2s ease-in",
    cursor: "pointer",
    outline: "none",
    border: "none",
  },

  container__input: {
    /* Take the full size */
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%",
    /* Make it transparent */
    opacity: 0,
  },

  container__icon: {
    marginRight: "8px",
  },
  //====================================================================================
  pdfContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "5px auto ",
    alignItems: "center",
    border: "1px solid  #e0e0e0",
    borderRadius: "4px",
    padding: "2px",
  },
  fileName: {
    width: "120px",
    padding: "0px 2px 3px ",
  },
});
