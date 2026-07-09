<script lang="ts" setup>
defineProps<{
  columns: string[]
  actions?: boolean
}>()
</script>
<template>
  <thead>
    <tr class="bg-surface-container-low border-b border-surface-container-high">
      <th
        class="py-3 px-4 font-label-md text-label-md text-on-surface-variant tracking-wider uppercase font-semibold"
        v-for="(column, index) in columns"
        :key="index"
      >
        {{ column }}
      </th>
      <th
        class="py-3 px-4 font-label-md text-label-md text-on-surface-variant tracking-wider uppercase font-semibold text-right"
        v-if="actions"
      >
        Ações
      </th>
    </tr>
  </thead>
</template>
