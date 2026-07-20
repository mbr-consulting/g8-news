<script setup lang="ts">
import { MenuItem } from '.'
</script>

<template>
  <nav class="flex-grow flex justify-center gap-gutter font-label-lg text-label-lg">
    <MenuItem label="PAGINA INICIAL" href="/" />
    <MenuItem label="CIDADES" href="/cidades" />
    <MenuItem label="G8 CONSTRUÇÕES" href="/g8-construcoes" />
    <MenuItem label="BLOG" href="/blog" />
    <MenuItem label="FALE CONOSCO" href="/fale-conosco" />
    <!-- <a
      class="text-primary border-b-2 border-secondary font-bold hover:text-primary transition-colors pb-1"
      href="#"
      >PAGINA INICIAL</a
    >
    -->
  </nav>
</template>
