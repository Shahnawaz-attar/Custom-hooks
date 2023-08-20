import React from "react";
import SetValueLocaly from "./components/SetValueLocaly";
import DebounceExample from "./components/SetDelay";
import GetUsers from "./components/GetUsers";

const App = () => {
  return (
    <div>
      <SetValueLocaly />
      <DebounceExample />
      <GetUsers />
    </div>
  );
};

export default App;
