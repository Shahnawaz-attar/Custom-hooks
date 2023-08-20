const { useState, useEffect } = require("react");

function useDebounce(value, delay) {
  const [debounceValue, setDebounseValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounseValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
}

export default useDebounce;
