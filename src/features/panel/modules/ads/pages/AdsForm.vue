<template>
  <div class="bg-surface border border-outline-variant rounded-lg p-8 shadow-sm">
    <form class="flex flex-col gap-stack-lg">
      <!-- Section: Basic Info -->
      <div class="flex flex-col gap-stack-md">
        <h3
          class="font-headline-sm text-headline-sm text-primary border-b border-outline-variant pb-2"
        >
          Informações Gerais
        </h3>
        <div class="flex flex-col gap-2">
          <label class="font-label-lg text-label-lg text-on-surface" for="nome"
            >Nome do Anúncio *</label
          >
          <input
            class="w-full p-3 bg-surface border border-outline-variant rounded-md font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            id="nome"
            name="nome"
            placeholder="Ex: Campanha Institucional 2024"
            required=""
            type="text"
          />
        </div>
      </div>
      <!-- Section: Media -->
      <div class="flex flex-col gap-stack-md">
        <h3
          class="font-headline-sm text-headline-sm text-primary border-b border-outline-variant pb-2"
        >
          Mídia
        </h3>
        <div class="flex flex-col gap-2">
          <label class="font-label-lg text-label-lg text-on-surface">Imagem do Anúncio *</label>
          <div
            class="border-2 border-dashed border-outline-variant rounded-lg p-8 flex flex-col items-center justify-center bg-surface-container-lowest hover:bg-surface-container-low transition-colors cursor-pointer group"
          >
            <div
              class="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4 group-hover:bg-primary-container transition-colors"
            >
              <span
                class="material-symbols-outlined text-3xl text-on-surface-variant group-hover:text-on-primary-container"
                >cloud_upload</span
              >
            </div>
            <p class="font-body-md text-body-md text-on-surface text-center mb-1">
              Arraste e solte sua imagem aqui, ou clique para procurar
            </p>
            <p class="font-body-sm text-body-sm text-on-surface-variant text-center">
              JPG, PNG ou GIF. Tamanho máximo: 5MB.
            </p>
            <input accept="image/*" class="hidden" id="imagem" name="imagem" type="file" />
          </div>
        </div>
      </div>
      <!-- Section: Schedule & Location -->
      <div class="flex flex-col gap-stack-md">
        <h3
          class="font-headline-sm text-headline-sm text-primary border-b border-outline-variant pb-2"
        >
          Veiculação
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div class="flex flex-col gap-2">
            <label class="font-label-lg text-label-lg text-on-surface" for="data-inicio"
              >Data Início *</label
            >
            <div class="relative">
              <input
                class="w-full p-3 pl-10 bg-surface border border-outline-variant rounded-md font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none"
                id="data-inicio"
                name="data-inicio"
                required=""
                type="date"
              />
              <span
                class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none"
                >calendar_month</span
              >
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label class="font-label-lg text-label-lg text-on-surface" for="data-fim"
              >Data Fim *</label
            >
            <div class="relative">
              <input
                class="w-full p-3 pl-10 bg-surface border border-outline-variant rounded-md font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none"
                id="data-fim"
                name="data-fim"
                required=""
                type="date"
              />
              <span
                class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none"
                >calendar_month</span
              >
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2 mt-4">
          <label class="font-label-lg text-label-lg text-on-surface" for="localizacao"
            >Localização *</label
          >
          <div class="relative">
            <select
              class="w-full p-3 bg-surface border border-outline-variant rounded-md font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
              id="localizacao"
              name="localizacao"
              required=""
            >
              <option disabled="" selected="" value="">
                Selecione onde o anúncio será exibido
              </option>
              <option value="home_banner_top">Página Inicial - Banner Superior</option>
              <option value="home_sidebar">Página Inicial - Barra Lateral</option>
              <option value="article_inline">Artigos - Meio do Texto</option>
              <option value="article_sidebar">Artigos - Barra Lateral</option>
              <option value="cities_hub">Cidades - Hub Principal</option>
            </select>
            <span
              class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none"
              >arrow_drop_down</span
            >
          </div>
        </div>
      </div>
      <!-- Form Actions -->
      <div class="flex justify-end gap-4 mt-4 pt-6 border-t border-outline-variant">
        <button
          class="px-6 py-2 rounded border border-outline-variant font-label-lg text-label-lg text-on-surface hover:bg-surface-container-high transition-colors"
          type="button"
        >
          Cancelar
        </button>
        <button
          class="px-6 py-2 rounded bg-primary text-on-primary font-label-lg text-label-lg hover:opacity-90 transition-opacity flex items-center gap-2 shadow-sm"
          type="submit"
        >
          <span class="material-symbols-outlined text-[20px]">save</span>
          Salvar Anúncio
        </button>
      </div>
    </form>
  </div>
</template>
