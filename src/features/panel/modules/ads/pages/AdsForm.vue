<script setup lang="ts">
import {
  PanelBreadcrumb,
  PanelButton,
  PanelCard,
  InputDate,
  InputFile,
  InputSelect,
  InputText,
  PageTitle,
  PanelTitle,
} from '@/features/panel/components'

const adsLocations = [
  { label: 'Página Inicial - Banner Superior', value: 'home_banner_top' },
  { label: 'Página Inicial - Barra Lateral', value: 'home_sidebar' },
  { label: 'Artigos - Meio do Texto', value: 'article_inline' },
  { label: 'Artigos - Barra Lateral', value: 'article_sidebar' },
  { label: 'Cidades - Hub Principal', value: 'cities_hub' },
]
</script>

<template>
  <PanelBreadcrumb
    :crumbs="[{ name: 'Anúncios', to: { name: 'Ads' } }, { name: 'Criar Novo Anúncio' }]"
  />
  <PageTitle
    title="Criar Novo Anúncio"
    subtitle="Preencha os dados abaixo para configurar uma nova campanha publicitária. Verifique as dimensões recomendadas antes de realizar o upload."
    :button="{ icon: 'arrow_back', label: 'Voltar', route: { name: 'Ads' } }"
  />

  <PanelCard>
    <PanelTitle title="Informações Gerais" />
    <form class="flex flex-col gap-stack-lg mt-5">
      <InputText type="text" name="title" label="Título do Anúncio" />

      <PanelTitle title="Mídia" />
      <InputFile
        label="Imagem do Anúncio"
        name="ad-image"
        title="Arraste e solte sua imagem aqui, ou clique para procurar"
        subtitle="JPG, PNG ou GIF. Tamanho máximo: 5MB."
      />

      <PanelTitle title="Veiculação" />
      <div class="flex items-center gap-4 w-full">
        <InputDate label="Data do Inicio" name="start_at" />
        <InputDate label="Data do Término" name="end_at" />
        <InputSelect label="Localização do Anúncio" name="ad_location" :options="adsLocations" />
      </div>

      <InputText
        type="text"
        name="destination_link"
        label="Link de Destino"
        placeholder="https://anunciante.com/promocao"
      />

      <div class="flex justify-end gap-4">
        <PanelButton variant="outline" label="Cancelar" type="button" />
        <PanelButton variant="primary" label="Salvar Anúncio" type="submit" icon="save" />
      </div>
    </form>
  </PanelCard>
</template>
