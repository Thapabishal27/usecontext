import React from "react";
import { useContext } from "react";
import { data } from "./App";

function ComponentC() {
  const count = useContext(data);
  return (
    <div
      style={{
        backgroundColor: "#dddbde",
        padding: "16px",
        marginRight: "10px",
        textAlign: "center",
      }}
    >
      <h1>ComponentC</h1>
      <h2>Count:{count}</h2>
    </div>
  );
}

export default ComponentC;
