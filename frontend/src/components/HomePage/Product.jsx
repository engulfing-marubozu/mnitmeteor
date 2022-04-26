import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import HomeCard from "../Cards/HomeCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Grid, Container, styled, Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import HomeCardSkeleton from "../Cards/HomeCardSkeleton";
import EmptySpace from "../_EmptySpaces/emptySpace";
import { mainPageEmpty } from "../_EmptySpaces/EmptySvg";

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
  const [cardData, setCardData] = useState();
  const [loadMore, setLoadMore] = useState(20);
  const params = useParams();
  const category = props.Category ? props.Category : params.category;
  const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogIn);
  const email = useSelector(
    (state) => state.loginlogoutReducer.userData?.email
  );
  // ==========================================================================================
  const LoadMoreHandler = () => {
    setLoadMore((prev) => {
      return prev + 4 < cardData.length ? prev + 4 : cardData.length;
    });
  };
  useEffect(() => {
    let isSubscribed = true;
    const Call = async () => {
      try {
        const cardDetails = await axios.post(`http://localhost:5000/fetch`, {
          category,
          email,
        });
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
            cardData?.slice(0, loadMore).map((data, index) => {
              if (data !== null) {
                return (
                  <Grid item xs={6} md={4} lg={3} key={index}>
                    <HomeCard cardData={data} />
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
              <EmptySpace source={mainPageEmpty[`${category}`]} />
            </Box>
          )}
        </Grid>
      </Container>
      {typeof cardData !== "undefined" && loadMore < cardData?.length && (
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <ModelOutlinedButton variant="outlined" onClick={LoadMoreHandler}>
            Load More
          </ModelOutlinedButton>
        </Box>
      )}
    </motion.div>
  );
}

export default ProductCard;
