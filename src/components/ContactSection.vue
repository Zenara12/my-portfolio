<template>
  <q-card :class="`${contactClass} `">
    <q-card-section class="col-md-6 col-xs-12 column">
      <!-- Left Section: Contact Info -->
      <h3 class="text-bold text-gradient">Let's Connect</h3>
      <p class="text-grey-5">Get in touch with me through the following platforms.</p>
      <q-card class="row bg-transparent" flat>
        <q-card-section
          v-for="(item, index) in contactInfo"
          :key="index"
          class="q-ma-none q-pa-none"
        >
          <q-chip size="lt-md-md gt-sm-lg" :icon="item.icon" outline color="secondary">
            {{ item.label }}:
            <a :href="item.link" target="_blank" class="text-grey-5 no-decoration">{{
              item.value
            }}</a>
          </q-chip>
        </q-card-section>
      </q-card>
    </q-card-section>
    <!-- Right Section: Contact Form -->
    <!-- <q-card-section class="col-md-6 col-xs-12">
      <q-input v-model="email" label="Email" outlined class="q-mb-md" color="primary" />
      <q-input v-model="subject" label="Subject" outlined class="q-mb-md" />
      <q-input v-model="message" label="Message" type="textarea" outlined class="q-mb-md" />
      <q-btn
        color="orange"
        text-color="white"
        class="full-width q-mt-md"
        @click="sendMessage"
        :onclick="sendEmail"
      >
        Send Message
      </q-btn>
    </q-card-section> -->
  </q-card>
</template>

<script setup>
// import { ref } from 'vue'

// const email = ref('')
// const subject = ref('')
// const message = ref('')

const contactClass = defineModel()

const contactInfo = [
  {
    label: 'Email',
    value: 'nolipernes@gmail.com',
    icon: 'mdi-google',
    link: 'mailto:nolipernes@gmail.com',
  },
  { label: 'Phone', value: '+63951-366-4700', icon: 'phone', link: '#' },
  {
    label: 'Facebook',
    value: 'fb.com/nolipernes',
    icon: 'mdi-facebook',
    link: 'https://www.facebook.com/nolipernes03',
  },
  {
    label: 'GitHub',
    value: 'www.github.com/Zenara12',
    icon: 'mdi-github',
    link: 'https://github.com/Zenara12',
  },
  {
    label: 'LinkedIn',
    value: 'www.LinkedIn.com/nolipernes',
    icon: 'mdi-linkedin',
    link: 'https://www.linkedin.com/in/noli-pernes/',
  },
]

// const sendMessage = () => {
//   if (!email.value.trim() || !subject.value.trim() || !message.value.trim()) {
//     alert('Please fill in all fields before sending.')
//     return
//   }

//   // Construct mailto link

//   // Open user's default email app

//   // Reset form after sending
//   email.value = ''
//   subject.value = ''
//   message.value = ''
// }
</script>

<style scoped>
.no-decoration {
  text-decoration: none;
}
</style>
