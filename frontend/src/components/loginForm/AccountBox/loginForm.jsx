/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Validatorfunc from "./validator.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  Validationlabel,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useDispatch ,useSelector } from "react-redux";
import { AuthUser } from "../../../AStatemanagement/Actions/userActions.jsx";
import {useNavigate} from "react-router-dom";


export function LoginForm(props) {
  const { Switch } = useContext(AccountContext);
  const initialValues = { email: "", password: "" };
  const [signinFormValue, setSignInvalue] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const notify = (value) => toast(value);
  const dispatch = useDispatch();
  const isSellNowClicked=useSelector((state)=>state.loginlogoutReducer.sellnowClicked)
  const Navigate=useNavigate();
  // backend ------------------------------------------------------------------------------------------------------------
  const loginfunc = async (signinFormValue) => {
    const { email, password } = signinFormValue;
    try {
      const response = await axios.post("http://localhost:5000/signIn", {
        email,
        password,
      });
      //console.log(response.data);
      if (response.data.status === "wrong password") {
        notify("wrong password");
      } else if (response.data.status === "user not found") {
        notify("Email is not registered");
      } else {
        //    OPEN NEW PAGE WITH USER INFO ==============================
        // notify("Welcome");
        const userData=response.data;
        dispatch(AuthUser(userData));
        (isSellNowClicked&&Navigate("SellProduct"));
      }
    } catch (err) {
      console.log(err);
    }
  };
  //---------------------------------------------------------------------------------------------------------------------
  function OnChangeHandler(event) {
    const { name, value } = event.target;
    setSignInvalue((prev) => {
      return { ...prev, [name]: value };
    });
  }
  const submitHandler = (event) => {
    event.preventDefault();
    setFormErrors(Validatorfunc(signinFormValue));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      loginfunc(signinFormValue);
    }
  }, [formErrors]);

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={signinFormValue.email}
          onChange={OnChangeHandler}
        />
        <Validationlabel>{formErrors.email}</Validationlabel>

        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={signinFormValue.password}
          onChange={OnChangeHandler}
        />
        <Validationlabel>{formErrors.password}</Validationlabel>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />

      <MutedLink href="#" onClick={()=>{Switch({active:"emailforresetpassword"})}}>Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={submitHandler}>
        Signin
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={() => Switch({ active: "signup" })}>
          Signup
        </BoldLink>
      </MutedLink>
      <ToastContainer />
    </BoxContainer>
  );
}
