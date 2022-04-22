import { Typography } from "@mui/material";
import React, { useState } from "react";
import { NotificationCardStyle } from "./notificationStyling";
const NotificationReadMore = ({ children, data }) => {
    const text = children;
    const textLength = text?.length;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    const classes = NotificationCardStyle(data);
    return (
        <Typography variant="body2" >
            {isReadMore ? text.slice(0, 90) : text}
            {
                textLength > 90 && (<span onClick={toggleReadMore} className={classes.readMore} >
                    {isReadMore ? "  ...read more" : "  show less"}
                </span>)
            }
        </Typography>
    );
};
export default NotificationReadMore;
// style={{ color: "#673ab7",  }