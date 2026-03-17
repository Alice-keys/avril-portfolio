<script setup>
import { useI18n } from 'vue-i18n'
import { SkillCategory } from '../../domain/model/skill-category.entity.js'

const { t } = useI18n()

defineProps({ skillCategory: { type: SkillCategory, required: true } })
</script>

<template>
  <div class="skill-category">
    <h3>{{ t('skills.' + skillCategory.name) }}</h3>
    <div class="skill-badges">
            <span v-for="skill in skillCategory.skills" :key="skill.name" class="skill-badge">
                <img v-if="skill.iconUrl" :src="skill.iconUrl" :alt="skill.name"/>
                {{ skill.name }}
            </span>
    </div>
  </div>
</template>

<style scoped>
</style>