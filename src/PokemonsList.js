import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';

const PokemonsList = () => {
  const { state, capture } = useContext(PokemonContext);

  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>

      {state.pokemons.map((pokemon) =>
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <div>
            <span>{pokemon.name}</span>
            <button onClick={capture(pokemon)}>+</button>
          </div>
        </div>)}
    </div>
  )
}

export default PokemonsList;
