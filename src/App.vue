<template>
  <main class="w-screen bg-blue-200">
    <px-header />

    <router-view class="container h-4/5 w-screen flex" />

    <px-footer />
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader";
import PxFooter from "@/components/PxFooter";

export default {
  name: "App",
  components: { PxHeader, PxFooter },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
