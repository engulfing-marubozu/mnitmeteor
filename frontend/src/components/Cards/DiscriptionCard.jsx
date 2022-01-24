import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchDataForATF,
  fetchDataForInterestedProduct,
  modelPopUp
} from "../../AStatemanagement/Actions/userActions";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ImageGallery from "react-image-gallery";
import { Typography, Stack } from "@mui/material";
import { OutlinedButton, ColorButton } from "../Navbar/navbar";
import { BoxContainer, TextContainer, Wrapper } from "./StylingDiscriptionCard";
import axios from "axios";
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
  const params = useParams();
  const product_id = params.productId;
  // =============================================================================================================================
  const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
  const token = useSelector((state) => state.loginlogoutReducer.token);
  const email = useSelector((state) => state.loginlogoutReducer.userData.email);
  const dispatch = useDispatch();
// ========================================================LIKESTATUS==========================================================================================
const [isAddedToFav, setIsAddedToFav] = useState(false);
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

// =====================================================INTERESTED======================================================================================
const [isInterested, setIsInterested] = useState(false);
const interesetedClickHandler = () => {
  if (isLoggedIn) {
    setIsInterested(!isInterested);
    const interestedData = { productId: params.productId, userToken: token };
    !isInterested &&
      dispatch(
        fetchDataForInterestedProduct({
          ...interestedData,
          isInterested: true,
        })
      );
    isInterested &&
      dispatch(
        fetchDataForInterestedProduct({
          ...interestedData,
          isInterested: false,
        })
      );
  } else {
    dispatch(modelPopUp(true));
  }
};


  // ============================================= FETCHING DATA================================================================================
  const [cardData, setcardData] = useState();

  useEffect(() => {
    const call = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/send_specific_product",
          { email, product_id }
        );
        console.log(response.data);
        setIsAddedToFav(response.data.blue_heart);
        setIsInterested(response.data.show_interested);
        setcardData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    call();
  }, [email, product_id]);
  
  // ================================================================CardData ===============================================================
  // const Image = cardData?.images;
  const title =
    cardData?.title.charAt(0).toUpperCase() + cardData?.title.slice(1);
  const date = new Date(cardData?.createdAt);
  const properDate = `${date.toLocaleString("default", {
    month: "short",
  })} ${date.getDate()}, ${date.getFullYear()}`;

  const Description = cardData?.description;

  //=======================================================================================================================================

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
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", px: { xs: 0, lg: 2 }, pt: 0, pb: 2 }}
          >
            {properDate}
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
              {!isInterested && "Interested"}
              {isInterested && "Un-Interested"}
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
            {Description}
          </Typography>
        </TextContainer>
      </Wrapper>
    </>
  );
}

export default DiscriptionCard;
