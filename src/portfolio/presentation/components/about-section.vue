<script setup>
import { useI18n } from 'vue-i18n'
import { Developer } from '../../domain/model/developer.entity.js'

const { t } = useI18n()

defineProps({ developer: { type: Developer, required: true } })
</script>

<template>
  <section id="about" class="about-section">
    <h2>{{ t('about.title') }}</h2>
    <p>{{ t('about.bio') }}</p>
  </section>
</template>

<style scoped>
.about-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 100px 60px;
  text-align: center;
}

.about-section h2 {
  font-size: 48px;
  font-weight: 300;
  margin-bottom: 40px;
}

.about-section p {
  max-width: 700px;
  font-size: 18px;
  line-height: 1.8;
  color: #cccccc;
}

.about-section::before {
  content: '';
  width: 60px;
  height: 2px;
  background-color: #ffffff;
  margin-bottom: 24px;
}
</style>