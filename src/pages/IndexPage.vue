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
    <!--- About Me -->
    <AboutMeSection v-model="aboutClass" id="about" />

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

const $q = useQuasar()

const separatorHeight = ref('5rem')
const screenSize = computed(() => $q.screen.name)
const introClass = ref('flex justify-evenly items-center bg-transparent')
const aboutClass = ref('flex bg-transparent q-pt-xl')
const sectionClass = ref('flex justify-center bg-transparent q-pt-xl q-mx-auto')

const checkHeight = (value) => {
  if (value === 'xs') separatorHeight.value = '10rem'
  else if (value === 'sm') separatorHeight.value = '10rem'
  else if (value === 'md') separatorHeight.value = '11rem'
  else if (value === 'lg') separatorHeight.value = '13rem'
  else if (value === 'xl') separatorHeight.value = '15rem'
}

onMounted(() => {
  checkHeight($q.screen.name)
})

watch(
  () => screenSize.value,
  (value) => {
    if (value === 'xs') separatorHeight.value = '8rem'
    else if (value === 'sm') separatorHeight.value = '16rem'
    else if (value === 'md') separatorHeight.value = '20rem'
    else if (value === 'lg') separatorHeight.value = '20rem'
    else if (value === 'xl') separatorHeight.value = '20rem'
  },
)
</script>

<style scoped>
.card-item {
  height: 300px;
  max-width: 1200px;
}
</style>
