import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';

const PokemonsList = () => {
  const [state, setState] = useContext(PokemonContext);

  const removePokemonFromList = (removedPokemon) =>
    state.pokemons.filter(pokemon => pokemon !== removedPokemon)

  const capture = (pokemon) => () => {
    setState({
      pokemons: removePokemonFromList(pokemon),
      capturedPokemons: [...state.capturedPokemons, pokemon]
    });
  }

  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>
      {state.pokemons.map((pokemon) =>
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <p>{pokemon.id}</p>
          <div>
            <span>{pokemon.name}</span>
            <button onClick={capture(pokemon)}>+</button>
          </div>
        </div>)}
    </div>
  )
}

export default PokemonsList;
