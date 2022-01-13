import React from "react";
// import { makeStyles } from "@mui/styles";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Typography,Container,Grid } from "@mui/material"; 
import TextfieldWrapper from "../FormUI/TextFieldWrapper";
import SelectWrapper from "../FormUI/SelectWrapper";
import countries from "../../../data/countries.json";
import "./SellForm.css";
import UploadImage from "../FormUI/uploadImage";
import ButtonWrapper from "../FormUI/ButtonWrapper";
import "react-toastify/dist/ReactToastify.css";

// let useClickOutside = (handler) => {
// 	let domNode = useRef();

// 	useEffect(() => {
// 		let maybeHandler = (event) => {
// 			if (!domNode.current.contains(event.target)) {
// 				handler();
// 			}
// 		};

// 		document.addEventListener("mousedown", maybeHandler);

// 		return () => {
// 			document.removeEventListener("mousedown", maybeHandler);
// 		};
// 	});

// 	return domNode;
// };

// const useStyles = makeStyles((theme) => ({
//   formWrapper: {
//     marginTop: theme.spacing(5),
//     marginBottom: theme.spacing(8),
//   },
// }));

const INITIAL_FORM_STATE = {};
const FORM_VALIDATION = Yup.object().shape({
  adTitle: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  categories: Yup.string().required("Required"),
});

const SellForm = (props) => {
  // const classes = useStyles();

  // let domNode = useClickOutside(() => {
  // 	props.setTrigger(true);
  // });

  return props.trigger ? (
   
      <div className="sell-form-inner" /*ref={domNode}*/>
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        <Grid container>
          <Grid item xs={12}>
            <Container maxWidth="md">
              <Typography variant="h4" gutterBottom component="div">
                Sell Now
              </Typography>
              {/* className={classes.formWrapper} */}
              <div >
                <Formik
                  initialValues={{
                    ...INITIAL_FORM_STATE,
                  }}
                  validationSchema={FORM_VALIDATION}
                  onSubmit={(values) => {
                    console.log(values);
                    props.alertSent();
                    props.setTrigger(false);
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
                          helperText="Mention the key features of your item (e.g. brand, model, age, type)"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Typography>Description</Typography>
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
                        <Typography>Select a category</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <SelectWrapper
                          name="categories"
                          options={countries}
                          size="small"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Typography>
                          Upload Image (less than 5mb, accepted: .jpg, .png)
                        </Typography>
                      </Grid>

                      <Grid container>
                        <Grid>
                          <UploadImage />
                        </Grid>
                        <Grid>
                          <UploadImage />
                        </Grid>
                        <Grid>
                          <UploadImage />
                        </Grid>
                        <Grid>
                          <UploadImage />
                        </Grid>
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

  ) : (
    ""
  );
};

export default SellForm;
