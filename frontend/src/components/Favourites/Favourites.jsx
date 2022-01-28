import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import FavouritesCard from "./favouriteCard";
//import HomeCard from "../Cards/HomeCard";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import axios from "axios";

function Favourites() {
  const [cardData, setcardData] = useState();

  const token = useSelector((state) => state.loginlogoutReducer.token);
  const favouritesLength = useSelector(
    (state) => state.FavouritesReducer.favouritesData
  );
  useEffect(() => {
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
    return()=>{
      isSubscribed=false;
    }
  }, [favouritesLength, token]);
  console.log(cardData);
  return (
    <div>
      <Typography
        variant={"h4"}
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
      {/* ============================================================================================  */}
      <main>
        <Container sx={{ py: 2 }} maxWidth={"lg"}>
          <Grid container spacing={{ xs: 2, sm: 4 }}>
            {cardData &&
              cardData.map((data, index) => {
                return (
                  <Grid item xs={6} sm={4} lg={3} key={index}>
                    <FavouritesCard cardData={data} />
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Favourites;
