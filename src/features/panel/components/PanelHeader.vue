<template>
  <header
    class="docked full-width top-0 border-b border-outline-variant bg-surface flex justify-between items-center w-full px-margin-x h-16 z-10 shrink-0"
  >
    <div class="w-full flex items-center justify-end gap-3 border-outline-variant">
      <button class="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
        <span class="material-symbols-outlined">notifications</span>
      </button>
      <button class="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
        <span class="material-symbols-outlined">help</span>
      </button>
      <button
        class="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
        @click="console.log('saindo aqui hein')"
      >
        <span class="material-symbols-outlined">logout</span>
      </button>
    </div>
  </header>
</template>
