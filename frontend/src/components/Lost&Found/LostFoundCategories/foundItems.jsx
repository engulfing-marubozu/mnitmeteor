// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import Box from "@mui/material/Box";
// import { ModelOutlinedButton } from "../../HomePage/homePageStyling";
// import LostFoundCard from "../Lost&FoundCard/L&FCard";
// import LostFoundSkeleton from "../lostfoundSkeleton";
// import EmptySpace from "../../_EmptySpaces/emptySpace";
// import { lostFoundEmpty } from "../../_EmptySpaces/EmptySvg";
// function FoundItems() {
//   const [foundItems, setFoundItems] = useState();
//   const [pointer, setPointerData] = useState(1);
//   const LoadMoreHandler = () => {
//     setPointerData((prev) => {
//       return prev + 20;
//     });
//   };
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     let isSubscribed = true;
//     const axiosPosts = async () => {
//       try {
//         const response = await axios(`${process.env.REACT_APP_API}/onlyfound`); //get
//         if (isSubscribed) {
//           setFoundItems(response.data);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     axiosPosts();
//     return () => (isSubscribed = false);
//   }, []);
//   // console.log(foundItems);
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       {typeof foundItems === "undefined" ? (
//         Array.from(new Array(3)).map((data, index) => {
//           return <LostFoundSkeleton key={index} />;
//         })
//       ) : foundItems.length > 0 ? (
//         foundItems.map((data, index) => {
//           if (data) {
//             return (
//               <LostFoundCard
//                 key={data._id}
//                 data={data}
//                 setLostFound={setFoundItems}
//                 flag={3}
//               />
//             );
//           } else {
//             return null;
//           }
//         })
//       ) : (
//         <EmptySpace source={lostFoundEmpty.foundItems} />
//       )}
//       {pointer <= foundItems?.length && (
//         <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
//           <ModelOutlinedButton variant="outlined" onClick={LoadMoreHandler}>
//             Load More
//           </ModelOutlinedButton>
//         </Box>
//       )}
//     </motion.div>
//   );
// }

// export default FoundItems;



import React, { useState, useRef, useCallback} from "react";
import Box from "@mui/material/Box";
import LostFoundSkeleton from "../lostfoundSkeleton";
import LostFoundCard from "../Lost&FoundCard/L&FCard";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { lostFoundEmpty } from "../../_EmptySpaces/EmptySvg";
import useLostFoundData from "../useLnfData";

function FoundCardArray() {
  const [pointer, setPointer] = useState(1);
  const  category="onlyfound";
  const { loading, hasMore, data } = useLostFoundData(pointer,category);
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
          return <LostFoundSkeleton key={index} />;
        })}
      {data?.map((cardData, index) => {
        if (data.length === index + 1) {
          return (
            <Box ref={lastCardElementRef} key={cardData._id}>
              <LostFoundCard data={cardData} flag={3} showDelete={false} />
            </Box>
          );
        } else {
          return (
            <Box key={cardData._id}>
              <LostFoundCard data={cardData} flag={3} showDelete={false} />
            </Box>
          );
        }
      })}
      {!loading && data?.length === 0 && !hasMore && (
        <EmptySpace source={lostFoundEmpty.foundItems} />
      )}
    </>
  );
}

export default FoundCardArray;
