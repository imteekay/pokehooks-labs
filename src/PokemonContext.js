import React, { createContext, useState } from 'react';

const PokemonContext = createContext();

const PokemonProvider = (props) => {
  const [state, setState] = useState({
    pokemons: [
      { id: 1, name: 'Bulbasaur' },
      { id: 2, name: 'Charmander' },
      { id: 3, name: 'Squirtle' }
    ],
    capturedPokemons: []
  });

  return (
    <PokemonContext.Provider value={[state, setState]}>
      {props.children}
    </PokemonContext.Provider>
  )
}

export { PokemonContext, PokemonProvider };
