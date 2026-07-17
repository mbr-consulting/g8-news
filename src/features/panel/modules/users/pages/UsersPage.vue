<script setup lang="ts">
import { Breadcrumb, PageTitle, Table } from '@/features/panel/components'
import type { TableHeadColumnProps } from '@/features/panel/types'
import { UserColumnType } from '../components'

const columns: TableHeadColumnProps[] = [
  { text: 'Nome', id: 'name' },
  { text: 'Usuário', id: 'username' },
  { text: 'E-mail', id: 'email' },
  { text: 'Tipo', id: 'type' },
]
const users = [
  {
    id: 1,
    name: 'Ana Silva',
    username: 'ana.silva',
    email: 'ana.silva@example.com',
    type: 'admin',
  },
  {
    id: 2,
    name: 'Carlos Roberto',
    username: 'carlos.r',
    email: 'carlos.r@example.com',
    type: 'editor',
  },
  {
    id: 3,
    name: 'Maria Fernandes',
    username: 'm.fernandes',
    email: 'mariana@example.com',
    type: 'author',
  },
]
</script>

<template>
  <Breadcrumb :crumbs="[{ name: 'Usuários', to: { name: 'Users' } }]" />
  <PageTitle
    title="Listagem de Usuários"
    subtitle="Gerencie os usuários do portal."
    :button="{ icon: 'add', label: 'Novo Usuário', route: { name: 'CreateUser' } }"
  />
  <Table :headers="{ columns }" :data="users" actions remove edit view>
    <template #cell(type)="{ row }">
      <UserColumnType :type="row.type" />
    </template>
  </Table>
</template>
