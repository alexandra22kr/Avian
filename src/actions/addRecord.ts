import { ADD_RECORD } from "../constants/actionConstants";
import IRecord from "../reducers/interfaces/IRecord";

const addRecord = (newRecord: IRecord) => ({
  type: ADD_RECORD,
  value: {
    record: newRecord.record,
    timestamp: newRecord.timestamp
  }
});

export default addRecord;
