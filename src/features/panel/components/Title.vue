<script lang="ts" setup>
defineProps<{
  title: string
  icon?: string
}>()
</script>
<template>
  <h3
    class="flex items-center gap-2 font-headline-sm text-headline-sm text-on-surface border-b border-outline-variant pb-2"
  >
    <span v-if="icon" class="material-symbols-outlined text-primary fill" :data-icon="icon">
      {{ icon }}
    </span>
    {{ title }}
  </h3>
</template>
