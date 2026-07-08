<script lang="ts" setup>
import type { SectionItemProps } from '../types'

defineProps<SectionItemProps>()
</script>

<template>
  <a
    class="group block text-center space-y-stack-md transition-all active:scale-95"
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div
      class="aspect-square bg-white border border-outline-variant rounded-lg overflow-hidden flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow bg-[url('placeholder')] bg-cover bg-center"
      :data-alt="altText"
    ></div>
    <span
      class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors block"
      >{{ name }}</span
    >
  </a>
</template>
