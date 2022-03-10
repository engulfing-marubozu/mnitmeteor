import React, { useEffect} from 'react';
import {useSelector} from 'react-redux';
import { useStyles } from "../../_formData/FormUI/stylingComponent";
import { Box, Paper, Typography, } from "@mui/material";
import ButtonWrapper from '../../_formData/FormUI/ButtonWrapper';
import { TextfieldWrapper} from '../../_formData/FormUI/InputElement';
// import { forumCategories } from '../../_formData/formData';
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from 'axios';
// import axios from "axios";

// =================================================================================================================================================================================================================

const INITIAL_FORM_STATE = { adTitle: "", description: "",};
const FORM_VALIDATION = Yup.object().shape({
    adTitle: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
});

// ======================================================================================================================================================================================================
function DiscussionForm() {
    const token = useSelector((state) => state.loginlogoutReducer.token);
    useEffect(() => {
        window.scrollTo(0, 0);
    })
      const token = useSelector((state) => state.loginlogoutReducer.token);
      const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);


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
<<<<<<< HEAD
                            // console.log(values)
=======
                            console.log(values)
                            const call = async (values)=>{
                                console.log(values)
                           const response =   await axios.post(
                                            "http://localhost:5000/create_thread",
                                            { title:values.adTitle, description: values.description },
                                            {
                                              headers: {
                                                Authorization: `Bearer ${token}`,
                                              },
                                            }
                                          );  
                                          console.log(response.data);        
                            }
                            call(values);
>>>>>>> d48ee96db750fe62cfaf635f89f00dc6d9cdb5a7
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





