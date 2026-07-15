<script setup lang="ts">
import { Breadcrumb, PageTitle } from '@/features/panel/components'
</script>

<template>
  <Breadcrumb :crumbs="[{ name: 'Cidades' }]" />
  <PageTitle
    title="Listagem de Cidades"
    subtitle="Gerencie as cidades do portal."
    :button="{ icon: 'add', label: 'Nova Cidade', route: { name: 'CreateCities' } }"
  />
</template>
