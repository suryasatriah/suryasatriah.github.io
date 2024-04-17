<style scoped>
@import '../assets/css/footer.css';
</style>

<template>
    <footer class="bg-blue-950">
        <section class="grid grid-cols-2 p-5">
            <div>
                <div>
                    <img src="https://uiocean.com/themeforest/react/krinky-tailwind/img/contact-bg.png"
                        alt="footer-profile" />
                </div>
                <ul>
                    <li class="w-10 h-10 flex ">
                        <div class="items-center justify-center">
                            <i class="social-icon fas fa-phone-alt font-bold"></i>
                        </div>
                    </li>


                </ul>

            </div>
            <div class="bg-white p-5">
                <div class="font-bold">
                    <h1 class="text-3xl">Get in touch</h1>
                    <h3>Our friendly team would love to hear from you.</h3>
                </div>
                <form id="contact-form">
                    <label for="name-input">First Name</label>
                    <input type="text" id="name-input" name="name-input" placeholder="Name *" required>

                    <label for="email-input">Email</label>
                    <input type="email" id="email-input" name="email-input" placeholder="Email *" required>

                    <label for="subject-input">Subject</label>
                    <input type="text" id="subject-input" name="subject-input" placeholder="Subject *" required>

                    <label for="message-input">Your Message</label>
                    <textarea id="message-input" name="message-input" placeholder="Your message *" style="height:200px"
                        required></textarea>

                    <input id="send-button" type="submit" value="Send">
                </form>
            </div>

        </section>

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