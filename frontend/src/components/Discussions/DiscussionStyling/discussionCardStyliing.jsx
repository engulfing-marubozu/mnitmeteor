import { makeStyles } from '@mui/styles';
export const DiscussionCardStyle = makeStyles({
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
            padding: "1rem 0.2rem",
        }
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
    }
});
// ===================================================================================================================================================================================
export const DiscussionHomePageCardStyle = makeStyles({
    dHomePaperStyle: {
        margin: "0.5rem 1.5rem",
        backgroundColor: "white",
        maxWidth: "600px",
        padding: "1.3rem",
        display: "flex",
        flexDirection: "row",
        maxHeight: "280px",
    },
    dHomeActionBox: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingTop: "0.5rem",
    },
    dHomeActionDate: {
        marginLeft: "1rem",
        color: "#757575",
    },
    dHomeDateIconWrapper: {
        flexDirection: "row",
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "space-between",
        marginTop: 0,
    }

})
// ====================================================================================================================================================================================
export const DiscussionCommonStyle = makeStyles({
    dProfileIcon: {
        backgroundColor: "#673ab7",
        height: 30,
        width: 30,
        "@media (max-width: 600px)": {
            height: 26,
            width: 26,
        },

    },
    dPostBy: {
        paddingLeft: "5px",
        color: "#757575"
    },
    dStack: {
        flexDirection: "row",
        alignItems: "center"
    },
    dUsername: {
        fontWeight: "bold",
        paddingLeft: "5px",
    }
})


// ===============================================================================================================================================================================
export const LikeButtonStyle = makeStyles({
    likeCardBox: {
        display: 'flex',
        flexDirection: 'column',
        paddingRight: "1rem",
        paddingLeft: "0.35rem",
        paddingTop: 0.8,
        "@media (max-width: 900px)": {
            paddingRight: "0.8rem"
        },
        "@media (max-width: 600px)": {
            paddingRight: "0.5rem"
        },
    },
    likeCardCount: {
        fontSize: "1rem",
        margin: "0rem auto",
        fontWeight: "bold",
        color: (props) => props.totalCount > 0 ? "#00c853" : props.totalCount < 0 ? "#bf360c" : "#212121",
    },
    likeIncButton: {
        padding: 0.2,
        color: (props) => props.likeStatus ? "#00c853" : "#212121",
    },
    likeDecButton: {
        padding: 0.2,
        color: (props) => props.dislikeStatus ? "#bf360c" : "#212121",
    }
    ,
    likeCommentCount: {
        fontSize: "0.8rem",
        margin: "0rem auto",
        fontWeight: "bold",
        color: (props) => props.totalCount > 0 ? "#00c853" : props.totalCount < 0 ? "#bf360c" : "#212121",
    },
})


// =====================================CommentReplyStyle==========================================================================================================================
export const CommentReplyStyle = makeStyles({
    topBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    topStack: {
        flexDirection: "row",
        alignItems: "center"
    },
    avatarStyle: {
        width: 28,
        height: 28,
        backgroundColor: "#673ab7",
        "@media (max-width: 600px)": {
            width: 24,
            height: 24,
        }
    },
    dateStyle: {
        paddingLeft: 3,
        color: "#757575",
        fontSize: "12px",
        "@media (max-width: 600px)": {
            paddingLeft: 4,
        }
    },
    usernameStyle: {
        color: "#512da8",
        fontWeight: "bold",
        // padding: "0px 8px",
        margin: "0px 8px",
        fontSize: "0.95rem",
        "@media (max-width: 900px)": {
          margin:"0px 6px",
        },
        "@media (max-width: 600px)": {
            fontSize: "0.85rem",
            margin:"0px 5px"
        }
    },
    actionBoxStyle: {
        marginTop: "8px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    contentBox: {
        fontSize: "14px",
        marginBottom: 0.4,
    },
    mainBox: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    }

})