import React from "react";

const Button = ({ count, setCount }) => {
  return (
    <div>
      <button
        style={btnStyle}
        onClick={() => {
          setCount(() => count--);
        }}
      >
        -
      </button>
      <button
        style={{
          backgroundColor: "#01FDF6",
          borderRadius: "10px",
          margin: "10px",
        }}
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <button
        style={btnStyle}
        onClick={() => {
          setCount(() => count++);
        }}
      >
        +
      </button>
    </div>
  );
};

const btnStyle = {
  backgroundColor: "#1098F7",
  borderRadius: "10px",
  width: "7vw",
  margin: "10px",
};

export default Button;
