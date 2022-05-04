import { useState, useEffect } from "react";
import axios from "axios";
function useGetData({ category, pageNumber, email }) {
  const [loading, setLoading] = useState();
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let isSubscribed = true;
    const Call = async () => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API}/fetch`, {
          category,
          email,
          pageNumber,
        });
        if (isSubscribed) {
          console.log(response.data);
          setData((prev) => {
            return [...prev, ...response.data];
          });
          setLoading(false);
          setHasMore(response.data.length > 0);
        }
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };
    Call();
    return () => (isSubscribed = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, category]);
  return { loading, hasMore, data, error };
}

export default useGetData;
