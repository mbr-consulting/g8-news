<script setup lang="ts">
import { PageTitle } from '@/features/panel/components'
import { Table } from '@/features/panel/components/Table'

const columns = ['Nome do Anúncio', 'Data Início', 'Data Fim', 'Localização']
const rows = [
  {
    name: 'Campanha Verão 2024',
    startDate: '24 Out 2024',
    endDate: '30 Out 2024',
    location: 'Homepage',
  },
  {
    name: 'Lançamento Residencial',
    startDate: '22 Out 2024',
    endDate: '28 Out 2024',
    location: 'Sidebar',
  },
]
</script>

<template>
  <div class="max-w-container-max mx-auto flex flex-col gap-stack-lg">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-stack-md">
      <PageTitle
        title="Listagem de Anúncios"
        subtitle="Gerencie os anúncios do portal."
        :button="{ icon: 'add', label: 'Novo Anúncio' }"
      />
    </div>

    <Table :columns="columns" :rows="rows" />
  </div>

  <!-- <div class="flex-1 overflow-y-auto p-margin-x">
    <div class="max-w-container-max mx-auto"> -->
  <!-- <div class="flex border-b border-outline-variant mb-stack-lg" role="tablist">
    
  <!-- <div class="relative">
        <div
          aria-labelledby="tab-listagem"
          class="block animate-fade-in"
          id="panel-listagem"
          role="tabpanel"
        >
          <div
            class="bg-surface border border-outline-variant rounded-lg overflow-hidden shadow-sm"
          >
            <div
              class="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low"
            >
              <div class="relative w-64">
                <span
                  class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
                  >search</span
                >
                <input
                  class="w-full pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded-md font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Buscar anúncios..."
                  type="text"
                />
              </div>
              <button
                class="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-md font-label-lg text-label-lg hover:bg-surface-container-high transition-colors text-on-surface"
              >
                <span class="material-symbols-outlined text-[18px]">filter_list</span>
                Filtrar
              </button>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-surface-container-lowest border-b border-outline-variant">
                    <th
                      class="py-3 px-4 font-label-lg text-label-lg text-on-surface-variant whitespace-nowrap"
                    >
                      Nome do Anúncio
                    </th>
                    <th
                      class="py-3 px-4 font-label-lg text-label-lg text-on-surface-variant whitespace-nowrap"
                    >
                      Data Início
                    </th>
                    <th
                      class="py-3 px-4 font-label-lg text-label-lg text-on-surface-variant whitespace-nowrap"
                    >
                      Data Fim
                    </th>
                    <th
                      class="py-3 px-4 font-label-lg text-label-lg text-on-surface-variant whitespace-nowrap"
                    >
                      Localização
                    </th>
                    <th
                      class="py-3 px-4 font-label-lg text-label-lg text-on-surface-variant whitespace-nowrap text-right"
                    >
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody class="font-body-md text-body-md text-on-surface">
                  <tr
                    class="border-b border-outline-variant hover:bg-surface-container-low transition-colors"
                  >
                    <td class="py-4 px-4 font-medium flex items-center gap-3">
                      <div
                        class="w-12 h-12 rounded bg-surface-container flex items-center justify-center overflow-hidden border border-outline-variant flex-shrink-0"
                      >
                        <span class="material-symbols-outlined text-on-surface-variant">image</span>
                      </div>
                      Campanha Verão 2024
                    </td>
                    <td class="py-4 px-4 text-on-surface-variant">01/12/2023</td>
                    <td class="py-4 px-4 text-on-surface-variant">28/02/2024</td>
                    <td class="py-4 px-4">
                      <span
                        class="inline-flex items-center px-2 py-1 rounded bg-secondary-container text-on-secondary-container font-label-md text-label-md"
                      >
                        Homepage Banner
                      </span>
                    </td>
                    <td class="py-4 px-4 text-right">
                      <button
                        class="p-2 text-on-surface-variant hover:text-primary transition-colors"
                        title="Editar"
                      >
                        <span class="material-symbols-outlined">edit</span>
                      </button>
                      <button
                        class="p-2 text-on-surface-variant hover:text-error transition-colors"
                        title="Excluir"
                      >
                        <span class="material-symbols-outlined">delete</span>
                      </button>
                    </td>
                  </tr>
                  <tr
                    class="border-b border-outline-variant hover:bg-surface-container-low transition-colors"
                  >
                    <td class="py-4 px-4 font-medium flex items-center gap-3">
                      <div
                        class="w-12 h-12 rounded bg-surface-container flex items-center justify-center overflow-hidden border border-outline-variant flex-shrink-0"
                      >
                        <span class="material-symbols-outlined text-on-surface-variant">image</span>
                      </div>
                      Lançamento Residencial
                    </td>
                    <td class="py-4 px-4 text-on-surface-variant">15/01/2024</td>
                    <td class="py-4 px-4 text-on-surface-variant">15/03/2024</td>
                    <td class="py-4 px-4">
                      <span
                        class="inline-flex items-center px-2 py-1 rounded bg-surface-container-high text-on-surface font-label-md text-label-md"
                      >
                        Sidebar Artigos
                      </span>
                    </td>
                    <td class="py-4 px-4 text-right">
                      <button
                        class="p-2 text-on-surface-variant hover:text-primary transition-colors"
                        title="Editar"
                      >
                        <span class="material-symbols-outlined">edit</span>
                      </button>
                      <button
                        class="p-2 text-on-surface-variant hover:text-error transition-colors"
                        title="Excluir"
                      >
                        <span class="material-symbols-outlined">delete</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="p-4 border-t border-outline-variant flex items-center justify-between bg-surface-container-low"
            >
              <span class="font-body-sm text-body-sm text-on-surface-variant"
                >Mostrando 1 a 2 de 24 resultados</span
              >
              <div class="flex gap-1">
                <button
                  class="w-8 h-8 flex items-center justify-center rounded border border-outline-variant bg-surface text-on-surface-variant disabled:opacity-50"
                  disabled=""
                >
                  <span class="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                <button
                  class="w-8 h-8 flex items-center justify-center rounded border border-primary bg-primary text-on-primary font-label-md"
                >
                  1
                </button>
                <button
                  class="w-8 h-8 flex items-center justify-center rounded border border-outline-variant bg-surface text-on-surface-variant hover:bg-surface-container-high font-label-md"
                >
                  2
                </button>
                <button
                  class="w-8 h-8 flex items-center justify-center rounded border border-outline-variant bg-surface text-on-surface-variant hover:bg-surface-container-high"
                >
                  <span class="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-labelledby="tab-criacao"
          class="hidden-panel animate-fade-in"
          id="panel-criacao"
          role="tabpanel"
        >
          <div class="bg-surface border border-outline-variant rounded-lg p-8 shadow-sm max-w-4xl">
            <form class="flex flex-col gap-stack-lg">
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
              <div class="flex flex-col gap-stack-md">
                <h3
                  class="font-headline-sm text-headline-sm text-primary border-b border-outline-variant pb-2"
                >
                  Mídia
                </h3>
                <div class="flex flex-col gap-2">
                  <label class="font-label-lg text-label-lg text-on-surface"
                    >Imagem do Anúncio *</label
                  >
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
        </div>
      </div> -->
  <!-- </div>
  </div> -->
</template>
