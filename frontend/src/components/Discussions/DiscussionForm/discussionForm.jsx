import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useStyles } from "../../_formData/FormUI/stylingComponent";
import { Box, Paper, Typography } from "@mui/material";
import ButtonWrapper from "../../_formData/FormUI/ButtonWrapper";
import { TextfieldWrapper } from "../../_formData/FormUI/InputElement";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import UploadDoc from "../../_formData/gettingFiles/uploadDoc";
import { useNavigate } from "react-router-dom";
import {
  forumPopUp,
  LogoutUser,
} from "../../../AStatemanagement/Actions/userActions";
import POPUPElement from "../../ModelPopUP/POPUPElement";
import DataUploadingPopup from "../../ModelPopUP/uploadingData";
import NoInternet from "../../ModelPopUP/noInternet";
// =================================================================================================================================================================================================================

const INITIAL_FORM_STATE = { adTitle: "", description: "", document: "" };
const FORM_VALIDATION = Yup.object().shape({
  adTitle: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  document: Yup.mixed()
    .notRequired()
    .nullable()
    .test("fileSize", "File size too large, max file size is 5 Mb", (file) => {
      if (file) {
        return file.size <= 5242880;
      } else {
        return true;
      }
    })
    .test("fileType", "Incorrect file type", (file) => {
      if (file) {
        return ["application/pdf"].includes(file.type);
      } else {
        return true;
      }
    }),
});

// ======================================================================================================================================================================================================
function DiscussionForm() {
  const [isOffline, setIsOffline] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const userAuthData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
  const token = userAuthData?.xezzi;

  const sendData = async (data) => {
    try {
      // const response =
      await axios.post(
        `${process.env.REACT_APP_API}/create_thread`,
        {
          title: data.adTitle,
          description: data.description,
          document: data.document,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsUpload(false);
      dispatch(forumPopUp(true));
      Navigate("/discussions/mytopics");
    } catch (err) {
      if (!err?.response) {
        setIsUpload(false);
        setIsOffline(true);
      } else if (err?.response?.status === 403) {
        dispatch(LogoutUser());
        Navigate(`/`);
      }
    }
  };
  // ===================================================================SendData_To_BackEnd========================================================================================================================

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
              {" "}
              New Topic{" "}
            </Typography>
          </Box>
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values) => {
              if (navigator.onLine) {
                if (values.document) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    // const data = { ...values, document: reader.result };
                    const data = {
                      ...values,
                      document: {
                        name: values.document.name,
                        binary: reader.result,
                      },
                    };
                    setIsUpload(true);
                    sendData(data);
                  };
                  reader.readAsDataURL(values.document);
                } else {
                  setIsUpload(true);
                  sendData(values);
                }
              } else {
                setIsOffline(true);
              }
            }}
          >
            <Form>
              <Box className={classes.ContentBoxSecond}>
                <Typography className={classes.boldTextSecond}>
                  Title *
                </Typography>
                <TextfieldWrapper
                  name="adTitle"
                  size="small"
                  helperText="Mention your topic or project name."
                />
                <Typography className={classes.boldTextSecond}>
                  Description *
                </Typography>
                <TextfieldWrapper
                  name="description"
                  helperText="Give a proper description."
                  multiline={true}
                  rows={4}
                />
                <Typography className={classes.boldTextSecond}>
                  Upload attachments
                </Typography>
                <UploadDoc name="document" helperText="upload pdf " />
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
          <NoInternet onClose={setIsOffline}>
            Couldn't connect to debbie, our database. Please check all
            connections and try again.
          </NoInternet>
        </POPUPElement>
      )}
      {isUpload && <DataUploadingPopup open={isUpload} />}
    </motion.div>
  );
}

export default DiscussionForm;
