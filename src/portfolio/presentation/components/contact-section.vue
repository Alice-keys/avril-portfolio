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
    <h2>{{ t('contact.title') }}</h2>
    <div class="contact-info">
      <p><i class="pi pi-envelope"/> {{ t('contact.email-label') }}: {{ developer.email }}</p>
      <p><i class="pi pi-whatsapp"/> {{ t('contact.whatsapp-label') }}: {{ developer.whatsapp }}</p>
      <p><i class="pi pi-linkedin"/> {{ t('contact.linkedin-label') }}:
        <a :href="developer.linkedinUrl" target="_blank">{{ developer.linkedinUrl }}</a>
      </p>
    </div>
    <div class="contact-buttons">
      <pv-button :label="t('contact.send-email')"    @click="openEmail"/>
      <pv-button :label="t('contact.send-whatsapp')" @click="openWhatsApp"/>
    </div>
  </section>
</template>

<style scoped>
</style>