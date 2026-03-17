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
</style>