<script setup lang="ts">
import type { ButtonTagProps } from '@/shared/types'

defineProps<ButtonTagProps>()

/**
 * TODO: Implementar auto remoção
 */
</script>
<template>
  <span
    class="inline-flex items-center gap-1 bg-secondary-container/30 text-primary px-3 py-1 rounded-full font-label-md text-label-md"
  >
    {{ title }}
    <button class="hover:text-error transition-colors" type="button">
      <span class="material-symbols-outlined text-[14px]">close</span>
    </button>
  </span>
</template>
