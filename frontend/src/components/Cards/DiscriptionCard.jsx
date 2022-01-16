import React from "react";
import styled from "styled-components";
// import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { Typography, Stack } from "@mui/material";
import { OutlinedButton, ColorButton } from "../Navbar/navbar";
const Wrapper = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width:600px){
    width:100%;
    flex-direction:column;
    align-items:center;
    margin-top:30px;
    margin-bottom:30px;
  }
`;
const BoxContainer = styled.div`
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
const TextContainer = styled.div`
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
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// RENDER DESCRIPTION DATA WITH THE HELP OF USE PARAMS

const images = [
  // {
  //   original: "https://source.unsplash.com/random/",
  //   thumbnail: "https://source.unsplash.com/random",
  // },
  // {
  //   original: "https://picsum.photos/id/1015/1000/600/",
  //   thumbnail: "https://picsum.photos/id/1015/250/150/",
  // },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

class DiscriptionCard extends React.Component {
  render() {
    return (
      <>
        {/* <BoxContainer>this is discription page of </BoxContainer> */}
        <Wrapper>
          <BoxContainer>
            <ImageGallery items={images} />
          </BoxContainer>
          <TextContainer>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                px: { xs: 0, lg: 2 },
                pt: { lg: 0, xs: 2 },
              }}
            >
              Hercules Cylce
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", px: { xs: 0, lg: 2 }, pt: 0, pb: 2 }}
            >
              sep 26,2010
            </Typography>
            <Stack
              spacing={{ xs: 1, sm: 2, md: 3 }}
              direction="row"
              display={{ sm: "flex" }}
              sx={{ pl:{lg:2,xs:0}  }}
            >
              <OutlinedButton
                variant="outlined"
                sx={{
                  fontSize: { sm: "12px", md: "15px" },
                  fontWeight: "bold",
                }}
              >
                Interested
              </OutlinedButton>
              <ColorButton
                sx={{
                  fontSize: { xs: "12px", md: "15px" },
                  fontWeight: "bold",
                }}
                variant="contained"
              >
                Add to Favourites
              </ColorButton>
            </Stack>

            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                pt: { xs: 2 },
                px: { lg: 2, xs: 0 },
                pb: { xs: 0 },
              }}
            >
              Description
            </Typography>
            <Typography
              variant="body1"
              sx={{ pt: { xs: 0 }, px: { lg: 2, xs: 0 } }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
              distinctio dolore vitae voluptate sint soluta. Aliquid, error. Eum
              magni natus quibusdam in exercitationem tenetur ullam minima! Eum
              explicabo reprehenderit in sed rerum. Quos animi corporis
              architecto vel hic quam quo tempore ducimus ex natus ab, cumque
              consectetur eaque? Vitae, molestias.
            </Typography>
          </TextContainer>
        </Wrapper>
      </>
    );
  }
}

// function DiscriptionCard() {
//   let params = useParams();

//   return (
//     <BoxContainer>this is discription page of {params.productId};</BoxContainer>
//   );
// }

export default DiscriptionCard;
