import React from 'react';
import './App.css';
import GameInterface from './GameInterface'; // Assurez-vous que le chemin d'importation est correct

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameInterface />
      </header>
    </div>
  );
}

export default App;