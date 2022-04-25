import React, { useEffect, useState } from "react";
import { Typography, Container, Grid, Box } from "@mui/material";
import FavouritesCard from "./favouriteCard";
import { useSelector } from "react-redux";
import HomeCardSkeleton from "../Cards/HomeCardSkeleton";
import EmptySpace from "../_EmptySpaces/emptySpace";
import { favouriteEmpty } from "../_EmptySpaces/EmptySvg";
import axios from "axios";
function Favourites() {
  const [cardData, setcardData] = useState();
  const localUserData = JSON.parse(window.localStorage.getItem("auth"));
  const token = localUserData?.token;
  const favouritesLength = useSelector(
    (state) => state.FavouritesReducer.favouritesData
  );
  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribed = true;
    async function call() {
      const response = await axios.get(
        "http://localhost:5000/send_favourites",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      isSubscribed && setcardData(response.data);
      // console.log(response.data);
    }
    call();
    return () => {
      isSubscribed = false;
    };
  }, [favouritesLength, token]);
  // console.log(cardData);
  return (
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
                <Grid item xs={6} md={4} key={index}>
                  <HomeCardSkeleton />
                </Grid>
              );
            })
          ) : cardData.length > 0 ? (
            cardData.map((data, index) => {
              if (data !== null) {
                return (
                  <Grid item xs={6} md={4} lg={3} key={index}>
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
  );
}
export default Favourites;
