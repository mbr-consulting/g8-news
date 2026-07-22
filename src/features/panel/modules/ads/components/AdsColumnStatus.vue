<script setup lang="ts">
import { PanelBadge } from '@/features/panel/components'

defineProps<{
  status: string
}>()
</script>
<template>
  <PanelBadge :label="status" />
</template>
