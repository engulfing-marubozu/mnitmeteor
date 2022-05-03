import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import LostFoundCard from "../Lost&FoundCard/L&FCard";
import LostFoundSkeleton from "../lostfoundSkeleton";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { lostFoundEmpty } from "../../_EmptySpaces/EmptySvg";
import { ModelOutlinedButton } from "../../HomePage/homePageStyling";
function LostItems() {
  const [lostItems, setLostItems] = useState([]);
  const [pointer, setPointerData] = useState(1);
  const LoadMoreHandler = () => {
    setPointerData((prev) => {
      return prev + 20;
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribed = true;
    const axiosPosts = async () => {
      try {

        console.log(`${process.env.REACT_APP_API}`);
        const response = await axios(`${process.env.REACT_APP_API}/onlylost`); // get
        if (isSubscribed) {
          console.log(response.data);
          setLostItems((prev) => {
            return { ...prev, ...response.data };
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
    axiosPosts();
    return () => (isSubscribed = false);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {typeof lostItems === "undefined" ? (
        Array.from(new Array(3)).map((data, index) => {
          return <LostFoundSkeleton key={index} />;
        })
      ) : lostItems.length > 0 ? (
        lostItems.map((data) => {
          if (data) {
            return (
              <LostFoundCard
                key={data._id}
                data={data}
                setLostFound={setLostItems}
                flag={2}
              />
            );
          } else {
            return null;
          }
        })
      ) : (
        <EmptySpace source={lostFoundEmpty.lostItems} />
      )}
      {pointer <= lostItems?.length && (
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <ModelOutlinedButton variant="outlined" onClick={LoadMoreHandler}>
            Load More
          </ModelOutlinedButton>
        </Box>
      )}
    </motion.div>
  );
}

export default LostItems;
