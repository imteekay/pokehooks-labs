import { CAPTURE, RELEASE, ADD_POKEMON } from './actions';

const getCapturedPokemons = (capturedPokemons, releasedPokemon) =>
  capturedPokemons.filter(pokemon => pokemon !== releasedPokemon)

const releasePokemon = (releasedPokemon, state) => ({
  pokemons: [...state.pokemons, releasedPokemon],
  capturedPokemons: getCapturedPokemons(state.capturedPokemons, releasedPokemon)
});

const getPokemonsList = (pokemons, capturedPokemon) =>
  pokemons.filter(pokemon => pokemon !== capturedPokemon)

const capturePokemon = (pokemon, state) => ({
  pokemons: getPokemonsList(state.pokemons, pokemon),
  capturedPokemons: [...state.capturedPokemons, pokemon]
});

const addPokemon = (pokemon, state) => ({
  pokemons: [...state.pokemons, pokemon],
  capturedPokemons: state.capturedPokemons
});

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case CAPTURE:
      return capturePokemon(action.pokemon, state);
    case RELEASE:
      return releasePokemon(action.pokemon, state);
    case ADD_POKEMON:
      return addPokemon(action.pokemon, state);
    default:
      return state;
  }
}

export { pokemonReducer, CAPTURE, RELEASE };
