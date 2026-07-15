<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>
<template>
  <h3
    class="font-headline-sm text-headline-sm text-on-surface border-b border-outline-variant pb-2"
  >
    {{ title }}
  </h3>
</template>
