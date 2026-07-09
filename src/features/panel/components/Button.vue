<script lang="ts" setup>
import type { ButtonProps } from '../types';

defineProps<ButtonProps>()
</script>
<template>
  <button
    class="inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-label-lg text-label-lg px-6 py-3 rounded hover:opacity-80 transition-opacity whitespace-nowrap shadow-sm"
  >
    <span class="material-symbols-outlined text-[18px]">{{ icon }}</span>
    {{ label }}
  </button>
</template>
