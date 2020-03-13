import {
  ADD_RECORD,
  DELETE_RECORD,
  DELETE_ALL_RECORDS
} from "../constants/actionConstants";
import IAddRecord from "../actions/interfaces/IAddRecord";
import IRecord from "./interfaces/IRecord";

const initialState: IRecord[] = [];

const history = (state = initialState, action: IAddRecord) => {
  switch (action.type) {
    case ADD_RECORD:
      return [...state, action.value];
    case DELETE_RECORD:
      return state.filter(rec => rec.timestamp !== action.value.timestamp);
    case DELETE_ALL_RECORDS:
      return initialState;
    default:
      return state;
  }
};

export default history;
