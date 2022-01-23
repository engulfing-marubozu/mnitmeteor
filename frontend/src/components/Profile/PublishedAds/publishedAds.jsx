import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import StylingPublishedAds from "./stylingPublishedAds";

function PublishedAds(props) {
  // ================================================================== DATA FETCHING=============================================================================================
  const [arr, setarr] = useState([]);
  const token = useSelector((state) => state.loginlogoutReducer.token);
  useEffect(() => {
    async function call() {
      const response = await axios.get(
        "http://localhost:5000/send_published_Ads",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setarr(response.data);
      console.log(response.data);
    }

    call();
  }, [token]);

  // ===================================================================================================================================================================
  return (
    <StylingPublishedAds length={arr.length} arr={arr}></StylingPublishedAds>
  );
}

export default PublishedAds;
