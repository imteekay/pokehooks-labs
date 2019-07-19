import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';

const Pokedex = () => {
  const [state, setState] = useContext(PokemonContext);

  const releasePokemon = (releasedPokemon) =>
    state.capturedPokemons.filter(pokemon => pokemon !== releasedPokemon)

  const release = (pokemon) => () => {
    setState({
      pokemons: [...state.pokemons, pokemon],
      capturedPokemons: releasePokemon(pokemon)
    });
  }

  return (
    <div className="pokedex">
      <h2>Pokedex</h2>

      {state.capturedPokemons.map((pokemon) =>
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <p>{pokemon.id}</p>
          <div>
            <span>{pokemon.name}</span>
            <button onClick={release(pokemon)}>-</button>
          </div>
        </div>)}
    </div>
  )
}

export default Pokedex;
