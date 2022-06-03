import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import CardForPublishedAds from "./CardForPublishedAd";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { profileEmpty } from "../../_EmptySpaces/EmptySvg";
import { LogoutUser } from "../../../AStatemanagement/Actions/userActions";
function PublishedAds() {
  // ================================================================== DATA FETCHING==============================
  const [cardData, setCardData] = useState([]);
  const userAuthData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
  const token = userAuthData?.xezzi;
  const publishedAdsData = useSelector(
    (state) => state.DeletePublishedAdsReducer?.publishedAdsData
  );
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  useEffect(() => {
    let isSubscribed = true;
    async function call() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/send_published_Ads`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        if (isSubscribed) {
          setCardData(response.data);
        }
      } catch (err) {
        if (err.response.status === 403) {
          dispatch(LogoutUser());
          Navigate(`/`);
        }
      }
    }
    call();
    return () => {
      isSubscribed = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publishedAdsData]);
  // ===================================================================================================================================================================
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box sx={{ py: "2rem" }}>
        <Container sx={{ width: { xs: "100%", md: "97%", lg: "90%" } }}>
          <Grid container spacing={{ xs: 2, sm: 3, lg: 4 }}>
            {cardData.length === 0 ? (
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <EmptySpace source={profileEmpty.myAds} />
              </Box>
            ) : (
              cardData.map((data) => {
                if (data !== null) {
                  return (
                    <Grid item xs={6} md={4} key={data._id}>
                      <CardForPublishedAds cardData={data} />
                    </Grid>
                  );
                } else return null;
              })
            )}
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
}

export default PublishedAds;
