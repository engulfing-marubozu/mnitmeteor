import styled from "styled-components";
export const FormContainer = styled.form`
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MutedText = styled.p`
  font-size: 11px;
  marginright: 7rem;
  color: rgba(91, 84, 84, 100);
  font-weight: 540;
  text-decoration: none;
  @media (max-width: 600px) {
    marginright: 0;
  }
`;
export const Input= styled.input`
  width: 250px;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  border-radius: 3px;
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
export const CustomizeButton = styled.button`
  width: 100px;
  padding: 10px 10px;
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
export const Validationlabel = styled.label`
  padding: 2px 0px;
  font-size: 10px;
  color: #ff0000;
`;