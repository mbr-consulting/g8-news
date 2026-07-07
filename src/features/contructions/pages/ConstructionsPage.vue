<template>
  <main>
    <!-- Hero Section -->
    <section class="relative bg-primary py-section-padding overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div
          class="absolute top-0 right-0 w-1/2 h-full bg-secondary-container blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"
        ></div>
      </div>
      <div
        class="max-w-container-max mx-auto px-margin-x relative z-10 grid lg:grid-cols-12 gap-gutter items-center"
      >
        <div class="lg:col-span-7 flex flex-col gap-stack-md">
          <span class="text-secondary font-label-lg text-label-lg tracking-widest uppercase"
            >Grupo G8</span
          >
          <h1 class="font-display-lg text-display-lg text-on-primary leading-tight">
            Somos G8 News Participações
          </h1>
          <p class="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mt-4">
            Nossa empresa oferece serviços em estruturas metálicas, construção de galpões,
            passarelas, complexo esportivos, consertos e fabricação sob medida, incluindo coberturas
            metálicas, mezaninos, telhados retráteis, portões, escadas caracol, marinheiro e muito
            mais.
          </p>
          <p class="font-body-md text-body-md text-on-primary/70 max-w-2xl">
            Nosso foco é fortalecer negócios através de obras comerciais, industriais e
            institucionais, com respeito, confiança e comprometimento, visando crescimento e
            melhoria contínua de nossos processos, produtos e serviços, buscando novas oportunidades
            de negócios e parcerias.
          </p>
          <div class="flex flex-wrap gap-4 mt-stack-md">
            <button
              class="bg-secondary-container text-on-secondary-container px-8 py-3 font-label-lg text-label-lg rounded-DEFAULT hover:opacity-90 transition-all flex items-center gap-2"
            >
              SOLICITAR ORÇAMENTO <span class="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div class="lg:col-span-5 hidden lg:block">
          <div
            class="aspect-square bg-surface-container-high rounded-xl overflow-hidden shadow-2xl relative border-8 border-primary-container"
          >
            <img
              class="w-full h-full object-cover"
              data-alt="High-angle professional photograph of a sophisticated steel structure construction site for an industrial warehouse. The intricate metal beams create a geometric pattern against a clear blue sky, emphasizing the precision and scale of G8 Construções projects. Warm sunlight illuminates the textures of the steel, while the overall composition conveys architectural excellence and industrial strength."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9_gwOMvJlmsPDzo0CiMjpGd_IgMhsMSUX71YwSctsIfKaieXuMmsIIJbIuZXASHskJ3DCfkDN5Cc4DAQM0qpwqpjiaNGiqBVSeMfQ0xxCE69IKqibm9l2rxEbZDpBxgeEsSwkT6Tu9I5LGB-N8hpeQUcbgag2zrkjs_B_XI3qQ84lzPBXVOLhmz_m3InpiyfEG06P45TbhFQgccB_fRw-UwKbJIOEAvvVnr-5eAGOzgBy6Zjn6LD4acCMw64ALMEi0_8xD_hfOCTx"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- Services Section -->
    <section class="bg-surface py-section-padding">
      <div class="max-w-container-max mx-auto px-margin-x">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-stack-lg gap-4">
          <div class="flex flex-col gap-2">
            <div class="w-12 h-1 bg-secondary"></div>
            <h2 class="font-headline-lg text-headline-lg text-primary">Produtos e Serviços</h2>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant max-w-md">
            Soluções completas em engenharia metálica com rigor técnico e acabamento superior para
            todos os segmentos.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-gutter">
          <!-- Service 1 -->
          <div class="flex flex-col group cursor-pointer">
            <div class="aspect-[1.75] overflow-hidden rounded-lg mb-stack-md bg-surface-container">
              <img
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Detailed view of a professional steel structure assembly on a commercial construction site. Workers in safety gear are performing TIG and MIG welding on large metal beams, creating a clean and modern industrial framework. The lighting is crisp and natural, highlighting the metallic sheen and the precision of the construction process in a high-end editorial style."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9_gwOMvJlmsPDzo0CiMjpGd_IgMhsMSUX71YwSctsIfKaieXuMmsIIJbIuZXASHskJ3DCfkDN5Cc4DAQM0qpwqpjiaNGiqBVSeMfQ0xxCE69IKqibm9l2rxEbZDpBxgeEsSwkT6Tu9I5LGB-N8hpeQUcbgag2zrkjs_B_XI3qQ84lzPBXVOLhmz_m3InpiyfEG06P45TbhFQgccB_fRw-UwKbJIOEAvvVnr-5eAGOzgBy6Zjn6LD4acCMw64ALMEi0_8xD_hfOCTx"
              />
            </div>
            <div class="flex flex-col gap-stack-sm p-2">
              <span class="text-secondary font-label-md text-label-md uppercase tracking-wider"
                >Estruturas Metálicas</span
              >
              <h3
                class="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors uppercase"
              >
                FABRICAÇÃO E MONTAGEM DE ESTRUTURAS METÁLICAS
              </h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                Fabricação, (soldas TIG e MIG), e Montagem de estruturas residenciais, comerciais,
                industriais, postos de gasolina e projetos especiais.
              </p>
            </div>
          </div>
          <!-- Service 2 -->
          <div class="flex flex-col group cursor-pointer">
            <div class="aspect-[1.75] overflow-hidden rounded-lg mb-stack-md bg-surface-container">
              <img
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Architectural aerial shot of a world-class sports training facility designed and built with premium materials. The image showcases professional soccer fields surrounded by high-quality metal fencing, spectator seating with metal supports, and integrated athlete amenities. The composition is balanced and symmetric, reflecting the order and excellence of G8 sports projects under bright, clear daylight."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXZvM5igxmUeLr9wYMho5lmnJ9TBxz7SIxYscgQAufhxIpRFHvbeiVGTm1IUA5Xrlsi5SxbFL4OTssz6zCQ8j3QcqFmvTYCSFkV3ggYUMsU5nsp_uGSktUTbV7tas4do3DEfGz2en9ZLS41V7VOHu3Iu3urkYt7m2PdPy1dzyV7wtcOs6R9L2m_KAHxpS9ybrE_itnwHCc7uf3-KP43k19MabmauSHJQ1vV7xVaGfUUdFOCYEMqanVsQlPqT1UtmCxVgXxv0U5mynE"
              />
            </div>
            <div class="flex flex-col gap-stack-sm p-2">
              <span class="text-secondary font-label-md text-label-md uppercase tracking-wider"
                >Esportivos</span
              >
              <h3
                class="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors uppercase"
              >
                PROJETOS ESPECIAIS COMPLEXO ESPORTIVO
              </h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                Instalação de alambrados, telas de proteção, fabricação e instalação de portões,
                bicicletários, caixas de energia, guarnição de arquibancadas, escadas marinheiro.
              </p>
            </div>
          </div>
          <!-- Service 3 -->
          <div class="flex flex-col group cursor-pointer">
            <div class="aspect-[1.75] overflow-hidden rounded-lg mb-stack-md bg-surface-container">
              <img
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-alt="Close-up high-resolution photograph of a metal roof restoration project on a large industrial facility. Specialized technicians are seen installing modern, high-performance metal tiles and a seamless gutter system. The focus is on the intricate joints and the quality of the new materials, illustrating G8's commitment to durability and meticulous maintenance in a bright, clean construction environment."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPY3BVqaP1Frmo8NAAm8E8TRGWw2wOYolOQury9BvrNdccljgTJpYu7MV8wD2PYpxeeen6nFDrq-OgqXkdybf3NyV71c5RLfszdINkzBhqqlWhfBA3UH4tb3PR2VtOg9VMuxbL8j4wGWtrj5ToqLUMe8V_qocjRIv_Tkn5NlUq0oqBwTXPvTTKk7X8lb8U363itnDHGuxMswhCU_JNkZWpaSo7T6R35qhQqBPmmNT0lST5p_0Sd3uzRDoPi2zmGKl8019pTHZCKrx0"
              />
            </div>
            <div class="flex flex-col gap-stack-sm p-2">
              <span class="text-secondary font-label-md text-label-md uppercase tracking-wider"
                >Manutenção</span
              >
              <h3
                class="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors uppercase"
              >
                REFORMAS E REFORÇO DE ESTRUTURAS METÁLICAS
              </h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                Ampliação de estruturas metálicas e coberturas. Substituição de telhas e coberturas
                danificadas pelo tempo, acidentes ou desastres naturais. Instalação de calhas e
                ruffos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Section -->
    <section class="bg-surface-container-low py-section-padding">
      <div class="max-w-container-max mx-auto px-margin-x">
        <div
          class="bg-surface p-8 md:p-16 rounded-xl border border-outline-variant shadow-sm flex flex-col md:flex-row gap-gutter"
        >
          <div class="md:w-1/2 flex flex-col gap-stack-md">
            <h2 class="font-headline-lg text-headline-lg text-primary">Entre em Contato</h2>
            <p class="font-body-lg text-body-lg text-on-surface-variant">
              Estamos prontos para transformar sua necessidade em uma obra sólida e duradoura. Fale
              com nossos especialistas.
            </p>
            <div class="flex flex-col gap-6 mt-4">
              <div class="flex items-center gap-4 group">
                <div
                  class="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container group-hover:bg-primary group-hover:text-on-primary transition-colors"
                >
                  <span class="material-symbols-outlined">call</span>
                </div>
                <div class="flex flex-col">
                  <span class="font-label-md text-label-md text-secondary uppercase">Telefone</span>
                  <span class="font-body-lg text-body-lg text-on-surface font-semibold"
                    >(XX) XXXX-XXXX</span
                  >
                </div>
              </div>
              <div class="flex items-center gap-4 group">
                <div
                  class="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container group-hover:bg-primary group-hover:text-on-primary transition-colors"
                >
                  <span class="material-symbols-outlined">mail</span>
                </div>
                <div class="flex flex-col">
                  <span class="font-label-md text-label-md text-secondary uppercase">E-mail</span>
                  <span class="font-body-lg text-body-lg text-on-surface font-semibold"
                    >contato@g8construcoes.com.br</span
                  >
                </div>
              </div>
              <div class="flex items-center gap-4 group">
                <div
                  class="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container group-hover:bg-primary group-hover:text-on-primary transition-colors"
                >
                  <span class="material-symbols-outlined">chat_bubble</span>
                </div>
                <div class="flex flex-col">
                  <span class="font-label-md text-label-md text-secondary uppercase">WhatsApp</span>
                  <span class="font-body-lg text-body-lg text-on-surface font-semibold"
                    >(XX) X XXXX-XXXX</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 mt-stack-lg md:mt-0">
            <form class="grid grid-cols-1 gap-4">
              <div>
                <label class="block font-label-lg text-label-lg text-primary mb-1"
                  >NOME COMPLETO</label
                >
                <input
                  class="w-full bg-surface-container border-0 border-b-2 border-primary-container focus:border-primary focus:ring-0 transition-all px-4 py-3"
                  placeholder="Seu nome"
                  type="text"
                />
              </div>
              <div>
                <label class="block font-label-lg text-label-lg text-primary mb-1">E-MAIL</label>
                <input
                  class="w-full bg-surface-container border-0 border-b-2 border-primary-container focus:border-primary focus:ring-0 transition-all px-4 py-3"
                  placeholder="seu@email.com"
                  type="email"
                />
              </div>
              <div>
                <label class="block font-label-lg text-label-lg text-primary mb-1">MENSAGEM</label>
                <textarea
                  class="w-full bg-surface-container border-0 border-b-2 border-primary-container focus:border-primary focus:ring-0 transition-all px-4 py-3"
                  placeholder="Como podemos ajudar?"
                  rows="4"
                ></textarea>
              </div>
              <button
                class="bg-primary text-on-primary w-full py-4 font-label-lg text-label-lg rounded-DEFAULT hover:opacity-90 transition-all mt-2"
              >
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
