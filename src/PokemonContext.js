import React, { createContext, useReducer } from 'react';
import { pokemonReducer } from './reducers';
import { CAPTURE, RELEASE, ADD_POKEMON } from './actions';

const PokemonContext = createContext();

const PokemonProvider = (props) => {
  const defaultState = {
    pokemons: [
      { id: 1, name: 'Bulbasaur' },
      { id: 2, name: 'Charmander' },
      { id: 3, name: 'Squirtle' }
    ],
    capturedPokemons: []
  };

  const [state, dispatch] = useReducer(pokemonReducer, defaultState);

  const capture = (pokemon) => () => {
    dispatch({ type: CAPTURE, pokemon });
  };

  const release = (pokemon) => () => {
    dispatch({ type: RELEASE, pokemon });
  };

  const addPokemon = (pokemon) => {
    dispatch({ type: ADD_POKEMON, pokemon });
  }

  const providerValue = {
    state,
    capture,
    release,
    addPokemon
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  )
}

export { PokemonContext, PokemonProvider };
