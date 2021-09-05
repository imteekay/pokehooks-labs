import React from 'react';

export const Pokemon = ({ pokemon, onClick, buttonLabel }) => (
  <tr key={pokemon.name}>
    <td>
      <span>{pokemon.name}</span>
    </td>
    <td>
      <button onClick={onClick(pokemon)}>{buttonLabel}</button>
    </td>
  </tr>
);

export default Pokemon;
