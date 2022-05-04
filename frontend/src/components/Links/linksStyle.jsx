import { makeStyles } from "@mui/styles";
export const  noteStyle=makeStyles({
    mainBox:{
        width:"100%",
        padding: "12px 72px",
        "@media(max-width:1200px)": {
          padding: "12px 38px",
        },
        "@media(max-width:900px)": {
          padding: "12px 24px",
        },
        "@media(max-width:600px)": {
          padding: "12px 18px",
        },
    },
    container:{

    },
    typo:{
        fontSize:"20px",
    },
    heading:{
        fontWeight:"bold",
        fontSize:"32px",
    }

})