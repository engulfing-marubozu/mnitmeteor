import React, { useEffect } from 'react'
import axios from 'axios'

function DiscussionSavedTopics() {
    useEffect(()=>{
            const call =async ()=>{
        const  token =  JSON.parse(window.localStorage.getItem("auth")).token
   
              try {
                console.log(token);
               console.log("hemllo")
                 const response = await axios.post(
                  "http://localhost:5000/send_saved_threads",
                 {},
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                );
                 console.log(response.data);
              } catch (err) {
                console.log(err);
              }
            }

            call();
    })
  return (
    <div>DiscussionSavedTopics</div>
  )
}

export default DiscussionSavedTopics;