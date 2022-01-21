import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchDataForATF,
  modelPopUp,
} from "../../AStatemanagement/Actions/userActions";
// import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ImageGallery from "react-image-gallery";
import { Typography, Stack } from "@mui/material";
import { OutlinedButton, ColorButton } from "../Navbar/navbar";
import { BoxContainer, TextContainer, Wrapper } from "./StylingDiscriptionCard";
import { useParams } from "react-router-dom";
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// RENDER DESCRIPTION DATA WITH THE HELP OF USE PARAMS

const images = [
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

function DiscriptionCard() {
  const [isAddedToFav, setIsAddedToFav] = useState(false);
  const params = useParams();
  // =============================================================================================================================
  const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
  const token = useSelector((state) => state.loginlogoutReducer.token);
  const dispatch = useDispatch();
  // =============================================================================================================================
  const favouriteClickHandler = () => {
    if (isLoggedIn) {
      setIsAddedToFav(!isAddedToFav);
      const likeData = { productId: params.productId, userToken: token };
      !isAddedToFav &&
        dispatch(fetchDataForATF({ ...likeData, isLiked: true }));
      isAddedToFav &&
        dispatch(fetchDataForATF({ ...likeData, isLiked: false }));
    } else {
      dispatch(modelPopUp(true));
    }
  };
  const interesetedClickHandler = () => {};

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
            sx={{ pl: { lg: 2, xs: 0 } }}
          >
            <OutlinedButton
              variant="outlined"
              sx={{
                fontSize: { sm: "10px", md: "15px" },
                fontWeight: "bold",
              }}
              onClick={interesetedClickHandler}
            >
              Interested
            </OutlinedButton>
            <ColorButton
              sx={{
                fontSize: { xs: "10px", md: "15px" },
                fontWeight: "bold",
              }}
              variant="contained"
              onClick={favouriteClickHandler}
            >
              {!isAddedToFav && "Add to Favourites"}
              {isAddedToFav && "Remove from Favourites"}
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
            explicabo reprehenderit in sed rerum. Quos animi corporis architecto
            vel hic quam quo tempore ducimus ex natus ab, cumque consectetur
            eaque? Vitae, molestias.
          </Typography>
        </TextContainer>
      </Wrapper>
    </>
  );
}

// function DiscriptionCard() {
//   let params = useParams();

//   return (
//     <BoxContainer>this is discription page of {params.productId};</BoxContainer>
//   );
// }

export default DiscriptionCard;
