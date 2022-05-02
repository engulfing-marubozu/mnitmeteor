import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import deepPurple from "@mui/material/colors/deepPurple";
import Button from "@mui/material/Button";

export const ModelColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[500],
  paddingLeft: "0.6rem",
  paddingRight: "0.6rem",
  fontSize: "0.8rem",
  "&:hover": {
    backgroundColor: deepPurple[700],
    borderColor: deepPurple[700],
  },
}));
export const ModelOutlinedButton = styled(Button)(({ theme }) => ({
  lineHeight: 1.5,
  borderColor: deepPurple[700],
  color: "black",
  fontSize: "0.8rem",
  backgroundColor: "transparent",
  "&:hover": {
    borderColor: deepPurple[700],
    color: "white",
    backgroundColor: deepPurple[700],
  },
}));

export const ColorButton = styled(Button)(({ theme }) => ({
  // lineHeight: 1.5,
  borderColor: deepPurple[700],
  color: "black",
  fontSize: "0.5rem",
  backgroundColor: "transparent",
  "&:hover": {
    borderColor: deepPurple[700],
    color: "white",
    backgroundColor: deepPurple[700],
  },
}));

export const PopUpElementStyle = makeStyles({
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 2000,
  },
  modelStyle: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2000,
  },
});
