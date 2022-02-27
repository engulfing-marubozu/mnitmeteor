import React from "react";
import { CardMedia, Card } from "@mui/material";
// import Image4 from "../../Cards/Images/Image4.jfif";
import styled from "styled-components";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  image: {
    width: "100%",
    objectFit: "contain",
  },
});
export const CustomButton = styled.button`
  padding: 7px 18px;
  background: #3f4257;
  border-radius: 30px;
  color: white;
  font-weight: 300;
  font-size: 14px;
  margin: 5px 5px;
  transition: all 0.2s ease-in;
  cursor: pointer;
  outline: none;
  border: none;
  @media (max-width: 1200px) {
  padding: 6px 16px;
  font-size: 12px;
  }
  @media (max-width: 900px) {
    padding: 4px 12px;
    font-size: 12px;
    }
    @media (max-width: 600px) {
      padding: 7px 16px;
      font-size: 14px;
      }
`;
const CustomDiv = styled.div`
  width: 260px;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    width:220px
  }
  @media (max-width: 900px) {
    width:180px
  }
  @media (max-width: 600px) {
    width:240px
  }
`;
const TransparentDiv = styled.div`
  z-index: 1;
  position: absolute;
  top: 140px;
  left: 0px;
  width: 260px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  @media (max-width: 1200px) {
   width:220px;
   height:35px;
   top:105px;
  }
  @media (max-width: 900px) {
    width:180px;
    height:30px;
    top:95px;
   }
   @media (max-width: 600px) {
    width:240px;
    height:40px;
    top:120px;
   }

`;
function PreviewImage(props) {
  const Classes = useStyles();
  return (
    <div style={{ margin: "6px" }}>
      <CustomDiv>
        <Card sx={{ width: { xs: "240px", sm: "180px", md: "220px", lg: "260px" }, borderRadius: 1 }}>
          <CardMedia
            component="img"
            classes={{ img: Classes.image }}
            sx={{ width: { xs: "240px", sm: "180px", md: "220px", lg: "260px" }, height: { xs: "160px", sm: "125px", md: "140px", lg: "180px" } }}
            image={props.imgSrc}
            alt="Image"
          ></CardMedia>
        </Card>

        <TransparentDiv>

          <CustomButton
            type="button"
            onClick={() => {
              props.onClickUpdate(props.imgIndex);
            }}
          >
            Update{" "}
          </CustomButton>
          <CustomButton
            type="button"
            onClick={() => {
              props.onClickRemove(props.imgIndex);
            }}
          >
            Remove{" "}
          </CustomButton>
        </TransparentDiv>
      </CustomDiv>
    </div>
  );
}

export default PreviewImage;
