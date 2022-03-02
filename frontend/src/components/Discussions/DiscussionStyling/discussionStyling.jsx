import styled from "styled-components";
import { Button } from "@mui/material";
import { makeStyles } from '@mui/styles';
export const ReplyButton = styled.a`
font-size: 11px;
font-weight: 500;
text-decoration: none;
text-align:center;

&:hover {
  cursor:pointer ;
  color:#008000;
 }
 @media (max-width: 600px) {
   margin-left:0.35rem
 }
`;
export const CommentDeleteButton = styled.a`
font-size: 11px;
font-weight: 500;
text-decoration: none;
text-align:center;
margin-left:1rem;
&:hover {
  cursor:pointer ;
  color:#FF0000;
 }
`;
export const ViewRepliesButton = styled.a`
font-size: 11px;
font-weight: 500;
text-decoration: none;
text-align:center;

&:hover {
  cursor:pointer ;
  color:#5e35b1;
 }
`;
export const CommentButton = styled(Button)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "0.7rem",
  fontWeight: "bold",
  backgroundColor: "transparent",
}));


export const verticalNavigationStyle = makeStyles({
  outerBox: {
    // display:"static"
    margin: "2rem 0rem",
    display: "flex",
    justifyContent: "flex-end"
  },
  paperStyle: {
   
    width: "60%",
    marginRight:"1rem",
    marginLeft:"2rem",
    "@media (max-width: 1200px)": {
      width: "70%",
    },
    "@media (max-width: 900px)": {
      width: "100%",
    },
    "@media (max-width: 800px)": {
      marginRight:"0rem",
    },
  },
  iconLabelWrapper: {
    flexDirection: "row",
  },
})
