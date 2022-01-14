import React from 'react'
import HomeCard from "../Cards/HomeCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import { useNavigate } from 'react-router-dom';
const Image = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function ProductCard() {
    return (
        <main>
        <Container sx={{ py: 2 }} maxWidth={"lg"}>
          <Grid container spacing={{ xs: 2, sm: 4 }}>
            {Image.map((img, index) => {
              return (
                <Grid item xs={6} sm={4} lg={3} key={index}>
                  <HomeCard  productId={index}/>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </main>
    )
}

export default ProductCard;
