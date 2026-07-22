<script setup lang="ts">
import { PanelBadge } from '@/features/panel/components'

defineProps<{
  type: 'published' | 'draft' | 'pending' | 'archived'
}>()

const statusMap: Record<
  'published' | 'draft' | 'pending' | 'archived',
  { label: string; variant: 'success' | 'warning' | 'error' | 'default' }
> = {
  published: { label: 'Publicado', variant: 'success' },
  draft: { label: 'Rascunho', variant: 'default' },
  pending: { label: 'Pendente', variant: 'warning' },
  archived: { label: 'Arquivado', variant: 'error' },
}
</script>

<template>
  <PanelBadge :label="statusMap[type].label" :variant="statusMap[type].variant" />
</template>
