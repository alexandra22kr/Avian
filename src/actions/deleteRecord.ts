import { DELETE_RECORD } from "../constants/actionConstants";

const deleteRecord = (timestamp: String) => (
    {
        type: DELETE_RECORD,
        value: {}
    }
);

export default deleteRecord;
