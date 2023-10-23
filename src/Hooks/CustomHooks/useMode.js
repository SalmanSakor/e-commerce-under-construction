import { useState, useEffect } from "react";

const saveValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
const getValue = (key, initValue) => {
  let res = JSON.parse(localStorage.getItem(key));
  return res ? res : initValue;
};
const useMode = (key, initValue) => {
  const [value, setValue] = useState(() => getValue(key, initValue));

  useEffect(() => {
    saveValue(key, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return [value, setValue];
};

export default useMode;
