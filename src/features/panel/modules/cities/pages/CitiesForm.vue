<template>
  <div class="max-w-container-max mx-auto px-4 md:px-margin-x py-section-padding">
    <div class="mb-stack-lg">
      <h1
        class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-stack-sm"
      >
        Configuração de Cidades e Anunciantes
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant">
        Gerencie os vínculos de cidades e o diretório de anunciantes locais.
      </p>
    </div>
    <!-- Layout Grid for Forms -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      <!-- Left Column: City Form -->
      <div
        class="lg:col-span-7 bg-surface-container-lowest rounded-lg border border-outline-variant p-stack-lg shadow-sm"
      >
        <div
          class="flex items-center gap-stack-sm mb-stack-md border-b border-outline-variant pb-stack-sm"
        >
          <span class="material-symbols-outlined text-primary fill" data-icon="location_city"
            >location_city</span
          >
          <h2 class="font-headline-sm text-headline-sm text-primary">Vínculo de Cidade</h2>
        </div>
        <form class="space-y-stack-md">
          <!-- Brasão Upload -->
          <div>
            <label class="block font-label-md text-label-md text-on-surface-variant mb-stack-sm"
              >Brasão da Cidade</label
            >
            <div
              class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-outline-variant border-dashed rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group"
            >
              <div class="space-y-1 text-center">
                <span
                  class="material-symbols-outlined text-outline text-4xl group-hover:text-primary transition-colors"
                  data-icon="upload_file"
                  >upload_file</span
                >
                <div class="flex font-body-sm text-body-sm text-on-surface justify-center">
                  <span
                    class="relative cursor-pointer bg-transparent rounded-md font-medium text-primary hover:text-primary-container focus-within:outline-none"
                  >
                    <span>Fazer upload do Brasão</span>
                    <input class="sr-only" id="brasao-upload" name="brasao-upload" type="file" />
                  </span>
                </div>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  PNG, JPG, GIF até 5MB
                </p>
              </div>
            </div>
          </div>
          <!-- Nome & Subtítulo -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
            <div>
              <label
                class="block font-label-md text-label-md text-on-surface-variant mb-1"
                for="cidade-nome"
                >Nome da Cidade</label
              >
              <input
                class="block w-full border-0 border-b border-outline bg-surface-container-low focus:ring-0 focus:border-primary font-body-md text-body-md text-on-surface px-4 py-2 transition-colors"
                id="cidade-nome"
                placeholder="Ex: São Paulo"
                type="text"
              />
            </div>
            <div>
              <label
                class="block font-label-md text-label-md text-on-surface-variant mb-1"
                for="cidade-subtitulo"
                >Subtítulo (Opcional)</label
              >
              <input
                class="block w-full border-0 border-b border-outline bg-surface-container-low focus:ring-0 focus:border-primary font-body-md text-body-md text-on-surface px-4 py-2 transition-colors"
                id="cidade-subtitulo"
                placeholder="A terra da garoa"
                type="text"
              />
            </div>
          </div>
          <!-- Links -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
            <div>
              <label
                class="block font-label-md text-label-md text-on-surface-variant mb-1"
                for="link-prefeitura"
                >Link da Prefeitura</label
              >
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="material-symbols-outlined text-outline text-sm" data-icon="link"
                    >link</span
                  >
                </div>
                <input
                  class="block w-full pl-10 border-0 border-b border-outline bg-surface-container-low focus:ring-0 focus:border-primary font-body-md text-body-md text-on-surface py-2 transition-colors"
                  id="link-prefeitura"
                  placeholder="https://..."
                  type="url"
                />
              </div>
            </div>
            <div>
              <label
                class="block font-label-md text-label-md text-on-surface-variant mb-1"
                for="link-camara"
                >Link da Câmara Municipal</label
              >
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span
                    class="material-symbols-outlined text-outline text-sm"
                    data-icon="account_balance"
                    >account_balance</span
                  >
                </div>
                <input
                  class="block w-full pl-10 border-0 border-b border-outline bg-surface-container-low focus:ring-0 focus:border-primary font-body-md text-body-md text-on-surface py-2 transition-colors"
                  id="link-camara"
                  placeholder="https://..."
                  type="url"
                />
              </div>
            </div>
          </div>
          <!-- Texto Descritivo -->
          <div>
            <label
              class="block font-label-md text-label-md text-on-surface-variant mb-1"
              for="cidade-texto"
              >Texto Descritivo</label
            >
            <textarea
              class="block w-full border-0 border-b border-outline bg-surface-container-low focus:ring-0 focus:border-primary font-body-md text-body-md text-on-surface px-4 py-2 resize-none transition-colors"
              id="cidade-texto"
              placeholder="Insira uma breve descrição sobre a cidade..."
              rows="4"
            ></textarea>
          </div>
          <!-- Actions -->
          <div class="pt-stack-sm flex justify-end gap-stack-sm">
            <button
              class="px-6 py-2 border border-primary text-primary font-label-lg text-label-lg rounded hover:bg-surface-container-low transition-colors"
              type="button"
            >
              Cancelar
            </button>
            <button
              class="px-6 py-2 bg-primary text-on-primary font-label-lg text-label-lg rounded hover:bg-primary-container transition-colors shadow-sm"
              type="submit"
            >
              Salvar Cidade
            </button>
          </div>
        </form>
      </div>
      <!-- Right Column: Advertiser Form & Recent List -->
      <div class="lg:col-span-5 flex flex-col gap-gutter">
        <!-- Add Advertiser Form -->
        <div
          class="bg-surface-container-lowest rounded-lg border border-outline-variant p-stack-lg shadow-sm"
        >
          <div
            class="flex items-center gap-stack-sm mb-stack-md border-b border-outline-variant pb-stack-sm"
          >
            <span class="material-symbols-outlined text-secondary fill" data-icon="storefront"
              >storefront</span
            >
            <h2 class="font-headline-sm text-headline-sm text-primary">Novo Anunciante</h2>
          </div>
          <form class="space-y-stack-md">
            <!-- Imagem do Anunciante -->
            <div>
              <label class="block font-label-md text-label-md text-on-surface-variant mb-stack-sm"
                >Imagem/Logo do Anunciante</label
              >
              <div class="mt-1 flex items-center gap-4">
                <div
                  class="h-16 w-16 rounded bg-surface-container-high border border-outline-variant flex items-center justify-center overflow-hidden"
                >
                  <span class="material-symbols-outlined text-outline" data-icon="image"
                    >image</span
                  >
                </div>
                <button
                  class="px-4 py-2 border border-outline text-on-surface-variant font-label-md text-label-md rounded hover:bg-surface-container-low transition-colors"
                  type="button"
                >
                  Selecionar Imagem
                </button>
              </div>
            </div>
            <!-- Nome -->
            <div>
              <label
                class="block font-label-md text-label-md text-on-surface-variant mb-1"
                for="anunciante-nome"
                >Nome do Anunciante</label
              >
              <input
                class="block w-full border-0 border-b border-outline bg-surface-container-low focus:ring-0 focus:border-primary font-body-md text-body-md text-on-surface px-4 py-2 transition-colors"
                id="anunciante-nome"
                placeholder="Nome da empresa ou serviço"
                type="text"
              />
            </div>
            <!-- Categoria & Cidade -->
            <div class="grid grid-cols-2 gap-stack-md">
              <div>
                <label
                  class="block font-label-md text-label-md text-on-surface-variant mb-1"
                  for="anunciante-categoria"
                  >Categoria</label
                >
                <select
                  class="block w-full border-0 border-b border-outline bg-surface-container-low focus:ring-0 focus:border-primary font-body-md text-body-md text-on-surface px-4 py-2 transition-colors appearance-none"
                  id="anunciante-categoria"
                >
                  <option disabled="" selected="" value="">Selecione...</option>
                  <option value="alimentacao">Alimentação</option>
                  <option value="saude">Saúde</option>
                  <option value="servicos">Serviços Gerais</option>
                  <option value="varejo">Varejo</option>
                </select>
              </div>
              <div>
                <label
                  class="block font-label-md text-label-md text-on-surface-variant mb-1"
                  for="anunciante-cidade"
                  >Cidade</label
                >
                <select
                  class="block w-full border-0 border-b border-outline bg-surface-container-low focus:ring-0 focus:border-primary font-body-md text-body-md text-on-surface px-4 py-2 transition-colors appearance-none"
                  id="anunciante-cidade"
                >
                  <option disabled="" selected="" value="">Selecione...</option>
                  <option value="cidade1">Cidade Existente A</option>
                  <option value="cidade2">Cidade Existente B</option>
                </select>
              </div>
            </div>
            <div class="pt-stack-sm flex justify-end">
              <button
                class="w-full px-6 py-2 bg-primary text-on-primary font-label-lg text-label-lg rounded hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-2"
                type="submit"
              >
                <span class="material-symbols-outlined text-sm" data-icon="add">add</span> Adicionar
                Anunciante
              </button>
            </div>
          </form>
        </div>
        <!-- Recent Advertisers List (Bento-style preview) -->
        <div class="bg-surface-container-low rounded-lg p-stack-md border border-outline-variant">
          <h3 class="font-label-lg text-label-lg text-on-surface-variant mb-stack-sm">
            Anunciantes Recentes
          </h3>
          <div class="flex flex-col gap-2">
            <!-- List Item 1 -->
            <div
              class="flex items-center justify-between p-2 bg-surface-container-lowest border-b border-outline-variant hover:bg-surface-bright transition-colors cursor-pointer"
            >
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-surface-container rounded overflow-hidden">
                  <img
                    class="w-full h-full object-cover"
                    data-alt="A professional headshot of a business owner, well-lit studio photography, neutral background, corporate modern style, deep greens and clean whites."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuALEIB9WSDsPsS5hwcOyfK32qhKgDPizFoayflrH8FJKM0K2ZUwbAZjxsA1vZhc-Lmf7DCkL1hkdlevxVHyBXM3_TN9fqWKguiVk2HlxpKpRQoi2E0ZY1jJibF633vI0y5g08KDrqrZTkEwWMTnn6K02Uhhs92N0bF8Ku3sjK-0mJ4DdJkj0GuPtPFPi_p4EUu9ti1BZllYs2MysfLJBXQw_8SeRMHP94LGJ0PZB6S4Rv_gCLeWZY8h3cn_XTlwmbt9WXRfVvifHTNq"
                  />
                </div>
                <div>
                  <p class="font-label-lg text-label-lg text-on-surface">Restaurante Sabor</p>
                  <div class="flex gap-2 items-center">
                    <span
                      class="inline-block bg-secondary-container/20 text-secondary font-label-md text-[10px] px-2 py-0.5 rounded uppercase tracking-wider"
                      >Alimentação</span
                    >
                    <span class="font-body-sm text-body-sm text-on-surface-variant text-xs"
                      >Cidade A</span
                    >
                  </div>
                </div>
              </div>
              <button aria-label="Remover" class="text-outline hover:text-error transition-colors">
                <span class="material-symbols-outlined text-[18px]" data-icon="delete">delete</span>
              </button>
            </div>
            <!-- List Item 2 -->
            <div
              class="flex items-center justify-between p-2 bg-surface-container-lowest border-b border-outline-variant hover:bg-surface-bright transition-colors cursor-pointer border-transparent"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 bg-surface-container rounded overflow-hidden flex items-center justify-center"
                >
                  <span class="material-symbols-outlined text-outline" data-icon="handyman"
                    >handyman</span
                  >
                </div>
                <div>
                  <p class="font-label-lg text-label-lg text-on-surface">Mecânica Silva</p>
                  <div class="flex gap-2 items-center">
                    <span
                      class="inline-block bg-secondary-container/20 text-secondary font-label-md text-[10px] px-2 py-0.5 rounded uppercase tracking-wider"
                      >Serviços</span
                    >
                    <span class="font-body-sm text-body-sm text-on-surface-variant text-xs"
                      >Cidade B</span
                    >
                  </div>
                </div>
              </div>
              <button aria-label="Remover" class="text-outline hover:text-error transition-colors">
                <span class="material-symbols-outlined text-[18px]" data-icon="delete">delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
input:focus,
textarea:focus,
select:focus {
  outline: none !important;
  box-shadow: none !important;
  border-bottom-color: #012d1d !important;
}
</style>
