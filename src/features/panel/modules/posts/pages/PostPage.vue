<script setup lang="ts">
import { Table, PageTitle } from '@/features/panel/components'
import type { TableHeadColumnProps } from '@/features/panel/types'
import { ref } from 'vue'
import { PostStatus, PostType } from '../components'

const columns: TableHeadColumnProps[] = [
  { text: 'Título', id: 'title' },
  { text: 'Data de Publicação', id: 'publishedAt' },
  { text: 'Autor', id: 'author' },
  { text: 'Tipo', id: 'type' },
  { text: 'Status', id: 'status' },
]

const posts = ref([
  {
    id: 1,
    title: 'Avanços na infraestrutura urbana de G8 atraem novos investimentos',
    author: 'Redação G8',
    publishedAt: '24 Out 2024, 09:30',
    type: 'news' as const,
    status: 'published' as const,
  },
  {
    id: 2,
    title: 'O impacto das novas diretrizes de construção civil na região sul',
    author: 'Carlos Eduardo Silva',
    publishedAt: '24 Out 2024, 09:30',
    type: 'editorial' as const,
    status: 'draft' as const,
  },
  {
    id: 3,
    title: 'O impacto das novas diretrizes de construção civil na região sul',
    author: 'Carlos Eduardo Silva',
    publishedAt: '24 Out 2024, 09:30',
    type: 'news' as const,
    status: 'pending' as const,
  },
  {
    id: 4,
    title: 'O impacto das novas diretrizes de construção civil na região sul',
    author: 'Carlos Eduardo Silva',
    publishedAt: '24 Out 2024, 09:30',
    type: 'editorial' as const,
    status: 'archived' as const,
  },
])

function handleEdit(row: (typeof posts.value)[number]) {
  console.log('Editando post:', row)
}

function handleRemove(row: (typeof posts.value)[number]) {
  console.log('Removendo post:', row)
}
</script>

<template>
  <PageTitle
    title="Listagem de Posts"
    subtitle="Gerencie as publicações editoriais e notícias do portal."
    :button="{ icon: 'add', label: 'Novo Post', route: { name: 'CreatePost' } }"
  />
  <Table
    :headers="{ columns }"
    :data="posts"
    actions
    remove
    edit
    :onEdit="handleEdit"
    :onRemove="handleRemove"
  >
    <!-- Customizing table cells -->
    <template #cell(title)="{ row }">
      <p
        class="font-headline-sm text-[16px] leading-[24px] text-on-surface font-semibold max-w-sm truncate"
      >
        {{ row.title }}
      </p>
    </template>
    <template #cell(publishedAt)="{ row }">
      <span class="font-body-sm text-body-sm text-on-surface-variant">
        {{ row.publishedAt }}
      </span>
    </template>
    <template #cell(author)="{ row }">
      <span class="font-body-sm text-body-sm text-on-surface">
        {{ row.author }}
      </span>
    </template>
    <template #cell(type)="{ row }">
      <PostType :type="row.type" />
    </template>
    <template #cell(status)="{ row }">
      <PostStatus :type="row.status" />
    </template>
    <!-- Customizing table cells -->
  </Table>
</template>
