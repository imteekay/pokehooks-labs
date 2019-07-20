import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';

const Pokedex = () => {
  const { state, release } = useContext(PokemonContext);

  return (
    <div className="pokedex">
      <h2>Pokedex</h2>

      <table>
        <tr>
          <th>Pokemon</th>
          <th>Release</th>
        </tr>
        {state.capturedPokemons.map((pokemon) =>
          <tr key={pokemon.name}>
            <td><span>{pokemon.name}</span></td>
            <td><button onClick={release(pokemon)}>+</button></td>
          </tr>)}
      </table>
    </div>
  )
}

export default Pokedex;
