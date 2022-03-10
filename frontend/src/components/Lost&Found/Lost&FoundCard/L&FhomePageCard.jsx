
import React from 'react';
import { Card, CardHeader, CardContent, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
export default function LostFoundHomePageCard() {

    return (
        <Box sx={{ m: "0.5rem 1.5rem" }}>
            <Card sx={{ maxWidth: "600px" }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "#673ab7" }} />
                    }
                    action={
                        <IconButton >
                            <ShareIcon sx={{ color: "#673ab7" }} />
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardContent sx={{ py: 0 }} >
                    <Typography variant="h6"
                        sx={{
                            wordBreak: "break-all", lineHeight: 1.3,textOverflow: "ellipsis", display: "-webkit-box",
                            height: "30px", overflow: "hidden", 
                            WebkitLineClamp: 1, WebkitBoxOrient: "vertical",
                        }} >
                        Boat Earphone
                    </Typography>
                    <Typography variant="body2" color="text.secondary"
                        sx={{
                            wordBreak: "break-all", height: "80px", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box",
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: "vertical",
                        }}>
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                    </Typography>
                </CardContent>
            </Card >
        </Box>

    );
}