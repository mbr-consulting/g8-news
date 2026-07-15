<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
  value: string
}>()
</script>
<template>
  <label
    class="relative flex flex-col p-4 border border-outline-variant rounded-lg cursor-pointer hover:border-primary transition-colors group"
  >
    <input class="sr-only peer" name="role" type="radio" value="{{ value }}" />
    <div class="flex justify-between items-center mb-2">
      <span class="material-symbols-outlined text-primary">{{ icon }}</span>
      <div
        class="w-4 h-4 rounded-full border-2 border-outline-variant peer-checked:border-primary peer-checked:bg-primary transition-all"
      ></div>
    </div>
    <span class="font-label-lg text-label-lg text-primary">{{ title }}</span>
    <span class="text-body-sm text-label-md text-on-surface-variant mt-1">{{ description }}</span>
    <div
      class="absolute inset-0 border-2 border-primary opacity-0 peer-checked:opacity-100 rounded-lg pointer-events-none"
    ></div>
  </label>
</template>
