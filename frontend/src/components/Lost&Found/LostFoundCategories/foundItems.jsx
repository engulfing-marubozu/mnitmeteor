
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LostFoundCard from '../Lost&FoundCard/L&FCard';
import LostFoundSkeleton from '../lostfoundSkeleton';
function FoundItems() {
  const [foundItems, setFoundItems] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribed = true;
    const axiosPosts = async () => {
      try {
        const response = await axios('http://localhost:5000/onlyfound');  //get
        if (isSubscribed) {
          setFoundItems(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    axiosPosts();
    return () => (isSubscribed = false);
  }, []);
  // console.log(foundItems);
  return (
    <>
      {(typeof (foundItems) === "undefined" ? Array.from(new Array(5)).map((data, index) => {
        return (
          <LostFoundSkeleton key={index} />
        )
      }) :
        (typeof (foundItems) !== "undefined" && foundItems.map((data, index) => {
          return (<LostFoundCard key={index} data={data} />)
        })))}
    </>
  );
}

export default FoundItems