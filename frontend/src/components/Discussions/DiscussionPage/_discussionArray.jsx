import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DiscussionCard from './discussionCard';
function DiscussionCardArray() {

    // =======================================================================================================================================================================
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
    // console.log(discussionData)

    return (
        <>

            {
                typeof (discussionData) !== "undefined" && discussionData.map((data, index) => {
                    return (<DiscussionCard key={index} data={data} />)
                })
            }


        </>)


}

export default DiscussionCardArray;
