<template>
  <div :class="`${projectClass}`">
    <!---->
    <div class="col">
      <h3 class="text-bold"><span class="text-gradient">Projects</span></h3>
    </div>
    <!---->
    <q-tabs
      v-model="tab"
      dense
      class="text-grey q-my-md"
      active-color="secondary"
      indicator-color="secondary"
      align="justify"
      narrow-indicator
    >
      <q-tab v-for="(tabs, index) in tabList" :key="index" :name="tabs.name" :label="tabs.name" />
    </q-tabs>
    <!---->
    <div class="col row flex items-start justify-center">
      <q-tab-panels v-model="tab" animated class="bg-transparent">
        <q-tab-panel
          v-for="(tabs, index) in tabList"
          :key="index"
          :name="tabs.name"
          class="bg-transparent row"
        >
          <q-card
            v-for="(project, index) in projectList.filter(
              (project) => project.tabGroup === tabs.name || tabs.name === 'All',
            )"
            :key="index"
            class="card-size bg-warning shadow-19 q-ma-md"
            flat
          >
            <q-img
              :src="`images/${project.imgPath}`"
              :ratio="1"
              clickable
              @click="showDialog(project.imgPath)"
            />

            <q-card-section>
              <div class="text-h6">{{ project.name }}</div>
              <div class="text-subtitle2">{{ project.description }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-badge
                v-for="(tag, index) in project.tags"
                :key="index"
                outline
                color="secondary"
                class="q-mr-sm"
                :label="tag"
              />
            </q-card-section>
            <q-card-actions align="right" :vertical="true">
              <a
                class="absolute-bottom-right q-mr-md q-mb-sm text-white"
                :href="project.link"
                target="_blank"
                >{{ project.anchorName }}</a
              >
            </q-card-actions>
          </q-card>
        </q-tab-panel>
      </q-tab-panels>
    </div>

    <!--Dialog for Image show-->
    <q-dialog
      v-model="showImg"
      :backdrop-filter="'blur(4px) saturate(150%)'"
      transition-show="slide-up"
      transition-hide="slide-down"
      transition-duration="1000"
    >
      <q-card
        class="bg-warning text-white"
        style="height: 100%; max-height: 200dvw; max-width: 100dvw; width: 100%"
      >
        <q-card-section>
          <q-img
            :src="`images/${popUpImg}`"
            :ratio="screenSize == 'xs' ? 9 / 16 : 16 / 9"
            :fit="'contain'"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat icon="close" v-close-popup>
            <q-tooltip class="text-white">Close</q-tooltip>
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showImg = ref(false)
const projectClass = defineModel('projectClass')
const screenSize = defineModel('screenSize')
const popUpImg = ref('')
const tab = ref('All')
const tabList = [
  {
    name: 'All',
  },
  {
    name: 'Web',
  },
  {
    name: 'Mobile',
  },
]

const showDialog = (value) => {
  popUpImg.value = value
  showImg.value = true
}

const projectList = defineModel('projectList')
</script>

<style scoped>
.card-size {
  max-width: 20rem;
}
.gradient {
  background: linear-gradient(45deg, orange, pink);
}
</style>
