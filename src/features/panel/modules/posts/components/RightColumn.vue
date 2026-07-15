<script setup lang="ts">
import {
  Card,
  InputDate,
  InputFile,
  InputSelect,
  InputTag,
  Title,
} from '@/features/panel/components'
</script>

<template>
  <div class="md:col-span-4 flex flex-col gap-stack-lg">
    <Card>
      <Title title="Configurações de Publicação" />
      <div class="flex flex-col gap-stack-md">
        <InputSelect
          label="Tipo de Postagem"
          name="tipo-postagem"
          :options="[
            { value: 'publicacao', label: 'Publicação Padrão' },
            { value: 'editorial', label: 'Editorial / Opinião' },
          ]"
        />
        <InputDate label="Data de Publicação" name="data-publicacao" />
        <InputTag />
      </div>
    </Card>
    <Card>
      <Title title="Imagem de Destaque" />
      <InputFile
        name="featured-image"
        title="Clique para fazer upload"
        subtitle="PNG, JPG ou WEBP (Max 5MB)"
      />
    </Card>
  </div>
</template>
