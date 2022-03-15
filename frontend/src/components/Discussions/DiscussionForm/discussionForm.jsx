import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useStyles } from "../../_formData/FormUI/stylingComponent";
import { Box, Paper, Typography, } from "@mui/material";
import ButtonWrapper from '../../_formData/FormUI/ButtonWrapper';
import { TextfieldWrapper } from '../../_formData/FormUI/InputElement';
// import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import UploadDoc from "../../_formData/gettingFiles/uploadDoc";

// =================================================================================================================================================================================================================

const INITIAL_FORM_STATE = { adTitle: "", description: "", document: "" };
const FORM_VALIDATION = Yup.object().shape({
    adTitle: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    document: Yup.string().notRequired(),
});

// ======================================================================================================================================================================================================
function DiscussionForm() {
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
                            console.log(values)


                            const call = async (values) => {
                                console.log(values)
                                const response = await axios.post(
                                    "http://localhost:5000/create_thread",
                                    { title: values.adTitle, description: values.description, document: values.document },
                                    {
                                        headers: {
                                            Authorization: `Bearer ${token}`,
                                        },
                                    }
                                );
                                console.log(response.data);
                            }

                            call(values);
                        }}
                    >
                        <Form>
                            <Box className={classes.ContentBoxSecond}>
                                <Typography className={classes.boldTextSecond}>Topic *</Typography>
                                <TextfieldWrapper
                                    name="adTitle"
                                    size="small"
                                    helperText="Mention the topic name or project name "
                                />
                                <Typography className={classes.boldTextSecond}>Discription *</Typography>
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





