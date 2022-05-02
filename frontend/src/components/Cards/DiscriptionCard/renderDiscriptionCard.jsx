import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import DiscriptionCard from "./discriptionCard";

export default function RenderDiscriptionCard() {
  const [descrpData, setDescrpData] = useState();
  const Navigate = useNavigate();
  const params = useParams();
  const product_id = params.productId;
  const userData = useSelector((state) => state.loginlogoutReducer.userData);
  const { email, _id: userId } = userData;

  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribed = true;
    const call = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API}/send_specific_product`,
          { email, product_id }
        );
        if (isSubscribed) {
          if (response.data === 404) {
            Navigate("*");
          } else {
            setDescrpData(response.data);
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
  }, [email, product_id, Navigate]);

  return (
    <>
      {typeof descrpData !== "undefined" && (
        <DiscriptionCard
          descrpData={descrpData}
          productId={product_id}
          userId={userId}
        />
      )}
    </>
  );
}
