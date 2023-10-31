import React, { useState } from "react";
// import { Button } from "react-bootstrap";

const Box = () => {
  const [count, Setcount] = useState(0);
  const increase = () => {
    Setcount(count + 1);
  };
  return (
    <main>
      <div>{count}</div>
      <button onClick={increase}>증가</button>
    </main>
  );
};

export default Box;
