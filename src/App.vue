<script setup>
import Copywright from "./components/Copywright.vue";

</script>

<template>
  <div class="lg:max-w-screen-lg mx-auto">
  <!-- <div class="lg:max-w-screen-2xl mx-auto"> -->
    <router-view></router-view>
    <!-- <Footer></Footer>  -->
    <Copywright></Copywright>
  </div>
</template>
