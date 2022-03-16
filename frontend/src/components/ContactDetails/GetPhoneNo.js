import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { IconButton, Stack, Typography } from "@mui/material";
import { BoldLink } from "../loginForm/AccountBox/common";
import {
  FormContainer,
  MutedText,
  Input,
  CustomizeButton,
  Validationlabel,
} from "./getphoneNoStyling";
import {
  PhoneNumberValidator,
  OtpValidator,
} from "../loginForm/AccountBox/validator";
import { fetchDataForPhoneNoAuth } from "../../AStatemanagement/Actions/userActions";

// ================================================================Main FUNCTION =========================================================
export default function GetPhoneNo(props) {
  console.log(props.flag);
  console.log(props);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.loginlogoutReducer.token);
  const phoneAuthDetails = useSelector(
    (state) => state.PhoneAuthReducer.phoneAuthentication
  );
  // ===================================================================================================================================================
  const Navigate = useNavigate();
  const phoneNoRef = useRef();
  const [showSubmit, setShowSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [getOtp, setGetOpt] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  // =======================================================================================================================================================
  const [timer, setTimer] = useState(30);
  const [isActive, setIsActive] = useState(false);
  // =================================================================OTP HANDLER=========================================================================
  function PhoneNoHandler(event) {
    event.preventDefault();
    const phoneNo = phoneNoRef.current.value;
    setFormErrors(PhoneNumberValidator(phoneNo));
    setGetOpt(true);
    setIsActive(true);
  }
  function OtpHandler(event) {
    event.preventDefault();
    const Otp = phoneNoRef.current.value;
    const realOtp = phoneAuthDetails?.otp;
    const values = { realOtp: realOtp, inputOtp: Otp };
    setFormErrors(OtpValidator(values));
    setIsSubmit(true);
  }
  // =================================ResendOtp=================================================================================================================
  const ResendOtp = () => {
    setIsActive(true);
  };
  // ===============================================================================================================================================================
  useEffect(() => {
    // console.log(formErrors)
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

        // ==========================================for Discription page ============================================================================================================
        if (props.flag) {
          props.modelInputHandler(true);
          props.onClose(false);
        } 
        // =========================================for sellnow page==================================================================================================================
        else {
          console.log(props.formData.formValue)
          props.formData.merge(props.formData.formValue);
          props.onClose(false);
          Navigate("/Profile");
        }

        // console.log("number registered");
      }
    }
    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors, isActive, timer]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          // maxWidth: { sm: 600, xs: 320 },
          width: { md: 600, sm: 480, xs: 320 },
          backgroundColor: "white ",
          borderRadius: "7px",
        }}
      >
        <Stack direction="row" justifyContent="flex-end">
          <IconButton
            sx={{ p: "4px" }}
            onClick={() => {
              props.onClose(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <Box sx={{ px: "1.8rem" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", pb: "4px" }}>
            Contact Details
          </Typography>
          <Typography variant="body1" sx={{ wordBreak: "break-all" }}>
            {props.children}
          </Typography>
          {!showSubmit && (
            <FormContainer onSubmit={PhoneNoHandler}>
              <Stack direction="column" spacing={0.5} alignItems="center">
                <Input
                  autoFocus={true}
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
            <>
              <FormContainer onSubmit={OtpHandler}>
                <Stack direction="column" spacing={0.5} alignItems="center">
                  <Input
                    autoFocus={true}
                    type="number"
                    name="OTP"
                    placeholder="OTP"
                    ref={phoneNoRef}
                  />
                  <Validationlabel>{formErrors.otp}</Validationlabel>
                  <CustomizeButton type="button"  onClick={OtpHandler}>Submit</CustomizeButton>
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
            </>
          )}
        </Box>
      </Box>
    </div>
  );
}
