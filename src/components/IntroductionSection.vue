<template>
  <q-card class="row lt-sm flex flex-center bg-transparent" flat>
    <q-avatar size="15rem" :ratio="1" outline>
      <q-img
        src="/images/profilepic.jpg"
        :ratio="1"
        spinner-color="secondary"
        class="border-2 border-info rounded-xl shadow-2"
      />
    </q-avatar>
  </q-card>
  <q-card class="flex flex-center row bg-transparent" flat>
    <q-card-section class="col">
      <div :class="$q.screen.lt.sm ? 'text-h4 text-center' : 'text-h2'">
        Hi, I'm <span class="text-weight-bold text-secondary">{{ myName }}</span> 😁
      </div>
      <p class="text-justify q-my-sm">
        {{ introduction }}
      </p>
      <div class="buttons">
        <q-btn outline color="orange" icon="download" label="Download resume" class="q-mt-sm" />
      </div>
    </q-card-section>
    <q-card-section class="col gt-xs flex items-end justify-end">
      <q-avatar size="15rem" :ratio="1" outline>
        <q-img
          src="/images/profilepic.jpg"
          :ratio="1"
          spinner-color="secondary"
          class="border-2 border-info rounded-xl shadow-2"
        />
      </q-avatar>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useQuasar } from 'quasar'

const $q = useQuasar()

const myName = 'Noli'
const introduction =
  'I am a starting web developer with a passion for building user-friendly websites and applications. Skilled in VueJS, JavaScript, PHP, and database management, I have worked on freelance projects that involve front-end development, backend integration, and troubleshooting. I am eager to learn, adapt, and grow in the field of web development, always looking for new challenges to improve my skills and create efficient digital solutions.'
</script>
