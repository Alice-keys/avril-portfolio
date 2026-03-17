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
</style>