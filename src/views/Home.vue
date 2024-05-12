<style>
@import '../assets/css/home.css';
</style>

<script setup>
import NavBar from "../components/NavBar.vue";
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Portofolio from "../components/Portofolio.vue";
import Contact from "../components/Contact.vue";
</script>

<template>
    <NavBar></NavBar>
    <div>
        <Hero></Hero>
        <About></About>
        <Portofolio></Portofolio>
        <Contact></Contact>
    </div>

</template>