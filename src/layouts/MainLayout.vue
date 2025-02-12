<template>
  <q-layout view="lHh Lpr lFf">
    <q-header flat>
      <q-toolbar class="content-between q-pa-lg" flat>
        <q-toolbar-title>Noli.Dev</q-toolbar-title>
        <q-btn
          v-for="(nav, index) in navS"
          :label="nav.name"
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
  },
  {
    name: 'About me',
    to: '',
  },
  {
    name: 'Skills',
    to: '',
  },
  {
    name: 'Projects',
    to: '',
  },
  {
    name: 'Contact',
    to: '',
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
