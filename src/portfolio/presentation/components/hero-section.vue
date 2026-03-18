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

h1 strong {
  font-weight: 800;
  font-style: italic;
}

.hero-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  padding: 100px 200px 100px;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}

.hero-content h1 {
  font-size: 64px;
  font-weight: 300;
}

.hero-content h2 {
  font-size: 32px;
  font-weight: 300;
  color: #ffffff;
}

.hero-buttons {
  display: flex;
  gap: 16px;
}
.hero-buttons :deep(.p-button) {
  background: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  color: #ffffff !important;
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 12px 28px;
}

.hero-buttons :deep(.p-button:hover) {
  background: rgba(255, 255, 255, 0.2) !important;
}
.hero-socials {
  display: flex;
  gap: 16px;
}

.hero-socials i {
  font-size: 40px;
}
.hero-socials a {
  color: #ffffff;
  font-size: 30px;
  text-decoration: none;
}

.hero-photo img {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
}
</style>