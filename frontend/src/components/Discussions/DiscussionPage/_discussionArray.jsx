import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'

import DiscussionCard from './discussionCard';
const array = [1, 2, 3, 5, 6, 7, 8, 8, 8, 8, 8];
function DiscussionCardArray() {
    const token = useSelector((state) => state.loginlogoutReducer.token);
    useEffect(() => {
        window.scrollTo(0, 0);
        async function call() {
            const response = await axios.get(
              "http://localhost:5000/fetch_live_threads",
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
        <>
            {
                array.map((item, index) => {
                    return (<DiscussionCard key={index} />)
                })
            }
        </>

    )
}

export default DiscussionCardArray;
