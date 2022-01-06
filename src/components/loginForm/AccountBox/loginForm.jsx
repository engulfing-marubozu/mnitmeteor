/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useContext } from "react";
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
      setFormErrors(Validatorfunc(signinFormValue));
      setIsSubmit(true);
    
  //  event.preventDefault();
   
  }
  useEffect(()=>{
      console.log(formErrors);
    if(Object.keys(formErrors).length===0 && isSubmit){
      ////sing data which  will be sent on server 
      console.log(signinFormValue)
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
      onKeyPress={KeyPressHandler}>Signin</SubmitButton>
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
