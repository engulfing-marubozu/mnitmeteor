import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DiscussionSkeleton from '../discussionSkeleton';
import DiscussionCard from '../DiscussionPage/discussionCard';


export default function DiscussionMyTopics() {

  const [myTopics, setMyTopics] = useState();
  const localUserData = JSON.parse(window.localStorage.getItem("auth"));
  console.log(myTopics);

  // =================================================================================
  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribed = true;
    async function call() {
      console.log("deepak");
      const response = await axios.get(
        "http://localhost:5000/fetch_own_threads",
        {
          headers: {
            authorization: `Bearer ${localUserData?.token}`,
          },
        }
      );
      if (isSubscribed) {
        console.log(response.data);
        setMyTopics(response.data.user_specific_threads);
      }
    }
    call();
    return () => (isSubscribed = false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // console.log(myTopics)

  // ====================================================================================
  return (
    <>
      {(typeof (myTopics) === "undefined" ? Array.from(new Array(10)).map((data, index) => {
        return (
          <DiscussionSkeleton key={index} />
        )
      }) :
        (typeof (myTopics) !== "undefined" && myTopics.map((data, index) => {
          return (<DiscussionCard key={index} data={data} setThread={setMyTopics} flag={3} />)
        })))}
    </>

  )
}
