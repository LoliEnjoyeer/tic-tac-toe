import React from "react";

interface BoxProps {
  value: "X" | "O" | "";
}

function Box({ value }: BoxProps) {
  return <button>{value}</button>;
}

export default Box;
