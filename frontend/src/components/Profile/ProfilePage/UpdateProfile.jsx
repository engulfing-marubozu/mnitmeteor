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

  const [timer, setTimer] = useState(30);
  const [isActive, setIsActive] = useState(false);
  //  =================================================================================================================================
  const phoneNoRef = useRef();
  const [showSubmit, setShowSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [getOtp, setGetOpt] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  // =================================================================OTP HANDLER=========================================================================
  const PhoneNoHandler = (event) => {
    event.preventDefault();
    const phoneNo = phoneNoRef.current.value;
    setFormErrors(PhoneNumberValidator(phoneNo));
    setGetOpt(true);
    setIsActive(true);
  };
  const OtpHandler = (event) => {
    event.preventDefault();
    const Otp = phoneNoRef.current.value;
    const realOtp = phoneAuthDetails?.otp;
    const values = { realOtp: realOtp, inputOtp: Otp };
    setFormErrors(OtpValidator(values));
    setIsSubmit(true);
  };
  // ===================================================ResendOtp========================================================================================
  const ResendOtp = () => {
    setIsActive(true);
  };
  // =======================================================================================================================================================
  useEffect(() => {
    // console.log(formErrors);
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (timer === 0) {
          setIsActive(false);
          setTimer(30);
        } else {
          setTimer((prevtime) => prevtime - 1);
        }
      }, 1000);
    }
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
    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors, isActive, timer]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        borderTop: "solid 0.2px",
      }}
    >
      <Box
        sx={{
          maxWidth: { sm: 600, xs: 320 },

          borderRadius: "7px",
        }}
      >
        <Box sx={{ px: "1.8rem" }}>
          {!showSubmit && (
            <FormContainer onSubmit={PhoneNoHandler}>
              <Stack direction="column" spacing={0.5} alignItems="center">
                <Input
                  // autoFocus={true}
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="Phone No."
                  ref={phoneNoRef}
                />
                <Validationlabel>{formErrors.phoneNo}</Validationlabel>
                <CustomizeButton type="submit">Get OTP</CustomizeButton>
              </Stack>
            </FormContainer>
          )}
          {showSubmit && (
            <FormContainer onSubmit={OtpHandler}>
              <Stack direction="column" spacing={0.5} alignItems="center">
                {/* <MutedText style={{ textAlign: "center", margin: "7px 0px"  ,fontSize:"14px"}}>
                  We have sent code to your phone number 
                  <span style={{ color: " #5b2da3" ,fontSize:'11px',marginLeft:"5px"}}>{`   ${phoneAuthDetails?.mobile_no}`}</span>
                </MutedText> */}
                <Input
                  autoFocus={true}
                  type="number"
                  name="OTP"
                  placeholder="OTP"
                  ref={phoneNoRef}
                />
                <Validationlabel>{formErrors.otp}</Validationlabel>
                <CustomizeButton type="button">Submit</CustomizeButton>
              </Stack>
              {!isActive && (
                <MutedText style={{ fontSize: "12px" }}>
                  Didn't receive code ?
                  <BoldLink onClick={ResendOtp}>Resend</BoldLink>
                </MutedText>
              )}
              {isActive && (
                <MutedText style={{ fontSize: "12px" }}>
                  Resend OTP in{" "}
                  {
                    <span style={{ color: " #5b2da3" }}>
                      00:{timer >= 10 ? timer : `0${timer}`}
                    </span>
                  }
                </MutedText>
              )}
            </FormContainer>
          )}
        </Box>
      </Box>
    </div>
  );
}
