import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedText,
  SubmitButton,
} from "../common";
import { Marginer } from "../../marginer";
import { AccountContext } from "../accountContext";

export function ResetPassword() {
  const { switchToPasswordSet } = useContext(AccountContext);
  return (
    <BoxContainer>
      <MutedText style={{ textAlign: "center", margin: "0px,0px" }}>
        We have sent code to your email<br></br>
        2019UME1827@mnit.ac.in
      </MutedText>
      <FormContainer onSubmit={switchToPasswordSet}>
        <Input type="password" placeholder="New Password" />
        <Input type="password" placeholder="New Password" />
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit" onClick={switchToPasswordSet}>
          Verify Account
        </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <MutedText style={{ fontSize: "11px" }}>
        Didn't receive code?
        <BoldLink href="#">Resend</BoldLink>
      </MutedText>
    </BoxContainer>
  );
}
