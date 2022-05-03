import React, { useState, useRef, useCallback} from "react";
import useDiscussionData from "../useDiscussionData";
import DiscussionCard from "./discussionCard";
import Box from "@mui/material/Box";
import DiscussionSkeleton from "../discussionSkeleton";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { DiscussionEmpty } from "../../_EmptySpaces/EmptySvg";
function DiscussionCardArray() {
  const [pointer, setPointer] = useState(1);
  const localUserData = JSON.parse(window.localStorage.getItem("auth"));
  const userId = localUserData?.user?._id;
  const { loading, hasMore, data } = useDiscussionData(userId, pointer);
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
        if (data.length === index + 1) {
          return (
            <Box ref={lastCardElementRef} key={cardData._id}>
              <DiscussionCard data={cardData} flag={1} deleteShow={false} />
            </Box>
          );
        } else {
          return (
            <Box key={cardData._id}>
              <DiscussionCard data={cardData} flag={1} deleteShow={false} />
            </Box>
          );
        }
      })}
      {!loading && data?.length === 0 && !hasMore && (
        <EmptySpace source={DiscussionEmpty.explore} />
      )}
    </>
  );
}

export default DiscussionCardArray;
