import React from "react";
import { Typography } from "@mui/material";
import FavouritesCard from "./favouriteCard";
// const card = [1, 2, 3, 4, 5];

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
      <FavouritesCard />
    </div>
  );
}

export default Favourites;
