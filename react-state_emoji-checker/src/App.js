import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [code, setCode] = useState("");

  const validCode = "🐡🐠🐋";

  const handleClick = (emoji) => {
    // if code length is less than the length of the validCode, append emoji
    if (code.length < validCode.length) {
      setCode((prevCode) => prevCode + emoji);
    }
  };

  const handleReset = () => {
    setCode("");
  };

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => handleClick("🐡")}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => handleClick("🐋")}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => handleClick("🐠")}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={handleReset}
      >
        Reset
      </button>
      <h2>{code}</h2>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
