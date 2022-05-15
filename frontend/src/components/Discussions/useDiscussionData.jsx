import { useState, useEffect } from "react";
import axios from "axios";
function useDiscussionData(token, pointer) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    let isSubscribed = true;
    setLoading(true);
    const Call = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API}/fetch_live_threads`,
           { 
             token: `Bearer ${token}`,
             pointer: pointer }
        );
        if (isSubscribed) {
          setData((prev) => {
            return [...prev, ...response.data.universal_threads];
          });
          setLoading(false);
          setHasMore(response.data.universal_threads.length > 0);
        }
      } catch (err) {
        console.log(err);
      }
    };
    Call();
    return () => (isSubscribed = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointer]);
  return { loading, data, hasMore };
}

export default useDiscussionData;
