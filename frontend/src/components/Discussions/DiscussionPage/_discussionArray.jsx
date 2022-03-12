import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

import DiscussionCard from './discussionCard';
// const array = [1, 2, 3, 5, 6, 7, 8, 8, 8, 8, 8];
function DiscussionCardArray() {
    const token = useSelector((state) => state.loginlogoutReducer.token);
    const [discussionData, setDiscussionData] = useState();
    useEffect(() => {
        window.scrollTo(0, 0);
        let isSubscribed = true;
        async function call() {
            try {
                const response = await axios.get(
                    "http://localhost:5000/fetch_live_threads"
                );
                if (isSubscribed) {
                    // console.log(response.data?.universal_threads);
                    setDiscussionData(response.data?.universal_threads);
                }
            } catch (err) {
                console.log(err);
            }

        }
        call();
        return () => (isSubscribed = false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(discussionData)

    return (
        <>
            {
                typeof (discussionData) !== "undefined" && discussionData.map((data , index) => {
                    return (<DiscussionCard key={index} data={data} />)
                })
            }
        </>)


}

export default DiscussionCardArray;
