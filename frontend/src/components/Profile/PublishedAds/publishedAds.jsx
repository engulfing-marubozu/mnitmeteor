import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { ProfileBoxStyle } from "../ProfileStyling/profilePageStyling";
// import StylingPublishedAds from "./stylingPublishedAds";
import CardForPublishedAds from "./CardForPublishedAd";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
  0: { items: 1 },
  340: { items: 2 },
  860: { items: 3 },
  1300: { items: 4 },
};


// export const Carousel = () => (

// );

function PublishedAds() {
  // console.log("deepakpbulsih");
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


  const items = (typeof arr !== "undefined" &&
    arr.length !== 0 && (
      arr.map((data, index) => {
        if (data !== null) {
          console.log("check")
          return <CardForPublishedAds cardData={data} key={index} />;
        }
        else
          return null;
      })
    ))
  // console.log(items);

  // const arrLength = typeof (arr) === "undefined" ? 0 : arr.length;
  const classes = ProfileBoxStyle();
  // ===================================================================================================================================================================
  return (

    <>
      <Box
        className={classes.mainBox} sx={{ pt: { xs: 5 }, pb: { xs: 5 } }}
      >
        {typeof arr !== "undefined" &&
          (<AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            disableDotsControls
            disableButtonsControls
          />)
        }
      </Box>

    </>
  );
}

export default PublishedAds;
