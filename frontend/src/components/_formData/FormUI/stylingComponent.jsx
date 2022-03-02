
import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles({
    mainBox: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        padding:"3rem 0rem",
        flexDirection: "column",
    },
    boldText: {
        fontWeight: "bold",
        fontSize: "1.2rem",
        "@media (max-width: 600px)": {
            fontSize: "0.85rem"
        },
    },
    headingText: {
        fontWeight: "bold",
        color:"#edf2ff",
        fontSize: "1.5rem",
        "@media (max-width: 600px)": {
            fontSize: "1.2rem"
        },
    },
    paperStyle: {
        width: "55%",
        // width: "800px", 
        height: "auto",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        "@media (max-width: 1200px)": {
            width: "65%",
        },
        "@media (max-width: 900px)": {
            width: "75%",
        },
        "@media (max-width: 600px)": {
            width: "90%",
        },
    },
    headingBox: {
        backgroundColor:"#5e35b1",
        padding: "1.5rem 3rem",
        borderRadius:"1rem 1rem 0rem 0rem ",
        // borderBottom: "1px solid  #e0e0e0",
        "@media (max-width: 600px)": {
            padding: "1.5rem",
        },
    },
    ContentBox: {
        padding: "2rem 3rem",
        borderBottom: "1px solid  #e0e0e0",
        "@media (max-width: 600px)": {
            padding: " 1.3rem 1.5rem",
        },
    },
    imageUploadBox: {
        border: (props) => (props.error && props.touched) ? "1px solid #d50000" : "1px solid #bdbdbd",
        borderRadius: "4px",
        margin: "0.6rem 0rem 0rem ",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        '&:hover': {
            border: (props) => (props.error && props.touched) ? "1px solid #d50000" : "1px solid #212121",
        }
    },
    helperText: {
        fontWeight: "400",
        fontSize: "0.75rem",
        color: "rgba(0, 0, 0, 0.6)",
        margin: "3px 14px 0px ",
    },
    warningText: {
        fontWeight: "400",
        fontSize: "0.75rem",
        color: "#d50000",
        margin: "3px 14px 0px ",
    },
});
