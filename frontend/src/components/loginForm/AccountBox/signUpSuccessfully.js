import React, { useContext } from "react";
import { BoxContainer, SubmitButton } from "./common";
import { AccountContext } from "../../_ContextFolder/accountContext";
import Dogeimage from "../images/Dogeimage.jpg";
import { Dogeimg } from "./common";
export function SignUpSuccessfully(props) {
  const { Switch } = useContext(AccountContext);

  return (
    <BoxContainer>
      <Dogeimg src={Dogeimage} alt="doge.img" style></Dogeimg>
      <SubmitButton
        type="submit"
        onClick={() => {
          Switch({ active: "signin" });
        }}
      >
        Login
      </SubmitButton>
    </BoxContainer>
  );
}
