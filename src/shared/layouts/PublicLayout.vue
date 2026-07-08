<script setup lang="ts">
import { Menu } from '../components'
</script>

<template>
  <!-- TopNavBar Shared Component -->
  <header class="bg-surface border-b border-outline-variant w-full top-0 z-50">
    <div
      class="flex items-center w-full max-w-container-max mx-auto px-margin-x py-stack-md flex-row"
    >
      <div class="flex w-full justify-between items-center gap-gutter">
        <!-- Logo -->
        <div class="w-[150px] flex-shrink-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_6Cdf9QgYTJuNXlEceGqzDIBEyA7GL6zo47Y7urb1ZsRCZgSvlNrmf-36GrfeUshoQYwjPzmpjvzigrB-PPe3pmjN-8z2_MNT40DhlmmFvYYZNd_1CizMJdG7opsMYk-rzflkQPynz5kTUwMaMwpUGktxKrQmkYe8ujLdBHDrO0o0q9iIZwBUtCu-vJUNhmQCKWjcibZ8IHzEoNXT3JO_zh0aKxGKHFPzivSVOip4480pvMHfF4DCxwagg33dcZf7qgV-UXSBnbErELU"
            alt="G8 News Logo"
            class="w-full h-auto object-contain"
          />
        </div>

        <!-- Navigation Links -->
        <Menu />

        <!-- Action Icons -->
        <div class="flex gap-stack-sm text-primary flex-shrink-0">
          <!-- <button
            class="hover:text-primary transition-colors scale-95 active:opacity-80 flex items-center justify-center p-2 rounded-full hover:bg-surface-variant"
          >
            <span class="material-symbols-outlined" data-icon="search">search</span>
          </button> -->
          <RouterLink to="/login">
            <button
              class="hover:text-primary transition-colors scale-95 active:opacity-80 flex items-center justify-center p-2 rounded-full hover:bg-surface-variant"
            >
              <span class="material-symbols-outlined" data-icon="account_circle"
                >account_circle</span
              >
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
  <RouterView />
  <footer
    class="bg-primary pb-10 dark:bg-tertiary w-full py-section-padding px-margin-x grid grid-cols-1 md:grid-cols-4 gap-gutter text-on-primary border-t border-on-primary/10"
  >
    <div class="flex flex-col gap-4">
      <span class="font-headline-sm text-headline-sm text-secondary-fixed">G8 News</span>
      <p class="font-body-sm text-body-sm opacity-80">
        © 2024 G8 News. Todos os direitos reservados. Jornalismo com autoridade e precisão.
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <h4 class="font-label-lg text-label-lg text-secondary-fixed">INSTITUCIONAL</h4>
      <nav class="flex flex-col gap-2">
        <a
          class="font-label-md text-label-md text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors"
          href="#"
          >Sobre Nós</a
        >
        <a class="font-label-md text-label-md text-secondary-fixed font-bold" href="#">Anuncie</a>
        <a
          class="font-label-md text-label-md text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors"
          href="#"
          >Expediente</a
        >
      </nav>
    </div>
    <div class="flex flex-col gap-4">
      <h4 class="font-label-lg text-label-lg text-secondary-fixed">POLÍTICAS</h4>
      <nav class="flex flex-col gap-2">
        <a
          class="font-label-md text-label-md text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors"
          href="#"
          >Privacidade</a
        >
        <a
          class="font-label-md text-label-md text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors"
          href="#"
          >Newsletter</a
        >
        <a
          class="font-label-md text-label-md text-on-primary-fixed-variant hover:text-secondary-fixed transition-colors"
          href="#"
          >Contato</a
        >
      </nav>
    </div>
    <div class="flex flex-col gap-4">
      <h4 class="font-label-lg text-label-lg text-secondary-fixed">NEWSLETTER</h4>
      <p class="font-body-sm text-body-sm opacity-80">
        Receba as principais notícias e análises diretamente no seu e-mail.
      </p>
      <div class="flex border-b border-on-primary/30 py-2">
        <input
          class="bg-transparent border-none text-on-primary text-body-sm w-full focus:ring-0"
          placeholder="Seu melhor e-mail"
          type="email"
        />
        <button class="material-symbols-outlined text-secondary-fixed">send</button>
      </div>
    </div>
  </footer>
</template>
