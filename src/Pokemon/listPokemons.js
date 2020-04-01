import React from 'react';
import Pokemon from './Pokemon';

export const listPokemons = ({ pokemons, onClick, buttonLabel }) =>
  pokemons.map((pokemon) => (
    <Pokemon
      pokemon={pokemon}
      onClick={onClick}
      buttonLabel={buttonLabel}
    />
  ));
