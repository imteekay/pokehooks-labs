import React, { useContext, useEffect } from 'react';
import { PokemonContext } from './PokemonContext';
import { listPokemons } from './listPokemons';

const url = "https://pokeapi.co/api/v2/pokemon";

const PokemonsList = () => {
  const { pokemons, capture, addPokemons } = useContext(PokemonContext);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(url);
      const data = await response.json();
      addPokemons(data.results);
    };

    fetchPokemons();
  }, [addPokemons]);

  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>

      <table>
        <tr>
          <th>Pokemon</th>
          <th>Capture</th>
        </tr>
        {listPokemons({
          pokemons,
          onClick: capture,
          buttonLabel: '+'
        })}
      </table>
    </div>
  )
}

export default PokemonsList;
