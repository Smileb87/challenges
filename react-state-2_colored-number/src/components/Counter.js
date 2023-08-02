import React, { useState } from 'react';
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  // Declare a new state variable called 'count', which we'll initialize as 0
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          // On button click, update the state with the new count
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          // On button click, update the state with the new count
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}

