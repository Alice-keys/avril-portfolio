<script setup>
import ProjectItem from './project-item.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  projects:            { type: Array,  required: true },
  currentProjectIndex: { type: Number, required: true }
})

const emit = defineEmits(['navigate-carousel'])

function navigateCarousel(index) {
  emit('navigate-carousel', index)
}
</script>

<template>
  <section id="portfolio" class="project-list-section">
    <h2>{{ t('portfolio.title') }}</h2>
    <div v-if="projects.length" class="carousel">
      <project-item
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :class="{ active: index === currentProjectIndex }"/>
      <div v-if="projects.length > 1" class="carousel-dots">
                <span
                    v-for="(project, index) in projects"
                    :key="project.id"
                    :class="{ active: index === currentProjectIndex }"
                    @click="navigateCarousel(index)"/>
      </div>
    </div>
    <p v-else>{{ t('portfolio.no-projects') }}</p>
  </section>
</template>

<style scoped>
</style>