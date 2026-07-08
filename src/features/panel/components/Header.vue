<template>
  <header
    class="docked full-width top-0 border-b border-outline-variant bg-surface flex justify-between items-center w-full px-margin-x h-16 z-10 shrink-0"
  >
    <div class="flex items-center gap-gutter">
      <span class="font-headline-sm text-headline-sm font-semibold text-primary"
        >Bem-vindo ao Editorial Desk</span
      >
    </div>
    <div class="flex items-center gap-gutter">
      <nav class="hidden lg:flex gap-6">
        <a
          class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-all"
          href="#"
          >Analytics</a
        >
        <a
          class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-all"
          href="#"
          >Archive</a
        >
        <a
          class="font-label-lg text-label-lg text-on-surface-variant hover:text-primary transition-all"
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
</template>
