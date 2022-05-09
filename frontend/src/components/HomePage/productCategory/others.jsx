import React, { useState, useRef, useCallback, useEffect } from "react";
import useGetData from "../useGetData";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import HomeCardSkeleton from "../../Cards/HomeCardSkeleton";
import HomeCard from "../../Cards/HomeCard";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { mainPageEmpty } from "../../_EmptySpaces/EmptySvg";
import { useSelector } from "react-redux";
function Others() {
  const [pointer, setPointer] = useState(1);
  const category = "others";
  // const userData = JSON.parse(window.localStorage.getItem("mm_user_data"));
  // const email = userData?.email;
  const localUserData = useSelector((state) => state.loginlogoutReducer);
  const token = localUserData?.token;
  const { loading, data, hasMore } = useGetData(token, pointer, category);

  const observer = useRef();
  const lastCardElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPointer((prev) => prev + 20);
        }
      });
      if (node) observer.current.observe(node);

      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [loading, hasMore]
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          {loading &&
            Array.from(new Array(12)).map((data, index) => {
              return (
                <Grid item xs={6} md={4} lg={3} key={index}>
                  <HomeCardSkeleton />
                </Grid>
              );
            })}
          {data?.map((cardData, index) => {
            if (data.length === index + 1) {
              return (
                <Grid
                  ref={lastCardElementRef}
                  item
                  xs={6}
                  md={4}
                  lg={3}
                  key={cardData._id}
                >
                  <HomeCard cardData={cardData} index={index} />
                </Grid>
              );
            } else {
              return (
                <Grid item xs={6} md={4} lg={3} key={cardData._id}>
                  <HomeCard cardData={cardData} index={index} />
                </Grid>
              );
            }
          })}
          {!loading && data.length === 0 && !hasMore && (
            <Box
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <EmptySpace source={mainPageEmpty.others} />
            </Box>
          )}
        </Grid>
      </Container>
    </motion.div>
  );
}

export default Others;
