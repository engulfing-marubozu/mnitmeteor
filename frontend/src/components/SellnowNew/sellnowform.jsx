import React, { useState } from 'react';
import POPUPElement from "../ModelPopUP/POPUPElement";
import GetPhoneNo from "../ContactDetails/GetPhoneNo";
import { useStyles } from "../_formData/FormUI/stylingComponent";
import { Box, Paper, Typography, } from "@mui/material";
import ButtonWrapper from '../_formData/FormUI/ButtonWrapper';
import { TextfieldWrapper, SelectWrapper } from '../_formData/FormUI/InputElement';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import UploadImage from '../_formData/gettingFiles/uploadImage';
import { sellCategories } from '../_formData/formData';
// =================================================================================================================================================================================================================

const INITIAL_FORM_STATE = { adTitle: "", description: "", categories: "", images: "" };
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
  const Navigate = useNavigate();
  const token = useSelector((state) => state.loginlogoutReducer.token);
  const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
  const phoneNumber = useSelector((state) => state.loginlogoutReducer.userData.Mobile_no);
  const [imagearray, setimagearray] = useState([]);
  // console.log(imagearray);
  const onDrop = (pictures) => {
    setimagearray(pictures);
  };

  // ========================================================================================================================================================================================================
  const merge = async (values) => {
    try {
      console.log("sent to save in database");
      const response = await axios.post(
        "http://localhost:5000/product_details",
        { images: imagearray, details: values },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
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
              setFormValue(values)
              if (!phoneNumber && isLoggedIn) {
                setContactModel(true);
              } else if (phoneNumber && isLoggedIn) {
                merge(values);
                Navigate("/Profile");
              }
            }}
          >
            <Form>
              <Box className={classes.ContentBox}>
                <Typography className={classes.boldText}>Product name *</Typography>
                <TextfieldWrapper
                  name="adTitle"
                  size="small"
                  helperText="Mention the key features of your item (e.g. brand, model, type)"
                  // inputProps={{ maxLength: 10 }}
                />
                <Typography className={classes.boldText}>Discription *</Typography>
                <TextfieldWrapper
                  name="description"
                  helperText="Include condition, features and reason for selling"
                  multiline={true}
                  rows={4}
                  // inputProps={{ maxLength: 100 }}
                />
                <Typography className={classes.boldText}>Select a category *</Typography>
                <SelectWrapper
                  categories={sellCategories}
                  name="categories"
                  size="small"
                  helperText="Please select your category"
                />
                <Typography className={classes.boldText}>Upload Images *</Typography>
                <UploadImage name="images" onDrop={onDrop} />
                <ButtonWrapper >Submit Form</ButtonWrapper>
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
          <GetPhoneNo
            flag={false}
            formData={{ merge, formValue }}
            onClose={setContactModel}
          >
            ====Content for sellform Prompt =================================
            Et et tempor labore in.Sint ullamco anim incididunt cillum quis et
            id velit laboris magna.Sint eiusmod elit quis amet dolore.Anim
            aliquip elit incididunt eu enim sint officia enim quis.
          </GetPhoneNo>
        </POPUPElement>
      )}
    </>
  )
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