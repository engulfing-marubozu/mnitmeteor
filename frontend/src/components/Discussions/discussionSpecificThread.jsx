import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DiscussionCard from "./DiscussionPage/discussionCard";
import PostDeletedPopup from "../ModelPopUP/postDeletedPopup";
export default function SpecificThread() {
  const [discsnData, setDiscsnData] = useState();
  const [visible, setVisible] = useState(false);
  const Navigate = useNavigate();
  const params = useParams();
  const thread_id = params.threadId;
  const userData = JSON.parse(window.localStorage.getItem("mm_user_data"));
  const email = userData?.email;

  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribed = true;
    const call = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API}/send_specific_thread`,
          { email, thread_id }
        );
        if (isSubscribed) {
          if (response.data === 404) {
            Navigate("/*");
          } else if (response.data === 100) {
            setVisible(true);
          } else {
            setDiscsnData(response.data.thread);
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
  }, [thread_id]);

  const VisibleHandler = () => {
    setVisible(!visible);
    Navigate("/discussions");
  };
  return (
    <>
      {typeof discsnData !== "undefined" && !visible && (
        <DiscussionCard data={discsnData} flag={4} showDelete={false} />
      )}
      {visible && (
        <PostDeletedPopup Open={visible} OnClose={VisibleHandler}>
          User has deleted this thread.
        </PostDeletedPopup>
      )}
    </>
  );
}
