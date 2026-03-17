<script setup>
import { useI18n } from 'vue-i18n'
import { Developer } from '../../domain/model/developer.entity.js'

const { t } = useI18n()

const props = defineProps({ developer: { type: Developer, required: true } })
const { developer } = props

function downloadCv() {
  const link = document.createElement('a')
  link.href = developer.cvUrl
  link.download = `cv-${developer.name.toLowerCase()}.pdf`
  link.click()
}

function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="home" class="hero-section">
    <div class="hero-content">
      <h1>{{ t('hero.greeting') }} <strong>{{ developer.name }}</strong></h1>
      <h2>{{ developer.title }}</h2>
      <div class="hero-buttons">
        <pv-button :label="t('hero.download-cv')" @click="downloadCv"/>
        <pv-button :label="t('hero.contact-me')" @click="scrollToContact"/>
      </div>
      <div class="hero-socials">
        <a v-for="social in developer.socialLinks"
           :key="social.platform"
           :href="social.url"
           target="_blank">
          <i :class="social.iconUrl"/>
        </a>
      </div>
    </div>
    <div class="hero-photo">
      <img :src="developer.photoUrl" :alt="developer.name"/>
    </div>
  </section>
</template>

<style scoped>
</style>