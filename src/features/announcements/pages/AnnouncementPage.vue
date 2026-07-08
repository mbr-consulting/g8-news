<script setup lang="ts">
import Section from '../components/Section.vue'
</script>

<template>
  <main class="min-h-screen">
    <!-- Hero Section -->
    <section
      class="bg-surface-container-low py-section-padding px-margin-x text-center border-b border-outline-variant"
    >
      <div class="max-w-[800px] mx-auto space-y-stack-sm">
        <span class="font-label-lg text-label-lg text-secondary uppercase tracking-[0.2em]"
          >ANUNCIANTES</span
        >
        <h2 class="font-headline-lg text-[48px] md:text-[64px] leading-tight text-primary">
          Hotel / Gastro
        </h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
          Conheça nossos parceiros e os melhores destinos de hospedagem e gastronomia da região,
          selecionados pela autoridade do G8 News.
        </p>
      </div>
    </section>
    <!-- Content Area -->
    <div class="max-w-container-max mx-auto px-margin-x py-section-padding space-y-24">
      <Section title="Testando aqui" :items="[]" />
      <!-- Category: Restaurantes e Cafés -->
      <!-- <section class="space-y-stack-lg">
        <div class="flex items-center gap-4">
          <h3 class="font-headline-md text-headline-md text-primary shrink-0">
            Restaurantes e Cafés
          </h3>
          <div class="h-[1px] w-full bg-outline-variant"></div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter">
          <a
            class="group block text-center space-y-stack-md transition-all active:scale-95"
            href="#"
          >
            <div
              class="aspect-square bg-white border border-outline-variant rounded-lg overflow-hidden flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow bg-[url('placeholder')] bg-cover bg-center"
              data-alt="A clean, professional minimalist logo for a high-end restaurant named 'Bistrô do Vale'. The logo is a sophisticated dark green monogram on a textured cream paper background, reflecting an elegant light-mode editorial aesthetic. The lighting is soft and even, mimicking a studio photography setup for a luxury corporate brand."
            ></div>
            <span
              class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors block"
              >Bistrô do Vale</span
            >
          </a>
          <a
            class="group block text-center space-y-stack-md transition-all active:scale-95"
            href="#"
          >
            <div
              class="aspect-square bg-white border border-outline-variant rounded-lg overflow-hidden flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow bg-[url('placeholder')] bg-cover bg-center"
              data-alt="A modern minimalist logo for a premium coffee shop called 'Grão &amp; Aroma'. The design features a stylized coffee bean silhouette in deep gold and primary green. The background is a clean, bright white with a very subtle leather texture. The aesthetic is sophisticated, modern, and perfectly aligned with a professional news portal's hotel/gastro section."
            ></div>
            <span
              class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors block"
              >Grão &amp; Aroma</span
            >
          </a>
          <a
            class="group block text-center space-y-stack-md transition-all active:scale-95"
            href="#"
          >
            <div
              class="aspect-square bg-white border border-outline-variant rounded-lg overflow-hidden flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow bg-[url('placeholder')] bg-cover bg-center"
              data-alt="Corporate identity logo for 'Sabor da Terra' restaurant. The visual style is minimalist and high-contrast, featuring a modern sans-serif typography inside a thin green circular frame. The setting is bright and clean, typical of a professional editorial layout. The overall mood is established and trustworthy."
            ></div>
            <span
              class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors block"
              >Sabor da Terra</span
            >
          </a>
          <a
            class="group block text-center space-y-stack-md transition-all active:scale-95"
            href="#"
          >
            <div
              class="aspect-square bg-white border border-outline-variant rounded-lg overflow-hidden flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow bg-[url('placeholder')] bg-cover bg-center"
              data-alt="Minimalist luxury logo for 'Cozinha Autoral' with a focus on geometric balance. Deep green primary color on a light grey background with subtle grain. The lighting is soft high-key, emphasizing the clean lines and professional design of the corporate branding. Sophisticated and modern editorial style."
            ></div>
            <span
              class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors block"
              >Cozinha Autoral</span
            >
          </a>
          <a
            class="group block text-center space-y-stack-md transition-all active:scale-95"
            href="#"
          >
            <div
              class="aspect-square bg-white border border-outline-variant rounded-lg overflow-hidden flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow bg-[url('placeholder')] bg-cover bg-center"
              data-alt="Elegant logo design for 'Cantina della Nonna' featuring a minimalist line-art illustration of an olive branch. The palette consists of gold accents and deep green on a pristine white background. The image is framed as a professional brand asset for a high-end travel and gastronomy guide, reflecting authority and precision."
            ></div>
            <span
              class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors block"
              >Cantina Nonna</span
            >
          </a>
          <a
            class="group block text-center space-y-stack-md transition-all active:scale-95"
            href="#"
          >
            <div
              class="aspect-square bg-white border border-outline-variant rounded-lg overflow-hidden flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow bg-[url('placeholder')] bg-cover bg-center"
              data-alt="Modern geometric logo for 'Urban Eats' cafe. Bright light-mode aesthetic with sharp focus on the logo's clean typography and minimalist icon. Background is a neutral off-white. The aesthetic follows a corporate digital-first news portal style, emphasizing clarity, professionalism, and high-quality information architecture."
            ></div>
            <span
              class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors block"
              >Urban Eats</span
            >
          </a>
        </div>
      </section> -->
      <!-- Category: Hotéis e Pousadas -->
      <!-- <section class="space-y-stack-lg">
        <div class="flex items-center gap-4">
          <h3 class="font-headline-md text-headline-md text-primary shrink-0">Hotéis e Pousadas</h3>
          <div class="h-[1px] w-full bg-outline-variant"></div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter">
          <a
            class="group block text-center space-y-stack-md transition-all active:scale-95"
            href="#"
          >
            <div
              class="aspect-square bg-white border border-outline-variant rounded-lg overflow-hidden flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow bg-[url('placeholder')] bg-cover bg-center"
              data-alt="A premium hotel logo for 'Grand Plaza Hotel'. The logo features a minimalist crown icon in gold and dark green serif text. The background is a clean white stone texture. The lighting is bright and airy, creating a professional and welcoming mood suitable for a luxury travel directory on a news site."
            ></div>
            <span
              class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors block"
              >Grand Plaza</span
            >
          </a>
          <a
            class="group block text-center space-y-stack-md transition-all active:scale-95"
            href="#"
          >
            <div
              class="aspect-square bg-white border border-outline-variant rounded-lg overflow-hidden flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow bg-[url('placeholder')] bg-cover bg-center"
              data-alt="Minimalist eco-friendly logo for 'Eco-Resort das Águas'. Features a stylized water drop and leaf icon in vibrant green and gold. Background is a very light cream. Professional studio lighting with a clean, modern aesthetic. The design evokes serenity and environmental responsibility within a corporate news framework."
            ></div>
            <span
              class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors block"
              >Eco-Resort Águas</span
            >
          </a>
          <a
            class="group block text-center space-y-stack-md transition-all active:scale-95"
            href="#"
          >
            <div
              class="aspect-square bg-white border border-outline-variant rounded-lg overflow-hidden flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow bg-[url('placeholder')] bg-cover bg-center"
              data-alt="Sophisticated logo for 'Pousada Solar'. Minimalist sun-burst icon in gold foil effect on a dark green primary background. The design is displayed as a clean brand mark on a modern UI card. The lighting is sophisticated, with subtle gradients that suggest a high-end editorial journal's advertising section."
            ></div>
            <span
              class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors block"
              >Pousada Solar</span
            >
          </a>
          <a
            class="group block text-center space-y-stack-md transition-all active:scale-95"
            href="#"
          >
            <div
              class="aspect-square bg-white border border-outline-variant rounded-lg overflow-hidden flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow bg-[url('placeholder')] bg-cover bg-center"
              data-alt="Corporate hotel logo for 'Executive Suites'. Clean, bold sans-serif typography in deep primary green on a white minimalist background. The aesthetic is established, corporate, and precise. High-key lighting ensures every detail of the branding is visible, reflecting the precision of modern journalism."
            ></div>
            <span
              class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors block"
              >Executive Suites</span
            >
          </a>
        </div>
      </section> -->
      <!-- Category: Experiências Gastronômicas -->
      <!-- <section class="space-y-stack-lg">
        <div class="flex items-center gap-4">
          <h3 class="font-headline-md text-headline-md text-primary shrink-0">
            Experiências Gastronômicas
          </h3>
          <div class="h-[1px] w-full bg-outline-variant"></div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-gutter">
          <a
            class="group block text-center space-y-stack-md transition-all active:scale-95"
            href="#"
          >
            <div
              class="aspect-square bg-white border border-outline-variant rounded-lg overflow-hidden flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow bg-[url('placeholder')] bg-cover bg-center"
              data-alt="Elegant branding for 'Vinhedos do Norte' wine tasting tours. A minimalist logo showing a cluster of grapes in a sophisticated green and gold line-art style. The background is a clean white textured paper. The lighting is high-key and professional, suitable for a premium advertiser card on a corporate news site."
            ></div>
            <span
              class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors block"
              >Vinhedos do Norte</span
            >
          </a>
          <a
            class="group block text-center space-y-stack-md transition-all active:scale-95"
            href="#"
          >
            <div
              class="aspect-square bg-white border border-outline-variant rounded-lg overflow-hidden flex items-center justify-center p-6 group-hover:shadow-lg transition-shadow bg-[url('placeholder')] bg-cover bg-center"
              data-alt="Modern logo for 'Tour Gastronômico Local'. Minimalist fork and map pin icon in primary green. The design is clean, high-contrast, and professional. The overall feel is modern and digital-first, with soft shadows and a bright white background that emphasizes the authority and quality of the brand."
            ></div>
            <span
              class="font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors block"
              >Tour Gastronômico</span
            >
          </a>
        </div>
      </section> -->
      <!-- Lead Gen Section for Advertisers -->
      <section class="bg-primary text-on-primary rounded-xl p-12 text-center space-y-stack-md">
        <h4 class="font-headline-md text-headline-md">Sua marca aqui no G8 News?</h4>
        <p class="font-body-md text-body-md text-on-primary/80 max-w-2xl mx-auto">
          Alcance uma audiência qualificada e interessada no melhor que a nossa região tem a
          oferecer. Faça parte do nosso guia exclusivo de anunciantes.
        </p>
        <div class="pt-4">
          <button
            class="bg-secondary text-on-secondary px-8 py-3 rounded font-label-lg text-label-lg hover:bg-secondary-container hover:text-on-secondary-container transition-all active:scale-95"
          >
            SEJA UM PARCEIRO
          </button>
        </div>
      </section>
    </div>
  </main>
</template>
