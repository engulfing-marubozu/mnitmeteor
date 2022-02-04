import React from "react";
// import { Typography, Container, Grid, } from "@mui/material";
import { Formik, Form,ErrorMesage } from 'formik';
// import "react-toastify/dist/ReactToastify.css";
// import TextField from '@mui/material/TextField';
// import { Button } from '@mui/material';
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import axios from "axios";
const SellFormNew = (props) => {
  // =============================================================Formik Handlers=======================================================================================
  const initialValues = {}
  const validationSchema = () => {

  }
  const onSubmit = () => {

  }









  // ======================================================================================================================================================================= 
  return (
    <>
      <div className="sell-form-inner">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form >
           
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default SellFormNew;




























































































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