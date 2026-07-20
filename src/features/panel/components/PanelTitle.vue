<script lang="ts" setup>
import type { PageTitleProps } from '../../../shared/types/index.ts'
import LinkTo from './LinkTo.vue'

defineProps<PageTitleProps>()
</script>
<template>
  <div class="max-w-container-max mx-auto flex flex-col gap-stack-lg mb-5">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-stack-md">
      <div>
        <h1 class="font-headline-lg text-headline-lg text-primary">{{ title }}</h1>
        <p class="font-body-sm text-body-sm text-on-surface-variant mt-1" v-if="subtitle">
          {{ subtitle }}
        </p>
      </div>
      <LinkTo v-if="button" :icon="button.icon" :label="button.label" :route="button.route" />
    </div>
  </div>
</template>
