import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import fetchImages from "../actions/fetchImages";

export const useSearchImages = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  dispatch = useDispatch();

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
        "https://api.pexels.com/v1/search?query=example+query&per_page=15&page=1"
    })
      .then(res => {
        setImages(prevBooks => {
          dispatch(
            fetchImages([
              ...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])
            ])
          );
          // return [
          //   ...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])
          // ];
        });
        setHasMore(res.data.docs.length > 0);
        setLoading(false);
      })
      .catch(e => {
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, images, hasMore };
};
