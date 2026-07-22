<script setup lang="ts">
import { PanelButton, PanelCard, InputText, InputTextarea } from '@/features/panel/components'
</script>

<template>
  <div class="md:col-span-8 flex flex-col gap-stack-lg">
    <PanelCard>
      <div class="flex flex-col gap-stack-md">
        <InputText
          type="text"
          label="Título da Publicação"
          name="title"
          placeholder="Insira um titulo chamativo..."
        />
        <InputText
          type="text"
          label="Subtítulo (Opcional)"
          name="subtitle"
          placeholder="Complemente a informação do título..."
        />
        <InputTextarea
          label="Texto"
          name="text"
          placeholder="Comece a escrever sua matéria aqui..."
          :rows="12"
        />
      </div>
      <div class="flex justify-end gap-4 mt-6">
        <PanelButton variant="primary" type="submit" label="Publicar Agora" />
        <PanelButton variant="outline" type="button" label="Salvar Rascunho" />
      </div>
    </PanelCard>
  </div>
</template>
