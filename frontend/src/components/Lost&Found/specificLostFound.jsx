import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import LostFoundCard from "./Lost&FoundCard/L&FCard";
import PostDeletedPopup from "../ModelPopUP/postDeletedPopup";

export default function SpecificLostFound() {
  const [lnfData, setLnfData] = useState();
  const [visible, setVisible] = useState(false);
  const Navigate = useNavigate();
  const params = useParams();
  const lnfcard_id = params.lnfCardId;
  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribed = true;
    const call = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API}/send_specific_lost`,
          { lnfcard_id }
        );
        if (isSubscribed) {
          if (response.data === 404) {
            Navigate("/*");
          } else if (response.data === 100) {
            setVisible(true);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const VisibleHandler = () => {
    setVisible(!visible);
    Navigate("/lost&found");
  };
  return (
    <>
      {typeof lnfData !== "undefined" && !visible && (
        <LostFoundCard data={lnfData} flag={5} showDelete={false} />
      )}
      {visible && (
        <PostDeletedPopup Open={visible} OnClose={VisibleHandler}>
          User has deleted this item.
        </PostDeletedPopup>
      )}
    </>
  );
}
