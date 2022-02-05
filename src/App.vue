<template>
  <main class="w-screen bg-red-100">
    <px-header />

    <router-view class="w-screen h-auto min-h-screen flex" />

    <px-footer class="w-screen" />
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
