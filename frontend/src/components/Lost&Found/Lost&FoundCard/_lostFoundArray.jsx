import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import { ModelOutlinedButton } from "../../HomePage/homePageStyling";
import LostFoundCard from "./L&FCard";
import axios from "axios";
import LostFoundSkeleton from "../lostfoundSkeleton";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { lostFoundEmpty } from "../../_EmptySpaces/EmptySvg";

function PostsWithAxios() {
  const [lfData, setlfData] = useState();
  const [pointer, setPointerData] = useState(1);
  const LoadMoreHandler = () => {
    setPointerData((prev) => {
      return prev + 20;
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribe = true;
    const axiosPosts = async () => {
      try {
        const response = await axios("http://localhost:5000/fetchlost"); //get
        if (isSubscribe) {
          setlfData(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    axiosPosts();
    return () => (isSubscribe = false);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {typeof lfData === "undefined" ? (
        Array.from(new Array(3)).map((data, index) => {
          return <LostFoundSkeleton key={index} />;
        })
      ) : lfData.length > 0 ? (
        lfData.map((data) => {
          return (
            <LostFoundCard
              key={data._id}
              data={data}
              setLostFound={setlfData}
              flag={1}
            />
          );
        })
      ) : (
        <EmptySpace source={lostFoundEmpty.explore} />
      )}
      {pointer <= lfData?.length && lfData?.length > 2 && (
        <Box
          sx={{ display: "flex", justifyContent: "center", mt: "1.5rem" }}
        >
          <ModelOutlinedButton variant="outlined" onClick={LoadMoreHandler}>
            Load More
          </ModelOutlinedButton>
        </Box>
      )}
    </motion.div>
  );
}

export default PostsWithAxios;
