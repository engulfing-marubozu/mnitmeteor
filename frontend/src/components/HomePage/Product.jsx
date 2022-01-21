import React, { useEffect,useState } from "react";
import axios from "axios";
import HomeCard from "../Cards/HomeCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux";

// let Image = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function ProductCard(props) {
  const params = useParams();
  const category = props.Category ? props.Category : params.category;
   const [cardData,setCardData]=useState("");
  const isLoggedIn =  useSelector ((state)=>state.loginlogoutReducer.isLogIn);
   const email = useSelector ((state)=>state.loginlogoutReducer.userData.email) 

  useEffect(() => {
    console.log(category);
    const Call = async () => {
      try {
       const cardDetails= await axios.post(`http://localhost:5000/fetch`, { category , email });
        console.log(cardDetails.data);
        setCardData(cardDetails.data);
      } catch (err) {
        console.log(err);
      }
    };
    Call();
  }, [category,email, isLoggedIn]);

  return (
    <main>
      <h1>this is {props.Category ? props.Category : params.category}</h1>
      <Container sx={{ py: 2 }} maxWidth={"lg"}>
        <Grid container spacing={{ xs: 2, sm: 4 }}>
          {cardData&&cardData.map((data, index) => {
            return (
              <Grid item xs={6} sm={4} lg={3} key={index}>
                <HomeCard cardData={data} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </main>
  );
}

export default ProductCard;
