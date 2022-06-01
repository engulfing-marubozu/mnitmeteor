import { useState, useEffect } from "react";
import axios from "axios";
function useGetData(token, pointer, category) {
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
        console.log(category);
        const response = await axios.post(
          `${process.env.REACT_APP_API}/fetch`,
          {
            category,
            token,
            pointer,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("response "+response);

        if (isSubscribed) {
          setData((prev) => [...prev, ...response.data]);
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
  return { loading, hasMore, data };
}

export default useGetData;
