<script setup>
import Footer from "./components/Footer.vue";
import Copywright from "./components/Copywright.vue";
</script>

<template>
  <div class="lg:max-w-screen-lg mx-auto">
    <router-view></router-view>
    <Footer></Footer>
    <Copywright></Copywright>
  </div>
</template>
