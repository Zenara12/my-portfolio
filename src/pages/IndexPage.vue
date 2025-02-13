<template>
  <q-page
    class="flex items-baseline justify-around text-primary"
    style="max-width: 1200px; margin: auto"
  >
    <div :style="`height: ${separatorHeight}`"></div>
    <!---Introduction-->
    <IntroductionSection v-model="introClass" />

    <div :style="`height: ${separatorHeight}`"></div>
    <!--- About Me -->
    <AboutMe v-model="aboutClass" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import IntroductionSection from 'src/components/IntroductionSection.vue'
import AboutMe from 'src/components/AboutMe.vue'

const $q = useQuasar()

const separatorHeight = ref($q.screen.lt.sm ? '8rem' : '10rem')
const introClass = ref('flex justify-evenly items-center bg-transparent q-my-xl')
const aboutClass = ref('flex flex-center bg-transparent q-my-xl')
</script>
