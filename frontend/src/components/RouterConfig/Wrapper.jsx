import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/navbar.js";
import Paper from "@mui/material/Paper";
import Model from "../loginForm/Model";
import { useSelector, useDispatch } from "react-redux";
import { modelPopUp } from "../../AStatemanagement/Actions/userActions";
import { UserDataContext } from "../_ContextFolder/webContext";
function Wrapper(props) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
  const loginModel = useSelector((state) => state.ModelPopUpReducer.popUp);
  const LoginModelHandler = () => {
    dispatch(modelPopUp(false));
  };

  const localStorageData = JSON.parse(window.localStorage.getItem("auth"));
  const localUserData = localStorageData ? localStorageData : { isLogin: false };
  return (
    <>
      <UserDataContext.Provider value={localUserData}>
        <Paper sx={{ bgcolor: "#ede7f6", minHeight: "100vh" }}>
          <Navbar />
          <div style={{ minHeight: "100vh" }}>{props.children}</div>
          <Footer />
          {!isLoggedIn && loginModel && (
            <Model onClose={LoginModelHandler}></Model>
          )}
        </Paper>
      </UserDataContext.Provider>
    </>
  );
}

export default Wrapper;
