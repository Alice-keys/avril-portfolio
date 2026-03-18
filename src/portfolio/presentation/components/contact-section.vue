<script setup>
import { useI18n } from 'vue-i18n'
import { Developer } from '../../domain/model/developer.entity.js'

const { t } = useI18n()

const props = defineProps({ developer: { type: Developer, required: true } })
const { developer } = props

function openEmail() {
  window.location.href = `mailto:${developer.email}`
}

function openWhatsApp() {
  window.open(`https://wa.me/${developer.whatsapp}`, '_blank')
}
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-card">
      <div class="contact-header">
        <span class="contact-line"></span>
        <h2>{{ t('contact.title') }}</h2>
      </div>
      <div class="contact-info">
        <p><i class="pi pi-envelope"/> {{ t('contact.email-label') }}: <strong>{{ developer.email }}</strong></p>
        <p><i class="pi pi-whatsapp"/> {{ t('contact.whatsapp-label') }}: <strong>{{ developer.whatsapp }}</strong></p>
        <p><i class="pi pi-linkedin"/> {{ t('contact.linkedin-label') }}: <strong>{{ developer.linkedinUrl }}</strong></p>
      </div>
      <div class="contact-buttons">
        <pv-button :label="t('contact.send-email')" @click="openEmail"/>
        <pv-button :label="t('contact.send-whatsapp')" @click="openWhatsApp"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 100px 60px;
}

.contact-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 60px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 700px;
}

.contact-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.contact-line {
  width: 60px;
  height: 2px;
  background-color: #ffffff;
}

.contact-header h2 {
  font-size: 48px;
  font-weight: 300;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.contact-info p {
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-buttons {
  display: flex;
  gap: 20px;
}

:deep(.p-button) {
  background: transparent !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  color: #ffffff !important;
  padding: 12px 28px;
  border-radius: 8px;
}

:deep(.p-button:hover) {
  background: rgba(255, 255, 255, 0.1) !important;
}
</style>