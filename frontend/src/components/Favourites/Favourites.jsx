import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FavouritesCard from "./favouriteCard";
import HomeCardSkeleton from "../Cards/HomeCardSkeleton";
import EmptySpace from "../_EmptySpaces/emptySpace";
import { favouriteEmpty } from "../_EmptySpaces/EmptySvg";
import axios from "axios";

function Favourites() {
  const [cardData, setcardData] = useState();
  const userAuthData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
  const token = userAuthData?.xezzi;
  const favouritesLength = useSelector(
    (state) => state.FavouritesReducer.favouritesData
  );
  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribed = true;
    async function call() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/send_favourites`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        isSubscribed && setcardData(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    call();
    return () => {
      isSubscribed = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favouritesLength]);
  // console.log(cardData);
  return (
    <motion.div>
      <Box sx={{ pb: "2rem" }}>
        <Typography
          variant="h5"
          fontWeight={"bold"}
          sx={{
            px: "20px",
            py: "20px",
            mr: { xs: 1, md: 10 },
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          My Favourites
        </Typography>
        <Container
          sx={{ py: 2, maxWidth: { xs: "xs", sm: "sm", md: "md", lg: "lg" } }}
        >
          <Grid container spacing={{ xs: 2, sm: 4 }}>
            {typeof cardData === "undefined" ? (
              Array.from(new Array(6)).map((data, index) => {
                return (
                  <Grid item xs={6} md={4} lg={3} key={index}>
                    <HomeCardSkeleton />
                  </Grid>
                );
              })
            ) : cardData.length > 0 ? (
              cardData.map((data) => {
                if (data !== null) {
                  return (
                    <Grid item xs={6} md={4} lg={3} key={data._id}>
                      <FavouritesCard cardData={data} />
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
                <EmptySpace source={favouriteEmpty.favourite} />
              </Box>
            )}
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
}
export default Favourites;
