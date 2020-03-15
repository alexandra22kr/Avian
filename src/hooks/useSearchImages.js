import { useEffect, useState } from "react";
import axios from "axios";

export const useSearchImages = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setImages([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;

    axios({
      method: "GET",
      url:
        "https://api.pexels.com/v1/search?query=example+query&per_page=15&page=1",
      cancelToken: new axios.CancelToken(c => (cancel = c))
    })
      .then(res => {
        setBooks(prevBooks => {
          return [
            ...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])
          ];
        });
        setHasMore(res.data.docs.length > 0);
        setLoading(false);
      })
      .catch(e => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, images, hasMore };
};
