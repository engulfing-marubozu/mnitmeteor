import React, { useEffect, useState } from "react";
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
        // console.log(userID);
        const response = await axios.post(
          "http://localhost:5000/fetch_live_threads",
          { user_id: userID }
        );
        if (isSubscribed) {
          console.log(response.data);
          setDiscussionData(response.data?.universal_threads);
        }
        // console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    call();
    return () => (isSubscribed = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
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
        <EmptySpace source={DiscussionEmpty.explore}/>
    
      )}
    </>
  );
}

export default DiscussionCardArray;
