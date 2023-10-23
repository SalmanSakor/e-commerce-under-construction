import { types } from "./Types";

export const AddItem = (par) => {
  return {
    type: types.ADD,
    payload: par,
  };
};
