<script lang="ts" setup>
import type { MenuItemProps } from '@/shared/types'

defineProps<MenuItemProps>()
</script>
<template>
  <RouterLink :to="href">
    <li>
      <a
        class="flex items-center gap-3 px-margin-x py-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors duration-200 ease-in-out"
        href=""
      >
        <span class="material-symbols-outlined text-[20px]">{{ icon }}</span>
        <span class="font-label-lg text-label-lg">{{ label }}</span>
      </a>
    </li>
  </RouterLink>
</template>
