import React, { useContext } from "react";
import { BoxContainer, SubmitButton } from "./common";
import { AccountContext } from "../../-context/accountContext";
import Dogeimage from "../images/Dogeimage.jpg";
import { Dogeimg } from "./common";
export function SignUpSuccessfully(props) {
const { Switch } = useContext(AccountContext);



  return (
    <BoxContainer>
      {/* <MutedText> Please enter your college email Id</MutedText>
        <FormContainer>
          <Input type="email" placeholder="Email" name="email" value={signupEmail.email} onChange={InputChangeHandler} />
          <Validationlabel>{formErrors.email}</Validationlabel>
        </FormContainer>
        <Marginer direction="vertical" margin={10} /> */}
      <Dogeimg src={Dogeimage} alt="doge.img" style></Dogeimg>
      <SubmitButton type="submit" onClick={() =>{  Switch({ active: "signin" })
      }}>
        Login
      </SubmitButton>
      {/* <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Already have an account?
          <BoldLink href="#" onClick={switchToSignin}>
            Signin
          </BoldLink>
        </MutedLink> */}
    </BoxContainer>
  );
}
