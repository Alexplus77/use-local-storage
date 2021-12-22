import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [valueInput, setValue] = useState("");
  const localStorageValue = localStorage.getItem(key);
  const saveValue = ({ target: { value } }) => {
    localStorage.setItem(key, value);
    setValue(value);
  };

  useEffect(() => {
    localStorageValue === ""
      ? setValue("")
      : localStorageValue
      ? setValue(localStorageValue)
      : setValue(defaultValue);
  }, []);

  return [valueInput, saveValue];
};

export default useLocalStorage;
