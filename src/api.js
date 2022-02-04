const url = "https://pokeapi.co/api/v2/pokemon";

function getPokemon() {
  return fetch(`${url}/?limit=20&offset=20`)
    .then((res) => res.json())
    .then((data) => data.results);
}

export default {
  getPokemon,
};
