<template>
  <main class="w-full max-w-container-max mx-auto px-margin-x py-section-padding">
    <!-- Hero Introduction -->
    <section class="mb-stack-lg border-b border-outline-variant pb-8">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-gutter">
        <div class="max-w-2xl">
          <span
            class="font-label-lg text-label-lg text-secondary uppercase tracking-widest block mb-2"
            >Presença Regional</span
          >
          <h1
            class="font-headline-lg text-headline-lg md:text-display-lg md:font-display-lg text-primary mb-stack-sm"
          >
            Nossa Presença
          </h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            O G8 News consolida sua autoridade jornalística em todo o estado do Espírito Santo. Com
            bases estratégicas nos principais municípios, levamos informação de precisão e
            relevância local para milhares de capixabas diariamente.
          </p>
        </div>
        <div class="flex gap-4">
          <div class="flex items-center gap-2">
            <span class="w-4 h-4 rounded-sm bg-primary border border-secondary-fixed"></span>
            <span class="font-label-md text-label-md">Presença G8</span>
          </div>
          <div class="flex items-center gap-2">
            <span
              class="w-4 h-4 rounded-sm bg-surface-variant border border-outline-variant"
            ></span>
            <span class="font-label-md text-label-md">Demais Áreas</span>
          </div>
        </div>
      </div>
    </section>
    <!-- Main Layout: Map + Sidebar -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
      <!-- Map Hero Section -->
      <div
        class="lg:col-span-8 bg-surface-container-low rounded-lg p-6 border border-outline-variant relative overflow-hidden"
      >
        <div class="absolute top-4 right-6 text-right z-10">
          <h3 class="font-headline-sm text-headline-sm text-primary">Mapa de Cobertura</h3>
          <p class="font-label-md text-label-md text-on-surface-variant">Espírito Santo, Brasil</p>
        </div>
        <div class="map-container flex items-center justify-center">
          <!-- SVG Map Placeholder Representing ES State -->
          <svg
            class="w-full h-full max-w-md drop-shadow-xl"
            viewBox="0 0 500 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Simplified ES Map shape with some municipalities -->
            <RouterLink to="/cidades/vitoria">
              <path class="municipality-active" d="M250 100 L280 120 L270 160 L230 150 Z"></path>
            </RouterLink>

            <!-- Pinheiros -->
            <path class="municipality-inactive" d="M280 120 L310 130 L300 170 L270 160 Z"></path>
            <path class="municipality-active" d="M230 150 L270 160 L260 210 L220 200 Z"></path>
            <!-- São Mateus -->
            <path class="municipality-inactive" d="M190 120 L230 150 L220 200 L180 180 Z"></path>
            <path class="municipality-active" d="M260 210 L300 230 L280 280 L240 260 Z"></path>
            <!-- Linhares -->
            <path class="municipality-inactive" d="M220 200 L260 210 L240 260 L200 240 Z"></path>
            <path class="municipality-active" d="M240 260 L280 280 L260 340 L220 320 Z"></path>
            <!-- Aracruz -->
            <path class="municipality-active" d="M220 320 L260 340 L250 400 L210 380 Z"></path>
            <!-- Serra -->
            <path class="municipality-active" d="M250 400 L280 420 L270 460 L230 440 Z"></path>
            <!-- Vitória / Vila Velha -->
            <path class="municipality-active" d="M210 380 L250 400 L230 440 L190 420 Z"></path>
            <!-- Cariacica / Viana -->
            <path class="municipality-inactive" d="M150 300 L200 320 L180 380 L130 360 Z"></path>
            <path class="municipality-active" d="M190 420 L230 440 L210 500 L170 480 Z"></path>
            <!-- Cachoeiro -->
            <path class="municipality-inactive" d="M170 480 L210 500 L200 550 L160 530 Z"></path>
            <!-- Callouts for smaller areas -->
            <g class="text-[10px] font-bold fill-on-surface">
              <text x="245" y="130">Pinheiros</text>
              <text x="225" y="185">São Mateus</text>
              <text x="255" y="260">Linhares</text>
              <text x="230" y="335">Aracruz</text>
              <text x="225" y="395">Serra</text>
              <text x="245" y="445">Vitória</text>
              <text x="185" y="475">Cachoeiro</text>
            </g>
            <!-- Connecting lines for legends -->
            <line
              stroke="#717973"
              stroke-dasharray="2"
              stroke-width="1"
              x1="280"
              x2="350"
              y1="440"
              y2="440"
            ></line>
            <text class="text-[12px] fill-primary font-bold italic" x="355" y="445">
              Hub Regional Sul
            </text>
          </svg>
        </div>
        <!-- Map Legend/Callout for readability -->
        <div
          class="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-outline-variant pt-6"
        >
          <div>
            <p class="font-label-lg text-label-lg text-secondary">METROPOLITANA</p>
            <p class="font-body-sm text-body-sm text-on-surface-variant">
              Vitória, Vila Velha, Serra, Cariacica
            </p>
          </div>
          <div>
            <p class="font-label-lg text-label-lg text-secondary">NORTE</p>
            <p class="font-body-sm text-body-sm text-on-surface-variant">
              Linhares, São Mateus, Pinheiros
            </p>
          </div>
          <div>
            <p class="font-label-lg text-label-lg text-secondary">SUL</p>
            <p class="font-body-sm text-body-sm text-on-surface-variant">
              Cachoeiro de Itapemirim, Marataízes
            </p>
          </div>
          <div>
            <p class="font-label-lg text-label-lg text-secondary">SERRANA</p>
            <p class="font-body-sm text-body-sm text-on-surface-variant">
              Domingos Martins, Venda Nova
            </p>
          </div>
        </div>
      </div>
      <!-- Sidebar: News by Region -->
      <aside class="lg:col-span-4 space-y-stack-lg">
        <div class="flex items-center justify-between border-b-2 border-primary pb-2">
          <h2 class="font-headline-sm text-headline-sm text-primary uppercase">Últimas Notícias</h2>
          <span class="material-symbols-outlined text-primary" data-icon="rss_feed">rss_feed</span>
        </div>
        <div class="space-y-stack-md">
          <!-- News Card 1 -->
          <article class="group cursor-pointer">
            <div class="flex gap-4">
              <div class="w-24 h-24 flex-shrink-0 overflow-hidden rounded bg-surface-variant">
                <img
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="A professional journalistic photograph of a modern skyline in Vitória, Espírito Santo, during the golden hour. The lighting is warm and cinematic, highlighting the glass buildings and the blue ocean. The overall mood is prosperous and clean, fitting a high-end corporate news portal style."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOYX5OvePi0BUSD0wAeub83kv3tjefLJGUv4qLx0yTyBH3hDlENYpF3uICKHCozfwG4iE_7PPCyA2Uv0nrjtaeskO5NupemBIXZprSJ1lQThx7HpgGcHHc7VRG7MJhvUTXgL6a3InVj4ZoQR2fb5Bxtlt2V7tUPHHFKn0CZw8wQ3xDK7bx-MGXWaSa9UMgdlTbEhZYYEuW93OQGvZ6p5gvUgPvFl8is_2B58YI0TpKF0lytLq8j4Ra5nx5bVPKZNQ-wYmczsZGPt5T"
                />
              </div>
              <div class="flex flex-col justify-center">
                <span class="font-label-md text-label-md text-secondary uppercase mb-1"
                  >Vitória</span
                >
                <h3
                  class="font-headline-sm text-headline-sm leading-tight text-on-surface group-hover:text-primary transition-colors line-clamp-2"
                >
                  Novos investimentos em infraestrutura portuária prometem transformar a capital.
                </h3>
              </div>
            </div>
            <hr class="mt-stack-md border-outline-variant" />
          </article>
          <!-- News Card 2 -->
          <article class="group cursor-pointer">
            <div class="flex gap-4">
              <div class="w-24 h-24 flex-shrink-0 overflow-hidden rounded bg-surface-variant">
                <img
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="A detailed image of vast agricultural fields in northern Espírito Santo, showing organized coffee plantations under a clear blue sky. The lighting is bright and natural, capturing the rich green of the leaves and the golden hue of the soil. The style is editorial and professional, emphasizing the region's productivity."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUfuLbiJ-1EGuv8MxPklMnXswpollDMAG66ed6nTKOpEMm8fuaEuTuZQFcYqPS6kM94_gO_bX8vynyonnSfw5z7-FoDmGBjWowJCQRNnbyth3ufOkBuJlkG-aatQKCo2ouvXnwh1VfPlCwakfb0eEFQwakWXxX7gs57qg4Vw8iqBdbFwyopwGVPljdmfML-ByECgNBLBcov00_Bzv8RG7iudbAEVTNSt6fYfLuV-TolGcaz_6hqk9Ek0h2lHJrk4KIQkGx_0WH7LPW"
                />
              </div>
              <div class="flex flex-col justify-center">
                <span class="font-label-md text-label-md text-secondary uppercase mb-1"
                  >Linhares</span
                >
                <h3
                  class="font-headline-sm text-headline-sm leading-tight text-on-surface group-hover:text-primary transition-colors line-clamp-2"
                >
                  Safra de café bate recorde e impulsiona economia do norte capixaba.
                </h3>
              </div>
            </div>
            <hr class="mt-stack-md border-outline-variant" />
          </article>
          <!-- News Card 3 -->
          <article class="group cursor-pointer">
            <div class="flex gap-4">
              <div class="w-24 h-24 flex-shrink-0 overflow-hidden rounded bg-surface-variant">
                <img
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="A sophisticated close-up of a marble quarry in Cachoeiro de Itapemirim, featuring the elegant textures of white and grey stone. The lighting is soft and diffused, highlighting the mineral details. The aesthetic is clean and established, representing the high-quality industrial heritage of the southern region."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5sbSaC71vgLy55S1p8hk2L7nKoOzMZcJf_SxByrGWHKMb-tFchggOy-sqYHJDvbOQpjCwShT7rxmHLfQlvDS2ma0ZeKLM7gYLigQXfJPbV7teGoRQi8cH0ewDHxLBUULPg0xWf32HQvHhq9eK6FVuwFkXz82mT85kblyjN62t2radRvrB9u25WODk1MFIS4yorg-VZnF4DUqEbGnMYBHyvcCBOGZlQ2U5zRCil3cPfIC4T9RNCRdj8sN1-octC_cRxG1RyFcVlYsZ"
                />
              </div>
              <div class="flex flex-col justify-center">
                <span class="font-label-md text-label-md text-secondary uppercase mb-1"
                  >Cachoeiro</span
                >
                <h3
                  class="font-headline-sm text-headline-sm leading-tight text-on-surface group-hover:text-primary transition-colors line-clamp-2"
                >
                  Setor de rochas ornamentais projeta crescimento para o próximo semestre.
                </h3>
              </div>
            </div>
            <hr class="mt-stack-md border-outline-variant" />
          </article>
        </div>
        <!-- Newsletter Widget -->
        <div class="bg-primary p-6 rounded-lg text-on-primary">
          <h4 class="font-headline-sm text-headline-sm mb-2">G8 em seu E-mail</h4>
          <p class="font-body-sm text-body-sm opacity-90 mb-4">
            Receba as principais notícias da sua cidade todas as manhãs.
          </p>
          <div class="relative">
            <input
              class="w-full bg-transparent border-0 border-b-2 border-secondary-fixed focus:ring-0 placeholder:text-on-primary/60 text-on-primary pb-2 mb-4"
              placeholder="Seu melhor e-mail"
              type="email"
            />
            <button
              class="w-full bg-secondary-fixed text-on-secondary-fixed py-2 font-label-lg text-label-lg rounded-sm hover:brightness-110 transition-all uppercase"
            >
              Inscrever-se
            </button>
          </div>
        </div>
      </aside>
    </div>
    <!-- Featured Regional Sections (Bento Grid Style) -->
    <section class="mt-section-padding">
      <h2
        class="font-headline-md text-headline-md text-primary mb-stack-lg border-b border-outline-variant pb-2"
      >
        Destaques Regionais
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div
          class="md:col-span-2 group relative overflow-hidden rounded-lg aspect-video bg-surface-container-highest border border-outline-variant"
        >
          <img
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            data-alt="A wide panoramic shot of the Convent of Penha in Vila Velha at sunset. The historic architecture is bathed in orange and gold light, contrasting with the deep green of the surrounding hill and the blue sea. The mood is majestic and culturally significant, presented in a high-fidelity editorial style."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAC3rRb7dG-X4sIHZa0zsMqxrjEXNrmqTc-NkjoiyKKno8ac0-S1v6Lmn5fAmc_Hiyss_WW7bsqHnGGlXzk9Qg59oWCNG_-I3bvGD6qaq0hEOXHzihB8H346bTsLrg9e2c0KkGGIhVtcMLc3g0_tsY00VCgV-PWaWa-S0fotUmbDyGdDfd66G6ByQCEg8bMMZaJkgqDOHuC4n7hqZdEdHWpDkoKFKG_CsymPZa66-Glia2OvKtYFbKW0Ez0Ve_bHLz9sxF0FXc-D6b"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent flex flex-col justify-end p-8"
          >
            <span class="font-label-md text-label-md text-secondary-fixed mb-2"
              >CULTURA E TURISMO</span
            >
            <h3 class="font-headline-lg text-headline-lg text-white mb-4">
              Vila Velha recebe festival internacional de gastronomia.
            </h3>
            <p class="font-body-md text-body-md text-white/80 line-clamp-2">
              O evento promete reunir os melhores chefs do estado e convidados de renome nacional na
              orla da Praia da Costa.
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-gutter">
          <div
            class="bg-surface-container-high p-6 rounded-lg border border-outline-variant flex flex-col h-full justify-between"
          >
            <div>
              <span
                class="material-symbols-outlined text-secondary text-4xl mb-4"
                data-icon="factory"
                >factory</span
              >
              <h4 class="font-headline-sm text-headline-sm text-primary mb-2">Polo Industrial</h4>
              <p class="font-body-sm text-body-sm text-on-surface-variant">
                Acompanhe o desenvolvimento do novo complexo industrial na Serra que gerará 2 mil
                empregos.
              </p>
            </div>
            <a
              class="mt-4 font-label-lg text-label-lg text-primary flex items-center gap-1 hover:gap-2 transition-all"
              href="#"
              >Ver detalhes
              <span class="material-symbols-outlined text-sm" data-icon="arrow_forward"
                >arrow_forward</span
              ></a
            >
          </div>
          <div
            class="bg-secondary-container p-6 rounded-lg border border-outline-variant flex flex-col h-full justify-between"
          >
            <div>
              <span
                class="material-symbols-outlined text-primary text-4xl mb-4"
                data-icon="emergency"
                >emergency</span
              >
              <h4 class="font-headline-sm text-headline-sm text-on-secondary-container mb-2">
                Serviços Públicos
              </h4>
              <p class="font-body-sm text-body-sm text-on-secondary-container/80">
                Guia atualizado de plantões médicos e serviços de emergência em São Mateus para o
                feriado.
              </p>
            </div>
            <a
              class="mt-4 font-label-lg text-label-lg text-on-secondary-container flex items-center gap-1 hover:gap-2 transition-all"
              href="#"
              >Acessar Guia
              <span class="material-symbols-outlined text-sm" data-icon="arrow_forward"
                >arrow_forward</span
              ></a
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
