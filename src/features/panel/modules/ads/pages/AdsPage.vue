<script setup lang="ts">
import { Breadcrumb, PageTitle, Table } from '@/features/panel/components'
import { AdsColumnStatus, AdsColumnTitle } from '../components'

const columns = [
  { id: 'name', text: 'Nome do Anúncio' },
  { id: 'startDate', text: 'Data Início' },
  { id: 'endDate', text: 'Data Fim' },
  { id: 'location', text: 'Localização' },
]

const rows = [
  {
    name: 'Campanha Verão 2024',
    startDate: '24 Out 2024',
    endDate: '30 Out 2024',
    location: 'Homepage',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    name: 'Lançamento Residencial',
    startDate: '22 Out 2024',
    endDate: '28 Out 2024',
    location: 'Sidebar',
  },
]
</script>

<template>
  <Breadcrumb :crumbs="[{ name: 'Anúncios' }]" />
  <PageTitle
    title="Listagem de Anúncios"
    subtitle="Gerencie os anúncios do portal."
    :button="{ icon: 'add', label: 'Novo Anúncio', route: { name: 'CreateAd' } }"
  />
  <Table :headers="{ columns }" :data="rows" actions edit remove>
    <template #cell(name)="{ row }">
      <AdsColumnTitle :title="row.name" :imageUrl="row.imageUrl" />
    </template>
    <template #cell(startDate)="{ row }">
      <span class="font-body-sm text-body-sm text-on-surface-variant">
        {{ row.startDate }}
      </span>
    </template>
    <template #cell(endDate)="{ row }">
      <span class="font-body-sm text-body-sm text-on-surface-variant">
        {{ row.endDate }}
      </span>
    </template>
    <template #cell(location)="{ row }">
      <AdsColumnStatus :status="row.location" />
    </template>
  </Table>
</template>
