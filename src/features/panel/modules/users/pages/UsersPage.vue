<script setup lang="ts">
import { PageTitle } from '@/features/panel/components'
</script>

<template>
  <div class="max-w-container-max mx-auto flex flex-col gap-stack-lg">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-stack-md">
      <PageTitle
        title="Listagem de Usuários"
        subtitle="Gerencie os usuários do portal."
        :button="{ icon: 'add', label: 'Novo Usuário' }"
      />
    </div>
  </div>
</template>
