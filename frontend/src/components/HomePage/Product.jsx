import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeCard from "../Cards/HomeCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Box } from "@mui/material";
// import { borderColor } from "@mui/system";
import { deepPurple } from "@mui/material/colors";
import { styled } from "@mui/material";
export const ModelOutlinedButton = styled(Button)(({ theme }) => ({
  lineHeight: 1.5,
  borderColor: deepPurple[700],
  color: "#512da8",
  fontSize: "0.8rem",
  backgroundColor: "transparent",
  "&:hover": {
    borderColor: deepPurple[700],
  },
}));

function ProductCard(props) {
  const params = useParams();
  const category = props.Category ? props.Category : params.category;
  const [cardData, setCardData] = useState("");
  const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogIn);
  const email = useSelector((state) => state.loginlogoutReducer.userData?.email);

  useEffect(() => {
    // console.log(category);
    let isSubscribed = true;
    const Call = async () => {
      try {
        const cardDetails = await axios.post(`http://localhost:5000/fetch`, {
          category,
          email,
        });
        // console.log(cardDetails.data);
        if (isSubscribed) {
          setCardData(cardDetails.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    Call();
    return () => (isSubscribed = false);
  }, [category, email, isLoggedIn]);

  return (
    <main>
      {/* <Typography variant="h4">{props.Category ? props.Category : params.category}</Typography> */}
      <Container
        sx={{ pt: { xs: 5, sm: 10 }, pb: { xs: 5, sm: 5 } }}
        maxWidth={"lg"}
      >
        <Grid container spacing={{ xs: 2, sm: 4 }}>
          {cardData &&
            cardData.map((data, index) => {
              return (
                <Grid item xs={6} sm={4} lg={3} key={index}>
                  <HomeCard cardData={data} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <ModelOutlinedButton variant="outlined">Load More</ModelOutlinedButton>
      </Box>
    </main>
  );
}

export default ProductCard;
