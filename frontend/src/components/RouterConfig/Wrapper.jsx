import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/navbar.js";
import Paper from "@mui/material/Paper";
import Model from "../loginForm/Model";
import { useSelector, useDispatch } from "react-redux";
import { modelPopUp } from "../../AStatemanagement/Actions/userActions";
import { AccountContext } from "../_ContextFolder/accountContext";
function Wrapper(props) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
  const userData =useSelector((state)=>state.loginlogoutReducer.userData);
  const loginModel = useSelector((state) => state.ModelPopUpReducer.popUp);
  const LoginModelHandler = () => {
    dispatch(modelPopUp(false));
  };
  const contextValue={userData};
  return (
    <>
      <AccountContext.Provider value={contextValue}>
        <Paper sx={{ bgcolor: "#ede7f6", minHeight: "100vh" }}>
          <Navbar />
          <div style={{ minHeight: "100vh" }}>{props.children}</div>
          <Footer />
          {!isLoggedIn && loginModel && (
            <Model onClose={LoginModelHandler}></Model>
          )}
        </Paper>
      </AccountContext.Provider>
    </>
  );
}

export default Wrapper;
