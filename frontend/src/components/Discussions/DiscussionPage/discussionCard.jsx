import React, { useState } from 'react'
import { Typography, Box, Paper, Avatar, Stack, IconButton, CardHeader, Tooltip } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
// import AddBoxIcon from '@mui/icons-material/AddBox';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import Comments from './comment';
import AddCommentBox from './addCommentBox';
import Collapse from '@mui/material/Collapse';
import { DiscussionCardStyle, LikeButtonStyle } from '../DiscussionStyling/discussionCardStyliing';
import { TimeSince } from '../../TimeElapsed/timecalc';
import { useDispatch } from 'react-redux';
import { modelPopUp } from '../../../AStatemanagement/Actions/userActions';
import MessageIcon from '@mui/icons-material/Message';
import { ExpandMore } from "./_expandMore";
import { ViewMoreButton } from "../DiscussionStyling/discussionStyling";
import { useSelector } from "react-redux";

// ================================================================================================================================================================================================================================
function DiscussionCard({ data }) {

    const [localCardData, setLocalCardData] = useState(data);
    const [commentVisible, setCommentVisible] = useState(4);
    const [saved, setSaved] = useState(false);
    const [expanded, setExpanded] = useState(false);
    // =================================================================================================================================================================================================================================
    const dispatch = useDispatch();
    const localUserData = useSelector((state) => state.loginlogoutReducer);
    const token = localUserData?.token;
    const isLoggedIn = localUserData?.isLogin;
    const userLoggedIn = localUserData?.userData?._id
    // ================================================================================================================================================================================================================================
    const handleExpandClick = () => {
        if (isLoggedIn) {
            setExpanded(!expanded);
            setCommentVisible(4);
        } else {
            dispatch(modelPopUp(true));
        }

    };
    // =============================================================LIKEHANDLER=====================================================================================================================================================
    const [likeDislike, setLikeDislike] = useState({ likeStatus: false, dislikeStatus: false, totalCount: -7 })
    const likeIncreaseHandler = () => {
        if (isLoggedIn) {
            if (likeDislike.dislikeStatus && !likeDislike.likeStatus) {
                setLikeDislike((prev) => { return { ...prev, likeStatus: !prev.likeStatus, dislikeStatus: !prev.dislikeStatus, totalCount: (prev.totalCount + 2) } })
            }
            else if (!likeDislike.likeStatus) {
                setLikeDislike((prev) => { return { ...prev, likeStatus: !prev.likeStatus, totalCount: (prev.totalCount + 1) } })
            }
            else {
                setLikeDislike((prev) => { return { ...prev, likeStatus: !prev.likeStatus, totalCount: (prev.totalCount - 1) } })
            }
        }
        else {
            dispatch(modelPopUp(true));
        }

    }
    const likeDecreaseHandler = () => {
        if (isLoggedIn) {
            if (likeDislike.likeStatus && !likeDislike.dislikeStatus) {
                setLikeDislike((prev) => { return { ...prev, likeStatus: !prev.likeStatus, dislikeStatus: !prev.dislikeStatus, totalCount: (prev.totalCount - 2) } })
            }
            else if (!likeDislike.dislikeStatus) {
                setLikeDislike((prev) => { return { ...prev, dislikeStatus: !prev.dislikeStatus, totalCount: (prev.totalCount - 1) } })
            }
            else {
                setLikeDislike((prev) => { return { ...prev, dislikeStatus: !prev.dislikeStatus, totalCount: (prev.totalCount + 1) } })
            }
        } else {
            dispatch(modelPopUp(true));
        }
    }

    // ===================================================================================================================================================================================================================================
    // console.log(data);
    const title = localCardData?.title;
    const description = localCardData?.description;
    const date = new Date(localCardData?.createdAt);
    const properDate = TimeSince(date);
    const userId = localCardData?.users_mnit_id;
    const comments = localCardData?.discussions.slice(0).reverse();
    // const comments = localCardData?.discussions;
    const commentCount = localCardData?.discussions.length;
    // ===================================================================================================================================================================================================================================
    const classes = DiscussionCardStyle();
    const likeButton = LikeButtonStyle(likeDislike);
    // ======================================================================================================================================================================================================================================
    const addCommentData = { token: token, cardId: data?._id, commentId: null, }
    const delFlag = (localCardData?.posted_by === userLoggedIn);
    const actionData = { delFlag: delFlag, userLoggedIn: userLoggedIn };
    // ================================================================================================================================================================================================================================
    const SavedHandler = () => {
        if (isLoggedIn) {
            setSaved(!saved)
        } else {
            dispatch(modelPopUp(true));
        }
    }

    const CommentVisibleHandler = () => {
        setCommentVisible(prev => {
            return (prev + 3 < commentCount ? prev + 3 : commentCount)
        })
    }

    // ========================================================================================================================================================================================================================================
    return (
        <>
            <Box className={classes.dmainBox}>
                <Paper className={classes.dpaperStyle}>

                    <Box className={likeButton.likeCardBox}>
                        <IconButton className={likeButton.likeIncButton} onClick={likeIncreaseHandler}>
                            <Tooltip title="Upvote" arrow placement='left'><ArrowUpwardIcon /></Tooltip>
                        </IconButton>
                        <Stack className={likeButton.likeCardCount}>{Math.abs(likeDislike.totalCount)}</Stack>
                        <IconButton className={likeButton.likeDecButton} onClick={likeDecreaseHandler}>
                            <Tooltip title="Downvote" arrow placement='left'><ArrowDownwardIcon /></Tooltip>

                        </IconButton>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }} >
                        <Box sx={{ width: "94%", borderBottom: '2px  solid #757575' }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: "#673ab7" }} />
                                }
                                title={userId}
                                subheader={properDate}
                                sx={{ p: 0 }}
                            />
                            <Typography variant='h6' sx={{ my: 1.5, wordBreak: "break-all", lineHeight: 1.3 }}>
                                {title}
                            </Typography>
                            <Typography color="text.secondary" sx={{ mb: 1, wordBreak: "break-all", }} >
                                {description}
                            </Typography>
                        </Box>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <Box sx={{ width: "94%" }}>
                                <AddCommentBox addCommentData={addCommentData} setLocalCardData={setLocalCardData} />

                                {
                                    typeof (comments) !== "undefined" && (comments?.slice(0, commentVisible)?.map((data, index) => {
                                        return (
                                            <Comments addCommentData={addCommentData} commentData={data} key={data._id} actionData={actionData}></Comments>
                                        )
                                    }))
                                }
                                {(commentVisible < commentCount) && (
                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                        <ViewMoreButton onClick={CommentVisibleHandler}>View more comments ({commentCount - commentVisible}) </ViewMoreButton>
                                        {/* <AddBoxIcon/> */}
                                    </Box>
                                )
                                }
                            </Box>
                        </Collapse>
                        <Box className={classes.dactionBox}>
                            <Stack className={classes.dIconWrapper} >
                                <IconButton onClick={SavedHandler} >
                                    <Tooltip title="Save" arrow>
                                        {
                                            saved ? <BookmarkAddedIcon color="primary" /> : <BookmarkAddIcon />
                                        }
                                    </Tooltip>
                                </IconButton>

                                {
                                    delFlag && (
                                        // <Tooltip>
                                        <IconButton>
                                            <Tooltip title="Delete" arrow >
                                                <DeleteIcon />
                                            </Tooltip>
                                        </IconButton>)

                                }
                                <IconButton>
                                    <Tooltip title="Share" arrow>
                                        <ShareIcon color="primary" />
                                    </Tooltip>
                                </IconButton>

                            </Stack>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                            >
                                <IconButton sx={{ px: 0.5 }}>
                                    <Tooltip title="Comments" arrow>
                                        <MessageIcon sx={{ color: "#673ab7" }} />
                                    </Tooltip>
                                </IconButton>
                            </ExpandMore>
                            <Typography variant="body2" sx={{ color: "#757575", mt: 1, pt: 0 }}>{commentCount > 0 ? commentCount : ' '}</Typography>
                        </Box>
                    </Box>
                </Paper>
            </Box >
            {/* {
                deletePopUp && isLoggedIn && (
                    <POPUPElement
                        open={deletePopUp}
                        onClose={setDeletePopUp}
                        portelId={"alertPortal"}
                    >
                        <DiscriptionProductDelete
                            productId={productId}
                            onClose={setDeletePopUp}
                        />
                    </POPUPElement>
                )
            } */}
        </>

    )
}

export default DiscussionCard