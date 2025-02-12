<template>
  <q-layout view="lHh Lpr lFf">
    <q-header flat class="gt-sm">
      <q-toolbar class="content-between q-pa-lg" flat>
        <q-toolbar-title>Noli.Dev</q-toolbar-title>
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

const btnHover = ref(false)
const navS = [
  {
    name: 'Home',
    to: '',
    icon: 'house',
  },
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
