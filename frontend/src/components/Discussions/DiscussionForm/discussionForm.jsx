import React, { useState } from 'react';
import { useStyles } from "../../_formData/FormUI/stylingComponent";
import { Box, Paper, Typography, } from "@mui/material";
import ButtonWrapper from '../../_formData/FormUI/ButtonWrapper';
import { TextfieldWrapper, SelectWrapper } from '../../_formData/FormUI/InputElement';
import { forumCategories } from '../../_formData/formData';
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import axios from "axios";

// =================================================================================================================================================================================================================

const INITIAL_FORM_STATE = { adTitle: "", description: "", categories: "" };
const FORM_VALIDATION = Yup.object().shape({
    adTitle: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    categories: Yup.string().required("Required"),
});

// ======================================================================================================================================================================================================
function DiscussionForm() {
    //   const token = useSelector((state) => state.loginlogoutReducer.token);
    //   const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
    //   const [imagearray, setimagearray] = useState([]);
    // console.log(imagearray);
    // const onDrop = (pictures) => {
    //     // setimagearray(pictures);
    // };

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
                                <Typography className={classes.boldTextSecond}>Select a category *</Typography>
                                <SelectWrapper
                                    categories={forumCategories}
                                    name="categories"
                                    size="small"
                                    helperText="Please select your category"
                                />
                                <Typography className={classes.boldTextSecond}>Upload attachments</Typography>
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





