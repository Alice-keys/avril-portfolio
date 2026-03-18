<script setup>
import { useI18n } from 'vue-i18n'
import { Developer } from '../../../portfolio/domain/model/developer.entity.js'

const { t } = useI18n()

defineProps({ developer: { type: Developer, required: true } })
</script>

<template>
  <footer>
    <div class="footer-top">
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
    </div>
    <div class="footer-made-with">
      <p>{{ t('footer.made-with') }}</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #1a0a0f;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-left p {
  font-size: 16px;
  font-weight: 600;
}

.footer-socials {
  display: flex;
  gap: 16px;
  justify-content: flex-end;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-socials a {
  color: #000000;
  font-size: 20px;
  text-decoration: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-socials a i {
  font-size: 20px;
  color: #000000;
}

.footer-made-with {
  text-align: center;
}

.footer-made-with p {
  font-style: italic;
  color: #cccccc;
  font-size: 14px;
}
</style>