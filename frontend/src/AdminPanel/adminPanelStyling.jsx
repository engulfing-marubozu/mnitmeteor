import styled from "styled-components";
export const AdminWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
`;
export const AdminBoxContainer = styled.div`
  width: 45%;
  display: flex;
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    width: 92%;
  }
`;
export const AdminTextContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 900px) {
    width: 90%;
    padding-left: 0px;
  }
  @media (max-width: 600px) {
    width: 92%;
    padding-left: 0px;
  }
`;
