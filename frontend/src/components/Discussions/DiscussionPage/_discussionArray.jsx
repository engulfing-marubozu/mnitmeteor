import React, { useEffect, useState,createContext} from 'react'
import axios from 'axios'
import DiscussionCard from './discussionCard';
 export const PageUpdateContext = createContext();
function DiscussionCardArray() {

    // =======================================================================================================================================================================
    const [discussionData, setDiscussionData] = useState();
    const [updatePage, setUpdatePage] = useState();
    useEffect(() => {   
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
    }, [updatePage])
    // console.log(discussionData)

    return (
        <>
            <PageUpdateContext.Provider value={setUpdatePage}>
                {
                    typeof (discussionData) !== "undefined" && discussionData.map((data, index) => {
                        return (<DiscussionCard key={index} data={data} />)
                    })
                }
            </PageUpdateContext.Provider>

        </>)


}

export default DiscussionCardArray;
