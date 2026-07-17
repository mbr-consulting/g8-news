<script setup lang="ts">
import { Badge } from '@/features/panel/components'

defineProps<{
  status: string
}>()
</script>
<template>
  <Badge :label="status" />
</template>
