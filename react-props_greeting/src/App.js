import React, { StrictMode } from "react";

// Defining Greeting Component
const Greeting = ({ name }) => {
const coaches = ['Coach John', 'Coach Jane', 'Coach Smith']; // Add your coaches' names here

let greeting = `Hello, ${name}!`;
if (coaches.includes(name)) {
greeting = 'Hello, Coach!';
}

return <h1>{greeting}</h1>
}

function App() {
return (
<div className="App">
<Greeting name="John Doe" /> 
{/* Pass the name prop here with a value of your choice */}
</div>
);
}

export default App;