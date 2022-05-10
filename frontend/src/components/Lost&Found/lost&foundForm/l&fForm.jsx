import React, { useState } from "react";
import { motion } from "framer-motion";
import { useStyles } from "../../_formData/FormUI/stylingComponent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ButtonWrapper from "../../_formData/FormUI/ButtonWrapper";
import {
  TextfieldWrapper,
  SelectWrapper,
} from "../../_formData/FormUI/InputElement";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import UploadImage from "../../_formData/gettingFiles/uploadImage";
import { lostFoundCategories } from "../../_formData/formData";
import {
  lnfPopUp,
  LogoutUser,
} from "../../../AStatemanagement/Actions/userActions";
import POPUPElement from "../../ModelPopUP/POPUPElement";
import FormSubmission from "../../ModelPopUP/onFormSubmission";
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
  images: Yup.array().notRequired(),
});

const sendLostItem = (data, localUserData, dispatch, Navigate) => {
  axios
    .post(
      `${process.env.REACT_APP_API}/sendlftoadmin`,
      {
        categories: data.categories,
        title: data.adTitle,
        imgs: data.images,
        description: data.description,
        // posted_by: localUserData.userData._id,
        posted_by: localUserData?.userData?.userId,
        email: localUserData?.userData?.email,
      },
      {
        headers: {
          Authorization: `Bearer ${localUserData?.token}`,
        },
      }
    )
    .then(function (response) {
      console.log("das;lkfjas;d");
      dispatch(lnfPopUp(true));
      Navigate("/lost&found/myitems");
    })
    .catch(function (error) {
      console.log(error);
      if (error?.response?.status === 403) {
        dispatch(LogoutUser());
        Navigate(`/`);
      }
    });
};

// ======================================================================================================================================================================================================
function LostFoundForm() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const localUserData = useSelector((state) => state.loginlogoutReducer);
  const [, setimagearray] = useState([]);
  const [isOffline, setIsOffline] = useState(false);
  const onDrop = (pictures) => {
    setimagearray(pictures);
  };

  // =======================================================================================================================================================================================================
  const classes = useStyles();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box className={classes.mainBoxSecond}>
        <Paper className={classes.paperStyleSecond}>
          <Box className={classes.headingBoxSecond}>
            <Typography className={classes.headingTextSecond}>
              Lost&Found Form
            </Typography>
          </Box>
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              // dispatch(lnfPopUp(true));
              if (navigator.onLine) {
                sendLostItem(values, localUserData, dispatch, Navigate);
              } else {
                setIsOffline(true);
              }
              // Navigate("/lost&found/myitems");
            }}
          >
            <Form>
              <Box className={classes.ContentBoxSecond}>
                <Typography className={classes.boldTextSecond}>
                  Item name *
                </Typography>
                <TextfieldWrapper
                  name="adTitle"
                  size="small"
                  helperText="Mention the key features of your item (e.g. brand, model, type)"
                />
                <Typography className={classes.boldTextSecond}>
                  Description *
                </Typography>
                <TextfieldWrapper
                  name="description"
                  helperText="Please provide proper detail of item with contact details  "
                  multiline={true}
                  rows={4}
                />
                <Typography className={classes.boldTextSecond}>
                  Select a category *
                </Typography>
                <SelectWrapper
                  categories={lostFoundCategories}
                  name="categories"
                  size="small"
                  helperText="Please select your category"
                />
                <Typography className={classes.boldTextSecond}>
                  Upload Images
                </Typography>
                <UploadImage name="images" onDrop={onDrop} />
                <ButtonWrapper>Submit Form</ButtonWrapper>
              </Box>
            </Form>
          </Formik>
        </Paper>
      </Box>
      {isOffline && (
        <POPUPElement
          open={isOffline}
          onClose={setIsOffline}
          portelId={"portal"}
        >
          <FormSubmission onClose={setIsOffline}>
            No Internet Connection try after sometime
          </FormSubmission>
        </POPUPElement>
      )}
    </motion.div>
  );
}
export default LostFoundForm;
