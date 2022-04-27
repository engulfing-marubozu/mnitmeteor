import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
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
import { AccountContext } from "../../../_ContextFolder/webContext";
import Validatorfunc from "./validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function SignupForm(props) {
  //  backend -----------------------------------------------------------------------------------------------
  const verifySignUp = async () => {
    try {
      const { email } = signupEmail;
      const response = await axios.post("http://localhost:5000/signUp", {
        email,
      });
      if (response.data === "already registered") {
        notify("Already Registered");
      } else {
        const otpgen = response.data.otp;
        console.log(otpgen);
        Switch({
          ...signupEmail,
          otp: otpgen,
          active: "otpverify",
          flag: "createpassword",
        });
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
  const notify = (value) => toast(value);
  function InputChangeHandler(event) {
    const { name, value } = event.target;
    setSignUpEmail({ [name]: value });
  }
  function OTPHandler(event) {
    event.preventDefault();
    setFormErrors(Validatorfunc(signupEmail));
    setIsSubmit(true);
  }
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      ////sink data which  will be sent on server
      verifySignUp();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  return (
    <BoxContainer>
      <MutedText> Please enter your college email Id</MutedText>
      <FormContainer onSubmit={OTPHandler}>
        <Input
          autoFocus={true}
          type="email"
          placeholder="Email"
          name="email"
          value={signupEmail.email}
          onChange={InputChangeHandler}
        />
        <Validationlabel>{formErrors.email}</Validationlabel>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit">
          Send OTP
        </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin="0.5em" />
      <MutedText style={{ fontSize: "11px" }}>
        Already have an account ?
        <BoldLink onClick={() => Switch({ active: "signin" })}>Signin</BoldLink>
      </MutedText>
      <ToastContainer />
    </BoxContainer>
  );
}
