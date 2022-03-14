// import React from 'react'
import React, {useState, useEffect, useContext} from 'react'
// import LostFoundCard from '../L&FCard';
import axios from 'axios'
import {UserDataContext} from "../../_ContextFolder/webContext";


// export default PostsWithAxios;
function LostFoundMyItems() {
    const localUserData = useContext(UserDataContext);
    const token = localUserData.token;
    console.log(localUserData);
    console.log("My items panel");
    const [posts, setPosts] = useState( [] );
 
    useEffect(() => {
      console.log("My items panel 2");
      const axiosPosts = async () => {
        const response = await axios.get('http://localhost:5000/lnfmyitems', 
        {
          headers: {
              authorization: `Bearer ${token}`,
          },
        }
      );  //get
        console.log(response.data);
        setPosts(response.data);
      };
      axiosPosts();
    }, []);
    const useaxiosPosts = posts.map((post)=>{
        console.log(post);
      return <div>
                  <h3>{post.name}</h3>
                  {/* <p>{post.description}</p> */}
                  {/* <p>{post.body}</p> */}
                </div> 
      })
      return (
        <>
          <div className="axioscontainer">
              {posts && useaxiosPosts}
          </div>
        </>
      );
}

export default LostFoundMyItems;