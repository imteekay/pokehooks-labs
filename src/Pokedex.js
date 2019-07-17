import React, { useState } from 'react';

const Pokedex = () => {
  const [pokemons] = useState([]);

  return (
    <div className="pokedex">
      <h2>Pokedex</h2>

      {pokemons.map((pokemon) =>
        <div key={`${pokemon.id}-${pokemon.name}`}>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
        </div>)}
    </div>
  )
}

export default Pokedex;
