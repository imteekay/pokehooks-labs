import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';

const Pokedex = () => {
  const { state, release } = useContext(PokemonContext);

  return (
    <div className="pokedex">
      <h2>Pokedex</h2>

      {state.capturedPokemons.map((pokemon) =>
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <div>
            <span>{pokemon.name}</span>
            <button onClick={release(pokemon)}>-</button>
          </div>
        </div>)}
    </div>
  )
}

export default Pokedex;
