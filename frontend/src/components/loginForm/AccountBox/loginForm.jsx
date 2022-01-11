/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useContext } from "react";
import axios from "axios";
import Validatorfunc from "./validator.js"
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

export function LoginForm(props) {

  // backend ------------------------------------------------------------------------------------------------------------
const loginfunc = async (signinFormValue)=>{
        const {email, password}= signinFormValue;
        try{
         
        const response = await axios.post("http://localhost:5000/signIn", {email, password});
        //console.log(response.data);
        if( response.data.status === "wrong password")
        {
          console.log("Wrong password, try again");
        }
        else if ( response.data.status === "user not found")
        {
          console.log("This email is not registered with us, please try using other email Id");
        }
        else 
        {
          console.log("Welcome");
        }}
        catch(err)
        {
          console.log(err);
        }
} 
  //---------------------------------------------------------------------------------------------------------------------
  const { Switch} = useContext(AccountContext);
  const initialValues = { email: "", password: "" };
  const [signinFormValue, setSignInvalue] = useState(initialValues);
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  function  OnChangeHandler(event){
    const{name,value}=event.target;
    setSignInvalue((prev)=>{
      return{...prev,[name]:value}
    })
  }
  const KeyPressHandler=(event)=>{
  console.log(event);
  if(event.keyCode===13){
    
    setFormErrors(Validatorfunc(signinFormValue));
    setIsSubmit(true);
  
  }
  }
  const submitHandler=(event)=>{
    event.preventDefault();
      setFormErrors(Validatorfunc(signinFormValue));
      setIsSubmit(true);
}
  useEffect(()=>{
      console.log(formErrors);
    if(Object.keys(formErrors).length===0 && isSubmit){
      { loginfunc(signinFormValue);
      console.log(signinFormValue)}
    }
  },[formErrors]);

  
  return (
    <BoxContainer>
      <FormContainer >
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
      
      <MutedLink href="#" >Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={submitHandler}
      >Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={()=>Switch({active:"signup"})}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
