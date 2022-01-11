import React, { useEffect, useState, useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedText,
  SubmitButton,
  Validationlabel,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { OtpValidator } from "./validator";

export function Otpform(props) {
  const { Switch } = useContext(AccountContext);
  const [otpValue, setOptValue] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  function otpInputHandler(event) {
    setOptValue(event.target.value);
  }
  function verifyOtpHandler() {
    console.log(otpValue);
    setFormErrors(
      OtpValidator({ inputOtp: otpValue, realOtp: props.signUpDetails.otp })
    );
    setIsSubmit(true);
  }
  // function OTPHandler(){
  //  setFormErrors(Validatorfunc(signupEmail))  ;
  //   setIsSubmit(true);
  // }
  console.log(props.signUpDetails);
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(otpValue);
      Switch({email:props.signUpDetails.email,active:props.signUpDetails.flag});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  return (
    <BoxContainer>
      <MutedText style={{ textAlign: "center", margin: "0px,0px" }}>
        We have sent code to your email<br></br>
        {props.signUpDetails.email}
      </MutedText>
      <FormContainer>
        <Input
          type="number"
          placeholder="OTP"
          value={otpValue}
          onChange={otpInputHandler}
        />
        <Validationlabel>{formErrors.otp}</Validationlabel>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={verifyOtpHandler}>
        {" "}
        Verify Account
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedText style={{ fontSize: "11px" }}>
        Didn't receive code?
        <BoldLink href="#">Resend</BoldLink>
      </MutedText>
    </BoxContainer>
  );
}
