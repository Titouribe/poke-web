<template>
  <div>
    <div v-for="p in pokemons" :key="p.name">
      <h2 class="text-center text-white cursor-pointer bg-gray-900 w-24 h-12 m-6 p-2 rounded-full transition transition-all duration-500 ease-in-out hover:bg-gray-600 transform hover:-translate-y-1 hover:scale-110"> {{ p.name }} </h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "PxPokemon",
  
  props: {
    pokemons: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.up::before {
  content: '👆';
}

.down::before {
  content: '👇';
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
