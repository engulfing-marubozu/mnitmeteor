import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import { BoldLink } from "../../loginForm/AccountBox/common";
import {
  FormContainer,
  MutedText,
  Input,
  CustomizeButton,
  Validationlabel,
} from "../../ContactDetails/getphoneNoStyling";
import {
  PhoneNumberValidator,
  OtpValidator,
} from "../../loginForm/AccountBox/validator";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataForPhoneNoAuth } from "../../../AStatemanagement/Actions/userActions";

// ================================================================Main FUNCTION =========================================================
export default function UpdatePhoneNo(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.loginlogoutReducer.token);
  const phoneAuthDetails = useSelector(
    (state) => state.PhoneAuthReducer.phoneAuthentication
  );

  //  =================================================================================================================================
  const phoneNoRef = useRef();
  const [showSubmit, setShowSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [getOtp, setGetOpt] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  // =================================================================OTP HANDLER=========================================================================
  const PhoneNoHandler = () => {
    const phoneNo = phoneNoRef.current.value;
    setFormErrors(PhoneNumberValidator(phoneNo));
    setGetOpt(true);
  };
  const OtpHandler = () => {
    const Otp = phoneNoRef.current.value;
    const realOtp = phoneAuthDetails?.otp;
    const values = { realOtp: realOtp, inputOtp: Otp };
    setFormErrors(OtpValidator(values));
    setIsSubmit(true);
  };
  useEffect(() => {
    // console.log(formErrors);
    if (!showSubmit) {
      if (Object.keys(formErrors).length === 0 && getOtp) {
        const data = {
          token: token,
          phoneNo: phoneNoRef.current.value,
          flag: false,
        };
        // console.log(phoneNoRef.current.value,token );
        dispatch(fetchDataForPhoneNoAuth(data));
        setShowSubmit(true);
      }
    } else if (showSubmit) {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        const data = {
          token: token,
          phoneNo: phoneAuthDetails.mobile_no,
          flag: true,
        };
        dispatch(fetchDataForPhoneNoAuth(data));
        props.closeUpdate();
        props.notify("Successfully Updated");
        // console.log("number registered");
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          maxWidth: { sm: 600, xs: 320 },

          borderRadius: "7px",
        }}
      >
        <Box sx={{ px: "1.8rem" }}>
          <FormContainer>
            {!showSubmit && (
              <Stack direction="column" spacing={0.5} alignItems="center">
                <Input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="Phone No."
                  ref={phoneNoRef}
                />
                <Validationlabel>{formErrors.phoneNo}</Validationlabel>
                <CustomizeButton type="button" onClick={PhoneNoHandler}>
                  Get OTP
                </CustomizeButton>
              </Stack>
            )}
            {showSubmit && (
              <>
                <Stack direction="column" spacing={0.5} alignItems="center">
                  <Input
                    type="number"
                    name="OTP"
                    placeholder="OTP"
                    ref={phoneNoRef}
                  />
                  <Validationlabel>{formErrors.otp}</Validationlabel>
                  <CustomizeButton type="button" onClick={OtpHandler}>
                    Submit
                  </CustomizeButton>
                </Stack>
                <MutedText>
                  Didn't receive code?
                  <BoldLink>Resend</BoldLink>
                </MutedText>
              </>
            )}
          </FormContainer>
        </Box>
      </Box>
    </div>
  );
}
