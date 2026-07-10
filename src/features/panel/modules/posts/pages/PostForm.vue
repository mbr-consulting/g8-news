<template>
  <div class="flex-1 overflow-y-auto bg-background p-margin-x">
    <div class="max-w-container-max mx-auto">
      <form class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <!-- Left Column: Main Content -->
        <div class="md:col-span-8 flex flex-col gap-stack-lg">
          <!-- Title -->
          <div class="flex flex-col gap-stack-sm">
            <label class="font-label-lg text-label-lg text-on-surface" for="titulo"
              >Título da Publicação</label
            >
            <input
              class="input-signature w-full px-4 py-4 font-headline-sm text-headline-sm text-on-surface placeholder:text-on-surface-variant/50"
              id="titulo"
              placeholder="Insira um título chamativo..."
              type="text"
            />
          </div>
          <!-- Subtitle -->
          <div class="flex flex-col gap-stack-sm">
            <label class="font-label-lg text-label-lg text-on-surface" for="subtitulo"
              >Subtítulo (Opcional)</label
            >
            <input
              class="input-signature w-full px-4 py-3 font-body-lg text-body-lg text-on-surface placeholder:text-on-surface-variant/50"
              id="subtitulo"
              placeholder="Complemente a informação do título..."
              type="text"
            />
          </div>
          <!-- Rich Text Editor Mock -->
          <div class="flex flex-col gap-stack-sm h-full min-h-[500px]">
            <label class="font-label-lg text-label-lg text-on-surface" for="texto">Texto</label>
            <div
              class="border border-outline-variant rounded-lg bg-surface-container-lowest flex flex-col h-full overflow-hidden shadow-sm shadow-primary/5"
            >
              <!-- Editable Area -->
              <textarea
                class="w-full flex-1 p-6 resize-none outline-none border-none bg-transparent font-body-md text-body-md text-on-surface leading-relaxed placeholder:text-on-surface-variant/40"
                id="texto"
                placeholder="Comece a escrever sua matéria aqui..."
              ></textarea>
            </div>
          </div>

          <div class="md:col-span-8 flex flex-col gap-stack-lg">
            botão de publicação botão de rascunho
          </div>
        </div>
        <!-- Right Column: Settings & Meta -->
        <div class="md:col-span-4 flex flex-col gap-stack-lg">
          <!-- Settings Card -->
          <div
            class="bg-surface-container-lowest border border-outline-variant rounded-lg p-stack-md flex flex-col gap-stack-md shadow-sm shadow-primary/5"
          >
            <h3
              class="font-headline-sm text-headline-sm text-on-surface border-b border-outline-variant pb-2"
            >
              Configurações de Publicação
            </h3>
            <!-- Tipo Dropdown -->
            <div class="flex flex-col gap-stack-sm mt-2">
              <label class="font-label-md text-label-md text-on-surface-variant" for="tipo"
                >Tipo de Conteúdo</label
              >
              <div class="relative">
                <select
                  class="input-signature w-full px-4 py-3 font-body-md text-body-md text-on-surface appearance-none pr-10 cursor-pointer"
                  id="tipo"
                >
                  <option value="publicacao">Publicação Padrão</option>
                  <option value="editorial">Editorial / Opinião</option>
                </select>
                <span
                  class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant"
                  >arrow_drop_down</span
                >
              </div>
            </div>
            <!-- Data de Publicação -->
            <div class="flex flex-col gap-stack-sm">
              <label class="font-label-md text-label-md text-on-surface-variant" for="data"
                >Data de Publicação</label
              >
              <div class="relative">
                <input
                  class="input-signature w-full px-4 py-3 font-body-md text-body-md text-on-surface"
                  id="data"
                  type="datetime-local"
                />
              </div>
            </div>
            <!-- Tags -->
            <div class="flex flex-col gap-stack-sm mt-2">
              <label class="font-label-md text-label-md text-on-surface-variant" for="tags"
                >Tags</label
              >
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
                  <span
                    class="inline-flex items-center gap-1 bg-secondary-container/30 text-primary px-3 py-1 rounded-full font-label-md text-label-md"
                  >
                    Notícias
                    <button class="hover:text-error transition-colors" type="button">
                      <span class="material-symbols-outlined text-[14px]">close</span>
                    </button>
                  </span>
                  <span
                    class="inline-flex items-center gap-1 bg-secondary-container/30 text-primary px-3 py-1 rounded-full font-label-md text-label-md"
                  >
                    Construção
                    <button class="hover:text-error transition-colors" type="button">
                      <span class="material-symbols-outlined text-[14px]">close</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- Featured Image Card -->
          <div
            class="bg-surface-container-lowest border border-outline-variant rounded-lg p-stack-md flex flex-col gap-stack-md shadow-sm shadow-primary/5"
          >
            <h3
              class="font-headline-sm text-headline-sm text-on-surface border-b border-outline-variant pb-2"
            >
              Imagem de Destaque
            </h3>
            <div
              class="mt-2 border-2 border-dashed border-outline-variant rounded-lg bg-surface-container-low flex flex-col items-center justify-center py-stack-lg gap-3 hover:bg-surface-variant hover:border-primary transition-all cursor-pointer group"
            >
              <div
                class="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors"
              >
                <span class="material-symbols-outlined">add_photo_alternate</span>
              </div>
              <div class="text-center">
                <p class="font-label-lg text-label-lg text-on-surface">Clique para fazer upload</p>
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  PNG, JPG ou WEBP (Max 5MB)
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
/* Custom styles for the specific input aesthetic requested */
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

/* Subtle scrollbar for editor */
/* ::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--tw-colors-surface);
}
::-webkit-scrollbar-thumb {
  background: var(--tw-colors-outline-variant);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--tw-colors-outline);
} */
</style>
