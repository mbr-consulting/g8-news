<script lang="ts" setup generic="T extends Record<string, unknown>">
import { ActionsColumn, TableHead } from '..'
import type { TableProps } from '../../types/index.ts'

defineProps<TableProps<T>>()
</script>
<template>
  <div
    class="bg-surface-container-lowest rounded-lg border border-outline-variant overflow-hidden shadow-sm"
  >
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <TableHead :columns="headers.columns" :action="actions" />
        <tbody>
          <tr
            class="hover:bg-surface-container-lowest transition-colors bg-surface-container-lowest"
            v-for="(row, rowIndex) in data"
            :key="row.id || rowIndex"
          >
            <td class="py-4 px-4" v-for="col in headers.columns" :key="col.id">
              <slot :name="`cell(${col.id})`" :row="row" :value="row[col.id]">
                {{ row[col.id] }}
              </slot>
            </td>
            <td v-if="actions">
              <ActionsColumn />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination />
  </div>
</template>
