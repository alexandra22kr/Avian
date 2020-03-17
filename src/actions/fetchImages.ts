import { FETCH_IMAGES } from "../constants/actionConstants";
import IImage from '../reducers/interfaces/IImage';

const fetchImages = (images: IImage[])=> ({
  type: FETCH_IMAGES,
  value: images
});

export default fetchImages;
