<script lang="ts" setup>
import type { PanelButtonProps } from '@/shared/types'

defineProps<PanelButtonProps>()

const variantClasses = {
  primary:
    'flex items-center gap-2 w-full sm:w-auto px-8 py-3 bg-primary text-white font-label-lg text-label-lg rounded-lg hover:bg-opacity-90 shadow-md transition-all active:scale-95',
  outline:
    'flex items-center gap-2 w-full sm:w-auto px-8 py-3 border border-primary text-primary font-label-lg text-label-lg rounded-lg hover:bg-surface-container-low transition-all',
  secondary:
    'flex items-center gap-2 w-full sm:w-auto px-8 py-3 bg-surface-container-low text-primary font-label-lg text-label-lg rounded-lg hover:bg-opacity-90 shadow-md transition-all active:scale-95',
  success:
    'flex items-center gap-2 w-full sm:w-auto px-8 py-3 bg-success text-white font-label-lg text-label-lg rounded-lg hover:bg-opacity-90 shadow-md transition-all active:scale-95',
  warning:
    'flex items-center gap-2 w-full sm:w-auto px-8 py-3 bg-warning text-white font-label-lg text-label-lg rounded-lg hover:bg-opacity-90 shadow-md transition-all active:scale-95',
  error:
    'flex items-center gap-2 w-full sm:w-auto px-8 py-3 bg-error text-white font-label-lg text-label-lg rounded-lg hover:bg-opacity-90 shadow-md transition-all active:scale-95',
}
</script>
<template>
  <button :class="variantClasses[variant]" :type="type">
    <span v-if="icon" class="material-symbols-outlined text-[20px]">{{ icon }}</span>
    {{ label }}
  </button>
</template>
