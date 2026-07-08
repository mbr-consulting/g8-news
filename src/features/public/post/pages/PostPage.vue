<template>
  <main class="max-w-container-max mx-auto px-margin-x pt-stack-lg mb-20">
    <!-- Article Header -->
    <div class="grid grid-cols-1 gap-stack-md mb-stack-lg">
      <div class="inline-block self-start">
        <span
          class="bg-secondary-container/20 text-primary font-label-lg text-label-lg px-3 py-1 rounded-full uppercase tracking-wider"
          >Turismo</span
        >
      </div>
      <h1 class="font-display-lg text-display-lg text-on-background leading-tight">
        A nova fronteira do ecoturismo na região do Caparaó
      </h1>
      <p class="font-headline-sm text-headline-sm text-on-surface-variant max-w-4xl">
        Belezas naturais inexploradas e o pico da Bandeira impulsionam o novo ciclo de
        desenvolvimento sustentável no sul do Espírito Santo.
      </p>
      <div
        class="flex flex-wrap items-center gap-4 py-4 border-y border-outline-variant text-on-surface-variant font-body-sm text-body-sm"
      >
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-[18px]">person</span>
          <span class="">Por <strong>Redação G8</strong></span>
        </div>
        <div class="hidden md:block w-px h-4 bg-outline-variant"></div>
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-[18px]">calendar_today</span>
          <span class="">24 de Maio, 2024</span>
        </div>
        <div class="hidden md:block w-px h-4 bg-outline-variant"></div>
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-[18px]">schedule</span>
          <span class="">8 min de leitura</span>
        </div>
      </div>
    </div>
    <!-- Hero Image -->
    <figure class="w-full mb-stack-lg relative">
      <div class="aspect-[21/9] w-full overflow-hidden rounded-lg">
        <img
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          data-alt="A breathtaking panoramic landscape of the Serra do Caparaó at dawn. The morning sun casts long, golden shadows across the rolling green mountains and deep valleys. Wisps of soft white mist cling to the slopes of Pico da Bandeira, creating a majestic and serene atmosphere. The overall aesthetic is clean and high-contrast, reflecting a premium editorial style with deep green forest hues and a clear blue sky."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzdlomyB2DZNaw9UZCaQMwiRCRFXy3BZk-3FAk9AhU2OJ5EHvBcx7i1v-SiMYnLAxPTf7r_ppt6jJaBcWCvM134Zuvqng_QMOYH8uYD0j22Jd1O7Zs0PjLmB4z9Eg5A42GsTnqT8ggCJ6gyDfRnfhV9CXky__3D7qRiJjSLewUL8YN6SJ2Z0iWiZFE9x599ru_V39-CUSMbxaz0jG6SBMD5HvJfLT7W9XWyygqG4uiXdE0qPJniX3Qd4oDBDO68LaHPeMSR4cBHX9G"
        />
      </div>
      <figcaption class="mt-2 text-body-sm font-body-sm text-on-surface-variant italic">
        A cordilheira do Caparaó abriga alguns dos pontos mais altos do país e atrai milhares de
        aventureiros anualmente.
      </figcaption>
    </figure>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter relative">
      <!-- Social Share (Sticky) -->
      <aside class="lg:col-span-1 hidden lg:block">
        <div class="sticky top-32 flex flex-col gap-4">
          <button
            class="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-white transition-all"
          >
            <span class="material-symbols-outlined">share</span>
          </button>
          <button
            class="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-[#25D366] hover:text-white transition-all"
          >
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.27 9.27 0 01-4.487-1.164l-.325-.193-3.344.877.891-3.26-.213-.339a9.27 9.27 0 01-1.424-4.933c0-5.114 4.16-9.274 9.274-9.274 2.478 0 4.808.965 6.556 2.714a9.215 9.215 0 012.712 6.56c0 5.115-4.16 9.274-9.274 9.274m7.92-17.19a11.134 11.134 0 00-7.92-3.284C5.783 1.332.86 6.255.86 12.303c0 1.933.493 3.82 1.431 5.48L.844 22.508l4.811-1.262a11.214 11.214 0 00 5.334 1.348h.005c6.12 0 11.043-4.923 11.043-11.1 0-2.986-1.162-5.794-3.275-7.907z"
              ></path>
            </svg>
          </button>
          <button
            class="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-[#1877F2] hover:text-white transition-all"
          >
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              ></path>
            </svg>
          </button>
        </div>
      </aside>
      <!-- Body Content -->
      <article class="lg:col-span-8 article-content">
        <div class="font-headline-md text-headline-md leading-relaxed text-on-surface drop-cap">
          Localizada na divisa entre o Espírito Santo e Minas Gerais, a região do Caparaó está
          vivenciando um renascimento turístico. Famosa por abrigar o Pico da Bandeira, o terceiro
          ponto mais alto do Brasil, a área agora se consolida como um polo de ecoturismo de luxo e
          café de especialidade, atraindo um novo perfil de visitante que busca desconexão e contato
          genuíno com a terra.
        </div>
        <p class="font-body-lg text-body-lg text-on-surface">
          A infraestrutura local tem recebido investimentos significativos. Pousadas boutique, que
          mesclam a rusticidade serrana com o conforto contemporâneo, começam a pontilhar as
          encostas de municípios como Ibitirama e Dores do Rio Preto. O governo estadual, por meio
          de programas de fomento ao turismo sustentável, tem incentivado a preservação de
          corredores ecológicos que conectam as áreas de produção cafeeira com a floresta nativa.
        </p>
        <!-- Pull Quote -->
        <blockquote
          class="my-stack-lg border-l-4 border-secondary pl-6 py-4 bg-surface-container-low rounded-r-lg"
        >
          <p class="font-headline-md text-headline-md italic text-primary leading-tight">
            "O Caparaó não é apenas um destino, é um reencontro com a essência da natureza capixaba.
            Aqui, o tempo corre em outro ritmo, guiado pelo som das águas e pelo aroma dos melhores
            cafés do mundo."
          </p>
          <cite class="block mt-4 font-label-lg text-label-lg text-on-surface-variant not-italic"
            >— João Silveira, Guia de Montanhismo Local</cite
          >
        </blockquote>
        <p class="font-body-lg text-body-lg text-on-surface">
          Além das trilhas desafiadoras, o turismo de contemplação ganha força. Cachoeiras de águas
          cristalinas, como a Hidrolândia e a Cachoeira do Aurélio, oferecem refúgios de
          tranquilidade. Para os amantes da gastronomia, a Rota do Café do Caparaó apresenta uma
          experiência sensorial completa, onde é possível acompanhar desde a colheita seletiva até a
          torra artesanal dos grãos que hoje figuram entre os melhores do país.
        </p>
        <!-- Secondary Image -->
        <figure class="my-stack-lg overflow-hidden rounded-lg">
          <img
            class="w-full h-[400px] object-cover"
            data-alt="A close-up, high-detail shot of a traveler drinking a artisanal coffee on a wooden deck overlooking a mist-covered mountain valley in Caparaó. The lighting is soft and golden from the late afternoon sun. In the background, the lush green textures of the rainforest are visible. The scene evokes a mood of sophisticated tranquility and premium travel experiences."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXfzbaBE8PTZq07JxyGu5Lbbg0CdqpmdRw9sdm3sElUNSUwSwBW9-e9UV73vZB5LBaZTsp8KCivgf41WH10wkDC4PhVSMYATzUqQHUnbdkl5QmlgNvEk2SRVyh9HM-OQKHhXODvg5RL7LK7YQMng4xuAfbs_KQ0ivXD-rkLFZo6KPlTpsDG4YUme2t2RvHzbQ2xZZeyJ563Dbyqf-a3-wFTNKCf96-fmlsMdj9SodoeQBT3eo_XgdmU2WJuqH9FUbn-x9FUSCHljTi"
          />
          <figcaption class="mt-2 text-body-sm font-body-sm text-on-surface-variant italic">
            Turismo de experiência: degustação de cafés premiados com vista para o vale.
          </figcaption>
        </figure>
        <p class="font-body-lg text-body-lg text-on-surface">
          O desafio agora reside no equilíbrio. Autoridades ambientais e empresários locais
          trabalham em conjunto para garantir que o crescimento do fluxo de turistas não comprometa
          a biodiversidade da Mata Atlântica. O plano de manejo do Parque Nacional do Caparaó tem
          sido atualizado para incluir novas trilhas de baixo impacto e sistemas de monitoramento
          digital para garantir a segurança dos visitantes e a integridade da fauna local.
        </p>
        <!-- Advertisement Banner -->
        <div
          class="my-stack-lg w-full bg-surface-container-high h-48 flex flex-col items-center justify-center rounded-lg border border-outline-variant relative overflow-hidden group"
        >
          <span
            class="absolute top-2 left-2 font-label-md text-label-md text-on-surface-variant/50 uppercase tracking-widest"
            >Publicidade</span
          >
          <div class="text-center">
            <p class="font-headline-sm text-headline-sm text-primary mb-2">
              Invista no seu futuro no Caparaó
            </p>
            <p class="font-body-sm text-body-sm text-on-surface-variant mb-4">
              Loteamentos exclusivos com vista para as montanhas.
            </p>
            <button
              class="bg-primary text-white font-label-lg text-label-lg px-6 py-2 rounded-full hover:scale-105 transition-transform"
            >
              Saiba Mais
            </button>
          </div>
        </div>
        <div class="mt-stack-lg pt-stack-lg border-t border-outline-variant">
          <RouterLink to="/">
            <button
              class="flex items-center justify-center gap-3 bg-primary text-white px-8 py-3 rounded-full font-label-lg hover:scale-105 transition-transform shadow-md"
            >
              <span class="material-symbols-outlined">arrow_back</span>
              <span class="uppercase tracking-widest">Voltar para o Início</span>
            </button>
          </RouterLink>
        </div>
      </article>
      <!-- Sidebar -->
      <aside class="lg:col-span-3">
        <div class="flex flex-col gap-stack-lg">
          <!-- Related News -->
          <div>
            <h3
              class="font-label-lg text-label-lg text-primary border-b-2 border-primary mb-4 inline-block uppercase tracking-wider"
            >
              Relacionadas
            </h3>
            <div class="flex flex-col gap-4">
              <a class="group flex gap-3 pb-4 border-b border-outline-variant" href="#">
                <div class="w-20 h-20 shrink-0 rounded overflow-hidden">
                  <img
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    data-alt="A macro photograph of ripe red coffee cherries on a branch, illuminated by morning sunlight in a high-altitude plantation in Caparaó. Deep green leaves provide a sharp contrast. Professional photography style."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXFTONpcjdNnY1MszPrGGa6bJWX-KbO_-uZD6OGPwPAlsQJBzTbg1LY2nF4bo3eDM9AzKYDYcPTgTI2fDWXRYVWNXie2kKzAhyNEXtXTkSAIRqCRY1H_Juhz6UT3b8QyUyyRUnfn2vih1F0lHaJf6W9v7ZRFhtsAPLogo2040ir2H818OYZMG2_x_i4zPo6EGnlsfk-BKKtlb-Pb8c5iLZl7lrK5CLQiQlog5gOn6abpV_BoAbJmvYDkusNsiWaaFhOLSLXj6UHI8R"
                  />
                </div>
                <h4
                  class="font-headline-sm text-headline-sm text-[16px] leading-snug group-hover:text-primary transition-colors"
                >
                  Safra 2024: Cafés do Caparaó batem recorde de pontuação.
                </h4>
              </a>
              <a class="group flex gap-3 pb-4 border-b border-outline-variant" href="#">
                <div class="w-20 h-20 shrink-0 rounded overflow-hidden">
                  <img
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    data-alt="A minimalist architectural shot of a modern boutique hotel built with sustainable wood and glass, nestled into a green mountain slope. Soft evening light."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpEiZvUtVnb5nbrdUCKWd2uuEIRItMYY4RKW6UWyOYNxD28TwUaj2CrWYc6CZWMbfvbxtvEBf2M6ZBzVD5xIYxy8-piQ8LqZP8NLCKY8HESP1RT-CnoqXisV94wG2XUvHKelk0D_EDKHeO2Z776EHKjZ0uXQF5gu9no2TFGLcQoeRV_fydGSlSRj96UfcTy_LgQM3PzO8zmzYQ-2RUmx6BbaRgjaDi8asmAQ7qOOGs8lCrw01BjV9zyDYKyW48qMC9uP2D_6HuOfuz"
                  />
                </div>
                <h4
                  class="font-headline-sm text-headline-sm text-[16px] leading-snug group-hover:text-primary transition-colors"
                >
                  As 5 melhores pousadas para curtir o inverno na serra.
                </h4>
              </a>
              <a class="group flex gap-3 pb-4 border-b border-outline-variant" href="#">
                <div class="w-20 h-20 shrink-0 rounded overflow-hidden">
                  <img
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    data-alt="A clear, rushing mountain waterfall surrounded by ancient rocks and vibrant ferns. The water creates a soft white foam. Natural light."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO03JE9t9qPLJoL6ejPokEHr_a0RjGwS8QI6_sPDWDpbxwe8j6VNIlN5pGdAlUTImIY4uUBx2SOOSm2U8dLo4qCuBbwYogwu5iVvr3RE1nUE7_6X95toJHoSqprljapdMFIPiLTsFaQYW_0XMqk0OOeM5mXpah6vFiR4iOKV_BTdXXNhJoc9C78R43pOFxKVp_D9xWXim20ui6Iw28w8udIYv4fT9tsXm0iT-Ciu-npBlYoRAvzQdlzHp07sUldcr2lCJao-ZP1IEt"
                  />
                </div>
                <h4
                  class="font-headline-sm text-headline-sm text-[16px] leading-snug group-hover:text-primary transition-colors"
                >
                  Trilha das Águas: O roteiro secreto das cachoeiras.
                </h4>
              </a>
            </div>
          </div>
          <!-- Vertical Ad -->
          <div
            class="bg-surface-container h-[600px] w-full flex flex-col items-center justify-center border border-outline-variant rounded-lg p-6 text-center"
          >
            <span
              class="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-auto"
              >Publicidade</span
            >
            <div class="mb-auto">
              <span class="material-symbols-outlined text-primary text-6xl mb-4"
                >real_estate_agent</span
              >
              <p class="font-headline-md text-headline-md text-primary mb-2">G8 Construções</p>
              <p class="font-body-md text-body-md text-on-surface-variant">
                Realizando o sonho da casa na montanha com autoridade e precisão.
              </p>
            </div>
            <button
              class="w-full bg-primary text-white py-3 rounded font-label-lg hover:opacity-90 transition-opacity"
            >
              Consulte Nossos Projetos
            </button>
          </div>
        </div>
      </aside>
    </div>
  </main>
</template>
