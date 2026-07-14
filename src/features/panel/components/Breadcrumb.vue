<script lang="ts" setup>
defineProps<{
  crumbs: {
    name: string
    to: { name: string }
  }[]
}>()
</script>
<template>
  <nav class="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md mb-2">
    <RouterLink class="hover:text-primary" :to="{ name: 'Dashboard' }">Visão Geral</RouterLink>
    <div v-for="(item, key) in crumbs" :key="key" class="flex items-center gap-2">
      <span class="material-symbols-outlined text-[14px]">chevron_right</span>
      <span v-if="key === crumbs.length - 1" class="text-primary font-bold">{{ item.name }}</span>
      <RouterLink v-else class="hover:text-primary" :to="item.to">{{ item.name }}</RouterLink>
    </div>
  </nav>
</template>
