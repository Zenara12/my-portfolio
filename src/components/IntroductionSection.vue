<template>
  <q-card :class="$q.screen.lt.sm ? `${introClass} column` : `${introClass} row reverse `" flat>
    <q-card-section class="col flex items-end justify-end">
      <q-avatar size="15rem" :ratio="1" outline>
        <q-img
          :src="imgURL"
          :ratio="1"
          spinner-color="secondary"
          loading="lazy"
          class="border-2 border-info rounded-xl shadow-10"
        />
      </q-avatar>
    </q-card-section>
    <q-card-section class="col">
      <div :class="$q.screen.lt.sm ? 'text-h4 text-center' : 'text-h3'">
        Hi, I'm <span class="text-weight-bold text-secondary">{{ myName }}</span> 😁
      </div>
      <p class="text-justify q-my-sm">
        I am a <span class="text-weight-bold text-secondary">web developer</span> with a passion for
        building user-friendly websites and applications. Skilled in
        <span class="text-weight-bold text-secondary">JavaScript, PHP, VueJS,</span> and
        <span class="text-weight-bold text-secondary">database management,</span>
        I have worked on freelance projects that involve front-end development, backend integration,
        and troubleshooting. I am eager to learn, adapt, and grow in the field of web development,
        always looking for new challenges to improve my skills and create efficient digital
        solutions.
      </p>
      <div class="buttons">
        <q-btn
          outline
          color="orange"
          icon="download"
          label="Download resume"
          class="q-mt-sm"
          href="files/NoliPernesResumeCV.pdf"
          target="_blank"
          download="NoliPernes_ResumeCV.pdf"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useQuasar } from 'quasar'

const $q = useQuasar()

const introClass = defineModel()

const imgURL = 'images/profilepic.png'
const myName = 'Noli'
</script>
