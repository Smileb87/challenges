import React from 'react';
import { D6Button } from './components/D6Button';
import History from './components/History';
import useLocalStorageState from 'use-local-storage-state';
import { getD6Roll } from "./utils";
import './styles.css';

export default function App() {
  const [rolls, setRolls] = useLocalStorageState('rolls', {
    defaultValue: [`non`, `lol`] // default value
  });

  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };


  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRollValue} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}