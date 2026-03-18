<script setup>
</script>

<template>
  <pv-select-button
      v-model="$i18n.locale"
      :options="$i18n.availableLocales"/>
</template>

<style scoped>
 :deep(.p-togglebutton) {
   background: transparent;
   border: 1px solid #ffffff;
   border-radius: 20px;
   color: #ffffff;
   padding: 4px 12px;
   font-size: 14px;
 }

:deep(.p-togglebutton[data-p-checked="true"]) {
  background: #ffffff;
  color: #000000;
}
</style>