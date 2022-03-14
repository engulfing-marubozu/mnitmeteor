import React from 'react'
import { Box,Skeleton } from "@mui/material";

function HomeCardSkeleton() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "280px" }}>
            <Skeleton variant="rectangular" maxwidth={"280px"} height={"160px"} />
            <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
            </Box>
        </Box>
    )
}

export default HomeCardSkeleton;