import { makeStyles } from '@mui/styles';
export const LostFoundCardStyle = makeStyles({
    lfcontainer: {
        display: "flex",
        alignItems: "flex-start",
        width: "100%",
        marginTop: "1rem",
        flexDirection: "column"
    },
    lfpaperStyle: {
        backgroundColor: "white",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        "@media (max-width: 600px)": {
            margin: "0rem",
        }
    },
    descriptionBox: {
        wordBreak: "break-all",
        maxHeight: "60px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
    },
    lfcategory: {
        
        fontSize: "16px",
        fontWeight: "bold",
        color: (props) => props.category === "Found" ? "#00c853" : "#d32f2f",
    }
});