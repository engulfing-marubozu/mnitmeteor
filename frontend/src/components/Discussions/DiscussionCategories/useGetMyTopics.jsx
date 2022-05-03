import { useState, useEffect } from "react";
import axios from "axios";
function useGetMyTopics(
  lastPointer,
  userId,
  pointer,
  threadDelete,
  setDeleteThread
) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const localUserData = JSON.parse(window.localStorage.getItem("auth"));

  useEffect(() => {
    setLoading(true);
    let isSubscribed = true;
    const Call = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/fetch_own_threads`,
          {
            headers: {
              authorization: `Bearer ${localUserData?.token}`,
            },
          }
        );
        // const response = await axios.post(
        //   `${process.env.REACT_APP_API}/fetch_live_threads`,
        //   { user_id: userId, pointer: pointer }
        // );
        if (isSubscribed) {
          console.log("delete");
          setData((prev) => {
            const prevData = [...prev].slice(0, pointer - 1);
            return [...prevData, ...response.data.universal_threads];
          });
          setDeleteThread(false);
          setLoading(false);
          setHasMore(response.data.length > 0);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (threadDelete) {
      Call();
    }
    return () => (isSubscribed = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threadDelete]);

  useEffect(() => {
    setLoading(true);
    let isSubscribed = true;
    const Call = async () => {
      try {
        
        // const response = await axios.post(
        //   `${process.env.REACT_APP_API}/fetch_live_threads`,
        //   { user_id: userId, pointer: pointer }
        // );
        if (isSubscribed) {
          console.log(response.data.universal_threads);
          setData((prev) => {
            return [...prev, ...response.data.universal_threads];
          });
          setLoading(false);
          setHasMore(response.data.length > 0);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (!threadDelete && lastPointer !== pointer) {
      Call();
    }
    return () => (isSubscribed = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointer]);
  return { loading, hasMore, data };
}
export default useGetMyTopics;
