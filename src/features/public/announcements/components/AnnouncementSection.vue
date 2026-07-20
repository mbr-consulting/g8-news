<script setup lang="ts">
import type { SectionProps } from '../types/index.ts'
import SectionItem from './SectionItem.vue';

defineProps<SectionProps>()
</script>
<template>
  <section class="space-y-stack-lg">
    <div class="flex items-center gap-4">
      <h3 class="font-headline-md text-headline-md text-primary shrink-0">
        {{ title }}
      </h3>
      <div class="h-[1px] w-full bg-outline-variant"></div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter">
      <SectionItem
        v-for="(item, index) in items"
        :key="index"
        :name="item.name"
        :link="item.link"
        :altText="item.altText"
      />

      <a
        class="group block text-center space-y-stack-md transition-all active:scale-95"
        href="https://www.bistrodovale.com.br/"
      >
        <div
          class="aspect-square bg-white border border-outline-variant rounded-lg overflow-hidden flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow bg-[url('placeholder')] bg-cover bg-center"
          data-alt="A clean, professional minimalist logo for a high-end restaurant named 'Bistrô do Vale'. The logo is a sophisticated dark green monogram on a textured cream paper background, reflecting an elegant light-mode editorial aesthetic. The lighting is soft and even, mimicking a studio photography setup for a luxury corporate brand."
        ></div>
        <span
          class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors block"
          >Bistrô do Vale</span
        >
      </a>
      <a class="group block text-center space-y-stack-md transition-all active:scale-95" href="#">
        <div
          class="aspect-square bg-white border border-outline-variant rounded-lg overflow-hidden flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow bg-[url('placeholder')] bg-cover bg-center"
          data-alt="A modern minimalist logo for a premium coffee shop called 'Grão &amp; Aroma'. The design features a stylized coffee bean silhouette in deep gold and primary green. The background is a clean, bright white with a very subtle leather texture. The aesthetic is sophisticated, modern, and perfectly aligned with a professional news portal's hotel/gastro section."
        ></div>
        <span
          class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors block"
          >Grão &amp; Aroma</span
        >
      </a>
      <a class="group block text-center space-y-stack-md transition-all active:scale-95" href="#">
        <div
          class="aspect-square bg-white border border-outline-variant rounded-lg overflow-hidden flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow bg-[url('placeholder')] bg-cover bg-center"
          data-alt="Corporate identity logo for 'Sabor da Terra' restaurant. The visual style is minimalist and high-contrast, featuring a modern sans-serif typography inside a thin green circular frame. The setting is bright and clean, typical of a professional editorial layout. The overall mood is established and trustworthy."
        ></div>
        <span
          class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors block"
          >Sabor da Terra</span
        >
      </a>
      <a class="group block text-center space-y-stack-md transition-all active:scale-95" href="#">
        <div
          class="aspect-square bg-white border border-outline-variant rounded-lg overflow-hidden flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow bg-[url('placeholder')] bg-cover bg-center"
          data-alt="Minimalist luxury logo for 'Cozinha Autoral' with a focus on geometric balance. Deep green primary color on a light grey background with subtle grain. The lighting is soft high-key, emphasizing the clean lines and professional design of the corporate branding. Sophisticated and modern editorial style."
        ></div>
        <span
          class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors block"
          >Cozinha Autoral</span
        >
      </a>
      <a class="group block text-center space-y-stack-md transition-all active:scale-95" href="#">
        <div
          class="aspect-square bg-white border border-outline-variant rounded-lg overflow-hidden flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow bg-[url('placeholder')] bg-cover bg-center"
          data-alt="Elegant logo design for 'Cantina della Nonna' featuring a minimalist line-art illustration of an olive branch. The palette consists of gold accents and deep green on a pristine white background. The image is framed as a professional brand asset for a high-end travel and gastronomy guide, reflecting authority and precision."
        ></div>
        <span
          class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors block"
          >Cantina Nonna</span
        >
      </a>
      <a class="group block text-center space-y-stack-md transition-all active:scale-95" href="#">
        <div
          class="aspect-square bg-white border border-outline-variant rounded-lg overflow-hidden flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow bg-[url('placeholder')] bg-cover bg-center"
          data-alt="Modern geometric logo for 'Urban Eats' cafe. Bright light-mode aesthetic with sharp focus on the logo's clean typography and minimalist icon. Background is a neutral off-white. The aesthetic follows a corporate digital-first news portal style, emphasizing clarity, professionalism, and high-quality information architecture."
        ></div>
        <span
          class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors block"
          >Urban Eats</span
        >
      </a>
    </div>
  </section>
</template>
