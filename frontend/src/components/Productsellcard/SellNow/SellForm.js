import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Typography, Container, Grid } from "@mui/material";
import TextfieldWrapper from "../FormUI/TextFieldWrapper";
import SelectWrapper from "../FormUI/SelectWrapper";
import category from "../../../data/category.json";
import "./SellForm.css";
import UploadImage from "../FormUI/uploadImage";
import ButtonWrapper from "../FormUI/ButtonWrapper";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
const INITIAL_FORM_STATE = {};
const FORM_VALIDATION = Yup.object().shape({
  adTitle: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  categories: Yup.string().required("Required"),
  
});

const SellForm = (props) => {
  const Navigate = useNavigate();
  const token = useSelector((state) => state.loginlogoutReducer.token);
  const [imagearray, setimagearray] = useState([]);
  console.log(imagearray);
  // const [isEntering, setIsEntering] = useState(false);

  // const onFocusHandler = () => {
  //   console.log("focused");
  //   setIsEntering(true);
  // };
  const onDrop = (pictures) => {
    setimagearray(pictures);
  };
  const merge = async (values) => {
    console.log(values);
    // setimagearray([...imagearray, values]);
    console.log(token);
    try {
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

  return (
    <>
      <div className="sell-form-inner">
        <Grid container>
          <Grid item xs={12}>
            <Container maxWidth="md">
              <Typography variant="h4" gutterBottom component="div">
                Sell Now
              </Typography>
              {/* className={classes.formWrapper} */}
              <div>
                <Formik
                  initialValues={{
                    ...INITIAL_FORM_STATE,
                  }}
                  validationSchema={FORM_VALIDATION}
                  onSubmit={(values) => {
                    merge(values);
                    props.alertSent("Ad Request Sent");
                    Navigate("/Profile");
                    // props.setTrigger(false);
                  }}
                >
                  <Form>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography>Title</Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <TextfieldWrapper
                          name="adTitle"
                          size="small"
                          helperText="Mention the key features of your item (e.g. brand, model, type)"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Typography sx={{ mt: 1 }}>Description</Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <TextfieldWrapper
                          name="description"
                          helperText="Include condition, features and reason for selling"
                          multiline={true}
                          rows={4}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Typography sx={{ mt: 1 }}>
                          Select a category
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <SelectWrapper
                          name="categories"
                          options={category}
                          size="small"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Typography sx={{ mt: 2 }}>
                          Upload Image (less than 5mb, accepted: .jpg, .png, max
                          4 images )
                        </Typography>
                      </Grid>

                      <Grid container justifyContent={"center"}>
                        <UploadImage  name="images" onDrop={onDrop} />
                      </Grid>

                      <Grid item xs={12}>
                        <ButtonWrapper>Submit Form</ButtonWrapper>
                      </Grid>
                    </Grid>
                  </Form>
                </Formik>
              </div>
            </Container>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default SellForm;
