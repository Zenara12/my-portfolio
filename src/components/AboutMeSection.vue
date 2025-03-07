<template>
  <q-card :class="$q.screen.lt.md ? `${aboutClass} column` : `${aboutClass}`" flat>
    <q-card-section class="col items-evenly justify-evenly">
      <h3 class="text-bold">My Education</h3>
      <q-card class="bg-warning rounded-borders" v-for="(school, index) in education" :key="index">
        <q-card-section class="items-center">
          <q-icon name="school" size="2rem" color="white" class="q-mr-md" />
          <div>
            <div class="text-orange text-bold">{{ school.name }}</div>
            <div>{{ school.degree }}</div>
          </div>
        </q-card-section>
      </q-card>
    </q-card-section>

    <q-card-section class="col items-evenly justify-evenly">
      <h3 class="text-bold">More <span class="text-gradient">About Me</span></h3>
      <p class="text-grey-4 text-justify">
        With a background in IT instruction and freelancing, I have developed websites, collaborated
        with teams on various projects, and assisted clients with technical solutions. My project
        experience includes integrating real-time web applications. Apart from development, I have
        been involved in leadership roles, serving as an Esports Marshal & Technical Lead in
        multiple organizations, ensuring smooth execution of online events. I am continuously
        learning and improving, holding certifications in Project Management, Web Design, and
        Programming. With strong problem-solving skills, adaptability, and attention to detail, I
        aim to build innovative and efficient solutions for users worldwide.
      </p>
      <div class="row">
        <q-card class="bg-warning q-mx-md" v-for="(stat, index) in stats" :key="index">
          <q-card-section class="text-center">
            <div class="text-h5 text-bold">+{{ stat.value }}</div>
            <div class="text-grey-4">{{ stat.label }}</div>
          </q-card-section>
        </q-card>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const aboutClass = defineModel('aboutClass')
const projectListSize = defineModel('projectListSize')
const education = ref([
  {
    name: 'Western Leyte Colloge of Ormoc',
    degree: 'Bachelor of Science in Information Technology',
    year: '2022',
  },
])

const stats = ref([
  { value: projectListSize.value, label: 'Project' },
  { value: 1, label: 'Years Experience' },
])
</script>
