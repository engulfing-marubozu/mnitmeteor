import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import { AccountBox } from "./AccountBox/accountBox";

const AppContainer = styled.div`
  position: fixed;
  height: "fit-content";
  width: "fit-content";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.5s;
`;

function Model(props) {
  return ReactDom.createPortal(
    <>
    <AppContainer onClick={props.onClose}>
    <AccountBox></AccountBox>
    </AppContainer>  
    </>,
    document.getElementById("portel")
  );
}

export default Model;
