<style scoped>
@import '../assets/css/footer.css';
</style>

<template>
    <footer>
        <div v-if="socials.length > 0" class="flex items-center justify-center">
            <a v-for="(social, index) in socials" :key="index" :href="social.link"
                :class="'fa fa-' + social.icon + ' bg-[' + social.color + '] text-white social'" target="_blank"
                rel="noreferrer noopener"></a>
        </div>

    </footer>   
    
   
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