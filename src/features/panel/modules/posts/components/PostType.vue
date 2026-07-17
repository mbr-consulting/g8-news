<script setup lang="ts">
import { Badge } from '@/features/panel/components'
defineProps<{
  type: 'news' | 'editorial'
}>()

const typeMap: Record<'news' | 'editorial', { label: string; variant: 'primary' | 'secondary' }> = {
  news: { label: 'Notícia', variant: 'primary' },
  editorial: { label: 'Editorial', variant: 'secondary' },
}
</script>

<template>
  <Badge :label="typeMap[type].label" :variant="typeMap[type].variant" />
</template>
