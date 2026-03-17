<script setup>
import { useI18n } from 'vue-i18n'
import { Developer } from '../../../portfolio/domain/model/developer.entity.js'

const { t } = useI18n()

defineProps({ developer: { type: Developer, required: true } })
</script>

<template>
  <footer class="footer">
    <div class="footer-left">
      <p>© 2026 {{ developer.name }} | {{ developer.title }}</p>
    </div>
    <div class="footer-socials">
      <a v-for="social in developer.socialLinks"
         :key="social.platform"
         :href="social.url"
         target="_blank">
        <i :class="social.iconUrl"/>
      </a>
    </div>
    <div class="footer-made-with">
      <p>{{ t('footer.made-with') }}</p>
    </div>
  </footer>
</template>

<style scoped>
</style>