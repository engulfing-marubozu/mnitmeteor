import React from "react";
import { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import CardForInterestedProduct from "./CardForInterestedProduct";
import HomeCardSkeleton from "../../Cards/HomeCardSkeleton";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { profileEmpty } from "../../_EmptySpaces/EmptySvg";

function InterestedProduct(props) {
  const [cardData, setCardData] = useState();
  const localUserData = JSON.parse(window.localStorage.getItem("auth"));
  const token = localUserData.token;
  const interestedList = useSelector(
    (state) => state.InterestedReducer?.interestedData
  );
  useEffect(() => {
    let isSubscribed = true;
    async function call() {
      const response = await axios.get(
        "http://localhost:5000/send_interested_products",
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
      return (isSubscribed = false);
    };
  }, [interestedList, token]);
  console.log(cardData);
  // ====================================================================================================================================
  return (
    <Box sx={{ py: "2rem" }}>
      <Container sx={{ maxWidth: { xs: "100%", md: "97%", lg: "90%" } }}>
        <Grid container spacing={{ xs: 2, sm: 3, lg: 4 }}>
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
                  <Grid item xs={6} md={4} key={index}>
                    <CardForInterestedProduct cardData={data} />
                  </Grid>
                );
              } else return null;
            })
          ) : (
            <Box
              sx={{ display: "flex", width: "100%", justifyContent: "center" }}
            >
              <EmptySpace source={profileEmpty.myOrders}/>
            </Box>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
export default InterestedProduct;

// {typeof cardData !== "undefined" &&
//       cardData.map((data, index) => {
//         if (data !== null) {
//           return (
//             <Grid item xs={6} md={4} key={index}>
//               <CardForInterestedProduct cardData={data} />
//             </Grid>
//           );
//         } else return null;
//       })}
