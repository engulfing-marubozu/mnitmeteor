import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
export const BoxContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// RENDER DESCRIPTION DATA WITH THE HELP OF USE PARAMS

function DiscriptionCard() {
  let params = useParams();

  return (
    <BoxContainer>this is discription page of {params.productId};</BoxContainer>
  );
}

export default DiscriptionCard;
