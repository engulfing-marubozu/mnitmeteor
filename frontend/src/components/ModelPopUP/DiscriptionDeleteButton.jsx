import React from "react";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { ModelColorButton, ModelOutlinedButton } from "./ModelPopUpStyling";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataForDeletingPublishedAds } from "../../AStatemanagement/Actions/userActions";
import { useNavigate } from "react-router-dom";
// ========================================================MAIN FUNCTION=================================================================

export default function DiscriptionProductDelete(props) {
  // ==========================================================GETTING DETAILS FROM STATE-REDUX =============================================
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const token = useSelector((state) => state.loginlogoutReducer.token);

  // ==============================================AGREE-DISAGREE HANDLER===================================================================
  const deleteHandler = () => {
    const productData = { token: token, productId: props.productId };
    dispatch(fetchDataForDeletingPublishedAds(productData));
    props.onClose(false);
    navigate("/");
  };
  const cancelHandler = () => {
    props.onClose(false);
  };
  // =======================================================================================================================================
  return (
      <Box
        sx={{
          width: { sm: 0, xs: 320 },
          backgroundColor: "white ",
          borderRadius: "7px",
        }}
      >
        <Stack direction="row" justifyContent="flex-end">
          <IconButton
            sx={{ p: "4px" }}
            onClick={() => {
              props.onClose();
            }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <Box sx={{ px: "1.8rem", pb: "1.8rem" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", pb: "4px" }}>
            Delete
          </Typography>
          <Typography variant="body1">
            Are you sure you want to delete this item from the database?
          </Typography>
          <Stack
            direction="row"
            justifyContent="flex-end"
            spacing={2}
            sx={{ pt: 5 }}
          >
            <ModelOutlinedButton sx={{ border: 1 }} onClick={deleteHandler}>
              Delete
            </ModelOutlinedButton>
            <ModelColorButton onClick={cancelHandler}>Cancel</ModelColorButton>
          </Stack>
        </Box>
      </Box>
  );
}
