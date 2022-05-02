// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import useGetData from "./useGetData";
// import Grid from "@mui/material/Grid";
// // import 
// function ProductNew() {
//   const [pageNumber, setPageNumber] = useState();
//   const category = "recommendation";
//   const email = useSelector(
//     (state) => state.loginlogoutReducer.userData?.email
//   );
//   useGetData(email, pageNumber, category);
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <Container
//         sx={{
//           pt: { xs: 5 },
//           pb: { xs: 5 },
//           maxWidth: { xs: "100%", sm: "sm", md: "md", lg: "lg" },
//         }}
//       >
//         <Grid container spacing={{ xs: 2, sm: 3, lg: 4 }}>
//           {typeof cardData === "undefined"
//             ? Array.from(new Array(24)).map((data, index) => {
//                 return (
//                   <Grid item xs={6} md={4} lg={3} key={index}>
//                     <HomeCardSkeleton />
//                   </Grid>
//                 );
//               })
//             : cardData.length > 0 &&
//               cardData?.map((data, index) => {
//                 if (data !== null) {
//                   return (
//                     <Grid item xs={6} md={4} lg={3} key={data._id}>
//                       <HomeCard cardData={data} index={index} />
//                     </Grid>
//                   );
//                 } else return null;
//               })}
//         </Grid>
//       </Container>
//     </motion.div>
//   );
// }

// export default ProductNew;
