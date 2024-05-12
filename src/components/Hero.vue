<style scoped>
@import '../assets/css/footer.css';
</style>

<template>
    <div id="hero" class="mx-auto px-10 h-svh grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 grid-cols-1">
        <div class="flex-center">
            <div class="px-10 text-left">
                <h1 class="text-4xl font-bold">Hello, I&apos;m Surya!</h1>
                <br />
                <p>A second year Computer Science graduate student at Indiana University Bloomington with an interest in
                    Software Development, UX Design and Artificial Intelligence - and seeking exciting opportunities
                    related to the same.
                </p>
                <p>I am a detail oriented person and I keep my goals and tasks organized to maintain productivity. I
                    would bring to table a wide range of software skills, ranging from design and development to writing
                    scripts for intelligent agents. I believe that the skills that I have attained from the dynamic
                    environment and competitive university life define me, and I am looking forward to implementing and
                    polishing them in any opportunity that I receive. </p>
                <div v-if="socials.length > 0" class="flex">
                    <a v-for="(social, index) in socials" :key="index" :href="social.link"
                        :class="'fa fa-' + social.icon + ' bg-[' + social.color + '] text-white social mr-1'"
                        target="_blank" rel="noreferrer noopener"></a>
                </div>
            </div>
        </div>
        <div class="flex-center">
            <div class="flex-center m-10">
                <img src="../assets/images/laptop.png" alt="laptop" class="picture" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            socials: [
                {
                    icon: 'linkedin',
                    link: 'https://www.linkedin.com/in/suryasatriah/',
                    color: '#007bb5'
                }, {
                    icon: 'instagram',
                    link: 'https://www.instagram.com/suryasatriah/',
                    color: '#125688'
                }, {
                    icon: 'whatsapp',
                    link: 'https://wa.me/+6281313403220',
                    color: '#dd4b39'
                }
            ]
        }
    }
}
    
</script>