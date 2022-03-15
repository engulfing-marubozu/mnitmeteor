
import React, { useState, useEffect, } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios'

function LostFoundMyItems() {
  const localUserData = useSelector((state) => state.loginlogoutReducer);
  const token = localUserData.token;
  console.log(localUserData);
  console.log("My items panel");
  const [posts, setPosts] = useState();

  useEffect(() => {
    console.log("My items panel 2");
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
          setPosts(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    axiosPosts();
    return () => (isSubscribed = false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(posts);

  return (
    <>
      <div>
        MyItems
      </div>
    </>
  );
}

export default LostFoundMyItems;