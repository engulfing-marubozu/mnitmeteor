import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
// import StylingPublishedAds from "./stylingPublishedAds";
import CardForPublishedAds from "./CardForPublishedAd";
import CardSlider from "../CardSlider";

function PublishedAds() {
  console.log("deepakpbulsih");
  // ================================================================== DATA FETCHING=============================================================================================
  const [arr, setarr] = useState();
  const localUserData = JSON.parse(window.localStorage.getItem("auth"));
  const token = localUserData.token;
  const publishedAdsData = useSelector((state) => state.DeletePublishedAdsReducer?.publishedAdsData)
  useEffect(() => {
    let isSubscribed = true;
    async function call() {
      const response = await axios.get(
        "http://localhost:5000/send_published_Ads",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (isSubscribed) {
        setarr(response.data);
        // console.log(response.data);
      }

    }

    call();
    return () => {
      isSubscribed = false;
    }
  }, [publishedAdsData, token]);
  // const arrLength = typeof (arr) === "undefined" ? 0 : arr.length;
  // ===================================================================================================================================================================
  return (
    // <StylingPublishedAds length={arrLength} arr={arr}></StylingPublishedAds>
    <>
      {/* {
        typeof arr !== "undefined" &&
        arr.length !== 0 &&
        arr.map((data, index) => {
          if (data !== null) {
            console.log("check")
            return <CardForPublishedAds cardData={data} key={index} />;
          }
          else
            return null;
        })
      } */}
      <CardSlider arr={arr} />
    </>

  );
}

export default PublishedAds;
