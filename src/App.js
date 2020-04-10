import React from 'react';

import { PokemonProvider } from './Pokemon/PokemonContext';
import PokemonsList from './Pokemon/PokemonsList';
import Pokedex from './Pokemon/Pokedex';
import PokemonForm from './Pokemon/PokemonForm';

const App = () => (
  <PokemonProvider>
    <div className="main">
      <PokemonsList />
      <Pokedex />
    </div>
    <div className='form-wrapper'>
      <PokemonForm />
    </div>
  </PokemonProvider>
);

export default App;
