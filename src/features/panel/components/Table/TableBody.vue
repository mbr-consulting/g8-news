<script lang="ts" setup>
import type { RowsProps } from '../../types/index.ts';
import Badge from '../Badge.vue'

defineProps<RowsProps>()
</script>
<template>
  <tbody class="divide-y divide-surface-container-high">
    <tr
      v-for="(row, index) in rows"
      :key="index"
      class="hover:bg-surface-container-lowest transition-colors bg-surface-container-lowest"
    >
      <td class="py-4 px-4">
        <p
          class="font-headline-sm text-[16px] leading-[24px] text-on-surface font-semibold max-w-md truncate"
        >
          {{ row.title }}
        </p>
      </td>
      <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">
        {{ row.date }}
      </td>
      <td class="py-4 px-4">
        <Badge :label="row.type" />
      </td>
      <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface">{{ row.author }}</td>
      <td v-if="actions" class="py-4 px-4 text-right">
        <button
          class="text-on-surface-variant hover:text-primary transition-colors p-1"
          title="Editar"
        >
          <span class="material-symbols-outlined text-[20px]">edit</span>
        </button>
        <button
          class="text-on-surface-variant hover:text-error transition-colors p-1 ml-2"
          title="Excluir"
        >
          <span class="material-symbols-outlined text-[20px]">delete</span>
        </button>
      </td>
    </tr>
  </tbody>
</template>
