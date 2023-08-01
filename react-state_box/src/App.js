import React, { useState, useEffect } from 'react';
import "./styles.css";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{isActive ? 'Deactivate' : 'Activate'}</button>
    </main>
  );
}

