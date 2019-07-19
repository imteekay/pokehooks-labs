const CAPTURE = 'CAPTURE';
const RELEASE = 'RELEASE';

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case CAPTURE:
      return;
    case RELEASE:
      return;
    default:
      return state;
  }
}
