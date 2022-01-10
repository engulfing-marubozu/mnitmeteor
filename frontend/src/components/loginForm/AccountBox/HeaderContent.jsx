import React from "react";
import {
  TopContainer,
  BackDrop,
  HeaderContainer,
  HeaderText,
  SmallText,
} from "./styledIndex";
export const expandingTransition = {
  type: "spring",
  duration: 2.0,
  stiffness: 30,
};
const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

function HeaderContent(props) {
  return (
    <TopContainer>
      <BackDrop
        initial={false}
        animate={props.ExpandAtrb ? "expanded" : "collapsed"}
        variants={backdropVariants}
        transition={expandingTransition}
      />
      {props.activeAtrb=== "signin" && (
        <HeaderContainer>
          <HeaderText>Welcome</HeaderText>
          <HeaderText>Back</HeaderText>
          <SmallText>Please sign-in to continue!</SmallText>
        </HeaderContainer>
      )}
      {props.activeAtrb === "signup" && (
        <HeaderContainer>
          <HeaderText>Create</HeaderText>
          <HeaderText>Account</HeaderText>
          <SmallText>Please sign-up to continue!</SmallText>
        </HeaderContainer>
      )}
      {props.activeAtrb === "otpverify" && (
        <HeaderContainer>
          <HeaderText>Email</HeaderText>
          <HeaderText>Verification</HeaderText>
          <SmallText>please verify email to continue!</SmallText>
        </HeaderContainer>
      )}
      {props.activeAtrb === "createpassword" && (
        <HeaderContainer>
          <HeaderText>Create</HeaderText>
          <HeaderText> New Password</HeaderText>
          <SmallText>please set password to continue!</SmallText>
        </HeaderContainer>
      )}
      {props.activeAtrb === "signupsuccessfully" && (
        <HeaderContainer>
          <HeaderText>SignUp</HeaderText>
          <HeaderText>Successfull</HeaderText>
          <SmallText>please press login button to continue!</SmallText>
        </HeaderContainer>
      )}
    </TopContainer>
  );
}

export default HeaderContent;
