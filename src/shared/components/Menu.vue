<script setup lang="ts">
import { MenuItem } from '.'
</script>

<template>
  <nav class="flex-grow flex justify-center gap-gutter font-label-lg text-label-lg overflow-x-auto">
    <MenuItem label="PAGINA INICIAL" href="/" />
    <MenuItem label="CIDADES" href="/cidades" />
    <MenuItem label="G8 CONSTRUÇÕES" href="/g8-construcoes" />
    <MenuItem label="FALE CONOSCO" href="/fale-conosco" />
    <!-- <a
      class="text-primary border-b-2 border-secondary font-bold hover:text-primary transition-colors pb-1"
      href="#"
      >PAGINA INICIAL</a
    >
    <a class="text-on-surface-variant hover:text-primary transition-colors pb-1" href="#"
      >CIDADES</a
    >
    <a class="text-on-surface-variant hover:text-primary transition-colors pb-1" href="#"
      >G8 CONSTRUÇÕES</a
    >
    <a class="text-on-surface-variant hover:text-primary transition-colors pb-1" href="#"
      >FALE CONOSCO</a
    > -->
  </nav>
</template>
