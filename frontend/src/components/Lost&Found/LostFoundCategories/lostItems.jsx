
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LostFoundCard from '../Lost&FoundCard/L&FCard';
import LostFoundSkeleton from '../lostfoundSkeleton';
function LostItems() {
  const [lostItems, setLostItems] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribed = true;
    const axiosPosts = async () => {
      try {
        const response = await axios('http://localhost:5000/onlylost');// get 
        if (isSubscribed) {
          setLostItems(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    axiosPosts();
    return () => (isSubscribed = false);
  }, []);
  //  console.log(lostItems)
  return (
    <>
      <>
        {(typeof (lostItems) === "undefined" ? Array.from(new Array(5)).map((data, index) => {
          return (
            <LostFoundSkeleton key={index} />
          )
        }) :
          (typeof (lostItems) !== "undefined" && lostItems.map((data, index) => {
            return (<LostFoundCard key={index} data={data} />)
          })))}
      </>
    </>
  );
}

export default LostItems