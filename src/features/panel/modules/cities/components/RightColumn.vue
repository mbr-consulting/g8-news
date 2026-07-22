<script setup lang="ts">
import {
  PanelCard,
  InputFile,
  InputText,
  InputSelect,
  PanelTitle,
  PanelButton,
} from '@/features/panel/components'
</script>

<template>
  <div class="md:col-span-4 flex flex-col gap-stack-lg">
    <PanelCard>
      <PanelTitle title="Novo Anunciante" icon="storefront" />
      <div>
        <InputFile
          name=""
          label="Imagem/Logo Anunciante"
          title="Upload do Logo do Anunciante"
          subtitle="PNG, JPG, GIF até 5MB"
        />
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <InputText
          label="Nome do Anunciante"
          name="ads_name"
          type="text"
          placeholder="Nome da empresa ou serviço"
        />
        <InputSelect label="Categoria" name="ads_category" />
        <InputSelect label="Cidade" name="ads_city" />
      </div>
      <div class="flex justify-center mt-stack-lg">
        <PanelButton type="button" variant="primary" label="Adicionar Anunciante" icon="add" />
      </div>
    </PanelCard>
  </div>
</template>
