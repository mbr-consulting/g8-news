<script lang="ts" setup>
import type { PostCardProps } from '../types'

defineProps<PostCardProps>()
</script>
<template>
  <article class="flex flex-col group cursor-pointer">
    <div class="overflow-hidden rounded-lg mb-stack-md">
      <img
        class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
        data-alt="A close-up shot of a modern architectural blueprint unrolled on a large wooden desk. A sleek silver pen and a pair of reading glasses rest on the schematics. Soft, natural light streams in from a window, highlighting the crisp lines of the drawing. Corporate, professional, and minimalist aesthetic."
        :src="imageUrl"
      />
    </div>
    <span
      class="bg-secondary/10 text-primary font-label-md text-label-md px-2 py-1 rounded w-fit mb-stack-sm uppercase"
      >{{ category }}</span
    >
    <h3
      class="font-headline-sm text-headline-sm text-primary mb-stack-sm group-hover:text-primary/80 transition-colors line-clamp-3"
    >
      {{ title }}
    </h3>
    <p class="font-body-sm text-body-sm text-on-surface-variant mb-stack-md line-clamp-2">
      {{ description }}
    </p>
  </article>
</template>
