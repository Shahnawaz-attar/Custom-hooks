import { useState } from "react";

function useLocalStorage(key, initailValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initailValue;
  });

  const setStoredValue = newValue => {
    console.log(newValue);
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const unSetStoredValue = () => {
    localStorage.removeItem(key);
  };

  return [value, setStoredValue, unSetStoredValue];
}

export default useLocalStorage;
