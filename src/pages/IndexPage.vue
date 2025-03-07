<template>
  <q-page class="text-primary" style="max-width: 1200px; margin: auto">
    <!---Introduction-->
    <IntroductionSection
      v-model="introClass"
      v-bind:style="`margin-top:${separatorHeight};margin-bottom:${separatorHeight}`"
    />
    <!---Skills-->
    <SkillSection
      v-model="sectionClass"
      v-bind:style="`margin-bottom:${separatorHeight}`"
      id="skills"
    />
    <ProjectSection
      v-model:projectClass="projectClass"
      v-model:screenSize="screenSize"
      v-model:projectList="projectList"
      v-bind:style="`margin-bottom:${separatorHeight}`"
      id="projects"
    />
    <!--- About Me -->
    <AboutMeSection
      v-model:aboutClass="aboutClass"
      v-model:projectListSize="projectList.length"
      v-bind:style="`margin-bottom:${separatorHeight}`"
      id="about"
    />

    <!--Contact-->
    <ContactSection
      v-model="contactClass"
      v-bind:style="`margin-bottom:${separatorHeight}`"
      id="contact"
    />
    <div class="flex flex-center q-mb-xl">{{ footNote }}</div>

    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="secondary" />
    </q-page-scroller>
  </q-page>
</template>

<script setup>
import { ref, watch, computed, onMounted, defineAsyncComponent } from 'vue'
import { useQuasar } from 'quasar'

const IntroductionSection = defineAsyncComponent(
  () => import('src/components/IntroductionSection.vue'),
)
const AboutMeSection = defineAsyncComponent(() => import('src/components/AboutMeSection.vue'))
const SkillSection = defineAsyncComponent(() => import('src/components/SkillSection.vue'))
const ProjectSection = defineAsyncComponent(() => import('src/components/ProjectSection.vue'))
const ContactSection = defineAsyncComponent(() => import('src/components/ContactSection.vue'))

const $q = useQuasar()

const screenSize = computed(() => $q.screen.name)

const date = new Date()
const currentYear = date.getFullYear()
const titleSEO = defineModel()
const footNote = `© ${currentYear} ${titleSEO.value}. All rights reserved.`

const separatorHeight = ref('10rem')
const introClass = ref('flex justify-evenly items-center bg-transparent')
const aboutClass = ref('flex bg-transparent q-pt-xl')
const sectionClass = ref('flex justify-center bg-transparent q-pt-xl q-mx-auto')
const projectClass = ref('flex column flex-center')
const contactClass = ref('flex items-start justify-evenly bg-transparent bg-warning ')

const projectList = ref([
  {
    name: 'Alon',
    link: 'https://github.com/Zenara12/alonMentalTracker',
    anchorName: 'github.com/Alon',
    tabGroup: 'Mobile',
    description: `Mental tracker mobile app`,
    imgPath: 'alon.jpg',
    tags: ['Quasar', 'VueJS', 'Capacitor', 'AndroidStudio'],
  },
  {
    name: 'BarterDito',
    link: 'https://barterdito.com',
    anchorName: 'barterdito.com',
    tabGroup: 'Web',
    description: `A web app that is Specifically for trade/barter of items`,
    imgPath: 'barterdito.png',
    tags: ['NuxtJS', 'VueJS', 'Tailwind', 'Node', 'ExpressJS'],
  },
  {
    name: 'Online Alumni Tracer',
    link: 'https://github.com/Zenara12/alumnitracer-main',
    anchorName: 'github.com/alumnitracer',
    tabGroup: 'Web',
    description: `A website that gathers the were about's and career's of alumni's  `,
    imgPath: 'alumnitracer.png',
    tags: ['VueJS', 'Supabase', 'Vuetify'],
  },
  {
    name: 'Genshin Drafting',
    link: 'https://github.com/Zenara12/genshin-drafting',
    anchorName: 'github.com/genshin-drafting',
    tabGroup: 'Web',
    description: `Drafting System for Genshin Game custom tournaments `,
    imgPath: 'genshindrafting.png',
    tags: ['VueJS', 'Supabase', 'CSS'],
  },
])

const checkHeight = (value) => {
  if (value === 'xs') return (separatorHeight.value = '6rem')
  else if (value === 'sm') return (separatorHeight.value = '12rem')
  else if (value === 'md') return (separatorHeight.value = '10rem')
  else if (value === 'lg') return (separatorHeight.value = '13rem')
  else if (value === 'xl') return (separatorHeight.value = '15rem')
}

onMounted(() => {
  checkHeight(screenSize.value)
})

watch(
  () => screenSize.value,
  (value) => {
    checkHeight(value)
  },
)
</script>

<style scoped>
.card-item {
  height: 300px;
  max-width: 1200px;
}
</style>
