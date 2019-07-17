import React, { useState } from 'react';

const PokemonsList = () => {
  const [pokemons] = useState([
    { id: 1, name: 'Bulbasaur' },
    { id: 2, name: 'Charmander' },
    { id: 3, name: 'Squirtle' }
  ]);

  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>
      {pokemons.map((pokemon) =>
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
        </div>)}
    </div>
  )
}

export default PokemonsList;
