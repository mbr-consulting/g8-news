<template>
  <div class="panel-theme">
    <div class="bg-background text-on-background font-body-md h-screen overflow-hidden flex">
      <!-- SideNavBar -->
      <nav
        class="h-screen w-64 fixed left-0 top-0 bg-surface-container-low dark:bg-surface-container-lowest flex flex-col h-full py-stack-lg z-20"
      >
        <div class="px-margin-x mb-stack-lg">
          <h1
            class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim"
          >
            G8 News
          </h1>
          <p class="font-label-md text-label-md text-on-surface-variant mt-1">Admin Dashboard</p>
        </div>
        <div class="px-margin-x mb-stack-lg">
          <button
            class="w-full bg-primary-container text-on-primary py-3 px-4 rounded font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-primary transition-colors"
          >
            <span class="material-symbols-outlined text-[18px]">add</span>
            Create New Post
          </button>
        </div>
        <div class="flex-1 overflow-y-auto">
          <ul class="flex flex-col">
            <!-- Posts (Active) -->
            <li>
              <a
                class="flex items-center gap-3 px-margin-x py-3 text-primary dark:text-primary-fixed-dim font-bold border-r-4 border-primary dark:border-primary-fixed-dim bg-surface-container-high dark:bg-surface-container-highest transition-colors duration-200 ease-in-out"
                href="#"
              >
                <span
                  class="material-symbols-outlined text-[20px]"
                  style="font-variation-settings: 'FILL' 1"
                  >article</span
                >
                <span class="font-label-lg text-label-lg">Posts</span>
              </a>
            </li>
            <!-- Ads -->
            <li>
              <a
                class="flex items-center gap-3 px-margin-x py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant dark:hover:bg-surface-container-highest hover:text-on-surface transition-colors duration-200 ease-in-out"
                href="#"
              >
                <span class="material-symbols-outlined text-[20px]">campaign</span>
                <span class="font-label-lg text-label-lg">Ads</span>
              </a>
            </li>
            <!-- Cities -->
            <li>
              <a
                class="flex items-center gap-3 px-margin-x py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant dark:hover:bg-surface-container-highest hover:text-on-surface transition-colors duration-200 ease-in-out"
                href="#"
              >
                <span class="material-symbols-outlined text-[20px]">location_city</span>
                <span class="font-label-lg text-label-lg">Cities</span>
              </a>
            </li>
            <!-- Users -->
            <li>
              <a
                class="flex items-center gap-3 px-margin-x py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant dark:hover:bg-surface-container-highest hover:text-on-surface transition-colors duration-200 ease-in-out"
                href="#"
              >
                <span class="material-symbols-outlined text-[20px]">group</span>
                <span class="font-label-lg text-label-lg">Users</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="mt-auto border-t border-outline-variant pt-stack-sm px-margin-x">
          <ul class="flex flex-col">
            <li>
              <a
                class="flex items-center gap-3 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant dark:hover:bg-surface-container-highest hover:text-on-surface transition-colors duration-200 ease-in-out"
                href="#"
              >
                <span class="material-symbols-outlined text-[20px]">settings</span>
                <span class="font-label-lg text-label-lg">Settings</span>
              </a>
            </li>
            <li>
              <a
                class="flex items-center gap-3 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-variant dark:hover:bg-surface-container-highest hover:text-on-surface transition-colors duration-200 ease-in-out"
                href="#"
              >
                <span class="material-symbols-outlined text-[20px]">logout</span>
                <span class="font-label-lg text-label-lg">Logout</span>
              </a>
            </li>
          </ul>
          <div class="flex items-center gap-3 mt-stack-md pb-stack-sm">
            <img
              alt="G8 News Admin Profile"
              class="w-8 h-8 rounded-full object-cover border border-outline-variant"
              data-alt="A small, professional portrait of an administrator in a classic newsroom setting. Soft, natural lighting. Professional corporate aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt1eco-3Jft2ec30Sy8pMXHkJYq3HwQCOZ0ObmgVq5uBVpeoCHt37o3prfY1UTFo18ohZKSix-wVrLpPpZDEoiYf_ssNKa2uLlJR7TmOQ8-ENK8xDVStPVfHQomdXevljNAjP73CvgHmcCrV1U0lFeG2f-ELtn8X-qn1QQaQP1GryNV9rToUC6V0pasSGIPTriJZzuNlprY-3IEIZ29Y1JoXgjJf2uN2tDE8feNHZvqAfir67Fho2XyJiC5WKaqk0l22R9dIOrozEV"
            />
            <div class="flex flex-col">
              <span class="font-label-md text-label-md text-on-surface">Admin User</span>
              <span class="font-body-sm text-body-sm text-on-surface-variant text-[10px]"
                >admin@g8news.com</span
              >
            </div>
          </div>
        </div>
      </nav>
      <!-- Main Content Area -->
      <div class="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
        <!-- TopAppBar -->
        <header
          class="docked full-width top-0 border-b border-outline-variant dark:border-outline bg-surface dark:bg-surface-dim flex justify-between items-center w-full px-margin-x h-16 z-10 shrink-0"
        >
          <div class="flex items-center gap-gutter">
            <span class="font-headline-sm text-headline-sm font-semibold text-primary"
              >Bem-vindo ao Editorial Desk</span
            >
          </div>
          <div class="flex items-center gap-gutter">
            <nav class="hidden lg:flex gap-6">
              <a
                class="font-label-lg text-label-lg text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-all"
                href="#"
                >Analytics</a
              >
              <a
                class="font-label-lg text-label-lg text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-all"
                href="#"
                >Archive</a
              >
              <a
                class="font-label-lg text-label-lg text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-all"
                href="#"
                >Reports</a
              >
            </nav>
            <div class="flex items-center gap-3 border-l border-outline-variant pl-gutter">
              <button class="text-on-surface-variant hover:text-primary transition-colors">
                <span class="material-symbols-outlined">notifications</span>
              </button>
              <button class="text-on-surface-variant hover:text-primary transition-colors">
                <span class="material-symbols-outlined">help</span>
              </button>
            </div>
          </div>
        </header>
        <!-- Dashboard Content -->
        <main class="flex-1 overflow-y-auto p-section-padding bg-surface-bright">
          <div class="max-w-container-max mx-auto space-y-stack-lg">
            <!-- KPIs Bento Grid -->
            <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              <!-- KPI 1 -->
              <div
                class="bg-surface rounded border border-outline-variant p-6 hover:border-primary-container transition-colors relative overflow-hidden group"
              >
                <div
                  class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"
                >
                  <span class="material-symbols-outlined text-[48px] text-primary">article</span>
                </div>
                <h3
                  class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2"
                >
                  Total de Posts
                </h3>
                <p class="font-display-lg text-display-lg text-primary">24</p>
              </div>
              <!-- KPI 2 -->
              <div
                class="bg-surface rounded border border-outline-variant p-6 hover:border-primary-container transition-colors relative overflow-hidden group"
              >
                <div
                  class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"
                >
                  <span class="material-symbols-outlined text-[48px] text-primary">campaign</span>
                </div>
                <h3
                  class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2"
                >
                  Anúncios Ativos
                </h3>
                <p class="font-display-lg text-display-lg text-primary">12</p>
              </div>
              <!-- KPI 3 -->
              <div
                class="bg-surface rounded border border-outline-variant p-6 hover:border-primary-container transition-colors relative overflow-hidden group"
              >
                <div
                  class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"
                >
                  <span class="material-symbols-outlined text-[48px] text-primary"
                    >location_city</span
                  >
                </div>
                <h3
                  class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2"
                >
                  Municípios Atendidos
                </h3>
                <p class="font-display-lg text-display-lg text-primary">78</p>
              </div>
              <!-- KPI 4 -->
              <div
                class="bg-surface rounded border border-outline-variant p-6 hover:border-primary-container transition-colors relative overflow-hidden group"
              >
                <div
                  class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"
                >
                  <span class="material-symbols-outlined text-[48px] text-primary">group_add</span>
                </div>
                <h3
                  class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2"
                >
                  Novos Usuários
                </h3>
                <p class="font-display-lg text-display-lg text-primary">3</p>
                <p class="font-body-sm text-body-sm text-secondary-container mt-1">esta semana</p>
              </div>
            </section>
            <div class="grid grid-cols-1 xl:grid-cols-3 gap-gutter">
              <!-- Main Column: Recent Activity & Quick Actions -->
              <div class="xl:col-span-2 space-y-stack-lg">
                <!-- Quick Actions -->
                <section>
                  <h2
                    class="font-headline-sm text-headline-sm text-on-surface mb-stack-md border-b border-outline-variant pb-2"
                  >
                    Ações Rápidas
                  </h2>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <button
                      class="flex items-center justify-center gap-2 bg-primary-container text-on-primary py-4 px-6 rounded border border-transparent hover:bg-primary transition-colors font-label-lg text-label-lg"
                    >
                      <span class="material-symbols-outlined">edit_square</span>
                      Novo Post
                    </button>
                    <button
                      class="flex items-center justify-center gap-2 bg-transparent text-primary-container py-4 px-6 rounded border border-primary-container hover:bg-surface-container-low transition-colors font-label-lg text-label-lg"
                    >
                      <span class="material-symbols-outlined">ads_click</span>
                      Gerenciar Anúncios
                    </button>
                    <button
                      class="flex items-center justify-center gap-2 bg-transparent text-primary-container py-4 px-6 rounded border border-primary-container hover:bg-surface-container-low transition-colors font-label-lg text-label-lg"
                    >
                      <span class="material-symbols-outlined">add_location</span>
                      Adicionar Cidade
                    </button>
                  </div>
                </section>
                <!-- Recent Posts Table -->
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
                          <th
                            class="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase"
                          >
                            Título
                          </th>
                          <th
                            class="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase"
                          >
                            Categoria
                          </th>
                          <th
                            class="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase"
                          >
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
                          <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">
                            Política
                          </td>
                          <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">
                            Hoje, 09:30
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
                              Investimentos em infraestrutura avançam no estado
                            </p>
                          </td>
                          <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">
                            Economia
                          </td>
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
                          <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">
                            Cultura
                          </td>
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
                          <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">
                            Clima
                          </td>
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
                          <td class="py-4 px-4 font-body-sm text-body-sm text-on-surface-variant">
                            Educação
                          </td>
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
                    <a
                      class="font-label-md text-primary-container hover:text-primary inline-flex items-center gap-1 transition-colors"
                      href="#"
                    >
                      Ver todos os posts
                      <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </a>
                  </div>
                </section>
              </div>
              <!-- Sidebar Column: Audience Overview -->
              <div class="xl:col-span-1">
                <section class="h-full">
                  <h2
                    class="font-headline-sm text-headline-sm text-on-surface mb-stack-md border-b border-outline-variant pb-2"
                  >
                    Visão da Audiência
                  </h2>
                  <div
                    class="bg-surface rounded border border-outline-variant p-6 h-[calc(100%-3rem)] flex flex-col"
                  >
                    <div
                      class="flex-1 flex flex-col justify-center items-center relative min-h-[300px]"
                    >
                      <!-- Decorative Chart Placeholder -->
                      <div
                        class="w-full h-full absolute inset-0 flex items-end justify-between px-4 pb-8 opacity-20"
                      >
                        <div class="w-1/6 bg-primary-container rounded-t h-1/3"></div>
                        <div class="w-1/6 bg-primary-container rounded-t h-1/2"></div>
                        <div class="w-1/6 bg-primary-container rounded-t h-3/4"></div>
                        <div class="w-1/6 bg-primary-container rounded-t h-full"></div>
                        <div class="w-1/6 bg-primary-container rounded-t h-2/3"></div>
                      </div>
                      <div
                        class="z-10 text-center space-y-4 bg-surface/80 p-4 rounded backdrop-blur-sm"
                      >
                        <p class="font-label-md text-on-surface-variant uppercase tracking-wider">
                          Crescimento Mensal
                        </p>
                        <p class="font-display-lg text-primary">+14.2%</p>
                        <p class="font-body-sm text-on-surface-variant max-w-[200px] mx-auto">
                          Acesso via dispositivos móveis representa 72% do tráfego total.
                        </p>
                      </div>
                    </div>
                    <div class="mt-auto pt-4 border-t border-outline-variant">
                      <a
                        class="w-full flex justify-center items-center gap-2 text-primary-container hover:text-primary font-label-lg transition-colors"
                        href="#"
                      >
                        <span class="material-symbols-outlined">bar_chart</span>
                        Relatório Completo
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
