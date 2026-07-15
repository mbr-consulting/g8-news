<script setup lang="ts">
import PageTitle from '@/features/panel/components/PageTitle.vue'
</script>

<template>
  <PageTitle
    title="Listagem de Posts"
    subtitle="Gerencie as publicações editoriais e notícias do portal."
    :button="{ icon: 'add', label: 'Novo Post', route: { name: 'CreatePost' } }"
  />
</template>
