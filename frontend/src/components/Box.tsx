import React from "react";

interface BoxProps {
  value: "X" | "O" | "";
  onChange: () => void;
}

function Box({ value, onChange }: BoxProps) {
  return (
    <button
      onClick={onChange}
      disabled={value !== ""}
      style={{ width: 20, height: 20, margin: 2 }}
    >
      {value}
    </button>
  );
}

export default Box;
