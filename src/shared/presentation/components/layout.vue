<script setup>
import { computed, onMounted } from 'vue'
import { portfolioStore } from '../../../portfolio/application/portfolio.store.js'
import Navbar from './navbar.vue'
import FooterContent from './footer-content.vue'
import HeroSection from '../../../portfolio/presentation/components/hero-section.vue'
import AboutSection from '../../../portfolio/presentation/components/about-section.vue'
import ProjectList from '../../../portfolio/presentation/components/project-list.vue'
import SkillCategoryList from '../../../portfolio/presentation/components/skill-category-list.vue'
import ContactSection from '../../../portfolio/presentation/components/contact-section.vue'

const developer = computed(() => portfolioStore.developer)
const projects = computed(() => portfolioStore.projects)
const skillCategories = computed(() => portfolioStore.skillCategories)
const currentProjectIndex = computed(() => portfolioStore.currentProjectIndex)

onMounted(() => {
  portfolioStore.loadData()
})
</script>

<template>
  <div v-if="developer">
    <navbar/>
    <main>
      <hero-section      :developer="developer"/>
      <about-section     :developer="developer"/>
      <project-list      :projects="projects"
                         :current-project-index="currentProjectIndex"
                         @navigate-carousel="portfolioStore.setCurrentProject($event)"/>
      <skill-category-list :skill-categories="skillCategories"/>
      <contact-section   :developer="developer"/>
    </main>
    <footer-content :developer="developer"/>
  </div>
</template>

<style scoped>
</style>