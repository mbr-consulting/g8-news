<script setup lang="ts">
import { Badge } from '@/features/panel/components'
defineProps<{
  type: 'admin' | 'editor' | 'author'
}>()
</script>

<template>
  <Badge :label="type" />
</template>
