import React, { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);
  function incrimet() {
    setCounter(count + 1);
  }

  function decriment() {
    setCounter(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrimet}>Incrimet</button>
      <button onClick={decriment}>Decriment</button>
    </div>
  );
};

export default Counter;
