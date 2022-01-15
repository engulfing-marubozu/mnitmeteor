import React, { useEffect, useState } from 'react'
import axios from 'axios'
import HomeCard from "../Cards/HomeCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useParams } from 'react-router-dom';
let Image = [];


 function ProductCard(props) {
    const params = useParams();
<<<<<<< HEAD




    
=======
    // const [category, setcategory] = useState();
  let  category =  props.Category?props.Category:params.category;
    
    

    useEffect( ()=>{
      //  category =  props.Category?props.Category:params.category;
      console.log(category);
      const Call = async ()=>{
        try{
          console.log(category);
          Image = await axios.post(`http://localhost:5000/fetch`, {category});
          console.log(Image);
          // console.log(category);
          }
          catch(err)
          {
            console.log(err);
          }
      }
     Call();
    }
  ,[category]);
  
>>>>>>> b3e28b242e663542cb81c54394e2ab21a3a718c2
    return (
        <main>
            <h1>this is {props.Category?props.Category:params.category}</h1>
        <Container sx={{ py: 2 }} maxWidth={"lg"}>
          <Grid container spacing={{ xs: 2, sm: 4 }}>
            {Image.map((img, index) => {
              return (
                <Grid item xs={6} sm={4} lg={3} key={index}>
                  <HomeCard  productId={index}/>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </main>
    )
}

 export default ProductCard;
