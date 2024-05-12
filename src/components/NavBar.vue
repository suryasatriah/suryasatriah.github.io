<template>
    <nav class="sticky top-0 flex h-16">
        <div class="w-1/3 flex-center">
            <h1 class="text-2xl">
                surya
            </h1>
        </div>
        <div class="flex-center w-1/3">
            <button @click="scrollTo(ref(about))">Ya</button>
        </div>
        <label class="switch w-1/3">
            <input type="checkbox" @click="toggleDark()">
            <span class="slider round"></span>
        </label>


    </nav>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { Ref, ref } from "vue";
import { about } from "./About.vue";
const isDark = useDark();
const toggleDark = useToggle(isDark);

function scrollTo(view: Ref<HTMLElement | null>) {
    console.log(view);
    view.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #2196F3;
}

input:focus+.slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>