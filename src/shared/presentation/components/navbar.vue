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
    <div class="navbar-placeholder"></div>
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
    </div>
    <language-switcher/>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #000000;
  z-index: 100;
}

.navbar-menu {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.navbar-menu a {
  color: #ffffff;
  text-decoration: none;
  margin-left: 40px;
  cursor: pointer;
}

.navbar-mobile {
  display: none;
}

.navbar-placeholder {
  width: 200px;
}

</style>