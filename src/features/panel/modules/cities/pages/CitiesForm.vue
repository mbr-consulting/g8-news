<script setup lang="ts">
import { Breadcrumb, PageTitle } from '@/features/panel/components'
import { LeftColumn, RightColumn } from '../components'
</script>

<template>
  <Breadcrumb :crumbs="[{ name: 'Cidades', to: { name: 'Cities' } }, { name: 'Nova Cidade' }]" />
  <PageTitle
    title=" Configuração de Cidades e Anunciantes"
    subtitle="Gerencie os vínculos de cidades e o diretório de anunciantes locais."
    :button="{ icon: 'arrow_back', label: 'Voltar', route: { name: 'Cities' } }"
  />

  <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
    <LeftColumn />
    <RightColumn />
  </div>
</template>
<style scoped>
input:focus,
textarea:focus,
select:focus {
  outline: none !important;
  box-shadow: none !important;
  border-bottom-color: #012d1d !important;
}
</style>
