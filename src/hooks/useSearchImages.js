import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import fetchImages from "../actions/fetchImages";

const pixabyUrl = "https://pixabay.com/api/";
const pixabyApiKey = "11370902-19d6d747d66b3dd76f6049b2b";

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
      url: `${pixabyUrl}${pixabyApiKey}&q=${query}`
    })
      .then(res => {
        console.log('res', res);
        // setImages(prevBooks => {
        //   dispatch(
        //     fetchImages([
        //       ...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])
        //     ])
        //   );
        // });
        // setHasMore(res.data.docs.length > 0);
        setLoading(false);
      })
      .catch(e => {
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, images, hasMore };
};
