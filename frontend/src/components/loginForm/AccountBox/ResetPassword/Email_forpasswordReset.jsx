import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MarginTopBox,
  MutedText,
  SubmitButton,
  Validationlabel,
} from "../common";
import { Marginer } from "../../marginer";
import { AccountContext } from "../accountContext";
import Validatorfunc from "../validator";

export function EmailForResetPassword(props) {
  //    backend -----------------------------------------------------------------------------------------------
  const verifyResetPasswordEmail = async () => {
    try {
      // console.log(signupEmail);
      const { email } = signupEmail;
      const response = await axios.post("http://localhost:5000/resetPassword", {
        email,
      });
      if (response.data === "Use different e-mail") {
        // console.log("Use different e-mail");
        notify("Email is not registered");
      } else {
        console.log(response.data.otp);
        const otpgen = response.data.otp;
        Switch({
          ...signupEmail,
          otp: otpgen,
          active: "otpverify",
          flag: "resetpassword",
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
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      ///VERIFY EMAIL WITH EXISTING DATA
      verifyResetPasswordEmail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  return (
    <MarginTopBox>
      <BoxContainer>
        <FormContainer onSubmit={OTPHandler}>
          <Input
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
        <Marginer direction="vertical" margin="1em" />
        <MutedText style={{ fontSize: "11px" }}>
          Already have an account?
          <BoldLink href="#" onClick={() => Switch({ active: "signin" })}>
            Signin
          </BoldLink>
        </MutedText>
      </BoxContainer>
      <ToastContainer />
    </MarginTopBox>
  );
}
