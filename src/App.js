import React from 'react';
import './App.css';

import { PokemonProvider } from './PokemonContext';
import PokemonsList from './PokemonsList';
import Pokedex from './Pokedex';
import PokemonForm from './PokemonForm';

const App = () => {
  return (
    <PokemonProvider>
      <div className="main">
        <PokemonsList />
        <Pokedex />
      </div>
      <div class='form-wrapper'>
        <PokemonForm />
      </div>
    </PokemonProvider>
  );
}

export default App;
