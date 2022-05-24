import React from "react";
import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-info" style={counterStyle}>
      {count}
      <Button count={count} setCount={setCount} />
    </div>
  );
};

const counterStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "5em",
};

export default Counter;
