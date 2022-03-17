import React, { useState } from 'react'
import { useEffect } from 'react'
import DiscussionSkeleton from '../discussionSkeleton';
import DiscussionCard from '../DiscussionPage/discussionCard';
import axios from 'axios'

export default function DiscussionMyAnswers() {
  const [myAnswers, setMyAnswers] = useState();
  const localUserData = JSON.parse(window.localStorage.getItem("auth"));
  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribed = true;
    const call = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/send_commented_replied_threads",
          {},
          {
            headers: {
              Authorization: `Bearer ${localUserData?.token}`,
            },
          }
        );
        if (isSubscribed) {
          setMyAnswers(response.data);
        }

      } catch (err) {
        console.log(err);
      }
    }
    call();
    return () => (isSubscribed = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(myAnswers);
  return (
    <>
      {(typeof (myAnswers) === "undefined" ? Array.from(new Array(10)).map((data, index) => {
        return (
          <DiscussionSkeleton key={index} />
        )
      }) :
        (typeof (myAnswers) !== "undefined" && myAnswers.map((data, index) => {
          return (<DiscussionCard key={index} data={data} />)
        })))}
    </>
  );
}
