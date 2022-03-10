import { makeStyles } from '@mui/styles';
export const DiscussionCardStyle = makeStyles({
    dpaperStyle: {
        backgroundColor: "white",
        maxWidth: "700px",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "row",
        margin: "0rem 2rem",
        "@media (max-width: 920px)": {
            padding: "1.5rem 0.6rem",
        },
        "@media (max-width: 600px)": {
            margin: "0rem",
        }
    },
    dactionBox: {
        display: "flex",
        flexDirection: "row",
        width: "94%",
        justifyContent: "space-between",
        paddingTop: "0.5rem",
        "@media (max-width: 920px)": {
            flexDirection: "column"
        }
    },
    dactionDate: {
        marginLeft: "1rem",
        color: "#757575",
        "@media (max-width: 920px)": {
            marginLeft: "2.2rem",
        },
        "@media (max-width: 600px)": {
            marginLeft: "2rem",
        }
    },
    ddateIconWrapper: {
        flexDirection: "row",
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "space-between",
        marginTop: 0,
        "@media (max-width: 600px)": {
            alignItems: "flex-start",
        },
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
        color: "#512da8",
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