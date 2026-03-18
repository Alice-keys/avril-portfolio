<script setup>
import { useI18n } from 'vue-i18n'
import SkillCategoryItem from './skill-category-item.vue'

const { t } = useI18n()

defineProps({ skillCategories: { type: Array, required: true } })
</script>

<template>
  <section id="skills" class="skill-list-section">
    <h2>{{ t('skills.title') }}</h2>
    <div class="skill-categories">
      <skill-category-item
          v-for="skillCategory in skillCategories"
          :key="skillCategory.name"
          :skill-category="skillCategory"/>
    </div>
  </section>
</template>

<style scoped>
.skill-list-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 100px 60px;
}

.skill-list-section::before {
  content: '';
  width: 60px;
  height: 2px;
  background-color: #ffffff;
  margin-bottom: 24px;
}

.skill-list-section h2 {
  font-size: 48px;
  font-weight: 300;
  margin-bottom: 60px;
}

.skill-categories {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  width: 100%;
  max-width: 900px;
}
</style>