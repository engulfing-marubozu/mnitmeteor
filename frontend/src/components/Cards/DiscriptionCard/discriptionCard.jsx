import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import {
  fetchDataForATF,
  fetchInterestedActions,
  modelPopUp,
} from "../../../AStatemanagement/Actions/userActions";
import { useSelector } from "react-redux";
import ImageGallery from "react-image-gallery";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { OutlinedButton, ColorButton } from "../../Navbar/navbar";
import {
  BoxContainer,
  DescriptionStyle,
  TextContainer,
  Wrapper,
} from "../StylingDiscriptionCard";
import { TimeSince } from "../../TimeElapsed/timecalc";
import POPUPElement from "../../ModelPopUP/POPUPElement";
import InterestedAlert from "../../ModelPopUP/InterestedAlert";
import GetPhoneNoNew from "../../ContactDetails/getPhoneDetails";
import DiscriptionProductDelete from "../../ModelPopUP/DiscriptionDeleteButton";
import "../discriptionImageStyle.css";
import ReadMore from "../../_Styling/readmore";
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function DiscriptionCard({ descrpData, productId, userId }) {
  const [modelPopup, setModelPopup] = useState(false);
  const [contactModel, setContactModel] = useState(false);
  const [deletePopUp, setDeletePopUp] = useState(false);
  const [isInterested, setIsInterested] = useState(descrpData?.show_interested);
  const [isAddedToFav, setIsAddedToFav] = useState(descrpData?.blue_heart);
  // ==========================================================================================================
  const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
  const token = useSelector((state) => state.loginlogoutReducer.token);
  const dispatch = useDispatch();

  // ========================================================LIKESTATUS=======================================
  const favouriteClickHandler = () => {
    if (isLoggedIn) {
      setIsAddedToFav(!isAddedToFav);
      const likeData = { productId: productId, userToken: token };
      !isAddedToFav &&
        dispatch(fetchDataForATF({ ...likeData, isLiked: true }));
      isAddedToFav &&
        dispatch(fetchDataForATF({ ...likeData, isLiked: false }));
    } else {
      dispatch(modelPopUp(true));
    }
  };
  // ========================================================INTERESTEDMODELPOPUPINPUTHANDLER==================
  const modelInputHandler = (input) => {
    if (input === true) {
      setIsInterested(!isInterested);
      const interestedData = { productId: productId, userToken: token };
      if (!isInterested) {
        dispatch(
          fetchInterestedActions({
            ...interestedData,
            isInterested: true,
          })
        );
      }
    }
  };

  // =====================================================INTERESTED================================================
  const interesetedClickHandler = () => {
    if (isLoggedIn) {
      if (!isInterested) {
        setModelPopup(true);
      } else if (isInterested) {
        // call to backend for checking data for permission
        const interestedData = {
          productId: productId,
          userToken: token,
          isInterested: false,
          setIsInterested: setIsInterested,
        };
        dispatch(fetchInterestedActions(interestedData));
        // setIsInterested(!isInterested);
      }
    } else {
      dispatch(modelPopUp(true));
    }
  };
  const classes = DescriptionStyle();
  // console.log(descrpData);
  // ================================================================CardData =======================================
  const imageThumbnail = descrpData?.images;
  const title =
    descrpData.title.charAt(0).toUpperCase() + descrpData.title.slice(1);
  const date = new Date(descrpData.createdAt);
  const properDate = TimeSince(date);
  const Description = descrpData.description;
  const postedbyId = descrpData.posted_by;
  //==============================================IMAGE PRODUCER ====================================================

  const images =
    typeof imageThumbnail !== "undefined"
      ? imageThumbnail.map((img, index) => {
          return {
            original: `${imageThumbnail[index]?.image}`,
            thumbnail: `${imageThumbnail[index]?.thumbnail}`,
          };
        })
      : false;

  // ============================================================================================================

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Wrapper>
          <BoxContainer>
            {images && (
              <motion.div
                className="discriptioncardImage"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ImageGallery showPlayButton={false} items={images} />
              </motion.div>
            )}
          </BoxContainer>
          <TextContainer>
            <Typography className={classes.title}>{title}</Typography>
            <Typography variant="body2" className={classes.date}>
              {properDate}
            </Typography>
            <Stack className={classes.buttonContainer}>
              {/* =========================================INTERESTED UNINTERESTED BUTTON================================ */}
              {isLoggedIn && userId !== postedbyId && (
                <OutlinedButton
                  variant="outlined"
                  className={classes.buttonStyle}
                  onClick={interesetedClickHandler}
                >
                  {!isInterested && "Interested"}
                  {isInterested && "Not-Interested"}
                </OutlinedButton>
              )}
              {/* =============================================INTERESTED BUTTON FOR NON LOGED IN USER ===================== */}
              {!isLoggedIn && (
                <OutlinedButton
                  variant="outlined"
                  className={classes.buttonStyle}
                  onClick={interesetedClickHandler}
                >
                  {!isInterested && "Interested"}
                  {isInterested && "Un-Interested"}
                </OutlinedButton>
              )}

              {/* ========================================DELETE BUTTON FOR USER WHO POSTED THIS PRODUCT===================  */}
              {isLoggedIn && userId === postedbyId && (
                <OutlinedButton
                  variant="outlined"
                  className={classes.buttonStyle}
                  onClick={() => {
                    setDeletePopUp(true);
                  }}
                >
                  Delete
                </OutlinedButton>
              )}
              {/* =================================================================================================================================== */}
              <ColorButton
                className={classes.buttonStyle}
                variant="contained"
                onClick={favouriteClickHandler}
              >
                {!isAddedToFav && "Add to Favourites"}
                {isAddedToFav && "Remove from Favourites"}
              </ColorButton>
            </Stack>

            <Typography className={classes.descpHeading}>
              Description
            </Typography>
            <ReadMore words={600} classname={classes.descrp}>
              {Description}
            </ReadMore>
            {/* <Typography className={classes.descrp}>{Description}
            </Typography> */}
          </TextContainer>
        </Wrapper>
      </motion.div>
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
          <GetPhoneNoNew
            modelInputHandler={modelInputHandler}
            flag={true}
            onClose={setContactModel}
          >
            Oops! We don’t have your phone number ☹️. Your phone number will
            only be shared with prospective buyers.
          </GetPhoneNoNew>
        </POPUPElement>
      )}

      {deletePopUp && isLoggedIn && (
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
      )}
    </>
  );
}
export default DiscriptionCard;
