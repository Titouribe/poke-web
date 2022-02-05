<template>
  <div class="p-24 flex flex-wrap items-center justify-center h-auto w-screen">
    <input
            class="bg-gray-900 text-white rounded-2xl focus:outline-none border-b border-white py-2 px-4 block w-full appearance-none leading-normal"
            id="filter"
            placeholder="Enter pokemon name..."
            type="text"
            v-model="filter"
          />
    <div
      class="w-44 min-w-max h-16 p-4 m-6 flex items-center text-center text-white cursor-pointer bg-gray-900 rounded-full transition transition-all duration-500 ease-in-out hover:bg-gray-600 transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
      v-for="p in filteredPokemons"
      :key="p.name"
    >
      <router-link
        class="flex flex-row items-center"
        :to="{ name: 'pokemon-detail', params: { name: p.name } }"
      >
        <img src="https://img.icons8.com/color/48/000000/pokeball-2.png" />
        <h2 class="ml-4 text-center font-bold">
          {{ p.name }}
        </h2>
      </router-link>
    </div>
  </div>
</template>
<script>

export default {
  name: "PxPokemon",

  data(){
    return {
      filter: "",
    }
  },

  props: {
    pokemons: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    filteredPokemons(){
      if(!this.filter){ return this.pokemons}
      return this.pokemons.filter(p => p.name.toLowerCase().includes(this.filter.toLowerCase()))
    }
  },
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
