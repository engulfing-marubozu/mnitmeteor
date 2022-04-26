import React, { useState } from "react";
import POPUPElement from "../ModelPopUP/POPUPElement";
import GetPhoneDetails from "../ContactDetails/getPhoneDetails";
import { useStyles } from "../_formData/FormUI/stylingComponent";
import { Box, Paper, Typography } from "@mui/material";
import ButtonWrapper from "../_formData/FormUI/ButtonWrapper";
import {
  TextfieldWrapper,
  SelectWrapper,
} from "../_formData/FormUI/InputElement";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import UploadImage from "../_formData/gettingFiles/uploadImage";
import { sellCategories } from "../_formData/formData";
import { sellPopUp } from "../../AStatemanagement/Actions/userActions";
// =================================================================================================================================================================================================================

const INITIAL_FORM_STATE = {
  adTitle: "",
  description: "",
  categories: "",
  images: "",
};
const FORM_VALIDATION = Yup.object().shape({
  adTitle: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  categories: Yup.string().required("Required"),
  images: Yup.array().min(1).max(4).required("Required"),
});

// ======================================================================================================================================================================================================
function SellFormNew() {
  const [formValue, setFormValue] = useState({});
  const [contactModel, setContactModel] = useState(false);
  const [imagearray, setimagearray] = useState([]);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const localUserData = useSelector((state) => state.loginlogoutReducer);
  const token = localUserData.token;
  const isLoggedIn = localUserData.isLogin;
  const phoneNumber = localUserData.userData.Mobile_no;
  const onDrop = (pictures) => {
    setimagearray(pictures);
  };

  // ========================================================================================================================================================================================================
  const merge = async (values) => {
    try {
      console.log("sent to save in database");
      // const response =
      await axios.post(
        "http://localhost:5000/product_details",
        { images: imagearray, details: values },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  // =======================================================================================================================================================================================================
  const classes = useStyles();
  return (
    <>
      <Box className={classes.mainBox}>
        <Paper className={classes.paperStyle}>
          <Box className={classes.headingBox}>
            <Typography className={classes.headingText}> Sell Now </Typography>
          </Box>
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              dispatch(sellPopUp(true));
              setFormValue(values);
              if (!phoneNumber && isLoggedIn) {
                setContactModel(true);
              } else if (phoneNumber && isLoggedIn) {
                merge(values);
                Navigate("/profile");
              }
            }}
          >
            <Form>
              <Box className={classes.ContentBox}>
                <Typography className={classes.boldText}>
                  Product name *
                </Typography>
                <TextfieldWrapper
                  name="adTitle"
                  size="small"
                  helperText="Mention the key features of your item (e.g. brand, model, type)"
                  // inputProps={{ maxLength: 10 }}
                />
                <Typography className={classes.boldText}>
                  Description *
                </Typography>
                <TextfieldWrapper
                  name="description"
                  helperText="Include condition, features and reason for selling"
                  multiline={true}
                  rows={4}
                  // inputProps={{ maxLength: 100 }}
                />
                <Typography className={classes.boldText}>
                  Select a category *
                </Typography>
                <SelectWrapper
                  categories={sellCategories}
                  name="categories"
                  size="small"
                  helperText="Please select your category"
                />
                <Typography className={classes.boldText}>
                  Upload Images *
                </Typography>
                <UploadImage name="images" onDrop={onDrop} />
                <ButtonWrapper>Submit Form</ButtonWrapper>
              </Box>
            </Form>
          </Formik>
        </Paper>
      </Box>
      {contactModel && isLoggedIn && (
        <POPUPElement
          open={contactModel}
          onClose={setContactModel}
          portelId={"contactDetailPortal"}
        >
          <GetPhoneDetails
            flag={false}
            formData={{ merge, formValue }}
            onClose={setContactModel}
          >
            Oops! We don’t have your phone number ☹️. Your phone number will
            only be shared with prospective buyers.
          </GetPhoneDetails>
        </POPUPElement>
      )}
    </>
  );
}

export default SellFormNew;

//   const token = useSelector((state) => state.loginlogoutReducer.token);
//   const [imagearray, setimagearray] = useState([]);
//   const onDrop = (pictures) => {
//     setimagearray(pictures);
//   };
//   const merge = async (values) => {
//     console.log(values);
//     // setimagearray([...imagearray, values]);
//     console.log(token);
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/product_details",
//         { images: imagearray, details: values },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log(response.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
