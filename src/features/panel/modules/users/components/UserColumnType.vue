<script setup lang="ts">
import { PanelBadge } from '@/features/panel/components'
import type { UserColumnTypeProps } from '@/shared/types'

defineProps<UserColumnTypeProps>()
</script>

<template>
  <PanelBadge :label="type" />
</template>
