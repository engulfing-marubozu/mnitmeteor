import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  text-align:center;

  &:hover {
    cursor:pointer 
   }
`;
export const MutedText = styled.p`
  font-size: 14px;
  color: rgba(91, 84, 84, 100);
  font-weight: 540;
  text-decoration: none;
`;
export const ColoredEmail = styled.p`
font-size: 12px;
color: #5b2da3;
font-weight: 500;
text-decoration: none;
margin-top:0;
`;
export const BoldLink = styled.a`
  font-size: 11px;
  color: #5b2da3;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
  &:hover {
   cursor:pointer 
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(91, 45, 163);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px 20%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(91, 45, 163, 1) 0%,
    rgba(101, 60, 165, 0.8802871490393032) 97%
  );

  &:hover {
    filter: brightness(1.08);
  }
`;
export const Passwordlabel = styled.label`
  padding: 10px 0px;
  color: rgba(91, 84, 84, 100);
  font-size: 12px;
`;
export const Validationlabel = styled.label`
  padding: 5px 0px;
  font-size: 10px;
  color: #ff0000;
`;
export const Dogeimg = styled.img`
  width: 200px;
  height: 200px;
`;

export const MarginTopBox = styled.div`
margin-top:3.5rem`;