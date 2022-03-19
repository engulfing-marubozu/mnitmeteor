import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import LostFoundSkeleton from './lostfoundSkeleton';
// import LostFoundCard from './Lost&FoundCard/L&FCard';

function SpecificLostFound() {
    // const [cardData, setCardData] = useState();
    const params = useParams();
    const cardId = params.id;
    useEffect(() => {

    }, [])
    return (
        <>
            <div>
                specific div
                {cardId}
            </div>
            {/* {cardData ? (<LostFoundSkeleton />) :
                (<LostFoundCard data={cardData} />)} */}
        </>

    )
}
export default SpecificLostFound;