<script setup lang="ts">
import PageTitle from '@/features/panel/components/PageTitle.vue'
</script>

<template>
  <div class="max-w-container-max mx-auto flex flex-col gap-stack-lg">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-stack-md">
      <PageTitle
        title="Listagem de Posts"
        subtitle="Gerencie as publicações editoriais e notícias do portal."
        :button="{ icon: 'add', label: 'Novo Post', route: { name: 'CreatePost' } }"
      />
    </div>
  </div>
</template>
