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

const noriLogo =
  'https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/438303044_1001045115355245_3836067379854975523_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGLk88BAJw4gQt7IRftGXNmQWWTJlQRSphBZZMmVBFKmMm6UAQnQVxDDuZQ0qoWUsaBZIn7gJIrvQIln4-3xOll&_nc_ohc=Qc9NH21fTbQQ7kNvgHGEanU&_nc_oc=AdiExFUaf-ugH_Z8FbM0xuhBvBLUQzzpmovJZDsPyw6xeUkmGmJtrQ3O-637KST4yiw&_nc_zt=23&_nc_ht=scontent.fceb3-1.fna&_nc_gid=A4DGDqxEVqsr6dh2a035036&oh=00_AYB7fZexytvga4Cwo08VBNLXJ3UFcIjDLnsabwQjKR3Ubg&oe=67B3D8B1'
const btnHover = ref(false)
const navS = [
  {
    name: 'About me',
    to: '',
    icon: 'person',
  },
  {
    name: 'Skills',
    to: '',
    icon: 'psychology',
  },
  {
    name: 'Projects',
    to: '',
    icon: 'description',
  },
  {
    name: 'Contact',
    to: '',
    icon: 'contact_phone',
  },
]
</script>

<style>
.q-layout {
  background: linear-gradient(to right, #0f0f0f, #1a1a2e);
}
.q-toolbar {
  background: linear-gradient(to right, #0f0f0f, #1a1a2e);
}
</style>
