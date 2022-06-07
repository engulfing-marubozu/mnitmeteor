import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  //   BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  // MutedText,
  SubmitButton,
  Passwordlabel,
  Validationlabel,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "../../../_ContextFolder/webContext";
import { PasswordValidator } from "./validator";

export function CreatePassword(props) {
  // backend ----------------------------------------------------------------------------------------
  const Credentials = async (details) => {
    const { email, password } = details;
    try {
      // const response =
      await axios.post(`${process.env.REACT_APP_API}/signUp`, {
        email,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const resetPassword = async (details) => {
    const { email, password } = details;
    try {
      // const response =
      await axios.post(`${process.env.REACT_APP_API}/resetPassword`, {
        email,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //---------------------------------------------------------------------------------------------------
  const { Switch } = useContext(AccountContext);
  const initialValue = { newpassword: "", confirmpassword: "" };
  const [password, setPassword] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  function PasswordHandler(event) {
    const { name, value } = event.target;
    setPassword((prev) => {
      return { ...prev, [name]: value };
    });
  }

  const RegisterHandler = (event) => {
    event.preventDefault();
    setFormErrors(PasswordValidator(password));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const details = {
        email: props.data.email,
        password: password.newpassword,
      };
      if (props.data.flag === "createpassword") {
        Credentials(details);
      } else {
        resetPassword(details);
      }

      const active =
        props.data.flag === "createpassword"
          ? "signupsuccessfully"
          : "passwordresetsuccessful";
      Switch({ ...details, active: active });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);
  return (
    <BoxContainer>
      <FormContainer onSubmit={RegisterHandler}>
        <Input
          // autoFocus={true}
          type="password"
          placeholder="New Password"
          name="newpassword"
          value={password.newpassword}
          onChange={PasswordHandler}
        />
        <Passwordlabel
          style={{
            color: formErrors.highLighter ? "#FF0000" : "rgba(91, 84, 84, 100)",
          }}
        >
          Must contain atleast 8 characters
        </Passwordlabel>
        <Input
          type="password"
          placeholder="Confirm Password"
          name="confirmpassword"
          value={password.confirmpassword}
          onChange={PasswordHandler}
        />
        {formErrors.Password && (
          <Validationlabel>{formErrors.Password}</Validationlabel>
        )}
        {formErrors.confirmPassword && (
          <Validationlabel>{formErrors.confirmPassword}</Validationlabel>
        )}
        <Marginer direction="vertical" margin={15} />
        <SubmitButton type="submit">
          {props.data.flag === "createpassword" && "Register"}
          {props.data.flag === "resetpassword" && "Reset"}
        </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
    </BoxContainer>
  );
}
