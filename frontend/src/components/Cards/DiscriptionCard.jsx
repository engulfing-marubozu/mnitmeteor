import React from "react";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
// import Grid from "@mui/material/Grid";
export const BoxContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const images = [
  {
    original:  "https://source.unsplash.com/random",
    thumbnail:  "https://source.unsplash.com/random",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

function DiscriptionCard() {
  return (
    <BoxContainer>
      <ImageGallery
        className=""
        originalHeig
        showFullscreenButton={false}
        autoplay={true}
        items={images}
        OriginalWidth="300"
        OriginalHeight="300"
      />
    </BoxContainer>
  );
}

export default DiscriptionCard;
