<script setup lang="ts">
import { PageTitle } from '@/features/panel/components'
</script>

<template>
  <div class="max-w-container-max mx-auto flex flex-col gap-stack-lg">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-stack-md">
      <PageTitle
        title="Listagem de Cidades"
        subtitle="Gerencie as cidades do portal."
        :button="{ icon: 'add', label: 'Nova Cidade', route: { name: 'CreateCities' } }"
      />
    </div>
  </div>
</template>
