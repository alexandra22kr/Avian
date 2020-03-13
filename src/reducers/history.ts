import { ADD_RECORD } from "../constants/actionConstants";
import IAddRecord from "../actions/interfaces/IAddRecord";

const initialState = {};

const history = (state = initialState, action: IAddRecord) => {
  switch (action.type) {
    case ADD_RECORD:
      return state;
    default:
      return state;
  }
};

export default history;
