<script setup lang="ts">
defineProps<{
  footer?: boolean
}>()
</script>
<template>
  <div class="bg-surface-container-lowest border border-outline-variant rounded-lg p-stack-lg">
    <slot />
  </div>
</template>
