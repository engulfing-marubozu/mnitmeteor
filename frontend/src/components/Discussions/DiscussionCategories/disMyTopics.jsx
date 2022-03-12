import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
export default function DiscussionMyTopics() {
  const token = useSelector((state) => state.loginlogoutReducer.token);
    useEffect(()=>{
      window.scrollTo(0, 0);
      async function call() {
        const response = await axios.get(
            "http://localhost:5000/fetch_own_threads",
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }
        );
        console.log(response.data);
    }
    call();
    })
  return (
    <div>DiscussionMyTopics</div>
  )
}
