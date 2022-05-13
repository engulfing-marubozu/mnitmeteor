import React, { useEffect } from "react";
import ProfileContentBox from "./newProfilePage/profileContentBox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormSubmission from "../ModelPopUP/onFormSubmission";
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
      <ProfileContentBox setSuccessPop={SubmitPopUpHandler} />
      {submitPopUp && isLogin && (
        <POPUPElement
          open={submitPopUp}
          onClose={SubmitPopUpHandler}
          portelId={"portal"}
        >
          <FormSubmission
            onClose={SubmitPopUpHandler}
            source={
              "https://res.cloudinary.com/mnitmarket/image/upload/v1652280474/toadmin_ehiskp.svg"
            }
          >
            We have received your product details. It will be shown in your
            profile as well as feed post admin's approval.
          </FormSubmission>
        </POPUPElement>
      )}
    </ThemeProvider>
  );
}

export default Profile;
