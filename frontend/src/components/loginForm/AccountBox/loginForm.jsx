/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Validatorfunc from "./validator.js";
import { ToastContainer, toast } from "react-toastify";
import { socket } from "../../Navbar/navbar";
import "react-toastify/dist/ReactToastify.css";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  MutedText,
  SubmitButton,
  Validationlabel,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "../../../_ContextFolder/webContext";
import { useDispatch, useSelector } from "react-redux";
import { AuthUser } from "../../../AStatemanagement/Actions/userActions.jsx";
import { useNavigate } from "react-router-dom";
export function LoginForm(props) {
  const { Switch } = useContext(AccountContext);
  const initialValues = { email: "", password: "" };
  const [signinFormValue, setSignInvalue] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const notify = (value) => toast(value);
  const dispatch = useDispatch();
  const isSellNowClicked = useSelector(
    (state) => state.loginlogoutReducer.sellnowClicked
  );
  const Navigate = useNavigate();
  // backend ------------------------------------------------------------------------------------------------------------
  const Loginfunc = async (signinFormValue) => {
    const { email, password } = signinFormValue;
    try {
      const response = await axios.post("http://localhost:5000/signIn", {
        email,
        password,
      });
      if (response.data.status === "wrong password") {
        notify("wrong password");
      } else if (response.data.status === "user not found") {
        notify("Email is not registered");
      } else {
        //    OPEN NEW PAGE WITH USER INFO ==============================
        dispatch(AuthUser(response.data));
        const localStorageData = { ...response.data, isLogin: true };
        window.localStorage.setItem("auth", JSON.stringify(localStorageData));
        const userData = await JSON.parse(window.localStorage.getItem("auth"));
        userData && socket.emit("initialise_user", userData.user.email);
        isSellNowClicked && Navigate("sellproduct");
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
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      Loginfunc(signinFormValue);
    }
  }, [formErrors]);

  return (
    <BoxContainer>
      <FormContainer onSubmit={submitHandler} >
        <Input
          autoFocus={true}
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
        <Marginer direction="vertical" margin={6} />

        <MutedLink
          onClick={() => {
            Switch({ active: "emailforresetpassword" });
          }}
        >
          Forget your password ?
        </MutedLink>
        <Marginer direction="vertical" margin="0.8rem" />
        <SubmitButton type="submit">
          Signin
        </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin="0.5rem" />
      <MutedText style={{ fontSize: "11px" }}>
        Don't have an account ?{" "}
        <BoldLink onClick={() => Switch({ active: "signup" })}>Signup</BoldLink>
      </MutedText>
      <ToastContainer />
    </BoxContainer>
  );
}
