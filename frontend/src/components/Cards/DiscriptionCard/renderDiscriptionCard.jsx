import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DiscriptionCard from "./discriptionCard";
import PostDeletedPopup from "../../ModelPopUP/postDeletedPopup";
// import { useSelector } from "react-redux";
export default function RenderDiscriptionCard() {
  const [descrpData, setDescrpData] = useState();
  const [visible, setVisible] = useState(false);
  const Navigate = useNavigate();
  const params = useParams();
  const product_id = params.productId;
  // const localUserData = useSelector((state) => state.loginlogoutReducer);
  // const userId = localUserData.userData?.userId;
  // const email = localUserData.userData?.email;
  const userData = JSON.parse(window.localStorage.getItem("mm_user_data"));
  const userId = userData?.userId;
  const email = userData?.email;
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
            Navigate("/*");
          } else if (response.data === 100) {
            setVisible(true);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, product_id]);

  const VisibleHandler = () => {
    setVisible(!visible);
    Navigate("/");
  };

  return (
    <>
      {typeof descrpData !== "undefined" && !visible && (
        <DiscriptionCard
          descrpData={descrpData}
          productId={product_id}
          userId={userId}
        />
      )}
      {visible && (
        <PostDeletedPopup Open={visible} OnClose={VisibleHandler}>
          User has deleted this product.
        </PostDeletedPopup>
      )}
    </>
  );
}
