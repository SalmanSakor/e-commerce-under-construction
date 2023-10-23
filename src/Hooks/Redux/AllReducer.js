import { combineReducers } from "redux";
import Addreducer from "./AddReducer";

const AllReducer = combineReducers({
  Add: Addreducer,
});
export default AllReducer;
