import { useState, useEffect } from "react";
import axios from "axios";
function useGetData(email, pointer, category) {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    setData([]);
  }, [category]);

  useEffect(() => {
    setLoading(true);
    let isSubscribed = true;
    const Call = async () => {
      try {
        const response = await axios.post(`http://localhost:5000/fetch`, {
          category,
          email,
          pointer,
        });
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
  }, [pointer, category]);
  return { loading, hasMore, data};
}

export default useGetData;
