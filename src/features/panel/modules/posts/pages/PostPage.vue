<script setup lang="ts">
import PageTitle from '@/features/panel/components/PageTitle.vue'
import { Table } from '@/features/panel/components/Table'
</script>

<template>
  <div class="max-w-container-max mx-auto flex flex-col gap-stack-lg">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-stack-md">
      <PageTitle
        title="Listagem de Posts"
        description="Gerencie as publicações editoriais e notícias do portal."
        :button="{ icon: 'add', label: 'Novo Post' }"
      />
    </div>
    <Table />
    <div
      class="bg-surface-container-lowest rounded-lg border border-outline-variant overflow-hidden shadow-sm"
    >
      <!-- Toolbar / Search (Optional but expected in a list view) -->
      <div
        class="p-4 border-b border-surface-container-high flex gap-4 items-center bg-surface-container-lowest"
      >
        <div class="relative flex-1 max-w-md">
          <span
            class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline"
            >search</span
          >
          <input
            class="w-full pl-10 pr-4 py-2 bg-surface-container-low border-b border-transparent focus:border-primary focus:bg-surface-container-lowest focus:ring-0 outline-none font-body-sm text-body-sm text-on-surface transition-colors placeholder:text-outline"
            placeholder="Buscar posts..."
            type="text"
          />
        </div>
        <button
          class="p-2 text-on-surface-variant hover:bg-surface-container rounded transition-colors flex items-center gap-2 font-label-md text-label-md border border-outline-variant"
        >
          <span class="material-symbols-outlined text-[18px]">filter_list</span>
          Filtros
        </button>
      </div>
      <!-- The Table -->
      <!-- <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-surface-container-low border-b border-surface-container-high">
              <th
                class="py-3 px-4 font-label-md text-label-md text-on-surface-variant tracking-wider uppercase font-semibold"
              >
                Título
              </th>
              <th
                class="py-3 px-4 font-label-md text-label-md text-on-surface-variant tracking-wider uppercase font-semibold"
              >
                Data de Publicação
              </th>
              <th
                class="py-3 px-4 font-label-md text-label-md text-on-surface-variant tracking-wider uppercase font-semibold"
              >
                Tipo
              </th>
              <th
                class="py-3 px-4 font-label-md text-label-md text-on-surface-variant tracking-wider uppercase font-semibold"
              >
                Autor
              </th>
              <th
                class="py-3 px-4 font-label-md text-label-md text-on-surface-variant tracking-wider uppercase font-semibold text-right"
              >
                Ações
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-surface-container-high">
            <tr
              class="hover:bg-surface-container-lowest transition-colors bg-surface-container-lowest"
            >
              <td class="py-4 px-4">
                <p
                  class="font-headline-sm text-[16px] leading-[24px] text-on-surface font-semibold max-w-md truncate"
                >
                  Avanços na infraestrutura urbana de G8 atraem novos investimentos
                </p>
              </td>
              <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">
                24 Out 2024, 09:30
              </td>
              <td class="py-4 px-4">
                <span
                  class="inline-flex items-center px-2 py-1 rounded bg-secondary-container/20 text-primary font-label-md text-[10px] tracking-wide uppercase font-bold border border-secondary-container/30"
                  >Notícia</span
                >
              </td>
              <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface">Redação G8</td>
              <td class="py-4 px-4 text-right">
                <button
                  class="text-on-surface-variant hover:text-primary transition-colors p-1"
                  title="Editar"
                >
                  <span class="material-symbols-outlined text-[20px]">edit</span>
                </button>
                <button
                  class="text-on-surface-variant hover:text-error transition-colors p-1 ml-2"
                  title="Excluir"
                >
                  <span class="material-symbols-outlined text-[20px]">delete</span>
                </button>
              </td>
            </tr>
            <tr
              class="hover:bg-surface-container-lowest transition-colors bg-surface-container-lowest"
            >
              <td class="py-4 px-4">
                <p
                  class="font-headline-sm text-[16px] leading-[24px] text-on-surface font-semibold max-w-md truncate"
                >
                  O impacto das novas diretrizes de construção civil na região sul
                </p>
              </td>
              <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">
                22 Out 2024, 14:15
              </td>
              <td class="py-4 px-4">
                <span
                  class="inline-flex items-center px-2 py-1 rounded bg-surface-container-high text-on-surface font-label-md text-[10px] tracking-wide uppercase font-bold border border-outline-variant/50"
                  >Editorial</span
                >
              </td>
              <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface">
                Carlos Eduardo Silva
              </td>
              <td class="py-4 px-4 text-right">
                <button
                  class="text-on-surface-variant hover:text-primary transition-colors p-1"
                  title="Editar"
                >
                  <span class="material-symbols-outlined text-[20px]">edit</span>
                </button>
                <button
                  class="text-on-surface-variant hover:text-error transition-colors p-1 ml-2"
                  title="Excluir"
                >
                  <span class="material-symbols-outlined text-[20px]">delete</span>
                </button>
              </td>
            </tr>
            <tr
              class="hover:bg-surface-container-lowest transition-colors bg-surface-container-lowest"
            >
              <td class="py-4 px-4">
                <p
                  class="font-headline-sm text-[16px] leading-[24px] text-on-surface font-semibold max-w-md truncate"
                >
                  G8 Construções anuncia novo complexo sustentável no centro da cidade
                </p>
              </td>
              <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">
                20 Out 2024, 10:00
              </td>
              <td class="py-4 px-4">
                <span
                  class="inline-flex items-center px-2 py-1 rounded bg-secondary-container/20 text-primary font-label-md text-[10px] tracking-wide uppercase font-bold border border-secondary-container/30"
                  >Notícia</span
                >
              </td>
              <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface">Marina Costa</td>
              <td class="py-4 px-4 text-right">
                <button
                  class="text-on-surface-variant hover:text-primary transition-colors p-1"
                  title="Editar"
                >
                  <span class="material-symbols-outlined text-[20px]">edit</span>
                </button>
                <button
                  class="text-on-surface-variant hover:text-error transition-colors p-1 ml-2"
                  title="Excluir"
                >
                  <span class="material-symbols-outlined text-[20px]">delete</span>
                </button>
              </td>
            </tr>
            <tr
              class="hover:bg-surface-container-lowest transition-colors bg-surface-container-lowest"
            >
              <td class="py-4 px-4">
                <p
                  class="font-headline-sm text-[16px] leading-[24px] text-on-surface font-semibold max-w-md truncate"
                >
                  Análise: O futuro do mercado imobiliário comercial pós-pandemia
                </p>
              </td>
              <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">
                18 Out 2024, 16:45
              </td>
              <td class="py-4 px-4">
                <span
                  class="inline-flex items-center px-2 py-1 rounded bg-surface-container-high text-on-surface font-label-md text-[10px] tracking-wide uppercase font-bold border border-outline-variant/50"
                  >Editorial</span
                >
              </td>
              <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface">Redação G8</td>
              <td class="py-4 px-4 text-right">
                <button
                  class="text-on-surface-variant hover:text-primary transition-colors p-1"
                  title="Editar"
                >
                  <span class="material-symbols-outlined text-[20px]">edit</span>
                </button>
                <button
                  class="text-on-surface-variant hover:text-error transition-colors p-1 ml-2"
                  title="Excluir"
                >
                  <span class="material-symbols-outlined text-[20px]">delete</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div> -->
      <!-- Pagination (Static representation) -->
      <div
        class="p-4 border-t border-surface-container-high bg-surface-container-lowest flex items-center justify-between"
      >
        <span class="font-body-sm text-body-sm text-on-surface-variant"
          >Mostrando 1 a 4 de 24 registros</span
        >
        <div class="flex items-center gap-1">
          <button
            class="p-1 rounded text-outline hover:bg-surface-container hover:text-on-surface transition-colors"
            disabled=""
          >
            <span class="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>
          <button
            class="w-8 h-8 flex items-center justify-center rounded bg-primary-container text-on-primary-container font-label-md text-label-md font-bold"
          >
            1
          </button>
          <button
            class="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container transition-colors font-label-md text-label-md"
          >
            2
          </button>
          <button
            class="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container transition-colors font-label-md text-label-md"
          >
            3
          </button>
          <span class="text-on-surface-variant px-1">...</span>
          <button
            class="p-1 rounded text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
          >
            <span class="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
