import React from 'react'
import React, {useState, useEffect} from 'react'
import LostFoundCard from './L&FCard';
import axios from 'axios'



// export default PostsWithAxios;
function LostItems() {
    const [posts, setPosts] = useState( [] );
 
    useEffect(() => {
      const axiosPosts = async () => {
        const response = await axios('http://localhost:5000/onlylost');  //get
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

export default LostItems