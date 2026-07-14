<script lang="ts" setup>
import type { PageTitleProps } from '../types/index.ts'
import LinkTo from './LinkTo.vue'

defineProps<PageTitleProps>()
</script>
<template>
  <div>
    <h1 class="font-headline-lg text-headline-lg text-primary">{{ title }}</h1>
    <p class="font-body-sm text-body-sm text-on-surface-variant mt-1" v-if="subtitle">
      {{ subtitle }}
    </p>
  </div>
  <LinkTo v-if="button" :icon="button.icon" :label="button.label" :route="button.route" />
</template>
