import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/navbar.js";
import Paper from "@mui/material/Paper";
function Wrapper(props) {
  return (
    <>
      <Paper sx={{ bgcolor: "#ede7f6" }}>
      <Navbar />
      {props.children}
      <Footer />
      </Paper>
    </>
  );
}

export default Wrapper;
