import React from "react";
import { useEffect, useState,useContext } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import StylingInterestedProduct from "./stylingInterestedProduct";
import { UserDataContext } from "../../_ContextFolder/webContext";

function InterestedProduct(props) {
  const [arr, setarr] = useState();
  const localUserData = useContext(UserDataContext);
  const token=localUserData.token;
  const interestedList=useSelector((state)=>state.InterestedReducer?.interestedData)
  useEffect(() => {
    let isSubscribed =true;
    async function call() {
      const response = await axios.get(
        "http://localhost:5000/send_interested_products",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );if(isSubscribed){
        setarr(response.data);
        // console.log(response.data);
      }
      
    }

    call();
    return()=>{
    return   isSubscribed=false;
    }
  }, [interestedList,token]);

      const arrlength=typeof(arr)==="undefined"?0:arr.length;
      // console.log(arrlength);
      // console.log(arr); 
  // ====================================================================================================================================
  return (
    <StylingInterestedProduct length={arrlength} arr={arr}></StylingInterestedProduct>
  );
}
export default InterestedProduct;
