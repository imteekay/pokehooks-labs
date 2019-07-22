import React, { useContext, useEffect } from 'react';
import { PokemonContext } from './PokemonContext';

const url = "https://pokeapi.co/api/v2/pokemon";

const PokemonsList = () => {
  const { state, capture, addPokemons } = useContext(PokemonContext);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(url);
      const data = await response.json();
      addPokemons(data.results);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>

      <table>
        <tr>
          <th>Pokemon</th>
          <th>Capture</th>
        </tr>
        {state.pokemons.map((pokemon) =>
          <tr key={pokemon.name}>
            <td><span>{pokemon.name}</span></td>
            <td><button onClick={capture(pokemon)}>+</button></td>
          </tr>)}
      </table>
    </div>
  )
}

export default PokemonsList;
