import { makeStyles } from '@mui/styles';

export const NotificationCardStyle = makeStyles({
    cardMainBox: {
        marginBottom: "0.8rem",
        // backgroundColor: prop => prop > 0 ? "#e8f5e9" : prop < 0 ? "#ffebee" : "#ede7f6"
    },
    headingContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    heading: {
        fontWeight: "revert",
        color: prop => prop > 0 ? "#2e7d32" : prop < 0 ? "#c62828" : "#673ab7",
    },
    indicator: {
        width: "20px",
        borderRadius: "4px 0px 0px 4px",
        backgroundColor: prop => prop > 0 ? "#2e7d32" : prop < 0 ? "#c62828" : "#673ab7",
    },
    indicatorWrapper: {
        display: "flex",
        flexDirection: "row",
    },
    contentBox: {
        padding: "4px 6px 8px",
        width: "100%"
    },
    readMore: {
        color: prop => prop > 0 ? "#2e7d32" : prop < 0 ? "#c62828" : "#673ab7",
        // fontWeight: "bold",
        // fontSize: "16px"
    }

})
export const NotificationPageStyle = makeStyles({
    mainBox: {
        // display:"flex",
        padding: "1rem",
        width: "420px",
        "@media (max-width: 600px)": {
            width: "320px"
        }
    },
    headingContainer: {
        marginBottom: "1rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    heading: {
        fontWeight: "bold",
        fontSize: "18px"
    }
})