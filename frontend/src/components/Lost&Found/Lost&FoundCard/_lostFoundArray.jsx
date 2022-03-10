import React, { useEffect } from 'react'
import LostFoundCard from './L&FCard';
const array = [1, 2, 3, 5, 6, 7, 8, 8, 8, 8, 8];
function LostFoundCardArray() {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <>
            {
                array.map((item, index) => {
                    return (<LostFoundCard key={index} />)
                })
            }
        </>

    )
}

export default LostFoundCardArray;
