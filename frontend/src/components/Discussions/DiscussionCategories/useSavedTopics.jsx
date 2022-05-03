import { useState, useEffect } from "react";
import axios from "axios";
function useSavedTopics(token, pointer) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    let isSubscribed = true;
    setLoading(true);
    const Call = async () => {
      try {
        const response = await axios.post(
            `${process.env.REACT_APP_API}/send_saved_threads`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(response.data);
        if (isSubscribed) {
          setData((prev) => {
            return [...prev, ...response.data];
          });
          setLoading(false);
          setHasMore(response.data.length > 0);
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

export default useSavedTopics;
