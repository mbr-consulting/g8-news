<script setup lang="ts">
import type { DashboardCardProps } from '@/shared/types'

defineProps<DashboardCardProps>()
</script>
<template>
  <div
    class="bg-surface rounded border border-outline-variant p-6 hover:border-primary-container transition-colors relative overflow-hidden group"
  >
    <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <span class="material-symbols-outlined text-[48px] text-primary">{{ icon }}</span>
    </div>
    <h3 class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2">
      {{ title }}
    </h3>
    <p class="font-display-lg text-display-lg text-primary">{{ value }}</p>
  </div>
</template>
