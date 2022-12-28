import React from "react";
import { useContext } from "react";
import { data } from "./App";

function ComponentA() {
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
      <h1>ComponentA</h1>
      <h2>Count:{count}</h2>
    </div>
  );
}

export default ComponentA;
