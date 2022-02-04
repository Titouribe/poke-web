<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <div
      class="h-auto w-56 p-8 min-h-max min-w-max bg-red-400 border-black border-2 m-10 inline-block text-center items-center flex-col rounded-3xl transition transition-all duration-500 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
    >
      <h1
        class="font-bold font-sans bg-red-200 border-black border-2 inline-block w-auto p-2 rounded-xl transition transition-all duration-500 ease-in-out hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
      >
        {{ pokemon.name }}
      </h1>
      <div class="container flex flex-row">
        <img
          class="w-36 h-36 transition transition-all duration-500 transform hover:-translate-y-1 hover:scale-110"
          :src="pokemon.sprites.front_default"
          :alt="pokemon.name"
        />
        <img
          class="w-36 h-36 transition transition-all duration-500 transform hover:-translate-y-1 hover:scale-110"
          :src="pokemon.sprites.back_default"
          :alt="pokemon.name"
        />
      </div>
      <div class="flex flex-col">
        <p
          class="font-bold font-sans bg-red-200 border-black border-2 inline-block w-auto p-2 rounded-xl transition transition-all duration-500 ease-in-out hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
        >
          Ability: {{ pokemon.abilities[0].ability.name }}
        </p>
        <p
          class="font-bold font-sans bg-red-200 border-black border-2 inline-block w-auto p-2 rounded-xl transition transition-all duration-500 ease-in-out hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
        >
          Experience: {{ pokemon.base_experience }}
        </p>
        <p
          class="font-bold font-sans bg-red-200 border-black border-2 inline-block w-auto p-2 rounded-xl transition transition-all duration-500 ease-in-out hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
        >
          Height: {{ pokemon.height }}
        </p>
        <p
          class="font-bold font-sans bg-red-200 border-black border-2 inline-block w-auto p-2 rounded-xl transition transition-all duration-500 ease-in-out hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
        >
          Weight: {{ pokemon.weight }}
        </p>
      </div>
    </div>
              <router-link :to="{ name: 'home' }"
            class="w-auto p-4 flex justify-between items-center text-white cursor-pointer bg-gray-900 rounded-full transition transition-all duration-500 ease-in-out hover:bg-gray-600 transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
            ><img
              class="mr-4"
              src="https://img.icons8.com/color/48/000000/open-pokeball--v2.png"
            />
            Return Home!</router-link>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "PokemonDetail",

  data() {
    return {
      pokemon: {},
    };
  },

  created() {
    this.getPoke();
  },

  methods: {
    getPoke() {
      const id = this.$route.params.name;
      api.getPokemon(id).then((poke) => (this.pokemon = poke));
    },
  },
};
</script>
