import React, { useContext, useState } from 'react';
import { PokemonContext } from './PokemonContext';
import { generateID } from './generateID';

const PokemonForm = () => {
  const [pokemonName, setPokemonName] = useState();
  const { addPokemon } = useContext(PokemonContext);

  const handleNameOnChange = (e) => {
    setPokemonName(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPokemon({
      id: generateID(),
      name: pokemonName
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" placeholder="pokemon name" onChange={handleNameOnChange} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default PokemonForm;
