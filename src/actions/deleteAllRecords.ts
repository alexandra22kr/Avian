import { DELETE_ALL_RECORDS } from "../constants/actionConstants";

const deleteAllRecords = (timestamp: number) => ({
  type: DELETE_ALL_RECORDS,
  value: {
    record: "",
    timestamp: timestamp
  }
});

export default deleteAllRecords;
