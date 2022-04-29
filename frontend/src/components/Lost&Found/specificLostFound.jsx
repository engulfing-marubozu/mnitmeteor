
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import LostFoundCard from "./Lost&FoundCard/L&FCard";


export default function SpecificThread() {
  const [lnfData, setLnfData] = useState();
  const Navigate = useNavigate();
  const params = useParams();
  const lnfcard_id = params.lnfCardId;
  const userData = useSelector((state) => state.loginlogoutReducer.userData);
  const {email} = userData;

  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribed = true;
    const call = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/send_specific_product",
          { email, lnfcard_id}
        );
        if (isSubscribed) {
          if (response.data === 404) {
            Navigate("/*");
          } else {
            setLnfData(response.data);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    call();
    return () => {
      isSubscribed = false;
    };
  }, [email, lnfcard_id, Navigate]);

  return (
    <>
      {typeof discsnData !== "undefined" && (
        <LostFoundCard
          data={lnfData}
          flag={5}
        />
      )}
    </>
  );
}
