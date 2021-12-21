import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [valueInput, setValue] = useState("");

  const saveValue = ({ target: { value } }) => {
    localStorage.setItem(key, value);
    setValue(value);
  };

  useEffect(() => {
    const localStorageValue = localStorage.getItem(key);
    localStorageValue ? setValue(localStorageValue) : setValue(defaultValue);
  }, []);

  return [valueInput, saveValue];
};

export default useLocalStorage;
