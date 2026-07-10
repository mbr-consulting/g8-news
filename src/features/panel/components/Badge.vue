<script lang="ts" setup>
import type { BadgeProps } from '../types';

defineProps<BadgeProps>()
</script>
<template>
  <span
    class="inline-flex items-center px-2 py-1 rounded font-label-md text-[10px] tracking-wide uppercase font-bold border bg-secondary-container/20 text-primary border-secondary-container/30"
    >{{ label }}</span
  >
</template>
