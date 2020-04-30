import React from 'react';
import './App.css';
import Pokedex from './Pokedex.js';
import Pokemons from './data';

function App() {
  return (
    <div className="App">
      <h1> My Pokedex </h1>
      <Pokedex pokemons={Pokemons} />
    </div>
  );
}

export default App;
