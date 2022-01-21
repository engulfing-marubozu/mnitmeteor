import React from "react";
import { Typography } from "@mui/material";
import FavouritesCard from "./favouriteCard";
import HomeCard from "../Cards/HomeCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const cardData = [1, 2, 3, 4];

function Favourites() {
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
                    <FavouritesCard />
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
