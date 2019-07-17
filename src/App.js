import React from 'react';
import './App.css';

import PokemonsList from './PokemonsList';
import Pokedex from './Pokedex';

const App = () => {
  return (
    <div className="App">
      <PokemonsList />
      <Pokedex />
    </div>
  );
}

export default App;
