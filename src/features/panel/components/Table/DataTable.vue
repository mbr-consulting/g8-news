<script lang="ts" setup generic="T extends Record<string, unknown>">
import { ActionsColumn, TableHead } from '../index.ts'
import type { TableProps } from '../../../../shared/types/index.ts'

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
            class="hover:bg-surface-container-lowest transition-colors bg-surface-container-lowest border-b border-outline-variant"
            v-for="(row, rowIndex) in data"
            :key="String(row.id ?? rowIndex)"
          >
            <td class="py-4 px-4" v-for="col in headers.columns" :key="col.id">
              <slot :name="`cell(${col.id})`" :row="row" :value="row[col.id]">
                {{ row[col.id] }}
              </slot>
            </td>
            <td v-if="actions">
              <ActionsColumn
                :edit="edit"
                :onEdit="() => onEdit?.(row)"
                :remove="remove"
                :onRemove="() => onRemove?.(row)"
                :view="view"
                :onView="() => onView?.(row)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination />
  </div>
</template>
