import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";

function DebounceExample() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 300);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>Debounce Example</h2>
      <input
        type='text'
        placeholder='Type something...'
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
}

export default DebounceExample;
