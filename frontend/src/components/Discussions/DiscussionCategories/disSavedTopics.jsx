// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import DiscussionSkeleton from "../discussionSkeleton";
// import DiscussionCard from "../DiscussionPage/discussionCard";
// import EmptySpace from "../../_EmptySpaces/emptySpace";
// import { DiscussionEmpty } from "../../_EmptySpaces/EmptySvg";

// function DiscussionSavedTopics() {
//   const [savedTopics, setSavedTopics] = useState();
//   const localUserData = JSON.parse(window.localStorage.getItem("auth"));
//   const token = localUserData.token;

//   useEffect(() => {
//     let isSubscribed = true;
//     const call = async () => {
//       try {
//         const response = await axios.post(
//           `${process.env.REACT_APP_API}/send_saved_threads`,
//           {},
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         if (isSubscribed) {
//           setSavedTopics(response.data);
//           // console.log(response.data);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     call();
//     return () => (isSubscribed = false);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       {typeof savedTopics === "undefined" ? (
//         Array.from(new Array(4)).map((data, index) => {
//           return <DiscussionSkeleton key={index} />;
//         })
//       ) : savedTopics.length > 0 ? (
//         savedTopics.map((data) => {
//           if (data) {
//             return (
//               <DiscussionCard
//                 deleteShow={false}
//                 key={data._id}
//                 data={data}
//                 setThread={setSavedTopics}
//                 flag={2}
//               />
//             );
//           } else {
//             return null;
//           }
//         })
//       ) : (
//         <EmptySpace source={DiscussionEmpty.savedTopics} />
//       )}
//     </motion.div>
//   );
// }

// export default DiscussionSavedTopics;
import React, { useState, useRef, useCallback } from "react";
import useSavedTopics from "./useSavedTopics";
import DiscussionCard from "../DiscussionPage/discussionCard";
import Box from "@mui/material/Box";
import DiscussionSkeleton from "../discussionSkeleton";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { DiscussionEmpty } from "../../_EmptySpaces/EmptySvg";
function DiscussionSavedTopics() {
  const [pointer, setPointer] = useState(1);
  const userAuthData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
  const token = userAuthData?.xezzi;
  const { loading, hasMore, data } = useSavedTopics(token, pointer);
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
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading, hasMore]
  );
  return (
    <>
      {loading &&
        Array.from(new Array(12)).map((data, index) => {
          return <DiscussionSkeleton key={index} />;
        })}
      {data?.map((cardData, index) => {
        if (cardData !== null) {
          if (data.length === index + 1) {
            return (
              <Box ref={lastCardElementRef} key={cardData._id}>
                <DiscussionCard data={cardData} flag={2} showDelete={false} />
              </Box>
            );
          } else {
            return (
              <Box key={cardData._id}>
                <DiscussionCard data={cardData} flag={2} showDelete={false} />
              </Box>
            );
          }
        } else return null;
      })}
      {!loading && data?.length === 0 && !hasMore && (
        <EmptySpace source={DiscussionEmpty.savedTopics} />
      )}
    </>
  );
}

export default DiscussionSavedTopics;
