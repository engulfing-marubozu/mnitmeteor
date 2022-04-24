import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import {
  FormContainer,
  Input,
  CustomizeButton,
  Validationlabel,
} from "../../ContactDetails/getphoneNoStyling";
import { PhoneNumberValidator } from "../../loginForm/AccountBox/validator";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchDataForPhoneNoAuth } from "../../../AStatemanagement/Actions/userActions";

// ================================================================Main FUNCTION =========================================================
export default function UpdatePhoneNo(props) {
  //   const dispatch = useDispatch();
  //   const token = useSelector((state) => state.loginlogoutReducer.token);
  //   const phoneAuthDetails = useSelector(
  //     (state) => state.PhoneAuthReducer.phoneAuthentication
  //   );

  //  =================================================================================================================================
  const phoneNoRef = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // =================================================================OTP HANDLER=========================================================================
  const PhoneNoHandler = (event) => {
    event.preventDefault();
    const phoneNo = phoneNoRef.current.value;
    setFormErrors(PhoneNumberValidator(phoneNo));
    setIsSubmit(true);
  };
  // console.log(formErrors);
  // =======================================================================================================================================================
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      //   const data = {
      //     token: token,
      //     phoneNo: phoneAuthDetails.mobile_no,
      //   };
      //   dispatch(fetchDataForPhoneNoAuth(data));
      props.closeUpdate();
      props.notify("Successfully Updated");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        borderTop: "solid 0.4px #757575",
        mt: "1.25rem",
      }}
    >
      <FormContainer onSubmit={PhoneNoHandler}>
        <Stack direction="column" spacing={0.5} alignItems="center">
          <Input
            type="number"
            id="phone"
            name="phone"
            placeholder="Phone No."
            ref={phoneNoRef}
          />
          <Validationlabel>{formErrors.phoneNo}</Validationlabel>
          <CustomizeButton type="submit">Update</CustomizeButton>
        </Stack>
      </FormContainer>
    </Box>
  );
}
