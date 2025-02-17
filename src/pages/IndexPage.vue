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
    <ProjectComponent
      v-model:projectClass="projectClass"
      v-model:screenSize="screenSize"
      v-bind:style="`margin-bottom:${separatorHeight}`"
      id="projects"
    />
    <!--- About Me -->
    <AboutMeSection
      v-model="aboutClass"
      v-bind:style="`margin-bottom:${separatorHeight}`"
      id="about"
    />

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
const ProjectComponent = defineAsyncComponent(() => import('src/components/ProjectComponent.vue'))

const $q = useQuasar()

const screenSize = computed(() => $q.screen.name)

const separatorHeight = ref('13rem')
const introClass = ref('flex justify-evenly items-center bg-transparent')
const aboutClass = ref('flex bg-transparent q-pt-xl')
const sectionClass = ref('flex justify-center bg-transparent q-pt-xl q-mx-auto')
const projectClass = ref('flex column flex-center q-pt-xl q-mx-auto')

const checkHeight = (value) => {
  if (value === 'xs') return (separatorHeight.value = '6rem')
  else if (value === 'sm') return (separatorHeight.value = '13rem')
  else if (value === 'md') return (separatorHeight.value = '11rem')
  else if (value === 'lg') return (separatorHeight.value = '15rem')
  else if (value === 'xl') return (separatorHeight.value = '17rem')
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
