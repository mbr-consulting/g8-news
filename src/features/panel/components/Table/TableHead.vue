<script setup lang="ts">
import type { TableHeadProps } from '../../../../shared/types'

defineProps<TableHeadProps>()
</script>
<template>
  <thead>
    <tr class="bg-surface-container-low border-b border-surface-container-high">
      <th
        v-for="(column, key) in columns"
        :key="key"
        class="py-3 px-4 font-label-md text-label-md text-on-surface-variant tracking-wider uppercase font-semibold"
      >
        {{ column.text }}
      </th>
      <th
        v-if="action"
        class="py-3 px-4 font-label-md text-label-md text-on-surface-variant tracking-wider uppercase font-semibold text-right"
      >
        Ações
      </th>
    </tr>
  </thead>
</template>
