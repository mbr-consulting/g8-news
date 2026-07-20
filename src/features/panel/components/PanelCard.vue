<script setup lang="ts">
import type { PanelCardProps } from '@/shared/types'

defineProps<PanelCardProps>()
</script>
<template>
  <div class="bg-surface-container-lowest border border-outline-variant rounded-lg p-stack-lg">
    <slot />
  </div>
</template>
