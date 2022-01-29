import React from "react";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Stack, Typography } from "@mui/material";
import { ModelColorButton, ModelOutlinedButton } from "./ModelPopUpStyling";
import { useSelector } from "react-redux";
// import POPUPElement from "./POPUPElement";

// ========================================================MAIN FUNCTION=================================================================

export default function InterestedAlert(props) {
  // ==========================================================GETTING DETAILS FROM STATE-REDUX =================================================
  //  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
  const phoneNumber = useSelector(
    (state) => state.loginlogoutReducer.userData.Mobile_no
  );
  console.log(phoneNumber);
  //  const token = useSelector((state) => state.loginlogoutReducer.token);
  //  const email = useSelector((state) => state.loginlogoutReducer.userData.email);

  // ==============================================AGREE-DISAGREE HANDLER===================================================================================
  const AgreeHandler = () => {
    if (!phoneNumber && isLoggedIn) {
      props.onClose();
      props.setContactModel(true);
    } else if (phoneNumber && isLoggedIn) {
      // ===============================send data to backend for sending email to both user ==================================================

      props.modelInputHandler(true);
      props.onClose();
    }
  };
  const DisagreeHandler = () => {
    props.onClose();
  };
  // =======================================================================================================================================
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: { sm: 600, xs: 320 },
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
            Interested
          </Typography>
          <Typography variant="body1">
            Et et tempor labore in.Sint ullamco anim incididunt cillum quis et
            id velit laboris magna.Sint eiusmod elit quis amet dolore.Anim
            aliquip elit incididunt eu enim sint officia enim quis.
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
    </div>
  );
}
