<script lang="ts" setup>
import type { RowsProps } from '../../types/index.ts'
import TableBody from './TableBody.vue'
import TableHead from './TableHead.vue'

interface TableProps {
  columns: string[]
  rows: RowsProps
  actions: boolean
}

defineProps<TableProps>()
</script>
<template>
  <div
    class="bg-surface-container-lowest rounded-lg border border-outline-variant overflow-hidden shadow-sm"
  >
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <TableHead :columns="columns" />
        <TableBody :rows="rows" />
      </table>
    </div>
  </div>
</template>
