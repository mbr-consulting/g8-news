<script setup lang="ts">
  interface EditorialBlockProps {
    type: 'primary' | 'secondary'
    title: string
    description: string
  }

  defineProps<EditorialBlockProps>()
</script>

<template>
  <div :class="['bg-surface-container-low p-stack-md border-t-4 rounded-b-lg', type === 'primary' ? 'border-secondary' : 'border-primary']">
    <h3 class="font-headline-md text-headline-md text-primary mb-stack-sm">
      {{ title }}
    </h3>
    <slot />
  </div>
</template>
