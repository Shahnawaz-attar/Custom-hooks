import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const SetValueLocaly = () => {
  const [value, setStoredValue, unSetStoredValue] = useLocalStorage("user", {});
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = e => {
    e.preventDefault();
    setStoredValue(formValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name :
        <input
          type='text'
          onChange={e => setFormValue({ ...formValue, name: e.target.value })}
        />
        <br />
        Email :{" "}
        <input
          type='text'
          onChange={e => setFormValue({ ...formValue, email: e.target.value })}
        />
        <button>Save</button>
      </form>
      {Object.values(value).length > 0 ? (
        <div>
          {value.name + " - " + value.email}
          <button onClick={() => unSetStoredValue()}>X</button>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
  <button onClick={() => unSetStoredValue()}>X</button>;
};

export default SetValueLocaly;
