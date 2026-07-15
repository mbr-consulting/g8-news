<script lang="ts" setup>
defineProps<{
  type: 'button' | 'submit' | 'reset'
  variant: 'outline' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  label: string
  icon?: string
}>()

const variantClasses = {
  primary:
    'w-full sm:w-auto px-8 py-3 bg-primary text-white font-label-lg text-label-lg rounded-lg hover:bg-opacity-90 shadow-md transition-all active:scale-95',
  outline:
    'w-full sm:w-auto px-8 py-3 border border-primary text-primary font-label-lg text-label-lg rounded-lg hover:bg-surface-container-low transition-all',
  secondary:
    'w-full sm:w-auto px-8 py-3 bg-surface-container-low text-primary font-label-lg text-label-lg rounded-lg hover:bg-opacity-90 shadow-md transition-all active:scale-95',
  success:
    'w-full sm:w-auto px-8 py-3 bg-success text-white font-label-lg text-label-lg rounded-lg hover:bg-opacity-90 shadow-md transition-all active:scale-95',
  warning:
    'w-full sm:w-auto px-8 py-3 bg-warning text-white font-label-lg text-label-lg rounded-lg hover:bg-opacity-90 shadow-md transition-all active:scale-95',
  error:
    'w-full sm:w-auto px-8 py-3 bg-error text-white font-label-lg text-label-lg rounded-lg hover:bg-opacity-90 shadow-md transition-all active:scale-95',
}
</script>
<template>
  <button :class="variantClasses[variant]" :type="type">
    {{ label }}
  </button>
</template>
