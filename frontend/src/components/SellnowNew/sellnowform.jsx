import React, { useState } from "react";
import { motion } from "framer-motion";
import { useStyles } from "../_formData/FormUI/stylingComponent";
import POPUPElement from "../ModelPopUP/POPUPElement";
import GetPhoneDetails from "../ContactDetails/getPhoneDetails";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ButtonWrapper from "../_formData/FormUI/ButtonWrapper";
import {
  TextfieldWrapper,
  SelectWrapper,
} from "../_formData/FormUI/InputElement";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
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
  const userAuthData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
  const token = userAuthData?.xezzi;
  const isLogin = userAuthData?.oamp;
  const userData = JSON.parse(window.localStorage.getItem("mm_user_data"));
  const phoneNo = userData?.phoneNo;
  const onDrop = (pictures) => {
    setimagearray(pictures);
  };

  // ========================================================================================================================================================================================================
  const merge = async (values) => {
    try {
      console.log("sent to save in database");
      // const response =
      await axios.post(
        `${process.env.REACT_APP_API}/product_details`,
        { images: imagearray, details: values },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  // =======================================================================================================================================================================================================
  const classes = useStyles();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
              if (!phoneNo && isLogin) {
                setContactModel(true);
              } else if (phoneNo && isLogin) {
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
                <ButtonWrapper >Submit Form</ButtonWrapper>
              </Box>
            </Form>
          </Formik>
        </Paper>
      </Box>
      {contactModel && isLogin && (
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
    </motion.div>
  );
}

export default SellFormNew;
