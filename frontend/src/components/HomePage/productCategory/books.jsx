import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import axios from "axios";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import HomeCard from "../../Cards/HomeCard";
import HomeCardSkeleton from "../../Cards/HomeCardSkeleton";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { mainPageEmpty } from "../../_EmptySpaces/EmptySvg";
import { ModelOutlinedButton } from "../homePageStyling";

function BooksCard() {
  const [cardData, setCardData] = useState([]);
  const [pointer, setPointerData] = useState(1);
  const email = useSelector(
    (state) => state.loginlogoutReducer.userData?.email
  );
  const category = "books";
  // ==========================================================================================
  const LoadMoreHandler = () => {
    setPointerData((prev) => {
      return prev + 20;
    });
  };
  useEffect(() => {
    let isSubscribed = true;
    const Call = async () => {
      try {
      
        const cardDetails = await axios.post(`${process.env.REACT_APP_API}/fetch`, {
          category,
          email,
          pointer,
        });
        if (isSubscribed) {
          setCardData((prev) => {
            return [...prev, ...cardDetails.data];
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
    Call();
    return () => (isSubscribed = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointer]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container
        sx={{
          pt: { xs: 5 },
          pb: { xs: 5 },
          maxWidth: { xs: "100%", sm: "sm", md: "md", lg: "lg" },
        }}
      >
        <Grid container spacing={{ xs: 2, sm: 3, lg: 4 }}>
          {typeof cardData === "undefined" ? (
            Array.from(new Array(24)).map((data, index) => {
              return (
                <Grid item xs={6} md={4} lg={3} key={index}>
                  <HomeCardSkeleton />
                </Grid>
              );
            })
          ) : cardData.length > 0 ? (
            cardData?.map((data, index) => {
              if (data !== null) {
                return (
                  <Grid item xs={6} md={4} lg={3} key={data._id}>
                    <HomeCard cardData={data} index={index} />
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
              <EmptySpace source={mainPageEmpty.books} />
            </Box>
          )}
        </Grid>
      </Container>
      {pointer <= cardData?.length && ( 
        <Box sx={{ display: "flex", justifyContent: "center"}}>
          <ModelOutlinedButton variant="outlined" onClick={LoadMoreHandler}>
            Load More
          </ModelOutlinedButton>
        </Box>
      )}
    </motion.div>
  );
}

export default BooksCard;
