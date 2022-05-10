import React, { useState, useRef, useCallback } from "react";
import useDiscussionData from "../useDiscussionData";
import DiscussionCard from "./discussionCard";
import Box from "@mui/material/Box";
import DiscussionSkeleton from "../discussionSkeleton";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { DiscussionEmpty } from "../../_EmptySpaces/EmptySvg";
import { useSelector } from "react-redux";
function DiscussionCardArray() {
  const [pointer, setPointer] = useState(1);
  // const userData = JSON.parse(window.localStorage.getItem("mm_user_data"));
  // const userId = userData?.userId;
  const userAuthData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
  const localUserData = useSelector((state) => state.loginlogoutReducer);
  const token = userAuthData ? userAuthData?.xezzi : localUserData?.token;
  const { loading, hasMore, data } = useDiscussionData(token, pointer);
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
                <DiscussionCard data={cardData} flag={1} showDelete={false} />
              </Box>
            );
          } else {
            return (
              <Box key={cardData._id}>
                <DiscussionCard data={cardData} flag={1} showDelete={false} />
              </Box>
            );
          }
        } else return null;
      })}
      {!loading && data?.length === 0 && !hasMore && (
        <EmptySpace source={DiscussionEmpty.explore} />
      )}
    </>
  );
}

export default DiscussionCardArray;
