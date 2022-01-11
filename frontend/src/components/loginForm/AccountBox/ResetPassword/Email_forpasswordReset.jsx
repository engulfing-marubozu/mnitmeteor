import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MarginTopBox,
  MutedLink,
  SubmitButton,
  Validationlabel,
} from "../common";
import { Marginer } from "../../marginer";
import { AccountContext } from "../accountContext";
import Validatorfunc from "../validator";

export function EmailForResetPassword(props) {
  //    backend -----------------------------------------------------------------------------------------------
  const verifySignUp = async () => {
    try {
      const { email } = signupEmail;
      const response = await axios.post("http://localhost:5000/signUp", {
        email,
      });
      if (response.data === "already registered")
        console.log("already registered");
      else {
        const otpgen = response.data.otp;
        console.log(otpgen);
        Switch({ ...signupEmail, otp: otpgen, active: "otpverify",flag:"resetpassword"});
      }
    } catch (err) {
      console.log(err);
    }
  };

  // ------------------------------------------------------------------------------------------------
  const { Switch } = useContext(AccountContext);
  const initialValues = { email: "" };
  // const changeinput=React.useRef();
  const [signupEmail, setSignUpEmail] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  function InputChangeHandler(event) {
    const { name, value } = event.target;
    setSignUpEmail({ [name]: value });
  }
  function OTPHandler() {
    setFormErrors(Validatorfunc(signupEmail));
    setIsSubmit(true);
  }
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      ///VERIFY EMAIL WITH EXISTING DATA

      verifySignUp();
      //console.log(signupEmail)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  return (
    <MarginTopBox>
      <BoxContainer>
        <FormContainer>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={signupEmail.email}
            onChange={InputChangeHandler}
          />
          <Validationlabel>{formErrors.email}</Validationlabel>
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit" onClick={OTPHandler}>
          {" "}
          Send OTP
        </SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Already have an account?
          <BoldLink href="#" onClick={() => Switch({ active: "signin" })}>
            Signin
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    </MarginTopBox>
  );
}
