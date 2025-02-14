<template>
  <q-layout view="lHh Lpr lFf">
    <q-header flat class="gt-sm">
      <q-toolbar class="content-between q-pa-lg" flat>
        <q-toolbar-title>
          <q-avatar>
            <q-img :src="noriLogo" :ratio="1" loading="lazy" spinner-color="secondary" />
          </q-avatar>
        </q-toolbar-title>
        <q-btn
          v-for="(nav, index) in navS"
          :label="nav.name"
          :icon="nav.icon"
          :key="index"
          :ripple="false"
          :class="btnHover === index ? 'text-secondary' : 'text-primary'"
          class="bg-transparent"
          @mouseover="btnHover = index"
          @mouseleave="btnHover = null"
          @click="scrollToSection(nav.to)"
          flat
          unelevated
        />
      </q-toolbar>
    </q-header>

    <q-footer elevated class="lt-md">
      <q-toolbar class="flex justify-evenly items-center">
        <q-btn
          v-for="(nav, index) in navS"
          :icon="nav.icon"
          :key="index"
          :ripple="false"
          :class="btnHover === index ? 'text-secondary' : 'text-primary'"
          class="bg-transparent"
          @mouseover="btnHover = index"
          @mouseleave="btnHover = null"
          @click="scrollToSection(nav.to)"
          flat
          unelevated
        />
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useMeta } from 'quasar'

const titleSEO = 'NoliDev Portfolio'
const descriptionSEO = `'Hello I'm Noli a web developer that delivers responsive web apps`
const tagsSEO =
  'html, css, javascript, php, web, web developer, web development, app development, quasar, vue, seo'
const imageSEO = `https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/477008069_536195866141300_544709333179751758_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHsEJwciCOvmQ5Uk_oh4sgQiiRNvbp7PzCKJE29uns_MHg6V6MSecdRGzfmPp4bWkFMBN3HjKdLXjTKl3AR2z1R&_nc_ohc=aarqn0h3r6UQ7kNvgHQqRMw&_nc_oc=AdhqNzQAGESMQgeCBwjk7JiI6dV0wk5g3KqZu2hGURJLrO1uhecR9Bh6k30_PhzsntE&_nc_zt=23&_nc_ht=scontent.fceb3-1.fna&_nc_gid=AfBjV18-sWy8sVbq02ZSlK3&oh=00_AYCSslBZjCmHIAQw_fI_QxzzQagKemI5ZromlN9kElIzxA&oe=67B50F58`

const scrollToSection = (href) => {
  const section = document.querySelector(href)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
// SEO Optimization
useMeta({
  title: titleSEO,
  meta: [
    {
      name: 'description',
      content: descriptionSEO,
    },
    {
      name: 'keywords',
      content: tagsSEO,
    },
    { property: 'og:title', content: titleSEO },
    { property: 'og:description', content: descriptionSEO },
    { property: 'og:image', content: imageSEO },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: titleSEO },
    {
      name: 'twitter:description',
      content: descriptionSEO,
    },
    { name: 'twitter:image', content: imageSEO },
  ],
})
const noriLogo =
  'https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/438303044_1001045115355245_3836067379854975523_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGLk88BAJw4gQt7IRftGXNmQWWTJlQRSphBZZMmVBFKmMm6UAQnQVxDDuZQ0qoWUsaBZIn7gJIrvQIln4-3xOll&_nc_ohc=Qc9NH21fTbQQ7kNvgHGEanU&_nc_oc=AdiExFUaf-ugH_Z8FbM0xuhBvBLUQzzpmovJZDsPyw6xeUkmGmJtrQ3O-637KST4yiw&_nc_zt=23&_nc_ht=scontent.fceb3-1.fna&_nc_gid=A4DGDqxEVqsr6dh2a035036&oh=00_AYB7fZexytvga4Cwo08VBNLXJ3UFcIjDLnsabwQjKR3Ubg&oe=67B3D8B1'
const btnHover = ref(false)
const navS = [
  {
    name: 'Skills',
    to: '#skills',
    icon: 'psychology',
  },
  {
    name: 'Projects',
    to: '',
    icon: 'description',
  },
  {
    name: 'About me',
    to: '#about',
    icon: 'person',
  },
  {
    name: 'Contact',
    to: '',
    icon: 'contact_phone',
  },
]
</script>

<style lang="scss">
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $secondary;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ffae00c2;
}
body {
  background: linear-gradient(to right, #0f0f0f, #1a1a2e);
}
.q-toolbar {
  background: linear-gradient(to right, #0f0f0f, #1a1a2e);
}
</style>
