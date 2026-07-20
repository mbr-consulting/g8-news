<script setup lang="ts">
import { Breadcrumb, PageTitle, Table } from '@/features/panel/components'
import type { TableHeadColumnProps } from '@/shared/types'

const columns: TableHeadColumnProps[] = [{ text: 'Nome', id: 'name' }]
const cities = [
  {
    id: 1,
    name: 'Vitória',
  },
  {
    id: 2,
    name: 'Vila Velha',
  },
]
</script>

<template>
  <Breadcrumb :crumbs="[{ name: 'Cidades' }]" />
  <PageTitle
    title="Listagem de Cidades"
    subtitle="Gerencie as cidades do portal."
    :button="{ icon: 'add', label: 'Nova Cidade', route: { name: 'CreateCities' } }"
  />
  <Table :headers="{ columns }" :data="cities" actions remove></Table>
</template>
