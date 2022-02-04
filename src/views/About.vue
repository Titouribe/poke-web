<template>
  <div class="flex-col justify-center items-center text-center h-screen">
    <img src="https://img.icons8.com/fluency/48/000000/pokeball.png" />
    <h1 class="text-red-600 text-6xl">Poke Web v1.0</h1>
    <p class="text-red-500 text-xl text-center">
      Proyect to show an aliatory Pokemon from poke API
      <br />This proyect is a test for Mi aguila made by jorge uribe
    </p>

              <router-link :to="{ name: 'home' }"
            class="w-auto mt-8 p-4 flex justify-between items-center text-white cursor-pointer bg-gray-900 rounded-full transition transition-all duration-500 ease-in-out hover:bg-gray-600 transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl"
            ><img
              class="mr-4"
              src="https://img.icons8.com/color/48/000000/open-pokeball--v2.png"
            />
            Return Home!</router-link>
  </div>
</template>
