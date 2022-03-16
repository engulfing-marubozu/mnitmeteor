import styled from "styled-components";
import { Button } from "@mui/material";
export const ReplyButton = styled.a`
font-size: 11px;
font-weight: 500;
text-decoration: none;
&:hover {
  cursor:pointer ;
  color:#00c853;
 }
`;
export const CommentDeleteButton = styled.a`
font-size: 11px;
font-weight: 500;
text-decoration: none;
margin-left:1rem;
margin-bottom:1px;
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
export const AddReplyButton = styled(Button)(({ theme }) => ({
  lineHeight: 1.5,
  textTransform: 'none',
  fontSize: "0.8rem",
  fontWeight: "bold",
}));


export const AddCommentButton = styled(Button)(({ theme }) => ({
  lineHeight: 1.5,
  textTransform: 'none',
  fontSize: "0.9rem",
  fontWeight: "bold",
  marginLeft: "auto  "
}));
export const ViewMoreButton = styled.a`

font-size: 12px;
font-weight: 500;
text-decoration: none;
text-align:center;
margin-bottom:5px;
&:hover {
  cursor:pointer ;
  color:#5e35b1;
 }
`;