const url = "https://pokeapi.co/api/v2/pokemon";

function getPokemons() {
  return fetch(`${url}/?limit=100&offset=100`)
    .then((res) => res.json())
    .then((data) => data.results);
}

function getPokemon(id) {
  return fetch(`${url}/${id}/`)
    .then((res) => res.json())
    .then((data) => data);
}

export default {
  getPokemons,
  getPokemon,
};
