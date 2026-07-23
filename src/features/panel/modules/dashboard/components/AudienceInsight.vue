<template>
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
        <div class="flex-1 flex flex-col justify-center items-center relative min-h-[300px]">
          <!-- Decorative Chart Placeholder -->
          <div
            class="w-full h-full absolute inset-0 flex items-end justify-between px-4 pb-8 opacity-20"
          >
            <div class="w-1/6 bg-primary-container rounded-t h-1/3"></div>
            <div class="w-1/6 bg-primary-container rounded-t h-1/2"></div>
            <div class="w-1/6 bg-primary-container rounded-t h-3/4"></div>
            <div class="w-1/6 bg-primary-container rounded-t h-full"></div>
            <div class="w-1/6 bg-primary-container rounded-t h-1/10"></div>
          </div>
          <div class="z-10 text-center space-y-4 bg-surface/80 p-4 rounded backdrop-blur-sm">
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
</template>
