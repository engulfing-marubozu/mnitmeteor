import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import LostFoundCard from "../Lost&FoundCard/L&FCard";
import LostFoundSkeleton from "../lostfoundSkeleton";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { lostFoundEmpty } from "../../_EmptySpaces/EmptySvg";
function FoundItems() {
  const [foundItems, setFoundItems] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribed = true;
    const axiosPosts = async () => {
      try {
        const response = await axios("http://localhost:5000/onlyfound"); //get
        if (isSubscribed) {
          setFoundItems(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    axiosPosts();
    return () => (isSubscribed = false);
  }, []);
  // console.log(foundItems);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {typeof foundItems === "undefined" ? (
        Array.from(new Array(3)).map((data, index) => {
          return <LostFoundSkeleton key={index} />;
        })
      ) : foundItems.length > 0 ? (
        foundItems.map((data, index) => {
          if (data) {
            return (
              <LostFoundCard
                key={index}
                data={data}
                setLostFound={setFoundItems}
                flag={3}
              />
            );
          } else {
            return null;
          }
        })
      ) : (
        <EmptySpace source={lostFoundEmpty.foundItems} />
      )}
    </motion.div>
  );
}

export default FoundItems;
