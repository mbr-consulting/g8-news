<script setup lang="ts">
import { Breadcrumb, PageTitle } from '@/features/panel/components'
import { LeftColumn, RightColumn } from '../components'
</script>

<template>
  <Breadcrumb
    :crumbs="[{ name: 'Artigos', to: { name: 'Posts' } }, { name: 'Criar novo artigo' }]"
  />
  <PageTitle
    title="Criar novo artigo"
    subtitle="Preencha os campos abaixo para criar um novo artigo"
    :button="{ icon: 'arrow_back', label: 'Voltar', route: { name: 'Posts' } }"
  />
  <div class="flex-1 overflow-y-auto bg-background mt-5">
    <form class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
      <LeftColumn />
      <RightColumn />
    </form>
  </div>
</template>
