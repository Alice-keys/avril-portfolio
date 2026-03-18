<script setup>
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import ProjectItem from './project-item.vue'

const { t } = useI18n()

const props = defineProps({
  projects:            { type: Array,  required: true },
  currentProjectIndex: { type: Number, required: true }
})

const emit = defineEmits(['navigate-carousel'])

const modules = [Pagination]
</script>

<template>
  <section id="portfolio" class="project-list-section">
    <div class="section-header">
      <span class="section-line"></span>
      <h2>{{ t('portfolio.title') }}</h2>
    </div>
    <div v-if="projects.length" class="carousel-wrapper">
      <swiper
          :modules="modules"
          :slides-per-view="3"
          :space-between="30"
          :centered-slides="true"
          :pagination="{ clickable: true }"
          @slide-change="(swiper) => emit('navigate-carousel', swiper.activeIndex)">
        <swiper-slide
            v-for="(project, index) in projects"
            :key="project.id">
          <project-item :project="project"/>
        </swiper-slide>
      </swiper>
    </div>
    <p v-else>{{ t('portfolio.no-projects') }}</p>
  </section>
</template>

<style scoped>
.project-list-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 100px 60px;
}

.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
}

.section-line {
  width: 60px;
  height: 2px;
  background-color: #ffffff;
  margin-bottom: 24px;
}

h2 {
  font-size: 48px;
  font-weight: 300;
}

.carousel-wrapper {
  width: 100%;
}

:deep(.swiper-slide) {
  transform: scale(0.65);
  transition: transform 0.3s;
  opacity: 0.5;
}

:deep(.swiper-slide-active) {
  transform: scale(1);
  opacity: 1;
}

:deep(.swiper-pagination-bullet) {
  background: #ffffff;
  opacity: 0.4;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}

:deep(.swiper-slide-active) .project-card {
  box-shadow: 0 0 30px 10px rgba(255, 86, 168, 0.4);
}

:deep(.swiper) {
  overflow: visible;
}

.carousel-wrapper {
  width: 100%;
  padding: 40px 0;
}

</style>