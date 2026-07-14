<script setup lang="ts">
import { Breadcrumb, PageTitle } from '@/features/panel/components'

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
</script>

<template>
  <Breadcrumb :crumbs="breadcrumbItem" />
  <div class="max-w-container-max mx-auto flex flex-col gap-stack-lg">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-stack-md">
      <PageTitle
        title="Cadastrar Novo Usuário"
        subtitle="Preencha as informações abaixo para adicionar um novo membro à equipe editorial do G8 News."
        :button="{ icon: 'arrow_back', label: 'Voltar', route: { name: 'Users' } }"
      />
    </div>
  </div>
    <div class="bg-surface-container-lowest border border-outline-variant rounded-lg p-stack-lg">
      <form class="space-y-stack-md">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
          <div>
            <label class="block font-label-lg text-label-lg text-primary mb-2">Nome Completo</label>
            <input
              class="input-field form-focus-ring"
              placeholder="Ex: Maria Oliveira"
              type="text"
            />
          </div>
          <div>
            <label class="block font-label-lg text-label-lg text-primary mb-2"
              >Nome de Usuário</label
            >
            <input class="input-field form-focus-ring" placeholder="Ex: moliveira_g8" type="text" />
          </div>
        </div>
        <div>
          <label class="block font-label-lg text-label-lg text-primary mb-2">Email</label>
          <input class="input-field form-focus-ring" placeholder="email@g8news.com" type="email" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
          <div>
            <label class="block font-label-lg text-label-lg text-primary mb-2">Senha</label>
            <input class="input-field form-focus-ring" placeholder="••••••••" type="password" />
          </div>
          <div>
            <label class="block font-label-lg text-label-lg text-primary mb-2"
              >Confirmar Senha</label
            >
            <input class="input-field form-focus-ring" placeholder="••••••••" type="password" />
          </div>
        </div>
        <div class="pt-4">
          <label class="block font-label-lg text-label-lg text-primary mb-4">Tipo de Usuário</label>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
            <label
              class="relative flex flex-col p-4 border border-outline-variant rounded-lg cursor-pointer hover:border-primary transition-colors group"
            >
              <input class="sr-only peer" name="role" type="radio" value="admin" />
              <div class="flex justify-between items-center mb-2">
                <span class="material-symbols-outlined text-primary">admin_panel_settings</span>
                <div
                  class="w-4 h-4 rounded-full border-2 border-outline-variant peer-checked:border-primary peer-checked:bg-primary transition-all"
                ></div>
              </div>
              <span class="font-label-lg text-label-lg text-primary">Admin</span>
              <span class="text-body-sm text-label-md text-on-surface-variant mt-1"
                >Acesso total ao sistema e configurações.</span
              >
              <div
                class="absolute inset-0 border-2 border-primary opacity-0 peer-checked:opacity-100 rounded-lg pointer-events-none"
              ></div>
            </label>
            <label
              class="relative flex flex-col p-4 border border-outline-variant rounded-lg cursor-pointer hover:border-primary transition-colors group"
            >
              <input checked="" class="sr-only peer" name="role" type="radio" value="editor" />
              <div class="flex justify-between items-center mb-2">
                <span class="material-symbols-outlined text-primary">edit_note</span>
                <div
                  class="w-4 h-4 rounded-full border-2 border-outline-variant peer-checked:border-primary peer-checked:bg-primary transition-all"
                ></div>
              </div>
              <span class="font-label-lg text-label-lg text-primary">Editor</span>
              <span class="text-body-sm text-label-md text-on-surface-variant mt-1"
                >Gerencia posts, categorias e autores.</span
              >
              <div
                class="absolute inset-0 border-2 border-primary opacity-0 peer-checked:opacity-100 rounded-lg pointer-events-none"
              ></div>
            </label>
            <label
              class="relative flex flex-col p-4 border border-outline-variant rounded-lg cursor-pointer hover:border-primary transition-colors group"
            >
              <input class="sr-only peer" name="role" type="radio" value="author" />
              <div class="flex justify-between items-center mb-2">
                <span class="material-symbols-outlined text-primary">history_edu</span>
                <div
                  class="w-4 h-4 rounded-full border-2 border-outline-variant peer-checked:border-primary peer-checked:bg-primary transition-all"
                ></div>
              </div>
              <span class="font-label-lg text-label-lg text-primary">Autor</span>
              <span class="text-body-sm text-label-md text-on-surface-variant mt-1"
                >Cria e edita apenas seus próprios artigos.</span
              >
              <div
                class="absolute inset-0 border-2 border-primary opacity-0 peer-checked:opacity-100 rounded-lg pointer-events-none"
              ></div>
            </label>
          </div>
        </div>
        <div class="pt-4">
          <label class="flex items-center gap-3 cursor-pointer group">
            <div class="relative w-5 h-5 flex items-center justify-center">
              <input
                class="peer appearance-none w-5 h-5 border border-outline-variant rounded bg-surface-container-low checked:bg-primary checked:border-primary transition-all"
                type="checkbox"
              />
              <span
                class="material-symbols-outlined text-white text-[16px] absolute scale-0 peer-checked:scale-100 transition-transform"
                >check</span
              >
            </div>
            <span class="font-body-sm text-body-sm text-on-surface-variant"
              >Notificar usuário por e-mail com as credenciais de acesso.</span
            >
          </label>
        </div>
        <div
          class="pt-8 flex flex-col sm:flex-row items-center justify-end gap-4 border-t border-outline-variant"
        >
          <button
            class="w-full sm:w-auto px-8 py-3 border border-primary text-primary font-label-lg text-label-lg rounded-lg hover:bg-surface-container-low transition-all"
            type="button"
          >
            Cancelar
          </button>
          <button
            class="w-full sm:w-auto px-8 py-3 bg-primary text-white font-label-lg text-label-lg rounded-lg hover:bg-opacity-90 shadow-md transition-all active:scale-95"
            type="submit"
          >
            Salvar Usuário
          </button>
        </div>
      </form>
    </div>
    <div class="mt-stack-lg grid grid-cols-1 md:grid-cols-3 gap-stack-md">
      <div class="p-4 bg-surface-container border-l-4 border-secondary rounded-r-lg">
        <div class="flex items-center gap-2 text-secondary mb-1">
          <span class="material-symbols-outlined text-[20px]">info</span>
          <span class="font-label-lg text-label-lg uppercase">Dica</span>
        </div>
        <p class="text-body-sm text-on-surface-variant">
          Senhas devem conter ao menos 8 caracteres, incluindo um número e um símbolo.
        </p>
      </div>
      <div
        class="md:col-span-2 relative overflow-hidden rounded-lg h-32 border border-outline-variant flex items-center px-6"
      >
        <div class="relative z-10">
          <h4 class="font-headline-sm text-headline-sm text-primary">
            Segurança em Primeiro Lugar
          </h4>
          <p class="text-body-sm text-on-surface-variant max-w-md">
            Todos os novos acessos são registrados e auditados para garantir a integridade
            editorial.
          </p>
        </div>
      </div>
    </div>
</template>

<style scoped>
.form-focus-ring:focus {
  outline: none;
  border-bottom: 2px solid #012d1d;
  background-color: #ffffff;
}
/* Custom Input Styling to match Brand Aesthetic */
.input-field {
  background-color: #f3f4f5;
  border: none;
  border-bottom: 1px solid #c1c8c2;
  padding: 12px 16px;
  width: 100%;
  transition: all 0.2s ease-in-out;
  font-family: 'Work Sans', sans-serif;
}
</style>
