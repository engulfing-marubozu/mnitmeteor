import { makeStyles } from '@mui/styles';
export const LostFoundCardStyle = makeStyles({
    lfpaperStyle: {
        backgroundColor: "white",
        maxWidth: "700px",
        padding: "0.3rem",
        display: "flex",
        flexDirection: "column",
        margin: "0rem 2rem",
        "@media (max-width: 600px)": {
            margin: "0rem",
        }
    },
});