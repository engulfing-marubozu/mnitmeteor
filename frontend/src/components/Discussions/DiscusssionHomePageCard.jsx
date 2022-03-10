import React from 'react'
import { Box, Paper, IconButton, Typography, Stack, Avatar } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import { DiscussionHomePageCardStyle, DiscussionCommonStyle } from './DiscussionStyling/discussionCardStyliing';
export default function DiscusssionHomePageCard() {
    const classes = DiscussionHomePageCardStyle()
    const comClasses = DiscussionCommonStyle();
    return (
        <Paper className={classes.dHomePaperStyle} >
            <Box>
                <Box sx={{ width: "100%", borderBottom: '2px  solid #757575' }}>
                    <Typography variant='h6'
                        sx={{
                            mb: 0.5, wordBreak: "break-all", lineHeight: 1.3,
                            height: "30px", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box",
                            WebkitLineClamp: 1, WebkitBoxOrient: "vertical",
                        }}>
                        What does the fox say    Lorem ipsum dolor, sit amet consectetur adipisicing elit.?
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            mb: 1, wordBreak: "break-all", height: "120px", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box",
                            WebkitLineClamp: 6,
                            WebkitBoxOrient: "vertical",
                        }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Numquam quis laudantium deleniti vel est recusandae, doloremque sequi,
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Numquam quis laudantium deleniti vel est recusandae, doloremque sequi,   Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Numquam quis laudantium deleniti vel est recusandae, doloremque sequi,am quis laudantium deleniti vel est recusandae, doloremque sequi,   Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Numquam quis laudantium deleniti vel est recusandae, doloremque sequi,
                    </Typography>
                </Box>
                <Box className={classes.dHomeActionBox}>
                    <Stack className={comClasses.dStack}>
                        <Avatar className={comClasses.dProfileIcon} />
                        <Typography variant='body2' className={comClasses.dPostBy}> Posted by</Typography>
                        <Typography className={comClasses.dUsername}>2019ume1827</Typography>
                    </Stack>
                    <Stack className={classes.dHomeDateIconWrapper} >
                        <Typography variant="body2" className={classes.dHomeActionDate}>26 sep 2020</Typography>
                        <Stack className={comClasses.dStack} >
                            <IconButton sx={{ p: "0.3rem" }}>
                                <ShareIcon sx={{ color: "#673ab7" }} fontSize="small" />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Paper>
    )
}
