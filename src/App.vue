<script setup>
</script>

<template>
  <div class="lg:max-w-screen-lg mx-auto">
    <div id="hero" class="mx-auto bg-orange-300 h-svh flex justify-center items-center">
      <div class="px-3">
        <div class="font-bold text-4xl lg:text-7xl pb-3">
          <span>
            Reliable.
            <br />
            Professional.
            <br />
            Fun!
          </span>
        </div>
        <div class="pb-3 lg:text-xl">
          <span>
            [akh] is one stop place for bouce houses, party supplies
            and event needs.Check out all of our options down below.
          </span>
        </div>
        <vue-countdown :time="time">
          <template v-slot="{ days, hours, minutes, seconds }">
            On vacation : {{ days }} days, {{ hours }} hours, {{ minutes }} minutes, {{ seconds }} seconds.
          </template>
        </vue-countdown>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row">
      <div class="flex items-center justify-center lg:w-1/3 overflow-hidden relative">
        <img class="p-5 inline rounded-3xl" src="https://img.logoipsum.com/327.svg" />
      </div>
      <div class="p-5 lg:w-2/3 text-center lg:text-left flex items-center justify-center">
        <span>
          Meet Surya, a vibrant daydreamer whose active imagination turns everyday moments into extraordinary
          adventures. Whether lost in the hustle of city life or the serenity of nature, Surya effortlessly weaves
          dreams into reality, transforming the mundane into a tapestry of endless possibilities. In their world,
          creativity
          knows no bounds, and each moment is an opportunity for exploration and wonder.
        </span>
      </div>
    </div>
    <br />
    <div>
      <div class="text-center font-bold py-5">
        <h1>Get in touch</h1>
      </div>

      <div class="flex items-center justify-center">
        <a href="https://www.linkedin.com/in/suryasatriah/" class="fa fa-linkedin bg-[#007bb5] text-white"
          target="_blank" rel="noreferrer noopener"></a>
        <a href="https://www.instagram.com/suryasatriah/" class="fa fa-instagram bg-[#125688] text-white"
          target="_blank" rel="noreferrer noopener"></a>
        <a href="#" class="fa fa-google bg-[#dd4b39] text-white"></a>
      </div>
    </div>
    <br />
    <div class="text-center">
      <span>&#9400; Surya 2024</span>
    </div>
    <br/>
  </div>
</template>

<script>
import VueCountdown from "@chenfengyuan/vue-countdown"

export default {
  data() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);

    return {
      time: newYear - now,
    };
  },
  components: {
    VueCountdown,
  },
};

</script>

<style scoped>
.fa {
  padding: 1rem;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin: 0.5rem;
}
</style>
