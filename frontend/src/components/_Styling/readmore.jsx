import { Typography } from "@mui/material";
import React, { useState } from "react";
const ReadMore = ({ children, words }) => {
    const text = children;
    const textLength = text?.length;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <Typography color="text.secondary" sx={{ mb: 1, whiteSpace: "pre-line", }} >
            {isReadMore ? text.slice(0, words) : text}
            {
                textLength > words && (<span onClick={toggleReadMore} style={{ color: "#673ab7", fontWeight: "bold", fontSize: "16px" }}>
                    {isReadMore ? "  ...read more" : "  show less"}
                </span>)
            }
        </Typography>
    );
};
export default ReadMore;