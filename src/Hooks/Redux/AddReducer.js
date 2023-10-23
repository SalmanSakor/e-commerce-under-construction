import { types } from "./Types";

const initState = {
  text: "Connect Me",
};
const AddReducer = (state = initState, action) => {
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        text: action.payload,
      };

    default:
      return state;
  }
};
export default AddReducer;
