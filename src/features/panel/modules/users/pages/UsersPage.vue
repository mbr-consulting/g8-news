<script setup lang="ts">
import { Breadcrumb, PageTitle } from '@/features/panel/components'
</script>

<template>
  <Breadcrumb :crumbs="[{ name: 'Usuários', to: { name: 'Users' } }]" />
  <div class="max-w-container-max mx-auto flex flex-col gap-stack-lg">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-stack-md">
      <PageTitle
        title="Listagem de Usuários"
        subtitle="Gerencie os usuários do portal."
        :button="{ icon: 'add', label: 'Novo Usuário', route: { name: 'CreateUser' } }"
      />
    </div>
  </div>
</template>
