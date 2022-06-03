import { makeStyles } from "@mui/styles";
export const DiscussionCardStyle = makeStyles({
  dmainBox: {
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
    marginTop: "1rem ",
  },
  dpaperStyle: {
    backgroundColor: "white",
    width: "100%",
    padding: "1.5rem 1rem  0.8rem",
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 1200px)": {
      padding: "1rem 0.5rem",
    },
    "@media (max-width: 1000px)": {
      padding: "1rem 0.5rem",
    },
    "@media (max-width: 600px)": {
      margin: "0rem",
      padding: "1rem 0.2rem 0.5rem",
    },
  },
  dcontentBox: {
    display: "flex",
    flexDirection: "column",
    width: "92%",
    "@media (max-width: 780px)": {
      width: "90%",
    },
    "@media (max-width: 380px)": {
      width: "88%",
    },
  },

  dactionBox: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    width: "94%",
    justifyContent: "space-between",
  },
  dIconWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 0,
  },
  pdfContainer: {
    width: "140px",
    display: "flex",
    flexDirection: "row",
    margin: "8px 0px",
    alignItems: "center",
    border: "1px solid  #e0e0e0",
    borderRadius: "4px",
    padding: "2px",
    textDecoration: "none",
  },
  fileName: {
    width: "120px",
    padding: "0px 2px 3px ",
  },
});

// ====================================================================================================================================================================================
export const DiscussionCommonStyle = makeStyles({
  dProfileIcon: {
    height: 30,
    width: 30,
    "@media (max-width: 600px)": {
      height: 26,
      width: 26,
    },
  },
  dPostBy: {
    paddingLeft: "5px",
    color: "#757575",
  },
  dStack: {
    flexDirection: "row",
    alignItems: "center",
  },
  dUsername: {
    fontWeight: "bold",
    paddingLeft: "5px",
  },
});

// ===============================================================================================================================================================================
export const LikeButtonStyle = makeStyles({
  likeCardBox: {
    display: "flex",
    flexDirection: "column",
    paddingRight: "1rem",
    paddingLeft: "0.35rem",
    paddingTop: 0.8,
    "@media (max-width: 900px)": {
      paddingRight: "0.8rem",
    },
    "@media (max-width: 600px)": {
      paddingRight: "0.5rem",
    },
  },
  likeCardCount: {
    fontSize: "1rem",
    margin: "0rem auto",
    fontWeight: "bold",
    color: (props) =>
      props.totalCount > 0
        ? "#00c853"
        : props.totalCount < 0
        ? "#bf360c"
        : "#212121",
  },
  likeIncButton: {
    padding: 0.2,
    color: (props) => (props.likeStatus ? "#00c853" : "#212121"),
  },
  likeDecButton: {
    padding: 0.2,
    color: (props) => (props.dislikeStatus ? "#bf360c" : "#212121"),
  },
  likeCommentCount: {
    fontSize: "0.8rem",
    margin: "0rem auto",
    fontWeight: "bold",
    color: (props) =>
      props.totalCount > 0
        ? "#00c853"
        : props.totalCount < 0
        ? "#bf360c"
        : "#212121",
  },
});

// =====================================CommentReplyStyle==========================================================================================================================
export const CommentReplyStyle = makeStyles({
  mainBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  topBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topStack: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarStyle: {
    width: 28,
    height: 28,
    backgroundColor: "#673ab7",

    "@media (max-width: 600px)": {
      width: 24,
      height: 24,
    },
  },
  dateStyle: {
    paddingLeft: 3,
    color: "#757575",
    fontSize: "12px",
    "@media (max-width: 600px)": {
      paddingLeft: 4,
    },
  },
  usernameStyle: {
    // color: "#512da8",
    fontWeight: "bold",
    // padding: "0px 8px",
    margin: "0px 8px",
    fontSize: "0.95rem",
    "@media (max-width: 900px)": {
      margin: "0px 6px",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.85rem",
      margin: "0px 5px",
    },
  },
  actionBoxStyle: {
    marginTop: "8px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  replyActionBox: {
    marginTop: "8px",
    display: "flex",
    flexDirection: "row",
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  },
  contentBox: {
    fontSize: "14px",
    marginBottom: 0.4,
    wordBreak: "break-word",
    overflowWrap: "break-word",
  },
  repliedTo: {
    fontSize: "11px",
    marginRight: 3,
    color: "#7b1fa2",
  },
  rtStack: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
    marginLeft: "1rem",
  },
});
