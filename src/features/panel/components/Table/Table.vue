<script lang="ts" setup>
import TableHead from './TableHead.vue'
</script>
<template>
  <div
    class="bg-surface-container-lowest rounded-lg border border-outline-variant overflow-hidden shadow-sm"
  >
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <TableHead :columns="['Título', 'Data de Publicação', 'Tipo', 'Autor']" :actions="true" />
        <tbody class="divide-y divide-surface-container-high">
          <!-- Row 1 -->
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
          <!-- Row 2 -->
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
          <!-- Row 3 -->
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
          <!-- Row 4 -->
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
    </div>
  </div>
</template>
