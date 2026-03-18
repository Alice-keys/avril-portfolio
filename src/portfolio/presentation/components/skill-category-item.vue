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
.skill-category {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skill-category h3 {
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
}

.skill-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 8px 14px;
  font-size: 14px;
}

.skill-badge img {
  width: 20px;
  height: 20px;
}
</style>