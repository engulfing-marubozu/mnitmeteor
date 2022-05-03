import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Box,
  Paper,
  Avatar,
  Stack,
  IconButton,
  CardHeader,
  Tooltip,
  Link,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import ShareIcon from "@mui/icons-material/Share";
import Comments from "./comment";
import AddCommentBox from "./addCommentBox";
import Collapse from "@mui/material/Collapse";
import {
  DiscussionCardStyle,
  LikeButtonStyle,
} from "../DiscussionStyling/discussionCardStyliing";
import { TimeSince } from "../../TimeElapsed/timecalc";
import { useDispatch } from "react-redux";
import {
  actionForLikeThread,
  modelPopUp,
} from "../../../AStatemanagement/Actions/userActions";
import MessageIcon from "@mui/icons-material/Message";
import { ExpandMore } from "./_expandMore";
import { ViewMoreButton } from "../DiscussionStyling/discussionStyling";
import { useSelector } from "react-redux";
import axios from "axios";
import { RWebShare } from "react-web-share";
import { LikeDislikeChecker } from "./likeDislikeChecker";
import ThreadDeleteAlert from "../DeleteAlerts/threadDeletealert";
import ReadMore from "../../_Styling/readmore";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
// ================================================================================================================================================================================================================================
function DiscussionCard({ data, flag, showDelete,setThread }) {
  // console.log(setThreadDelete,setPointer)
  const [localCardData, setLocalCardData] = useState(data);
  const [commentVisible, setCommentVisible] = useState(4);
  const [saved, setSaved] = useState(false);
  const [expanded, setExpanded] = useState(false);
  // =================================================================================================================================================================================================================================
  const dispatch = useDispatch();
  const localUserData = useSelector((state) => state.loginlogoutReducer);
  const token = localUserData?.token;
  const isLoggedIn = localUserData?.isLogin;
  const userLoggedIn = localUserData?.userData?._id;
  const addCommentData = {
    token: token,
    cardId: data?._id,
    commentId: null,
    replyId: null,
    repliedTo: null,
  };
  // ==================================================================
  const handleExpandClick = () => {
    setExpanded(!expanded);
    setCommentVisible(4);
  };

  // ===========================================================LIKEHANDLER=====================================================================================================================================================
  // console.log(data);
  const likes = data.likes;
  const dislikes = data.dislikes;
  const likeStatus = LikeDislikeChecker(likes, userLoggedIn);
  const dislikeStatus = LikeDislikeChecker(dislikes, userLoggedIn);
  const totalCount = likes.length - dislikes.length;
  const [likeDislike, setLikeDislike] = useState({
    likeStatus: likeStatus,
    dislikeStatus: dislikeStatus,
    totalCount: totalCount,
  });

  // ==================================================================================================================================
  const likeIncreaseHandler = () => {
    if (isLoggedIn) {
      if (!likeDislike.likeStatus && !likeDislike.dislikeStatus) {
        setLikeDislike((prev) => {
          return {
            ...prev,
            likeStatus: !prev.likeStatus,
            totalCount: prev.totalCount + 1,
          };
        });

        const data = { status: "true1", ...addCommentData };
        dispatch(actionForLikeThread(data));
      } else if (!likeDislike.likeStatus && likeDislike.dislikeStatus) {
        setLikeDislike((prev) => {
          return {
            ...prev,
            likeStatus: !prev.likeStatus,
            dislikeStatus: !prev.dislikeStatus,
            totalCount: prev.totalCount + 2,
          };
        });

        const data = { status: "true1", ...addCommentData };
        dispatch(actionForLikeThread(data));
      } else if (likeDislike.likeStatus && !likeDislike.dislikeStatus) {
        setLikeDislike((prev) => {
          return {
            ...prev,
            likeStatus: !prev.likeStatus,
            totalCount: prev.totalCount - 1,
          };
        });
        const data = { status: "false2", ...addCommentData };
        dispatch(actionForLikeThread(data));
      }
    } else {
      dispatch(modelPopUp(true));
    }
  };
  const likeDecreaseHandler = () => {
    if (isLoggedIn) {
      if (!likeDislike.likeStatus && !likeDislike.dislikeStatus) {
        setLikeDislike((prev) => {
          return {
            ...prev,
            dislikeStatus: !prev.likeStatus,
            totalCount: prev.totalCount - 1,
          };
        });

        const data = { status: "false1", ...addCommentData };
        dispatch(actionForLikeThread(data));
      } else if (likeDislike.likeStatus && !likeDislike.dislikeStatus) {
        setLikeDislike((prev) => {
          return {
            ...prev,
            likeStatus: !prev.likeStatus,
            dislikeStatus: !prev.dislikeStatus,
            totalCount: prev.totalCount - 2,
          };
        });
        const data = { status: "false1", ...addCommentData };
        dispatch(actionForLikeThread(data));
      } else if (!likeDislike.likeStatus && likeDislike.dislikeStatus) {
        setLikeDislike((prev) => {
          return {
            ...prev,
            dislikeStatus: !prev.dislikeStatus,
            totalCount: prev.totalCount + 1,
          };
        });
        const data = { status: "true2", ...addCommentData };
        dispatch(actionForLikeThread(data));
      }
    } else {
      dispatch(modelPopUp(true));
    }
  };
  // ===================================================================================================================================================================================================================================

  const title = localCardData?.title;
  const description = localCardData?.description;
  const date = new Date(localCardData?.createdAt);
  const properDate = TimeSince(date);
  const userId = localCardData?.users_mnit_id;
  const comments = localCardData?.discussions.slice(0).reverse();
  const cardId = localCardData?._id;
  const commentCount = localCardData?.discussions.length;
  const document = localCardData?.document;
  // ============================================================================================================================
  const classes = DiscussionCardStyle();
  const likeButton = LikeButtonStyle(likeDislike);
  // ============================================================================================================================
  const delFlag = localCardData?.posted_by === userLoggedIn;
  const actionData = { delFlag: delFlag, userLoggedIn: userLoggedIn };
  // =============================================================================================================================

  const SavedHandler = async () => {
    if (isLoggedIn) {
      setSaved(!saved);
      try {
        const thread_id = cardId;
        // const response =
        await axios.post(
          `${process.env.REACT_APP_API}/save_threads`,
          { thread_id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      dispatch(modelPopUp(true));
    }
  };

  // =============================================================================================
  const CommentVisibleHandler = () => {
    setCommentVisible((prev) => {
      return prev + 3 < commentCount ? prev + 3 : commentCount;
    });
  };

  // ========================================================================================================================================================================================================================================
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box className={classes.dmainBox}>
        <Paper className={classes.dpaperStyle}>
          <Box className={likeButton.likeCardBox}>
            <IconButton
              className={likeButton.likeIncButton}
              onClick={likeIncreaseHandler}
            >
              <Tooltip title="Upvote" arrow placement="left">
                <ArrowUpwardIcon />
              </Tooltip>
            </IconButton>
            <Stack className={likeButton.likeCardCount}>
              {Math.abs(likeDislike.totalCount)}
            </Stack>
            <IconButton
              className={likeButton.likeDecButton}
              onClick={likeDecreaseHandler}
            >
              <Tooltip title="Downvote" arrow placement="left">
                <ArrowDownwardIcon />
              </Tooltip>
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Box sx={{ width: "94%", borderBottom: "2px  solid #757575" }}>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: "#673ab7" }} />}
                title={userId}
                subheader={properDate}
                sx={{ p: 0 }}
              />
              <Typography variant="h6" sx={{ my: 1.5, lineHeight: 1.3 }}>
                {title}
              </Typography>
              {/* <Typography color="text.secondary" sx={{ mb: 1 }} > */}
              <ReadMore words={220}>{description}</ReadMore>
              {document && (
                <Box>
                  <Link
                    className={classes.pdfContainer}
                    href={document}
                    target="_blank"
                  >
                    <PictureAsPdfIcon color="error" fontSize="small" />
                    <Typography noWrap className={classes.fileName}>
                      mypdfdocument
                    </Typography>
                  </Link>
                </Box>
              )}
            </Box>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Box sx={{ width: "94%" }}>
                <AddCommentBox
                  addCommentData={addCommentData}
                  setLocalCardData={setLocalCardData}
                />

                {typeof comments !== "undefined" &&
                  comments?.slice(0, commentVisible)?.map((data, index) => {
                    return (
                      <Comments
                        setLocalCardData={setLocalCardData}
                        addCommentData={addCommentData}
                        commentData={data}
                        key={data._id}
                        actionData={actionData}
                      ></Comments>
                    );
                  })}
                {commentVisible < commentCount && (
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <ViewMoreButton onClick={CommentVisibleHandler}>
                      View more comments ({commentCount - commentVisible})
                    </ViewMoreButton>
                  </Box>
                )}
              </Box>
            </Collapse>
            <Box className={classes.dactionBox}>
              <Stack className={classes.dIconWrapper}>
                <IconButton onClick={SavedHandler}>
                  <Tooltip title="Save" arrow>
                    {saved ? (
                      <BookmarkAddedIcon color="primary" />
                    ) : (
                      <BookmarkAddIcon />
                    )}
                  </Tooltip>
                </IconButton>

                {isLoggedIn && delFlag && showDelete && (
                  <ThreadDeleteAlert
                    threadData={addCommentData}
                    setThread={setThread}
                    flag={flag}
                  />
                )}
                <RWebShare
                  data={{
                    text: "Mnit Market",
                    url: `http://localhost:3000/Discussions/${cardId}`,
                    title: `${title}`,
                  }}
                  onClick={() => console.log("shared successfully!")}
                >
                  <IconButton>
                    <Tooltip title="Share" arrow>
                      <ShareIcon color="primary" />
                    </Tooltip>
                  </IconButton>
                </RWebShare>
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
              <Typography
                variant="body2"
                sx={{ mt: 1, pt: 0, fontWeight: "bold" }}
              >
                {commentCount > 0 ? commentCount : " "}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </motion.div>
  );
}
export default DiscussionCard;
