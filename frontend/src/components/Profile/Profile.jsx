import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ProfileContentBox from "./newProfilePage/profileContentBox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SuccessfulSubmission from "../ModelPopUP/onFormSubmission";
import POPUPElement from "../ModelPopUP/POPUPElement";
import { sellPopUp } from "../../AStatemanagement/Actions/userActions";
import { useSelector, useDispatch } from "react-redux";
const theme = createTheme({
  palette: {
    primary: {
      main: "#512da8",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
  typography: {
    fontFamily: ["Cabin", "sans-serif"].join(","),
  },
});

function Profile({ userAuthData }) {
  const dispatch = useDispatch();
  const submitPopUp = useSelector((state) => state.ModelPopUpReducer.sellPopUp);
  const isLogin = userAuthData?.isLogin;
  const SubmitPopUpHandler = () => {
    dispatch(sellPopUp(false));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      >
        <ProfileContentBox setSuccessPop={SubmitPopUpHandler} />
        {submitPopUp && isLogin && (
          <POPUPElement
            open={submitPopUp}
            onClose={SubmitPopUpHandler}
            portelId={"portal"}
          >
            <SuccessfulSubmission onClose={SubmitPopUpHandler}>
              what is your name my name is deeepak
            </SuccessfulSubmission>
          </POPUPElement>
        )}
      </motion.div>
    </ThemeProvider>
  );
}

export default Profile;
