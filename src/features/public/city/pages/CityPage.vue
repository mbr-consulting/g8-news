<template>
  <main class="max-w-container-max mx-auto px-margin-x py-stack-lg">
    <!-- Municipality Header -->
    <section class="flex flex-col items-center text-center mb-section-padding space-y-stack-md">
      <div
        class="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-outline-variant"
      >
        <img
          alt="Brasão do Município"
          class="max-w-full max-h-full object-contain"
          src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
        />
      </div>
      <div>
        <span
          class="font-label-md text-label-md text-secondary uppercase tracking-widest block mb-2"
          >Município em Destaque</span
        >
        <h2 class="font-display-lg text-display-lg text-primary font-bold">
          Santa Cruz do Rio Verde
        </h2>
        <div class="w-16 h-1 bg-secondary mx-auto mt-4"></div>
      </div>
    </section>
    <!-- Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      <!-- Main Editorial Text -->
      <article class="lg:col-span-8 space-y-stack-md">
        <p
          class="font-headline-sm text-headline-sm text-on-surface-variant italic leading-relaxed mb-8 transition-all duration-500"
        >
          Fundada no coração do interior paulista, a cidade equilibra sua rica herança histórica com
          o dinamismo de um polo industrial em expansão.
        </p>
        <div class="font-headline-md text-headline-md text-primary mt-12 mb-4">
          História e Fundação
        </div>
        <div class="font-headline-md text-headline-md text-on-surface leading-relaxed space-y-6">
          <p class="font-body-lg text-body-lg transition-all duration-500">
            A história de Santa Cruz do Rio Verde remonta ao final do século XIX, quando as
            primeiras caravanas de tropeiros estabeleceram um ponto de descanso às margens do
            cristalino Rio Verde. O que começou como um simples entreposto comercial rapidamente se
            transformou em uma vila próspera, impulsionada pela chegada da estrada de ferro e pela
            expansão das lavouras de café que dominavam o horizonte.
          </p>
          <p class="font-body-lg text-body-lg transition-all duration-500">
            Hoje, a arquitetura colonial preservada no centro histórico serve como um testemunho
            silencioso daquelas décadas de ouro. Casarões neoclássicos e praças arborizadas convivem
            em harmonia com a modernidade, criando uma atmosfera única que atrai historiadores e
            turistas em busca de autenticidade.
          </p>
        </div>
        <div class="font-headline-md text-headline-md text-primary mt-12 mb-4">
          Economia em Evolução
        </div>
        <div class="font-headline-md text-headline-md text-on-surface leading-relaxed space-y-6">
          <p class="font-body-lg text-body-lg transition-all duration-500">
            Embora suas raízes estejam no solo fértil, a economia atual é diversificada. O município
            se tornou um centro estratégico para a agroindústria de precisão, abrigando laboratórios
            de biotecnologia e parques fabris de alta tecnologia. O setor de serviços também
            apresenta crescimento robusto, consolidando a cidade como um polo regional de educação e
            saúde de alta complexidade.
          </p>
        </div>
        <div class="font-headline-md text-headline-md text-primary mt-12 mb-4">
          Cultura e Vida Local
        </div>
        <div class="font-headline-md text-headline-md text-on-surface leading-relaxed space-y-6">
          <p class="font-body-lg text-body-lg transition-all duration-500">
            A vida cultural é vibrante, marcada por festivais sazonais que celebram desde a colheita
            do café até as novas tendências da arte contemporânea brasileira. A gastronomia local é
            um capítulo à parte, unindo receitas tradicionais passadas por gerações com toques de
            sofisticação internacional trazidos pelos novos empreendimentos que ocupam o centro
            expandido.
          </p>
        </div>
        <!-- Horizontal Banner Ads -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md pt-section-padding">
          <div
            class="ad-placeholder h-40 flex flex-col items-center justify-center border border-outline-variant group cursor-pointer transition-all hover:border-primary"
          >
            <span
              class="font-label-md text-label-md text-outline uppercase tracking-widest group-hover:text-primary transition-colors"
              >Publicidade</span
            >
            <div
              class="mt-2 flex items-center text-primary-container opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <span class="text-xs font-bold mr-1">SAIBA MAIS</span>
              <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
          <div
            class="ad-placeholder h-40 flex flex-col items-center justify-center border border-outline-variant group cursor-pointer transition-all hover:border-primary"
          >
            <span
              class="font-label-md text-label-md text-outline uppercase tracking-widest group-hover:text-primary transition-colors"
              >Publicidade</span
            >
            <div
              class="mt-2 flex items-center text-primary-container opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <span class="text-xs font-bold mr-1">ANUNCIE AQUI</span>
              <span class="material-symbols-outlined text-sm">add_circle</span>
            </div>
          </div>
        </div>
      </article>
      <!-- Sidebar -->
      <aside class="lg:col-span-4 space-y-stack-lg">
        <div class="bg-surface-container-low p-stack-md border-t-4 border-primary">
          <h3
            class="font-headline-sm text-headline-sm text-primary mb-6 border-b border-outline-variant pb-2"
          >
            Editorias Locais
          </h3>
          <div class="space-y-4">
            <RouterLink
              to="vitoria/automotivo"
              class="relative block h-32 overflow-hidden rounded-lg group"
            >
              <div class="absolute inset-0 z-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHEBUsIfFmYB8yaA4Pqt1P-V-qtVp_uAd6q4mX8cRAl1N0-ussLCNky4U4OPgPPHb9jmu_txtLE_iMFAScZQK3PDlv44frIrrtJ5KGsWo0u6ABDolTjYzk6aUYHV7azQALENIVZtT_dvTmz6sYiRaRF7cJVXBE4VcNjC8KpZrLCgYR5JAAdB-OOSy60DQ7hxmaaT702bGCTQV5PwHohi7Hnv69pdytmYlLzctq8r7mItyCZ2tRWZgZgiCS8zKtqeeOf4GY1QCiW-9R"
                  alt="Automotivo"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                <div
                  class="w-full py-2 bg-black/20 backdrop-blur-sm border-y border-white/20 flex items-center justify-center"
                >
                  <span class="font-headline-sm text-white font-bold uppercase tracking-widest"
                    >Automotivo</span
                  >
                </div>
              </div>
            </RouterLink>

            <RouterLink
              to="vitoria/imobiliario"
              class="relative block h-32 overflow-hidden rounded-lg group"
            >
              <div class="absolute inset-0 z-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBezkGsP9kPRnHvYmR24O6OurEnR0EkHkEQVXwlXLVUKeJBc6DyMCUYTPIg_f-jqNFf_TkzWvhh28Q_i-ujc4om0P4g8QwOgQuOdUwObTj8bGowAFFNKxHNZE4smi05AKA-wcnUJCvj_bVJHSioCQ_QL01vlnGH9azFnHhpvtC47zgoYNcR0y6WzWwGcsV81yO3OcLtrD9A3cBBP3QSMP3yTcNYDxxsQZYCatqXh2VKq9wsXzIxpSJd6EByhndp69xPp-YcWk3dos-w"
                  alt="Imobiliários"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                <div
                  class="w-full py-2 bg-black/20 backdrop-blur-sm border-y border-white/20 flex items-center justify-center"
                >
                  <span class="font-headline-sm text-white font-bold uppercase tracking-widest"
                    >Imobiliários</span
                  >
                </div>
              </div>
            </RouterLink>

            <RouterLink
              to="vitoria/hotelaria"
              class="relative block h-32 overflow-hidden rounded-lg group"
            >
              <div class="absolute inset-0 z-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaGE1Nn3i5-0EnGBb5xSk4wqnSBf8X07mxzR9pMDtC5XDBYyO46_9QEw4soNdfSWn3Txho4ApKFePpzrYyIqL6ugWNjDs5J5umTQ9TS4YqZ4jR3eiwpurR4RDlfzBW70jy-GGvsjx84fK2n0DOwOSWWmWP-cf8OnfF2TXuXbn8RyZfKTkaOf4Y35FyGqEMsTAZqOlESv9Xshvi7CgnslbQGjcih3nlsg8N7wFRI0tOOntRXHgwkk9zvlb-tKK0oeaTv5fNnV8-P-tN"
                  alt="Hotel / Gastro"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                <div
                  class="w-full py-2 bg-black/20 backdrop-blur-sm border-y border-white/20 flex items-center justify-center"
                >
                  <span class="font-headline-sm text-white font-bold uppercase tracking-widest"
                    >Hotel / Gastro</span
                  >
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
        <!-- Vertical Ad Banner -->
        <div class="sticky top-28">
          <div
            class="ad-placeholder w-full aspect-[4/6] md:aspect-auto md:h-[600px] flex flex-col items-center justify-center border border-outline-variant shadow-sm relative overflow-hidden group"
          >
            <div
              class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
            ></div>
            <span
              class="font-label-md text-label-md text-outline uppercase tracking-[0.2em] relative z-10"
              >Publicidade</span
            >
            <div class="mt-4 p-4 border border-outline text-center max-w-[80%] relative z-10">
              <p class="font-label-lg text-label-lg text-primary-container">
                Espaço Premium Disponível
              </p>
              <button
                class="mt-4 bg-primary text-on-primary px-4 py-2 text-xs font-bold hover:bg-primary-container transition-colors"
              >
                ENTRAR EM CONTATO
              </button>
            </div>
          </div>
          <p class="text-center font-label-md text-label-md text-outline-variant mt-2 italic">
            Apoie o jornalismo local independente.
          </p>
        </div>
      </aside>
    </div>
  </main>
</template>
