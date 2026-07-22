<template>
  <div
    class="p-4 border-t border-surface-container-high bg-surface-container-lowest flex items-center justify-between"
  >
    <span class="font-body-sm text-body-sm text-on-surface-variant"
      >Mostrando 1 a 4 de 24 registros</span
    >
    <div class="flex items-center gap-1">
      <button
        class="p-1 rounded text-outline hover:bg-surface-container hover:text-on-surface transition-colors"
      >
        <span class="material-symbols-outlined text-[20px]">chevron_left</span>
      </button>
      <button
        class="w-8 h-8 flex items-center justify-center rounded bg-primary-container text-on-primary-container font-label-md text-label-md font-bold"
      >
        1
      </button>
      <button
        class="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container transition-colors font-label-md text-label-md"
      >
        2
      </button>
      <button
        class="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container transition-colors font-label-md text-label-md"
      >
        3
      </button>
      <span class="text-on-surface-variant px-1">...</span>
      <button
        class="p-1 rounded text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
      >
        <span class="material-symbols-outlined text-[20px]">chevron_right</span>
      </button>
    </div>
  </div>
</template>
