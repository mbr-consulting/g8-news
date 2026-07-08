<template>
  <main class="max-w-container-max mx-auto px-margin-x py-section-padding">
    <!-- Hero Section -->
    <section class="text-center mb-section-padding max-w-2xl mx-auto">
      <h1 class="font-display-lg text-display-lg text-primary mb-stack-sm">Fale Conosco</h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        Valorizamos sua voz. Entre em contato com nossa equipe editorial para sugestões de pauta ou
        fale com nosso setor comercial para parcerias.
      </p>
    </section>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      <!-- Left Column: Contact Form -->
      <div
        class="lg:col-span-7 bg-surface-container-lowest p-stack-lg rounded-xl shadow-sm border border-outline-variant"
      >
        <form class="space-y-stack-lg" id="contactForm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
            <div class="flex flex-col gap-stack-sm">
              <label class="font-label-lg text-label-lg text-primary" for="fullName"
                >Nome Completo</label
              >
              <input
                class="signature-input bg-transparent py-2 px-1 text-body-md font-body-md placeholder:text-outline"
                id="fullName"
                placeholder="Ex: João Silva"
                type="text"
              />
            </div>
            <div class="flex flex-col gap-stack-sm">
              <label class="font-label-lg text-label-lg text-primary" for="email">Email</label>
              <input
                class="signature-input bg-transparent py-2 px-1 text-body-md font-body-md placeholder:text-outline"
                id="email"
                placeholder="email@exemplo.com"
                type="email"
              />
            </div>
          </div>
          <div class="flex flex-col gap-stack-sm">
            <label class="font-label-lg text-label-lg text-primary" for="subject">Assunto</label>
            <select
              class="signature-input bg-transparent py-2 px-1 text-body-md font-body-md appearance-none"
              id="subject"
            >
              <option value="editorial">Editorial (Sugestão de Pauta)</option>
              <option value="commercial">Comercial (Anúncios)</option>
              <option value="technical">Suporte Técnico</option>
              <option value="other">Outros</option>
            </select>
          </div>
          <div class="flex flex-col gap-stack-sm">
            <label class="font-label-lg text-label-lg text-primary" for="message">Mensagem</label>
            <textarea
              class="signature-input bg-transparent py-2 px-1 text-body-md font-body-md placeholder:text-outline resize-none"
              id="message"
              placeholder="Como podemos ajudar?"
              rows="5"
            ></textarea>
          </div>
          <button
            class="w-full md:w-auto bg-primary text-on-primary px-stack-lg py-4 rounded-lg font-label-lg text-label-lg uppercase tracking-wider hover:bg-primary-container transition-colors active:scale-[0.98]"
            type="submit"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
      <!-- Right Column: Info Cards -->
      <div class="lg:col-span-5 space-y-stack-md">
        <!-- Redação Card -->
        <div
          class="p-stack-md bg-surface-container-low border border-outline-variant rounded-xl group hover:border-primary transition-all duration-300"
        >
          <div class="flex items-start gap-stack-md">
            <div class="bg-primary text-on-primary p-3 rounded-lg">
              <span class="material-symbols-outlined">edit_note</span>
            </div>
            <div>
              <span class="font-label-lg text-label-lg text-secondary uppercase block mb-1"
                >Redação</span
              >
              <h3 class="font-headline-sm text-headline-sm text-primary mb-1">Envie uma Pauta</h3>
              <p class="text-body-sm text-on-surface-variant mb-stack-sm">
                Tem um furo de notícia ou sugestão para nossos jornalistas?
              </p>
              <a
                class="text-primary font-semibold hover:underline flex items-center gap-1"
                href="mailto:redacao@g8news.com.br"
              >
                redacao@g8news.com.br
              </a>
            </div>
          </div>
        </div>
        <!-- Comercial Card -->
        <div
          class="p-stack-md bg-surface-container-low border border-outline-variant rounded-xl group hover:border-primary transition-all duration-300"
        >
          <div class="flex items-start gap-stack-md">
            <div class="bg-primary text-on-primary p-3 rounded-lg">
              <span class="material-symbols-outlined">payments</span>
            </div>
            <div>
              <span class="font-label-lg text-label-lg text-secondary uppercase block mb-1"
                >Comercial</span
              >
              <h3 class="font-headline-sm text-headline-sm text-primary mb-1">Anuncie Conosco</h3>
              <p class="text-body-sm text-on-surface-variant mb-stack-sm">
                Alcance o público certo através de nossas soluções de mídia digital.
              </p>
              <div class="space-y-1">
                <a class="text-primary font-semibold hover:underline block" href="tel:+552733333333"
                  >(27) 3333-3333</a
                >
                <a
                  class="text-primary font-semibold hover:underline block"
                  href="mailto:comercial@g8news.com.br"
                  >comercial@g8news.com.br</a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- Endereço Card -->
        <div
          class="p-stack-md bg-surface-container-low border border-outline-variant rounded-xl group hover:border-primary transition-all duration-300"
        >
          <div class="flex items-start gap-stack-md">
            <div class="bg-primary text-on-primary p-3 rounded-lg">
              <span class="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <span class="font-label-lg text-label-lg text-secondary uppercase block mb-1"
                >Sede</span
              >
              <h3 class="font-headline-sm text-headline-sm text-primary mb-1">Onde Estamos</h3>
              <p class="text-body-sm text-on-surface-variant">
                Av. Dante Michelini, 1200<br />
                Ed. Business Center, Sala 402<br />
                Vitória, ES - 29060-000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Location Map -->
    <section class="mt-section-padding">
      <div
        class="relative w-full h-[450px] rounded-xl overflow-hidden shadow-lg border border-outline-variant grayscale hover:grayscale-0 transition-all duration-700"
      >
        <div
          class="absolute inset-0 bg-surface-container-high animate-pulse flex items-center justify-center"
          id="map-placeholder"
        >
          <span class="material-symbols-outlined text-outline text-6xl">map</span>
        </div>
        <div
          class="w-full h-full bg-cover bg-center"
          data-alt="A cinematic, high-resolution aerial view of Vitória, Espírito Santo coastline during the golden hour. The image features the curves of Dante Michelini Avenue and the beach, captured in a clean, editorial architectural photography style. The lighting is warm and inviting, aligning with a professional corporate news aesthetic with soft greens and neutral tones."
          style="
            background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0JN9luGmvcFtjUsqGJpx_EgstEjaGWwz4OHiWo-yEK5eTV_jwf0VnScpTC-sG0D2GjFrxYBbeKlqoVoHDklERaZR8DoLnMBGgJnGFZPvtKPnCYcf68z808mDwVmZRER7lPwbwQZzDjSuDod9AMKNIMA5TJGc8cxhLqFvxR27-GSZOBas2-IKrpeSJjxwlqUgImnqny-qjp4qIyDKnciZc4yIcIuk0jCl_oaA76Zwhiy_p8DcE4L_rZJmZMlcGRwyxkBl4mXuljz_d');
          "
        ></div>
        <div
          class="absolute bottom-stack-md left-stack-md bg-surface-container-lowest p-stack-md rounded-lg border border-outline-variant shadow-xl max-w-sm"
        >
          <h4 class="font-headline-sm text-headline-sm text-primary mb-1">G8 News Headquarters</h4>
          <p class="text-body-sm text-on-surface-variant flex items-center gap-2">
            <span
              class="material-symbols-outlined text-secondary text-sm"
              style="font-variation-settings: 'FILL' 1"
              >location_on</span
            >
            Vitória, Espírito Santo, Brasil
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
