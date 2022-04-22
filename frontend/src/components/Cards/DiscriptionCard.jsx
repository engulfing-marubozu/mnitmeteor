import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDataForATF, fetchDataForInterestedProduct, modelPopUp, } from "../../AStatemanagement/Actions/userActions";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ImageGallery from "react-image-gallery";
import { Typography, Stack } from "@mui/material";
import { OutlinedButton, ColorButton } from "../Navbar/navbar";
import { BoxContainer, TextContainer, Wrapper } from "./StylingDiscriptionCard";
import axios from "axios";
import { TimeSince } from "../TimeElapsed/timecalc";
import POPUPElement from "../ModelPopUP/POPUPElement";
import InterestedAlert from "../ModelPopUP/InterestedAlert";
import GetPhoneNo from "../ContactDetails/GetPhoneNo";
import DiscriptionProductDelete from "../ModelPopUP/DiscriptionDeleteButton";
import "./discriptionImageStyle.css";
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function DiscriptionCard() {
  const params = useParams();
  const [modelPopup, setModelPopup] = useState(false);
  const [contactModel, setContactModel] = useState(false);
  const [deletePopUp, setDeletePopUp] = useState(false);
  const product_id = params.productId;
  const [isInterested, setIsInterested] = useState(false);
  const [cardData, setcardData] = useState();
  // =============================================================================================================================
  const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
  const token = useSelector((state) => state.loginlogoutReducer.token);
  const userData = useSelector((state) => state.loginlogoutReducer.userData);
  const { email, _id: userId } = userData;
  const userInterestedData = useSelector((state) => state.InterestedReducer)
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
  // ========================================================INTERESTEDMODELPOPUPINPUTHANDLER====================================================================
  const modelInputHandler = (input) => {
    if (input === true) {
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
    }
  };

  // =====================================================INTERESTED======================================================================================
  const interesetedClickHandler = () => {
    if (isLoggedIn) {
      if (!isInterested) {
        setModelPopup(true);
      } else if (isInterested) {
        //"show pop for how many attempt are left for uninterested "
        // console.log(userInterestedData);
        const { attempts_left, status, ttl_seconds } = userInterestedData;
        console.log(attempts_left, status, ttl_seconds);
        if (status) {
          alert(
            `${attempts_left - 1} attempts left for another ${ttl_seconds} seconds`
          );
          modelInputHandler(true);
        } else {
          const interestedData = { productId: params.productId, userToken: token };
          dispatch(
            fetchDataForInterestedProduct({
              ...interestedData,
              isInterested: false,
            })
          );
          alert(
            `max attempts done. Please retry after ${ttl_seconds} seconds`
          );
        }
      }
    } else {
      dispatch(modelPopUp(true));
    }
  };

  // ============================================= FETCHING DATA================================================================================

  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribed = true;
    const call = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/send_specific_product",
          { email, product_id }
        );
        if (isSubscribed) {
          // console.log(response.data);
          setIsAddedToFav(response.data.blue_heart);
          setIsInterested(response.data.show_interested);
          setcardData(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    call();
    return () => {
      isSubscribed = false;
    };
  }, [email, product_id]);

  // ================================================================CardData ===============================================================
  console.log(cardData);
  const imageThumbnail = cardData?.images;
  const title = cardData ? cardData.title.charAt(0).toUpperCase() + cardData.title.slice(1) : " ";
  const date = cardData ? new Date(cardData.createdAt) : "";
  const properDate = date ? TimeSince(date) : " ";
  const Description = cardData ? cardData.description : " ";
  const postedbyId = cardData ? cardData.posted_by : " ";
  const productId = cardData ? cardData._id : " ";
  //==============================================IMAGE PRODUCER ======================================================================

  const images = typeof (imageThumbnail) !== "undefined" ? (
    imageThumbnail.map((img, index) => {
      return {
        original: `${imageThumbnail[index]?.image}`,
        thumbnail: `${imageThumbnail[index]?.thumbnail}`,
      }
    })
  )
    : false;

  // =======================================================================================================================

  return (
    <>
      <Wrapper>
        <BoxContainer>
          {images && (
            <div className="discriptioncardImage">
              <ImageGallery showPlayButton={false} items={images} />
            </div>

          )
          }
        </BoxContainer>
        <TextContainer>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: 24, sm: 30 },
              px: { xs: 0, lg: 2 },
              pt: { lg: 0, xs: 2 },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", px: { xs: 1, lg: 3 }, pt: 0, pb: 2 }}
          >
            {properDate}
          </Typography>
          <Stack
            spacing={{ xs: 1, sm: 2, md: 3 }}
            direction="row"
            display={{ sm: "flex" }}
            sx={{ pl: { lg: 2, xs: 0 } }}
          >

            {/* =========================================INTERESTED UNINTERESTED BUTTON================================ */}
            {isLoggedIn && userId !== postedbyId && (<OutlinedButton
              variant="outlined"
              sx={{
                fontSize: { xs: "10px", md: "15px" },
                fontWeight: "bold",
              }}
              onClick={interesetedClickHandler}
            >
              {!isInterested && "Interested"}
              {isInterested && "Not-Interested"}
            </OutlinedButton>)}
            {/* =============================================INTERESTED BUTTON FOR NON LOGED IN USER ===================== */}
            {!isLoggedIn && (<OutlinedButton
              variant="outlined"
              sx={{
                fontSize: { xs: "10px", md: "15px" },
                fontWeight: "bold",
              }}
              onClick={interesetedClickHandler}
            >
              {!isInterested && "Interested"}
              {isInterested && "Un-Interested"}
            </OutlinedButton>)}

            {/* ========================================DELETE BUTTON FOR USER WHO POSTED THIS PRODUCT===================  */}
            {isLoggedIn && userId === postedbyId && (<OutlinedButton
              variant="outlined"
              sx={{
                fontSize: { xs: "10px", md: "15px" },
                fontWeight: "bold",
              }}
              onClick={() => { setDeletePopUp(true) }}
            >
              Delete
            </OutlinedButton>)}
            {/* =================================================================================================================================== */}
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
            sx={{
              fontWeight: "bold",
              fontSize: { xs: 16, sm: 22 },
              pt: { xs: 2 },
              px: { lg: 2, xs: 0 },
              pb: { xs: 0 },
            }}
          >
            Description
          </Typography>
          <Typography
            variant="body1"
            sx={{ pt: { xs: 0 }, px: { lg: 2, xs: 0 }, whiteSpace: "pre-line", wordBreak: "break-all" }}
          >
            {Description}
          </Typography>
        </TextContainer>
      </Wrapper>
      {/* ===================================================================ALERTS ===================================================== */}
      {modelPopup && isLoggedIn && (
        <POPUPElement
          open={modelPopup}
          onClose={setModelPopup}
          portelId={"alertPortal"}
        >
          <InterestedAlert
            setContactModel={setContactModel}
            modelInputHandler={modelInputHandler}
            onClose={setModelPopup}
          />
        </POPUPElement>
      )}
      {contactModel && isLoggedIn && (
        <POPUPElement
          open={contactModel}
          onClose={setContactModel}
          portelId={"contactDetailPortal"}
        >
          <GetPhoneNo
            modelInputHandler={modelInputHandler}
            flag={true}
            onClose={setContactModel}
          >
            Oops! We don’t have your phone number ☹️.
            Your phone number will only be shared with prospective buyers.
          </GetPhoneNo>
        </POPUPElement>
      )}

      {
        deletePopUp && isLoggedIn && (
          <POPUPElement
            open={deletePopUp}
            onClose={setDeletePopUp}
            portelId={"alertPortal"}
          >
            <DiscriptionProductDelete
              productId={productId}
              onClose={setDeletePopUp}
            />
          </POPUPElement>
        )
      }
      {/* ==========================================================================================================================================      */}
    </>
  );
}

export default DiscriptionCard;
