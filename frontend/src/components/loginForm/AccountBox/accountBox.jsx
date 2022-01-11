import React, { useState } from "react";
import { LoginForm } from "./loginForm";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";
import { Otpform } from "./otpform";
import { CreatePassword } from "./CreatePassword";
import { SignUpSuccessfully } from "./signUpSuccessfully";
import HeaderContent from "./HeaderContent";
import { BoxContainer, InnerContainer } from "./styledIndex";

import { expandingTransition } from "./HeaderContent";
import { EmailForResetPassword } from "./ResetPassword/Email_forpasswordReset";
//CREATING VARIABLE FOR STORING LOGIN DETAILS
let signupData;
//------------------------
export function AccountBox(props) {
  const [active, setActive] = useState("signin");

  const [isExpanded, setExpanded] = useState(false);
  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const Switch = (data) => {
    playExpandingAnimation();
    if (data.active === "otpverify") {
      console.log(data);
      const { email, otp ,flag} = data;
      signupData = { email: email, otp: otp,flag:flag };
    }
    setTimeout(() => {
      setActive(data.active);
    }, 400);
  };

  const contextValue = {
    Switch,
  };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <HeaderContent
          activeAtrb={active}
          ExpandAtrb={isExpanded}
        ></HeaderContent>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
          {active === "otpverify" && <Otpform signUpDetails={signupData} />}
          {active === "createpassword" && <CreatePassword data={signupData} />}
          {(active === "signupsuccessfully" ||active==="passwordresetsuccessful") && <SignUpSuccessfully />}
          {active==="emailforresetpassword"&&<EmailForResetPassword/>}
          {active === "resetpassword" && <CreatePassword data={signupData} />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
