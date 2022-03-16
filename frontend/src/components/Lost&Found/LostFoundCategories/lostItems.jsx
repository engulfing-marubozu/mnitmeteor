
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function LostItems() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    let isSubscribed = true;
    const axiosPosts = async () => {
      try {
        const response = await axios('http://localhost:5000/onlylost');// get 
        if (isSubscribed) {
          setPosts(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    axiosPosts();
    return () => (isSubscribed = false);
  }, []);

  console.log(posts);
  return (
    <>
      <div>Lost Items </div>
    </>
  );
}

export default LostItems