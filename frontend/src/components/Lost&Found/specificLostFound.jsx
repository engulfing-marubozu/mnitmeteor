import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import LostFoundCard from "./Lost&FoundCard/L&FCard";

export default function SpecificLostFound() {
  const [lnfData, setLnfData] = useState();
  const Navigate = useNavigate();
  const params = useParams();
  const lnfcard_id = params.lnfCardId;
  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribed = true;
    const call = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/send_specific_lost",
          {lnfcard_id }
        );
        if (isSubscribed) {
          if (response.data === 404) {
            Navigate("/*");
          } else {
            console.log(response.data);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {typeof lnfData !== "undefined" && (
        <LostFoundCard data={lnfData} flag={5} />
      )}
    </>
  );
}
