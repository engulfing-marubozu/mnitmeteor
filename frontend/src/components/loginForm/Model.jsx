import React from "react";
import ReactDom from "react-dom";
import { styled } from '@mui/system';
import { AccountBox } from "./AccountBox/accountBox";

const AppContainer = styled('div')({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0, 0, 0, 0.8)',
  zIndex: 2000,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  transition: 'all 0.5s',
})

function Model(props) {
  return ReactDom.createPortal(
    <>
      <AppContainer onClick={props.onClose}>
        <AccountBox></AccountBox>
      </AppContainer>
    </>,
    document.getElementById("portal")
  );
}

export default Model;
