import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from "../../_formData/FormUI/stylingComponent";
import { Box, Paper, Typography, } from "@mui/material";
import ButtonWrapper from '../../_formData/FormUI/ButtonWrapper';
import { TextfieldWrapper } from '../../_formData/FormUI/InputElement';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import UploadDoc from "../../_formData/gettingFiles/uploadDoc";
import { useNavigate } from "react-router-dom";

// =================================================================================================================================================================================================================

const INITIAL_FORM_STATE = { adTitle: "", description: "", document: "" };
const FORM_VALIDATION = Yup.object().shape({
    adTitle: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    document: Yup.mixed()
        .notRequired()
        .nullable()
        .test(
            "fileSize",
            "File size too large, max file size is 5 Mb",
            (file) => {
                if (file) {
                    return file.size <= 5242880;
                } else {
                    return true;
                }
            }
        )
});

// ======================================================================================================================================================================================================
function DiscussionForm() {
    const Navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    const token = useSelector((state) => state.loginlogoutReducer.token);

    // ===================================================================SendData_To_BackEnd========================================================================================================================

    // =======================================================================================================================================================================================================
    const classes = useStyles();
    return (
        <>
            <Box className={classes.mainBoxSecond}>
                <Paper className={classes.paperStyleSecond}>
                    <Box className={classes.headingBoxSecond}>
                        <Typography className={classes.headingTextSecond}> New Topic </Typography>
                    </Box>
                    <Formik
                        initialValues={{ ...INITIAL_FORM_STATE }}
                        validationSchema={FORM_VALIDATION}
                        onSubmit={(values) => {
                            // console.log(values)
                            const call = async (data) => {
                                // console.log(values)
                                // const response =
                                await axios.post(
                                    "http://localhost:5000/create_thread",
                                    { title: data.adTitle, description: data.description, document: data.document },
                                    {
                                        headers: {
                                            Authorization: `Bearer ${token}`,
                                        },
                                    }
                                );
                            }
                            if (values.document) {
                                const reader = new FileReader();
                                reader.onload = () => {
                                    // console.log(reader.result);
                                    const data = { ...values, document: reader.result }
                                    call(data);
                                }
                                reader.readAsDataURL(values.document);
                            } else {
                                call(values)
                            }

                            Navigate("/discussions/mytopics");
                        }
                        }
                    >
                        <Form>
                            <Box className={classes.ContentBoxSecond}>
                                <Typography className={classes.boldTextSecond}>Topic *</Typography>
                                <TextfieldWrapper
                                    name="adTitle"
                                    size="small"
                                    helperText="Mention the topic name or project name "
                                />
                                <Typography className={classes.boldTextSecond}>Description *</Typography>
                                <TextfieldWrapper
                                    name="description"
                                    helperText="Describe about the topic"
                                    multiline={true}
                                    rows={4}
                                />
                                <Typography className={classes.boldTextSecond}>Upload attachments</Typography>
                                <UploadDoc
                                    name="document"
                                    helperText="upload pdf "
                                />
                                <ButtonWrapper >Submit Form</ButtonWrapper>
                            </Box>
                        </Form>
                    </Formik>
                </Paper>
            </Box>
        </>
    )
}

export default DiscussionForm;





