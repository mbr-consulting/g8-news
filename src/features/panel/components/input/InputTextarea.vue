<script setup lang="ts">
defineProps<{
  name: string
  label: string
  placeholder?: string
  value?: string
  cols?: number
  rows?: number
}>()
</script>
<template>
  <div class="flex flex-col gap-stack-sm h-full">
    <label class="font-label-lg text-label-lg text-on-surface" :for="name">{{ label }}</label>
    <div
      class="border border-outline-variant rounded-lg bg-surface-container-lowest flex flex-col h-full overflow-hidden shadow-sm shadow-primary/5"
    >
      <textarea
        class="w-full flex-1 p-4 resize-none outline-none border-none bg-transparent font-body-md text-body-md text-on-surface leading-relaxed placeholder:text-on-surface-variant/40"
        :cols="cols"
        :rows="rows"
        :id="name"
        :placeholder="placeholder"
      ></textarea>
    </div>
  </div>
</template>
