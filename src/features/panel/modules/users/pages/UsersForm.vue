<script setup lang="ts">
import {
  PanelBreadcrumb,
  PanelButton,
  PanelCard,
  InputCheckbox,
  InputText,
  PageTitle,
} from '@/features/panel/components'
import TypeUser from '../components/TypeUser.vue'

const breadcrumbItem = [
  {
    name: 'Usuários',
    to: { name: 'Users' },
  },
  {
    name: 'Cadastrar Novo Usuário',
    to: { name: 'CreateUser' },
  },
]

function handleSubmit(event: Event) {
  event.preventDefault()
  // Handle form submission logic here

  console.log('Form submitted')
}
</script>

<template>
  <PanelBreadcrumb :crumbs="breadcrumbItem" />
  <PageTitle
    title="Cadastrar Novo Usuário"
    subtitle="Preencha as informações abaixo para adicionar um novo membro à equipe editorial do G8 News."
    :button="{ icon: 'arrow_back', label: 'Voltar', route: { name: 'Users' } }"
  />

  <div class="mt-10">
    <PanelCard>
      <form class="space-y-stack-md" @submit="handleSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
          <InputText
            type="text"
            name="name"
            label="Nome Completo"
            placeholder="Ex.: Maria Oliveira"
          />
          <InputText type="email" name="email" label="Email" placeholder="Ex.: email@g8news.com" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
          <InputText type="password" name="password" label="Senha" />
          <InputText type="password" name="password_confirmation" label="Confirmar Senha" />
        </div>
        <TypeUser />
        <div class="pt-4">
          <InputCheckbox
            name="notify_user"
            label="Notificar usuário por e-mail com as credenciais de acesso."
          />
        </div>

        <div
          class="pt-8 flex flex-col sm:flex-row items-center justify-end gap-4 border-t border-outline-variant"
        >
          <PanelButton type="button" label="Cancelar" variant="outline" />
          <PanelButton type="submit" label="Salvar Usuário" variant="primary" />
        </div>
      </form>
    </PanelCard>
  </div>
</template>
