<script setup lang="ts">
import PageTitle from '@/features/panel/components/PageTitle.vue'
import { Table } from '@/features/panel/components/Table'

const columns = ['Título', 'Data de Publicação', 'Tipo', 'Autor']
const rows = [
  {
    title: 'Avanços na infraestrutura urbana de G8 atraem novos investimentos',
    date: '24 Out 2024',
    type: 'Notícia',
    author: 'Redação G8',
  },
  {
    title: 'O impacto das novas diretrizes de construção civil na região sul',
    date: '22 Out 2024',
    type: 'Editorial',
    author: 'Carlos Eduardo Silva',
  },
]
</script>

<template>
  <div class="max-w-container-max mx-auto flex flex-col gap-stack-lg">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-stack-md">
      <PageTitle
        title="Listagem de Posts"
        subtitle="Gerencie as publicações editoriais e notícias do portal."
        :button="{ icon: 'add', label: 'Novo Post' }"
      />
    </div>

    <Table :columns="columns" :actions="true" :rows="rows" />
  </div>
</template>
