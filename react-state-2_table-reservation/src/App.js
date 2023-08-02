import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  // Move the state to this component
  const [people, setPeople] = useState(0);

  // Create handlers for increment and decrement
  const handleIncrement = () => {
    setPeople(people + 1);
  };

  const handleDecrement = () => {
    if (people > 0) {
      setPeople(people - 1);
    }
  };

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      {/* Pass the handlers as props to the Counter component */}
      <Counter onIncrement={handleIncrement} onDeccrement={handleDecrement} />
      {/* Dynamically render the count of people */}
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}

