<script lang="ts" setup>
import type { InputFileProps } from '@/shared/types'

defineProps<InputFileProps>()
</script>
<template>
  <div>
    <label class="block font-label-md text-label-md text-on-surface-variant mb-stack-sm">{{
      label
    }}</label>
    <div
      class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-outline-variant border-dashed rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group"
    >
      <div class="flex flex-col items-center space-y-1 text-center">
        <div
          class="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4 group-hover:bg-primary-container transition-colors"
        >
          <span
            class="material-symbols-outlined text-3xl text-on-surface-variant group-hover:text-on-primary-container"
            >cloud_upload</span
          >
        </div>
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
