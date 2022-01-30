import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
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
import { useSelector, useDispatch } from "react-redux";
import { fetchDataForPhoneNoAuth} from "../../AStatemanagement/Actions/userActions";

// ================================================================Main FUNCTION =========================================================
export default function GetPhoneNo(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.loginlogoutReducer.token);
  const phoneAuthDetails=useSelector((state)=>state.PhoneAuthReducer.phoneAuthentication);
  // =======================================================================================================================================

  const phoneNoRef = useRef();
  const [showSubmit, setShowSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [getOtp, setGetOpt] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  // =================================================================OTP HANDLER=========================================================================
  function PhoneNoHandler() {
    const phoneNo = phoneNoRef.current.value;
    setFormErrors(PhoneNumberValidator(phoneNo));
    setGetOpt(true);
  }
  function OtpHandler() {
    const Otp = phoneNoRef.current.value;
    // console.log(phoneOtp)
    const realOtp=phoneAuthDetails?.otp;
    const values = { realOtp: realOtp, inputOtp: Otp };
    setFormErrors(OtpValidator(values));
    setIsSubmit(true);
  }
  useEffect(() => {
    // console.log(formErrors)
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
        const data={token:token,phoneNo:phoneAuthDetails.mobile_no, flag:true}
        dispatch(fetchDataForPhoneNoAuth(data));
        props.onClose();

      


        console.log("number registered");
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          maxWidth: { sm: 600, xs: 320 },
          backgroundColor: "white ",
          borderRadius: "7px",
        }}
      >
        <Stack direction="row" justifyContent="flex-end">
          <IconButton
            sx={{ p: "4px" }}
            onClick={() => {
              props.onClose();
            }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <Box sx={{ px: "1.8rem" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", pb: "4px" }}>
            Contact Details
          </Typography>
          <Typography variant="body1">
            Et et tempor labore in.Sint ullamco anim incididunt cillum quis et
            id velit laboris magna.Sint eiusmod elit quis amet dolore.Anim
            aliquip elit incididunt eu enim sint officia enim quis.
          </Typography>
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
