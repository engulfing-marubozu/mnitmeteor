import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import StylingPublishedAds from "./stylingPublishedAds";

function PublishedAds(props) {
  // ================================================================== DATA FETCHING=============================================================================================
  const [arr, setarr] = useState();
  const token = useSelector((state) => state.loginlogoutReducer.token);
  const publishedAdsData=useSelector((state)=>state.DeletePublishedAdsReducer?.publishedAdsData)
  useEffect(() => {
    let isSubscribed=true;
    async function call() {
      const response = await axios.get(
        "http://localhost:5000/send_published_Ads",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      if(isSubscribed){
        setarr(response.data);
        // console.log(response.data);
      }
    
    }

    call();
    return ()=>{
      isSubscribed=false;
    }
  }, [publishedAdsData,token]);
  const arrLength=typeof (arr)==="undefined"?0:arr.length;
  // ===================================================================================================================================================================
  return (
    <StylingPublishedAds length={arrLength} arr={arr}></StylingPublishedAds>
  );
}

export default PublishedAds;
