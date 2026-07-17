<script setup lang="ts">
defineProps<{
  title: string
  imageUrl?: string
}>()
</script>
<template>
  <div class="font-medium flex items-center gap-3">
    <div
      v-if="imageUrl"
      class="w-12 h-12 rounded bg-surface-container flex items-center justify-center overflow-hidden border border-outline-variant flex-shrink-0"
    >
      <img :src="imageUrl" alt="Image" class="w-full h-full object-cover" />
    </div>
    {{ title }}
  </div>
</template>
