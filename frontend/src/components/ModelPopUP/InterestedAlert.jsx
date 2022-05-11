import React from "react";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { ModelColorButton, ModelOutlinedButton } from "./ModelPopUpStyling";
import { useSelector } from "react-redux";
// ========================================================MAIN FUNCTION=======================================

export default function InterestedAlert(props) {
  // ==========================================================GETTING DETAILS FROM STATE-REDUX ================
  const isLogin = useSelector((state) => state.loginlogoutReducer.isLogin);
  const phoneNo = useSelector(
    (state) => state.loginlogoutReducer.userData.phoneNo
  );
  // ==============================================AGREE-DISAGREE HANDLER=======================================
  const AgreeHandler = () => {
    if (!phoneNo && isLogin) {
      props.onClose(false);
      props.setContactModel(true);
    } else if (phoneNo && isLogin) {
      props.modelInputHandler(true);
      props.onClose(false);
    }
  };
  const DisagreeHandler = () => {
    props.onClose(false);
  };
  // ============================================================================================================
  return (
    <Box
      sx={{
        width: { md: 560, sm: 480, xs: 320 },
        backgroundColor: "white ",
        borderRadius: "7px",
      }}
    >
      <Stack direction="row" justifyContent="flex-end">
        <IconButton
          sx={{ p: "4px" }}
          onClick={() => {
            props.onClose(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </Stack>
      <Box sx={{ px: "1.8rem", pb: "1.8rem" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", pb: "4px" }}>
          Interested
        </Typography>
        <Typography variant="body1">
          Looks like you are interested in the product! Contact details of the
          seller will be sent to you by email if you continue.
        </Typography>
        <Stack
          direction="row"
          justifyContent="flex-end"
          spacing={2}
          sx={{ pt: 5 }}
        >
          <ModelOutlinedButton sx={{ border: 1 }} onClick={DisagreeHandler}>
            Disagree
          </ModelOutlinedButton>
          <ModelColorButton onClick={AgreeHandler}>Agree</ModelColorButton>
        </Stack>
      </Box>
    </Box>
  );
}
