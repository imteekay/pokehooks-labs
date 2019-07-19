import React from 'react';
import './App.css';

import PokemonsList from './PokemonsList';
import Pokedex from './Pokedex';
import { PokemonProvider } from './PokemonContext';

const App = () => {
  return (
    <PokemonProvider>
      <div className="App">
        <PokemonsList />
        <Pokedex />
      </div>
    </PokemonProvider>
  );
}

export default App;
