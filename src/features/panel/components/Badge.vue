<script lang="ts" setup>
import type { BadgeProps } from '../types'
defineProps<BadgeProps>()

const variantClasses = {
  default: 'bg-surface-container-high text-on-surface',
  primary: 'bg-primary-container text-on-primary-container border-primary-container',
  secondary: 'bg-secondary-container text-on-secondary-container border-secondary-container',
  success: 'bg-primary-container text-on-primary-container border-primary-container',
  warning: 'bg-secondary-container text-on-secondary-container font-label-md text-label-md',
  error: 'bg-error-container text-on-error-container border-error-container',
}
</script>
<template>
  <span
    :class="[
      'inline-flex items-center px-2 py-1 rounded font-label-md text-[10px] tracking-wide uppercase font-bold border',
      variantClasses[variant || 'default'],
    ]"
    >{{ label }}</span
  >
</template>
