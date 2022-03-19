
import React, { useState, useEffect, } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios'
import LostFoundSkeleton from '../lostfoundSkeleton';
import LostFoundCard from '../Lost&FoundCard/L&FCard';


function LostFoundMyItems() {
  const [myItems, setMyItems] = useState();
  const localUserData = useSelector((state) => state.loginlogoutReducer);
  const token = localUserData.token;

  useEffect(() => {
    window.scrollTo(0, 0);
    let isSubscribed = true;
    const axiosPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/lnfmyitems',
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        if (isSubscribed) {
          setMyItems(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    axiosPosts();
    return () => (isSubscribed = false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(myItems);

  return (
    <>
      <>
        {(typeof (myItems) === "undefined" ? Array.from(new Array(5)).map((data, index) => {
          return (
            <LostFoundSkeleton key={index} />
          )
        }) :
          (typeof (myItems) !== "undefined" && myItems.map((data, index) => {
            return (<LostFoundCard key={index} data={data} setLostFound={setMyItems} flag={4} />)
          })))}
      </>
    </>
  );
}

export default LostFoundMyItems;