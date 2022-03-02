import { makeStyles } from '@mui/styles';
export const DiscussionCardStyle = makeStyles({
    dpaperStyle: {
        backgroundColor: "white",
        maxWidth: "700px",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "row",
        margin: "0rem 2rem",
        "@media (max-width: 800px)": {
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
        paddingTop: "1rem",
        "@media (max-width: 800px)": {
            flexDirection: "column"
        }
    },
    dactionDate: {
        marginLeft: "1rem",
        color: "#757575",
        "@media (max-width: 800px)": {
            marginLeft: "2.5rem",
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
