import { FETCH_IMAGES } from "../constants/actionConstants";
import IImage from "./interfaces/IImage";
import IFetchImages from "../actions/interfaces/IFetchImages";

const initialState: IImage[] = [];

const images = (state = initialState, action: IFetchImages) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return [action.value];
    default:
      return state;
  }
};

export default images;