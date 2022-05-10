import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {
  FormContainer,
  Input,
  CustomizeButton,
  Validationlabel,
} from "./getphoneNoStyling";
import { PhoneNumberValidator } from "../loginForm/AccountBox/validator";
import { fetchDataForPhoneNoAuth } from "../../AStatemanagement/Actions/userActions";

// ================================================================Main FUNCTION ==============================================
export default function GetPhoneDetails(props) {
  console.log(props.flag);
  console.log(props);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.loginlogoutReducer.token);
  // ==================================================================================
  const Navigate = useNavigate();
  const phoneNoRef = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // ==================================================================================
  function PhoneNoHandler(event) {
    event.preventDefault();
    const phoneNo = phoneNoRef.current.value;
    setFormErrors(PhoneNumberValidator(phoneNo));
    setIsSubmit(true);
  }
  // ==================================================================================
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const data = {
        token: token,
        phoneNo: phoneNoRef.current.value,
      };
      dispatch(fetchDataForPhoneNoAuth(data));
      // ==========================================for Discription page =============
      if (props.flag) {
        props.modelInputHandler(true);
        props.onClose(false);
      }
      // =========================================for sellnow page===================

      if (!props.flag) {
        console.log(props.formData.formValue);
        props.formData.merge(props.formData.formValue);
        props.onClose(false);
        // Navigate("/Profile");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: { md: 600, sm: 480, xs: 320 },
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
        <Box sx={{ px: "1.8rem" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", pb: "4px" }}>
            Contact Details
          </Typography>
          <Typography variant="body1" sx={{ wordBreak: "break-word" }}>
            {props.children}
          </Typography>
          <FormContainer onSubmit={PhoneNoHandler}>
            <Stack direction="column" spacing={0.5} alignItems="center">
              <Input
                autoFocus={true}
                type="number"
                id="phone"
                name="phone"
                placeholder="Phone No."
                ref={phoneNoRef}
              />
              <Validationlabel>{formErrors.phoneNo}</Validationlabel>
              <CustomizeButton type="submit">Submit</CustomizeButton>
            </Stack>
          </FormContainer>
        </Box>
      </Box>
    </div>
  );
}
