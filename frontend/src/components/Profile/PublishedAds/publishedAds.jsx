import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import CardForPublishedAds from "./CardForPublishedAd";
import HomeCardSkeleton from "../../Cards/HomeCardSkeleton";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { useSelector } from "react-redux";
import { profileEmpty } from "../../_EmptySpaces/EmptySvg";
function PublishedAds() {
  // ================================================================== DATA FETCHING==============================
  const [cardData, setCardData] = useState();
  const localUserData = JSON.parse(window.localStorage.getItem("auth"));
  const token = localUserData.token;
  const publishedAdsData = useSelector(
    (state) => state.DeletePublishedAdsReducer?.publishedAdsData
  );
  useEffect(() => {
    let isSubscribed = true;
    async function call() {
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
    }
    call();
    return () => {
      isSubscribed = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publishedAdsData]);
  console.log(cardData);
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
            {typeof cardData === "undefined" ? (
              Array.from(new Array(3)).map((data, index) => {
                return (
                  <Grid item xs={6} md={4} key={index}>
                    <HomeCardSkeleton />
                  </Grid>
                );
              })
            ) : cardData.length > 0 ? (
              cardData.map((data) => {
                if (data !== null) {
                  return (
                    <Grid item xs={6} md={4} key={data._id}>
                      <CardForPublishedAds cardData={data} />
                    </Grid>
                  );
                } else return null;
              })
            ) : (
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <EmptySpace source={profileEmpty.myAds} />
              </Box>
            )}
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
}

export default PublishedAds;
