<script setup lang="ts">
import ButtonTag from '../ButtonTag.vue'
</script>

<template>
  <div class="flex flex-col gap-stack-sm mt-2">
    <label class="font-label-md text-label-md text-on-surface-variant" for="tags">Tags</label>
    <div class="flex flex-col gap-2">
      <div class="relative">
        <input
          class="input-signature w-full px-4 py-3 font-body-md text-body-md text-on-surface pr-10"
          id="tags"
          placeholder="Adicione tags..."
          type="text"
        />
        <button
          class="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:bg-surface-container w-8 h-8 rounded-full flex items-center justify-center transition-colors"
          type="button"
        >
          <span class="material-symbols-outlined text-[20px]">add</span>
        </button>
      </div>
      <!-- Chips Container -->
      <div class="flex flex-wrap gap-2 mt-1">
        <!-- TODO: Código para adicionar os button tags dinamente -->
        <ButtonTag title="Notícias" />
        <ButtonTag title="Tecnologia" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.input-signature {
  border: none;
  border-bottom: 2px solid transparent;
  border-radius: 0.125rem 0.125rem 0 0;
  background-color: var(--tw-colors-surface-container-low);
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;
}
.input-signature:focus {
  outline: none;
  box-shadow: none;
  border-bottom-color: var(--tw-colors-primary);
  background-color: var(--tw-colors-surface-container);
}
</style>
