import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  BoldLink,
  BoxContainer,
  ColoredEmail,
  FormContainer,
  Input,
  MutedText,
  SubmitButton,
  Validationlabel,
  SpamText,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "../../../_ContextFolder/webContext";
import { OtpValidator } from "./validator";

export function Otpform(props) {
  const [timer, setTimer] = useState(30);
  const [isActive, setIsActive] = useState(true);

  // backend------------------------------------------------------------------------------------------
  const resendOtp = async () => {
    setIsActive(true);
    try {
      const email = props.signUpDetails.email;
      const response = await axios.post(
        `${process.env.REACT_APP_API}/resendOtp`,
        {
          email,
        }
      );
      const otp = response.data.otp;
      // PROCEED WITH OTP DEPAK
      setRealOtp(otp);
    } catch (err) {
      console.log(err);
    }
  };

  //-------------------------------------------------------------------------------------------
  const { Switch } = useContext(AccountContext);
  const [otpValue, setOptValue] = useState("");
  const [realOtp, setRealOtp] = useState(props.signUpDetails.otp);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  function otpInputHandler(event) {
    setOptValue(event.target.value);
  }
  function verifyOtpHandler(event) {
    event.preventDefault();
    setFormErrors(OtpValidator({ inputOtp: otpValue, realOtp: realOtp }));
    setIsSubmit(true);
  }

  useEffect(() => {
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
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      Switch({
        email: props.signUpDetails.email,
        active: props.signUpDetails.flag,
      });
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors, timer, isActive]);

  return (
    <BoxContainer>
      <MutedText style={{ textAlign: "center", margin: "0px  0px" }}>
        We have sent code to your email<br></br>
      </MutedText>
      <ColoredEmail>{props.signUpDetails.email}</ColoredEmail>
      <FormContainer onSubmit={verifyOtpHandler}>
        <Input
          // autoFocus={true}
          type="number"
          placeholder="OTP"
          value={otpValue}
          onChange={otpInputHandler}
        />
        {!formErrors.otp && (
          <SpamText>
            Do check your spam box if it doesn't arrive in your inbox
          </SpamText>
        )}
        {formErrors.otp && <Validationlabel>{formErrors.otp}</Validationlabel>}
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit">Verify Account</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin="0.3em" />
      {!isActive && (
        <MutedText style={{ fontSize: "12px" }}>
          Didn't receive code ?<BoldLink onClick={resendOtp}>Resend</BoldLink>
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
    </BoxContainer>
  );
}
