import React, { useState, useRef, useCallback } from "react";
import Box from "@mui/material/Box";
import LostFoundCard from "./L&FCard";
import LostFoundSkeleton from "../lostfoundSkeleton";
import EmptySpace from "../../_EmptySpaces/emptySpace";
import { lostFoundEmpty } from "../../_EmptySpaces/EmptySvg";
import useLostFoundData from "../useLnfData";

function LostFoundCardArray() {
  const [pointer, setPointer] = useState(1);
  const category = "fetchlost";
  const { loading, hasMore, data } = useLostFoundData(pointer, category);
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
        if (cardData !== null) {
          if (data.length === index + 1) {
            return (
              <Box ref={lastCardElementRef} key={cardData._id}>
                <LostFoundCard data={cardData} flag={1} showDelete={false} />
              </Box>
            );
          } else {
            return (
              <Box key={cardData._id}>
                <LostFoundCard data={cardData} flag={1} showDelete={false} />
              </Box>
            );
          }
        } else return null;
      })}
      {!loading && data?.length === 0 && !hasMore && (
        <EmptySpace source={lostFoundEmpty.explore} />
      )}
    </>
  );
}

export default LostFoundCardArray;
