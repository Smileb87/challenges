import React from 'react';
import Card from './components/Card';

export default function App() {
  const fruits = [
    { id: 1, name: '🍌 Banana', color: 'yellow' },
    { id: 2, name: '🍎 Apple', color: 'red' },
    { id: 3, name: '🍊 Orange', color: 'orange' },
    { id: 4, name: '🍇 Grapes', color: 'purple' },
    { id: 5, name: '🍍 Pineapple', color: 'brown' },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
