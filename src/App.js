import React, { useState, createContext } from "react";
import "./App.css";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const data = createContext();

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="App">
        <h1>Counter</h1>
        <h2>Count:{count}</h2>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>

      <data.Provider value={count}>
        <div className="childComponent">
          <div>
            <ComponentA />
          </div>
          <div>
            <ComponentB />
          </div>
          <div>
            <ComponentC />
          </div>
        </div>
      </data.Provider>
    </>
  );
}

export default App;
export { data };
