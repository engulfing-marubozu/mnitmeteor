import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import DiscussionSkeleton from "../discussionSkeleton";
import DiscussionCard from "../DiscussionPage/discussionCard";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { DiscussionEmpty } from "../../_EmptySpaces/EmptySvg";

function DiscussionSavedTopics() {
  const [savedTopics, setSavedTopics] = useState();
  const userAuthData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
  const token = userAuthData?.xezzi;
  useEffect(() => {
    let isSubscribed = true;
    const call = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API}/send_saved_threads`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (isSubscribed) {
          setSavedTopics(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    call();
    return () => (isSubscribed = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(savedTopics);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {typeof savedTopics === "undefined" ? (
        Array.from(new Array(12)).map((data, index) => {
          return <DiscussionSkeleton key={index} />;
        })
      ) : savedTopics.length > 0 ? (
        savedTopics.map((data) => {
          if (data) {
            return (
              <DiscussionCard
                showDelete={false}
                key={data._id}
                data={data}
                setThread={setSavedTopics}
                flag={2}
              />
            );
          } else {
            return null;
          }
        })
      ) : (
        <EmptySpace source={DiscussionEmpty.savedTopics} />
      )}
    </motion.div>
  );
}
export default DiscussionSavedTopics;
