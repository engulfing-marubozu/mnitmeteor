import React, {useEffect,useState, useContext } from "react";
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
import { AccountContext } from "./accountContext";
import Validatorfunc from "./validator";

export function SignupForm(props) {
  const { Switch } = useContext(AccountContext);
  const initialValues = { email:""};
  // const changeinput=React.useRef();
  const [signupEmail,setSignUpEmail] = useState(initialValues);
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);
   function  InputChangeHandler(event){
     const {name ,value}=event.target;
     setSignUpEmail({[name]:value});
   }
    function OTPHandler(){
     setFormErrors(Validatorfunc(signupEmail))  ;
      setIsSubmit(true);
    }
    useEffect(()=>{
      console.log(formErrors);
    if(Object.keys(formErrors).length===0 && isSubmit){
      ////sing data which  will be sent on server 
      const otpgen = Math.floor(1000 + Math.random() * 9000);
      Switch({...signupEmail,otp:otpgen,active:"otpverify"});
      //console.log(signupEmail)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[formErrors]);
   




    return (
      <BoxContainer>
         <MutedText> Please enter your college email Id</MutedText>
        <FormContainer>
          <Input type="email" placeholder="Email" name="email" value={signupEmail.email} onChange={InputChangeHandler} />
          <Validationlabel>{formErrors.email}</Validationlabel>
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit" onClick={OTPHandler}> Send  OTP</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Already have an account?
          <BoldLink href="#" onClick={()=>Switch({active:"signin"})}>
            Signin
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    );
}
