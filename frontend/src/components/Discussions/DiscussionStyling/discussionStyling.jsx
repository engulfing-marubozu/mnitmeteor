import { styled } from '@mui/system';
import { Button } from "@mui/material";
export const ReplyButton = styled('a')({
  fontSize: '11px',
  fontWeight: '500',
  textDecoration: 'none',
  "&:hover": {
    cursor: 'pointer',
    color: '#00c853',
  }
});
export const CommentDeleteButton = styled('a')({
  fontSize: '11px',
  fontWeight: '500',
  textDecoration: 'none',
  marginLeft: '1rem',
  marginBottom: '1px',
  "&:hover": {
    cursor: 'pointer',
    color: '#FF0000',
  }
});
export const ViewRepliesButton = styled('a')({
  fontSize: '11px',
  fontWeight: '500',
  textDecoration: 'none',
  textAlign: 'center',
  "&:hover": {
    cursor: 'pointer',
    color: '#5e35b1',
  }
})
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
  marginLeft: "auto ",
  marginTop: "0.4rem"
}));
export const ViewMoreButton = styled('a')({
  fontSize: '12px',
  fontWeight: '500',
  textDecoration: 'none',
  textAlign: 'center',
  marginBottom: '5px',
  "&:hover": {
    cursor: 'pointer',
    color: '#5e35b1',
  }
});