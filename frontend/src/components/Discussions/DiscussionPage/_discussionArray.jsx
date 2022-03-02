import React, { useEffect } from 'react'
import DiscussionCard from './discussionCard';
const array = [1, 2, 3, 5, 6, 7, 8, 8, 8, 8, 8];
function DiscussionCardArray() {
    useEffect(() => {
        window.scrollTo(0, 0);
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
