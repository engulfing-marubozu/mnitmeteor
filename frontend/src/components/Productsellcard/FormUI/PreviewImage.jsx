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
  padding: 10px 23px;
  background: #3f4257;
  border-radius: 30px;
  color: white;
  font-weight: 300;
  font-size: 16px;
  margin: 5px 5px;
  transition: all 0.2s ease-in;
  cursor: pointer;
  outline: none;
  border: none;
`;
const CustomDiv = styled.div`
  width: 280px;
  position: relative;
  display: inline-flex;
  flex-direction: column;
`;
const TransparentDiv = styled.div`
  z-index: 1;
  position: absolute;
  top: 130px;
  left: 0px;
  width: 280px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
`;

function PreviewImage(props) {
  const Classes = useStyles();
  return (
    <div style={{ margin: "6px" }}>
      <CustomDiv>
        <Card sx={{ width: "280px", borderRadius: 1 }}>
          <CardMedia
            component="img"
            classes={{ img: Classes.image }}
            width="280px"
            sx={{ height: { xs: "180px" } }}
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
