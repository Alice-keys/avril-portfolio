<script setup>
import { computed, onMounted, watch } from 'vue'
import { portfolioStore } from '../../../portfolio/application/portfolio.store.js'
import NavbarComponent from './navbar.vue'
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

watch(developer, (val) => {
  console.log('developer changed:', val)
})

onMounted(() => {
  console.log('layout onMounted')
  portfolioStore.loadData()
  console.log('developer after loadData:', portfolioStore.developer)
})
</script>

<template>
  <div>
    <NavbarComponent/>
    <main v-if="developer">
      <HeroSection      :developer="developer"/>
      <AboutSection     :developer="developer"/>
      <ProjectList      :projects="projects"
                        :current-project-index="currentProjectIndex"
                        @navigate-carousel="portfolioStore.setCurrentProject($event)"/>
      <SkillCategoryList :skill-categories="skillCategories"/>
      <ContactSection   :developer="developer"/>
    </main>
    <FooterContent v-if="developer" :developer="developer"/>
  </div>
</template>

<style scoped>
</style>