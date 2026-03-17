<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './language-switcher.vue'

const { t } = useI18n()
const menuVisible = ref(false)

function toggleMenu() {
  menuVisible.value = !menuVisible.value
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
  menuVisible.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-menu desktop">
      <a @click="scrollToSection('home')">{{ t('nav.home') }}</a>
      <a @click="scrollToSection('about')">{{ t('nav.about') }}</a>
      <a @click="scrollToSection('portfolio')">{{ t('nav.portfolio') }}</a>
      <a @click="scrollToSection('skills')">{{ t('nav.skills') }}</a>
      <a @click="scrollToSection('contact')">{{ t('nav.contact') }}</a>
    </div>
    <div class="navbar-mobile">
      <button @click="toggleMenu">
        <i class="pi pi-bars"/>
      </button>
      <div v-if="menuVisible" class="navbar-dropdown">
        <a @click="scrollToSection('home')">{{ t('nav.home') }}</a>
        <a @click="scrollToSection('about')">{{ t('nav.about') }}</a>
        <a @click="scrollToSection('portfolio')">{{ t('nav.portfolio') }}</a>
        <a @click="scrollToSection('skills')">{{ t('nav.skills') }}</a>
        <a @click="scrollToSection('contact')">{{ t('nav.contact') }}</a>
      </div>
    </div>
    <language-switcher/>
  </nav>
</template>

<style scoped>
</style>