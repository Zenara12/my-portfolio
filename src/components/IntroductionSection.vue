<template>
  <q-card :class="$q.screen.lt.sm ? `${introClass} column` : `${introClass} row reverse `" flat>
    <q-card-section class="col flex items-end justify-end">
      <q-avatar size="15rem" :ratio="1" outline>
        <q-img
          :src="imgURL"
          :ratio="1"
          spinner-color="secondary"
          loading="lazy"
          class="border-2 border-info rounded-xl shadow-2"
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
        <q-btn outline color="orange" icon="download" label="Download resume" class="q-mt-sm" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useQuasar } from 'quasar'

const $q = useQuasar()

const introClass = defineModel()

const imgURL =
  'https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/338542128_1385363575631150_4833880374459936280_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHDVo0kHfNnq5cEo1KAeeVhesMr7Usy4NR6wyvtSzLg1Bex3TiJGg6hl-psuW-iunDJyilXolvwiYznrXRMHRYx&_nc_ohc=Gvmx35O4hHAQ7kNvgEGEK4C&_nc_oc=AdjxHLW2GjTLt1ghtBJsKE0myLvdWqoelYaVIPc4pDgwu5q18ab6ive8xS_EhyGjQL8&_nc_zt=23&_nc_ht=scontent.fceb3-1.fna&_nc_gid=AdPhE7zsqWUfDpHkihFZV4e&oh=00_AYA_7yWvAI6lfYwnDHUcelDyvuu393EhMvz_ui1sEhZkXg&oe=67B2DEDB'
const myName = 'Noli'
</script>
