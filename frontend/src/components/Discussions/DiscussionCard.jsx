import React, { useState } from 'react'
import { Typography, Box, Paper, Avatar, Stack, styled } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Comments from './Comment';
import AddCommentBox from './addCommentBox';
import Collapse from '@mui/material/Collapse';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <MessageIcon sx={{ color: "#757575" }}  {...other} />
})(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
function DiscussionCard() {
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box display={"flex"} alignItems={"center"} sx={{ width: "100%", my: "3rem", flexDirection: "column" }}>
            <Paper sx={{ bgcolor: "white", maxWidth: "800px", px: { xs: "0.5rem", sm: "1.5rem", md: "1.5rem" }, py: "1.5rem", display: "flex", flexDirection: "row" }}>
                <Box display={'flex'} flexDirection={'column'} sx={{ pr: { xs: "0.5rem", sm: "0.8rem", md: "1rem" }, pt: 0.8 }}>
                    <ArrowUpwardIcon />
                    <ArrowDownwardIcon />
                </Box>
                <Box>
                    <Box sx={{ width: "94%", borderBottom: '2px  solid #757575', height: "auto" }}>
                        <Typography variant='h5' sx={{ mb: 1.5 }}>What does the fox say ?</Typography>
                        <Typography sx={{ mb: 1.5, wordBreak: "break-all" }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Numquam quis laudantium deleniti vel est recusandae, doloremque sequi,
                            nostrum non modi illo esse tempora placeat saepe consequatur odit
                            architecto incidunt nobis aspernatur repudiandae odio, fugiat quos.
                            Cupiditate laboriosam aspernatur voluptatem! Facere molestias aliquam
                            vel maxime ab nostrum distinctio hic mollitia, ipsa voluptatibus sit
                            dolores pariatur repellat doloribus commodi odit excepturi tempore.
                        </Typography>
                    </Box>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Box>
                            <Comments />
                            <Comments />
                            <Comments />
                            <AddCommentBox />
                        </Box>
                    </Collapse>
                    <Box sx={{ display: "flex", flexDirection: { xs: 'column', sm: "row" }, width: "94%", justifyContent: "space-between", pt: "1rem" }}>
                        <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
                            <Avatar sx={{ height: { xs: 26, sm: 30 }, width: { xs: 26, sm: 30 } }}></Avatar>
                            <Typography variant='body2' sx={{ pl: 1, color: "#757575" }}> Posted by</Typography>
                            <Typography sx={{ color: "#512da8", fontWeight: "bold", px: 1 }}>2019ume1827</Typography>
                        </Stack>
                        <Stack sx={{ flexDirection: "row", alignItems: { xs: "flex-start", sm: "center" }, flexGrow: 1, justifyContent: "space-between", mt: { xs: 0, sm: 0 } }}>
                            <Typography variant="body2" sx={{ pl: { sm: 3, xs: 4 }, color: "#757575" }}>26 sep 2020</Typography>
                            <Stack sx={{ flexDirection: "row", alignItems: "flex-start" }}  >
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                >
                                </ExpandMore>
                                <Typography variant="body2" sx={{ color: "#757575", pt: 0 }}>50+</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
            </Paper>

        </Box>
    )
}

export default DiscussionCard