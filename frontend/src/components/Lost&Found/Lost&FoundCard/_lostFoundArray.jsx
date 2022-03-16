import React, { useState, useEffect } from 'react'
import LostFoundCard from './L&FCard';
import axios from 'axios'

function PostsWithAxios() {
  const [lfData, setlfData] = useState();

  useEffect(() => {
    let isSubscribe = true;
    const axiosPosts = async () => {
      try {
        const response = await axios('http://localhost:5000/fetchlost');  //get
        if (isSubscribe) {
          setlfData(response.data);
        }
      } catch (err) {
        console.log(err)
      }
    };
    axiosPosts();
    return () => (isSubscribe = false);
  }, []);
  console.log(lfData);
  return (
    <>
      {
        typeof (lfData) !== "undefined" && lfData.map((data, index) => {
          return (<LostFoundCard key={index} data={data} />)
        })
      }
    </>
  );
}

export default PostsWithAxios;