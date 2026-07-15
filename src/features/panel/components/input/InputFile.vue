<script lang="ts" setup>
defineProps<{
  label?: string
  name: string
  title: string
  subtitle?: string
}>()
</script>
<template>
  <div>
    <label class="block font-label-md text-label-md text-on-surface-variant mb-stack-sm">{{
      label
    }}</label>
    <div
      class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-outline-variant border-dashed rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group"
    >
      <div class="space-y-1 text-center">
        <span
          class="material-symbols-outlined text-outline text-4xl group-hover:text-primary transition-colors"
          data-icon="upload_file"
          >upload_file</span
        >
        <div class="flex font-body-sm text-body-sm text-on-surface justify-center">
          <span
            class="relative cursor-pointer bg-transparent rounded-md font-medium text-primary hover:text-primary-container focus-within:outline-none"
          >
            <span>{{ title }}</span>
            <input class="sr-only" :id="name" :name="name" type="file" />
          </span>
        </div>
        <p class="font-body-sm text-body-sm text-on-surface-variant">{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>
