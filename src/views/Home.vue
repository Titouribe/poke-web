<template>
  <div class="w-full h-auto">
    <px-pokemon :pokemons="pokemons" />
  </div>
</template>

<script>
import PxPokemon from "@/components/PxPokemon";
import api from "@/api";

export default {
  name: "Home",

  components: { PxPokemon },
  data() {
    return {
      pokemons: [],
    };
  },

  created() {
    api.getPokemon().then((pokemon) => (this.pokemons = pokemon));
  },
};
</script>
