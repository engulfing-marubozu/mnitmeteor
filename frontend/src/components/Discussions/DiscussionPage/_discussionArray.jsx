import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import DiscussionCard from "./discussionCard";
import DiscussionSkeleton from "../discussionSkeleton";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { DiscussionEmpty } from "../../_EmptySpaces/EmptySvg";
function DiscussionCardArray() {
  const localUserData = JSON.parse(window.localStorage.getItem("auth"));
  const userID = localUserData?.user?._id;
  // =======================================================================================================================================================================
  const [discussionData, setDiscussionData] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribed = true;
    async function call() {
      try {
        const response = await axios.post(
          "http://localhost:5000/fetch_live_threads",
          { user_id: userID }
        );
        if (isSubscribed) {
          setDiscussionData(response.data?.universal_threads);
        }
      } catch (err) {
        console.log(err);
      }
    }
    call();
    return () => (isSubscribed = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {typeof discussionData === "undefined" ? (
        Array.from(new Array(4)).map((data, index) => {
          return <DiscussionSkeleton key={index} />;
        })
      ) : discussionData.length > 0 ? (
        discussionData.map((data, index) => {
          if (data) {
            return (
              <DiscussionCard
                key={index}
                data={data}
                setThread={setDiscussionData}
                flag={1}
              />
            );
          } else {
            return null;
          }
        })
      ) : (
        <EmptySpace source={DiscussionEmpty.explore} />
      )}
    </motion.div>
  );
}

export default DiscussionCardArray;
