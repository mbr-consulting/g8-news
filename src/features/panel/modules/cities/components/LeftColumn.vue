<script setup lang="ts">
import {
  PanelButton,
  PanelCard,
  InputFile,
  InputText,
  PanelTitle,
} from '@/features/panel/components'
</script>

<template>
  <div class="md:col-span-8 flex flex-col gap-stack-lg">
    <PanelCard>
      <PanelTitle title="Vínculo de Cidade" icon="location_city" />
      <div class="mt-2">
        <InputFile
          label="Brasão da Cidade"
          name="city_coat_arms"
          title="Fazer upload do Brasão"
          subtitle="PNG, JPG, GIF até 5MB"
        />
      </div>
      <div class="w-full flex flex-row gap-stack-md mt-7 mb-5">
        <InputText
          type="text"
          label="Nome da cidade"
          name="city_name"
          placeholder="Ex.: São Paulo"
        />
        <InputText
          type="text"
          label="Subtítulo (Opcional)"
          name="city_subtitle"
          placeholder="A Terra da Garoa"
        />
      </div>
      <div class="w-full flex flex-row gap-stack-md mt-5">
        <InputText
          type="text"
          label="Link da Prefeitura"
          name="city_link"
          placeholder="Ex.: https://www.saopaulo.sp.gov.br"
        />
        <InputText
          type="text"
          label="Link da Câmara Municipal"
          name="city_council_link"
          placeholder="Ex.: https://www.saopaulo.sp.leg.br"
        />
      </div>
      <div class="w-full flex flex-row justify-end gap-stack-md mt-5">
        <PanelButton type="button" variant="outline" label="Cancelar" />
        <PanelButton type="button" variant="primary" label="Salvar Cidade" icon="save" />
      </div>
    </PanelCard>
  </div>
</template>
