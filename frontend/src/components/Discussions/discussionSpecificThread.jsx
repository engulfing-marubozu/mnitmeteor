import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import DiscussionSkeleton from './discussionSkeleton';
// import DiscussionCard from './DiscussionPage/discussionCard';

function SpecificThread() {
  // const [cardData, setCardData] = useState();
  const params = useParams();
  const cardId = params.id;
  useEffect(() => {

  }, [])
  return (
    <>
      <div>
        specific thread {cardId}
      </div>
      {/* {cardData ? (<DiscussionSkeleton />) :
        (<DiscussionCard data={cardData} setThreadArray={setCardData} />)} */}
    </>

  )
}
export default SpecificThread;