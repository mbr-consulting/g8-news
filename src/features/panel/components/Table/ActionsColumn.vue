<script setup lang="ts">
defineProps<{
  remove?: boolean
  edit?: boolean
  view?: boolean
  onRemove?: () => void
  onEdit?: () => void
  onView?: () => void
}>()
</script>
<template>
  <div class="flex items-center justify-end pr-2 gap-1">
    <!-- view button -->
    <button
      v-if="view"
      @click="onView"
      class="text-on-surface-variant hover:text-inverse-primary hover:cursor-pointer transition-colors"
      title="Editar"
    >
      <span class="material-symbols-outlined">visibility</span>
    </button>

    <!-- edit button -->
    <button
      v-if="edit"
      @click="onEdit"
      class="text-on-surface-variant hover:text-primary hover:cursor-pointer transition-colors"
      title="Editar"
    >
      <span class="material-symbols-outlined">edit</span>
    </button>

    <!-- delete button -->
    <button
      v-if="remove"
      @click="onRemove"
      class="text-on-surface-variant hover:text-error hover:cursor-pointer transition-colors"
      title="Excluir"
    >
      <span class="material-symbols-outlined">delete</span>
    </button>
  </div>
</template>
