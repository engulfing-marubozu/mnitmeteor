import React, { useState } from "react";
import Typography from "@mui/material/Typography";
const ReadMore = ({ children, words, classname }) => {
  const text = children;
  const textLength = text?.length;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Typography
      color="text.secondary"
      sx={{ mb: 1, whiteSpace: "pre-line" }}
      className={classname}
    >
      {isReadMore ? text.slice(0, words) : text}
      {textLength > words && (
        <span
          onClick={toggleReadMore}
          style={{ color: "#673ab7", fontWeight: "bold", fontSize: "14px" }}
        >
          {isReadMore ? "  ...read more" : "  show less"}
        </span>
      )}
    </Typography>
  );  
};
export default ReadMore;
