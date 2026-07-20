<script setup lang="ts">
import { RadioType } from '.'
</script>

<template>
  <div class="pt-4">
    <label class="block font-label-lg text-label-lg text-primary mb-4">Tipo de Usuário</label>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
      <RadioType
        icon="admin_panel_settings"
        title="Admin"
        description="Acesso total ao sistema e configurações."
        value="admin"
      />

      <RadioType
        icon="edit_note"
        title="Editor"
        description="Gerencia posts, categorias e autores."
        value="editor"
      />

      <RadioType
        icon="history_edu"
        title="Autor"
        description="Cria e edita apenas seus próprios artigos."
        value="author"
      />
    </div>
  </div>
</template>
