import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LostFoundCard from "./L&FCard";
import axios from "axios";
import LostFoundSkeleton from "../lostfoundSkeleton";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { lostFoundEmpty } from "../../_EmptySpaces/EmptySvg";

function PostsWithAxios() {
  const [lfData, setlfData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribe = true;
    const axiosPosts = async () => {
      try {
        const response = await axios(`${process.env.REACT_APP_API}/fetchlost`); //get
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
    </motion.div>
  );
}

export default PostsWithAxios;
