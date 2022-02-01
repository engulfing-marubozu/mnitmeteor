import React, { useState } from "react";
import { Typography, Container, Grid } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import axios from "axios";
const SellFormNew = (props) => {
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

  return (
    <>
      <div className="sell-form-inner">
        <Grid container>
          <Grid item xs={12}>
            <Container maxWidth="md">
              <Typography variant="h4" gutterBottom component="div">
                Sell Now
              </Typography>
              <div>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography>Title</Typography>
                      </Grid>

                      <Grid item xs={12}>
                        {/* <TextfieldWrapper
                          name="adTitle"
                          size="small"
                          helperText="Mention the key features of your item (e.g. brand, model, type)"
                        /> */}

                        
                      </Grid>

                      <Grid item xs={12}>
                        <Typography sx={{ mt: 1 }}>Description</Typography>
                      </Grid>

                      <Grid item xs={12}>
                        {/* <TextfieldWrapper
                          name="description"
                          helperText="Include condition, features and reason for selling"
                          multiline={true}
                          rows={4}
                        /> */}
                      </Grid>

                      <Grid item xs={12}>
                        <Typography sx={{ mt: 1 }}>
                          Select a category
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        {/* <SelectWrapper
                          name="categories"
                          options={category}
                          size="small"
                        /> */}
                      </Grid>

                      <Grid item xs={12}>
                        <Typography sx={{ mt: 2 }}>
                          Upload Image (less than 5mb, accepted: .jpg, .png, max
                          4 images )
                        </Typography>
                      </Grid>

                      <Grid container justifyContent={"center"}>
                        {/* <UploadImage onDrop={onDrop} /> */}
                      </Grid>

                      <Grid item xs={12}>
                        {/* <ButtonWrapper>Submit Form</ButtonWrapper> */}
                      </Grid>
                    </Grid>
              </div>
            </Container>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default SellFormNew;
