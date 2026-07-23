<template>
  <section>
    <h2
      class="font-headline-sm text-headline-sm text-on-surface mb-stack-md border-b border-outline-variant pb-2"
    >
      Últimos Artigos
    </h2>
    <div class="bg-surface rounded border border-outline-variant overflow-hidden">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-surface-container-low border-b border-outline-variant">
            <th class="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase">
              Título
            </th>
            <th class="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase">
              Categoria
            </th>
            <th class="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase">
              Data
            </th>
            <th
              class="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase text-right"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-outline-variant">
          <tr class="hover:bg-surface-container-low transition-colors">
            <td class="py-4 px-4">
              <p
                class="font-headline-sm text-[16px] leading-tight text-on-surface font-semibold line-clamp-1"
              >
                Eleições 2024: Novo panorama político na região sul
              </p>
            </td>
            <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">Política</td>
            <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">Hoje, 09:30</td>
            <td class="py-4 px-4 text-right">
              <span
                class="inline-block px-2 py-1 bg-tertiary-fixed-dim text-on-tertiary-fixed-variant font-label-md rounded-full text-[10px]"
                >Publicado</span
              >
            </td>
          </tr>
          <tr class="hover:bg-surface-container-low transition-colors">
            <td class="py-4 px-4">
              <p
                class="font-headline-sm text-[16px] leading-tight text-on-surface font-semibold line-clamp-1"
              >
                Investimentos em infraestrutura avançam no estado
              </p>
            </td>
            <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">Economia</td>
            <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">
              Ontem, 18:15
            </td>
            <td class="py-4 px-4 text-right">
              <span
                class="inline-block px-2 py-1 bg-surface-variant text-on-surface-variant font-label-md rounded-full text-[10px]"
                >Rascunho</span
              >
            </td>
          </tr>
          <tr class="hover:bg-surface-container-low transition-colors">
            <td class="py-4 px-4">
              <p
                class="font-headline-sm text-[16px] leading-tight text-on-surface font-semibold line-clamp-1"
              >
                Festival de cultura local reúne milhares no centro
              </p>
            </td>
            <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">Cultura</td>
            <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">
              12 Out, 14:00
            </td>
            <td class="py-4 px-4 text-right">
              <span
                class="inline-block px-2 py-1 bg-tertiary-fixed-dim text-on-tertiary-fixed-variant font-label-md rounded-full text-[10px]"
                >Publicado</span
              >
            </td>
          </tr>
          <tr class="hover:bg-surface-container-low transition-colors">
            <td class="py-4 px-4">
              <p
                class="font-headline-sm text-[16px] leading-tight text-on-surface font-semibold line-clamp-1"
              >
                Alerta meteorológico: Fortes chuvas previstas
              </p>
            </td>
            <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">Clima</td>
            <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">
              11 Out, 08:45
            </td>
            <td class="py-4 px-4 text-right">
              <span
                class="inline-block px-2 py-1 bg-tertiary-fixed-dim text-on-tertiary-fixed-variant font-label-md rounded-full text-[10px]"
                >Publicado</span
              >
            </td>
          </tr>
          <tr class="hover:bg-surface-container-low transition-colors">
            <td class="py-4 px-4">
              <p
                class="font-headline-sm text-[16px] leading-tight text-on-surface font-semibold line-clamp-1"
              >
                Entrevista exclusiva com o novo secretário de educação
              </p>
            </td>
            <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">Educação</td>
            <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">
              10 Out, 16:20
            </td>
            <td class="py-4 px-4 text-right">
              <span
                class="inline-block px-2 py-1 bg-surface-variant text-on-surface-variant font-label-md rounded-full text-[10px]"
                >Rascunho</span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-4 text-right">
      <RouterLink
        class="font-label-md text-primary-container hover:text-primary inline-flex items-center gap-1 transition-colors"
        :to="{ name: 'Posts' }"
      >
        Ver todos os posts
        <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
      </RouterLink>
    </div>
  </section>
</template>
