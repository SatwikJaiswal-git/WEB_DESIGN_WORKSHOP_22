import { useState } from "react";
import "./Exp8.css";

function Exp8Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="exp8-container">
      <h1>React Counter Application</h1>
      <h2>{count}</h2>
      
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Increment (+)</button>
        <button onClick={() => setCount(count - 1)}>Decrement (-)</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Exp8Counter;