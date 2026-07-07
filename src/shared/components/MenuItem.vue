<script lang="ts" setup>
interface MenuItem {
  label: string
  href: string
}

defineProps<MenuItem>()
</script>
<template>
  <RouterLink
    :to="href"
  >
    <a class="text-on-surface-variant hover:text-primary transition-colors pb-1">{{ label }}</a>
  </RouterLink>
</template>
