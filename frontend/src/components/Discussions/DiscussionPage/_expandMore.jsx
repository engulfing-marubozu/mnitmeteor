import React from "react"
import { styled,Box } from "@mui/material"

export const ExpandMore = styled((props) => {
    const { expand, children, ...other } = props;
    return (
        <Box {...other}>
            {children}
        </Box>
    )
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
