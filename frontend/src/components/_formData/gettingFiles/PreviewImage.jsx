import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  image: {
    width: "100%",
    objectFit: "contain",
  },
});
export const CustomButton = styled("button")({
  padding: "8px 16px",
  background: "#3f4257",
  borderRadius: "30px",
  color: "white",
  fontWeight: 300,
  fontSize: "14px",
  margin: "4px 5px",
  transition: "all 0.2s ease-in",
  cursor: "pointer",
  outline: "none",
  border: "none",
  "@media (max-width: 1200px)": {
    padding: "6px 16px",
    fontSize: "12px",
  },
  "@media (max-width: 900px)": {
    padding: "4px 12px",
    fontSize: "12px",
  },
  "@media (max-width: 600px)": {
    padding: "6px 16px",
    fontSize: "12px",
  },
});
const CustomDiv = styled("div")({
  width: "260px",
  position: "relative",
  display: "inline-flex",
  flexDirection: "column",
  "@media (max-width: 1200px)": {
    width: "220px",
  },
  "@media (max-width: 900px)": {
    width: "180px",
  },
  "@media (max-width: 600px)": {
    width: "240px",
  },
});
const TransparentDiv = styled("div")({
  zIndex: 1,
  position: "absolute",
  top: "140px",
  left: "0px",
  width: "260px",
  height: "40px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  textAlign: "center",
  "@media(max-width: 1200px)": {
    width: "220px",
    height: "35px",
    top: "105px",
  },
  "@media(max-width: 900px)": {
    width: "180px",
    height: "30px",
    top: "95px",
  },
  "@media(max-width: 600px)": {
    width: "240px",
    height: "40px",
    top: "120px",
  },
});
function PreviewImage(props) {
  const Classes = useStyles();
  return (
    <div style={{ margin: "6px" }}>
      <CustomDiv>
        <Card
          sx={{
            width: { xs: "240px", sm: "180px", md: "220px", lg: "260px" },
            borderRadius: 1,
          }}
        >
          <CardMedia
            component="img"
            classes={{ img: Classes.image }}
            sx={{
              width: { xs: "240px", sm: "180px", md: "220px", lg: "260px" },
              height: { xs: "160px", sm: "125px", md: "140px", lg: "180px" },
            }}
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
