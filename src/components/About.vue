<template>
    <div>
        <section id="about" ref="about" class="mx-auto px-10">
            <div class="pt-1 pb-3 flex-center flex-col">
                <h1 class="font-bold text-center text-4xl">about.</h1>
                <div class="border-b-2 border-gray-400 h-1 w-1/2"></div>
            </div>
            <div class="flex">

                <div id="education" class="flex flex-col justify-center items-center w-1/2 h-full">
                    <div class="flex items-center w-full px-1 pb-5">
                        <h1 class="font-bold text-2xl">educations</h1>
                    </div>
                    <div class="w-full">
                        <div v-for="(education, index) in educations" :key="index" class="flex pb-5">
                            <div class="w-1/12">
                            </div>
                            <div class="w-11/12 m-1">
                                <h2 class="text-xl font-semibold">{{ education.title }}</h2>
                                <h3 class="text-l">{{ education.subtitle }}</h3>
                                <p class="text-sm pb-3">{{ education.date }}</p>
                                <p>{{ education.description }}</p>
                                <div class="flex">
                                    <div v-for="(skill, index) in education.skills" class="rounded-rectangle m-1">
                                        {{ skill }}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="experiences" class="flex flex-col justify-center items-center w-1/2 h-full">
                    <div class="flex items-center w-full px-1 pb-5">
                        <h1 class="font-bold text-2xl">experiences</h1>
                    </div>
                    <div class="w-full">
                        <div v-for="(experience, index) in experiences" :key="index" class="flex">
                            <div class="w-1/12">
                            </div>
                            <div class="w-11/12 m-1 pb-5">
                                <h2 class="text-xl">{{ experience.title }}</h2>
                                <h3 class="text-l">{{ experience.subtitle }}</h3>
                                <p class="text-sm pb-3">{{ experience.date }}</p>
                                <p>{{ experience.description }}</p>
                                <div class="flex">
                                    <div v-for="(skill, index) in experience.skills" class="rounded-rectangle m-1">
                                        {{ skill }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section id="skills" ref="skills" class="mx-auto px-5 pb-10">
            <div class="pt-1 pb-3 flex-center flex-col">
                <h1 class="font-bold text-center text-4xl">skills.</h1>
                <div class="border-b-2 border-gray-400 h-1 w-1/2"></div>
            </div>
            <div v-if="skills.length > 0" class="grid grid-cols-3 gap-1">
                <div v-for="(skill, index) in skills" :key="index" class="flex-center flex-col text-center h-48">
                    <div class="h-3/6 w-full flex-center">
                        <i :class="skill.icon + ' text-6xl font-extrabold pb-1'"></i>
                    </div>
                    <div class="border-b-2 border-gray-400 h-1 w-1/2"></div>
                    <div class="h-1/6 w-full">
                        <h2 class="text-lg font-bold">{{ skill.title }}</h2>
                    </div>
                    <div class="h-2/6 w-full">
                        <p class="text-base">{{ skill.description }}</p>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const about = ref<HTMLElement | null>(null);


</script>


<script>
export default {
    data() {
        return {
            skills: [
                {
                    icon: "fa fa-code",
                    title: "language",
                    description: "Java, JavaScript, Golang, Dart, SQL"
                },
                {
                    icon: "fa fa-cube",
                    title: "data frameworks",
                    description: "Beaver"
                },
                {
                    icon: "fa fa-laptop-code",
                    title: "web technologies",
                    description: "Vue, React, JSF, Flutter"
                },
                {
                    icon: "fa fa-database",
                    title: "databases",
                    description: "PostgreSQL, MySQL, Apache Solr"
                },
                {
                    icon: "fas fa-tools",
                    title: "operating systems & tools",
                    description: "Linux(Ubuntu), Android, Windows, Firebase, Meta"
                },
                {
                    icon: "fa fa-pencil-square-o",
                    title: "design",
                    description: "Adobe Illustrator, Figma"
                },
            ],
            experiences: [
                {
                    title: "3Dolphins.ai, Jakarta, ID",
                    subtitle: "Product Engineer",
                    date: "Jul, 2023 - Present",
                    description: "Worked as a Software Developer for the Human BioMolecular Atlas Program (funded by the NIH), building innovative visualization tools to envision large biomedical datasets.",
                    skills: [
                        "Java", "JSF", "PrimeFaces"
                    ]
                },
                {
                    title: "Tecnogreen.id, Jakarta, ID",
                    subtitle: "Hardware Software Technician",
                    date: "Dec, 2022 - Feb, 2023",
                    description: "Worked as a Software Developer for the Human BioMolecular Atlas Program (funded by the NIH), building innovative visualization tools to envision large biomedical datasets.",
                    skills: [
                        "React", "Hardware Integration"
                    ]
                },
                {
                    title: "Padjadjaran Technology, Sumedang, ID",
                    subtitle: "Project Manager Intern",
                    date: "Nov, 2020 - May, 2021",
                    description: "Worked as a Software Developer for the Human BioMolecular Atlas Program (funded by the NIH), building innovative visualization tools to envision large biomedical datasets.",
                    skills: [
                        "Scrum", "Hardware Integration", "Leadership"
                    ]
                }
            ],
            educations: [
                {
                    title: "Universitas Padjadjaran, Indonesia",
                    subtitle: "Bachelor in Science(3.23/4.00)",
                    date: "Aug, 2018 - Oct, 2022",
                    description: "Graduated from Universitas Padjadjaran, Bandung with a bachelors degree in Science majoring Physics.",
                    skills: [
                        "Material Sciences", "Physics", "Computation"
                    ]
                }
            ]
        }
    }
}
</script>