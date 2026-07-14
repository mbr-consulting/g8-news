<script setup lang="ts">
defineProps<{
  name: string
  label: string
}>()
</script>
<template>
  <label class="flex items-center gap-3 cursor-pointer group">
    <div class="relative w-5 h-5 flex items-center justify-center">
      <input
        class="peer appearance-none w-5 h-5 border border-outline-variant rounded bg-surface-container-low checked:bg-primary checked:border-primary transition-all"
        :name="name"
        type="checkbox"
      />
      <span
        class="material-symbols-outlined text-white text-[16px] absolute scale-0 peer-checked:scale-100 transition-transform"
        >check</span
      >
    </div>
    <span class="font-body-sm text-body-sm text-on-surface-variant">{{ label }}</span>
  </label>
</template>
