import React, { useState, useRef, useCallback } from "react";
import useDiscussionData from "../useDiscussionData";
import { motion } from "framer-motion";
import DiscussionCard from "./discussionCard";
import Box from "@mui/material/Box";
import DiscussionSkeleton from "../discussionSkeleton";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { DiscussionEmpty } from "../../_EmptySpaces/EmptySvg";
function DiscussionCardArray() {
  const [pointer, setPointer] = useState(1);
  const [threadDelete, setThreadDelete] = useState(false);
  const lastPointer=useRef(0);
  const localUserData = JSON.parse(window.localStorage.getItem("auth"));
  const userId = localUserData?.user?._id;
  const { loading, data, hasMore } = useDiscussionData(
    lastPointer,
    userId,
    pointer,
    threadDelete,
    setThreadDelete
  );
  const observer = useRef();
  const lastCardElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          lastPointer.current=pointer;
          setPointer((prev) => prev + 20);
        }
      });
      if (node) observer.current.observe(node);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading, hasMore]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {loading &&
        Array.from(new Array(12)).map((data, index) => {
          return <DiscussionSkeleton key={index} />;
        })}
      {data?.map((cardData, index) => {
        if (data.length === index + 1) {
          return (
            <Box ref={lastCardElementRef} key={cardData._id}>
              <DiscussionCard
                index={index}
                data={cardData}
                pointer={pointer}
                setThreadDelete={setThreadDelete}
                setPointer={setPointer}
                flag={1}
              />
            </Box>
          );
        } else {
          return (
            <Box key={cardData._id}>
              <DiscussionCard
                index={index}
                data={cardData}
                setThreadDelete={setThreadDelete}
                setPointer={setPointer}
                flag={1}
              />
            </Box>
          );
        }
      })}
      {!loading && data.length === 0 && !hasMore && (
        <EmptySpace source={DiscussionEmpty.explore} />
      )}
    </motion.div>
  );
}

export default DiscussionCardArray;

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";

// import EmptySpace from "../../_EmptySpaces/emptySpace";

// // function DiscussionCardArray() {
//   const localUserData = JSON.parse(window.localStorage.getItem("auth"));
//   const userID = localUserData?.user?._id;
//   // ====================================================================================================================================
//   const [discussionData, setDiscussionData] = useState();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     let isSubscribed = true;
//     async function call() {
//       try {
//         const response = await axios.post(
//           "http://localhost:5000/fetch_live_threads",
//           { user_id: userID }
//         );
//         if (isSubscribed) {
//           console.log(response.data);
//           setDiscussionData(response.data?.universal_threads);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     }
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
//       {typeof discussionData === "undefined" ? (
//         Array.from(new Array(4)).map((data, index) => {
//           return <DiscussionSkeleton key={index} />;
//         })
//       ) : discussionData.length > 0 ? (
//         discussionData.map((data) => {
//           if (data) {

//             return (
//               <DiscussionCard
//                 key={data._id}
//                 data={data}
//                 setThread={setDiscussionData}
//                 flag={1}
//               />
//             );
//           } else {
//             return null;
//           }
//         })
//       ) : (
//         <EmptySpace source={DiscussionEmpty.explore} />
//       )}
//     </motion.div>
//   );
// }

// export default DiscussionCardArray;


// const [discussionData, setDiscussionData] = useState();
// useEffect(() => {
//   window.scrollTo(0, 0);
//   let isSubscribed = true;
//   async function call() {
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API}/fetch_live_threads`,
//         { user_id: userID }
//       );
//       if (isSubscribed) {
//         console.log(response.data);
//         setDiscussionData(response.data?.universal_threads);