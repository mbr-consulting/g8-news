<script setup lang="ts">
import MenuItem from './MenuItem.vue'
</script>
<template>
  <nav
    class="h-screen w-64 fixed left-0 top-0 bg-surface-container-low flex flex-col h-full py-stack-lg z-20 border-r border-outline-variant"
  >
    <div class="px-margin-x mb-stack-lg">
      <h1 class="font-headline-md text-headline-md font-bold text-primary">G8 News</h1>
      <p class="font-label-md text-label-md text-on-surface-variant mt-1">Admin Dashboard</p>
    </div>
    <div class="flex-1 overflow-y-auto">
      <ul class="flex flex-col">
        <MenuItem icon="dashboard" label="Visão Geral" href="/panel/dashboard" />
        <MenuItem icon="article" label="Artigos" href="/panel/posts" />
        <MenuItem icon="campaign" label="Anúncios" href="/panel/ads" />
        <MenuItem icon="location_city" label="Cidades" href="/panel/cities" />
        <MenuItem icon="group" label="Usuários" href="/panel/users" />
        <MenuItem icon="settings" label="Configurações" href="/panel/settings" />

        <!-- Posts (Active) -->
        <!-- <li>
          <a
            class="flex items-center gap-3 px-margin-x py-3 text-primary font-bold border-r-4 border-primary bg-surface-container-high dark:bg-surface-container-highest transition-colors duration-200 ease-in-out"
            href="#"
          >
            <span
              class="material-symbols-outlined text-[20px]"
              style="font-variation-settings: 'FILL' 1"
              >article</span
            >
            <span class="font-label-lg text-label-lg">Posts</span>
          </a>
        </li> -->
        <!-- Ads -->
        <!-- <li>
          <a
            class="flex items-center gap-3 px-margin-x py-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors duration-200 ease-in-out"
            href="#"
          >
            <span class="material-symbols-outlined text-[20px]">campaign</span>
            <span class="font-label-lg text-label-lg">Ads</span>
          </a>
        </li> -->
        <!-- Cities -->
        <!-- <li>
          <a
            class="flex items-center gap-3 px-margin-x py-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors duration-200 ease-in-out"
            href="#"
          >
            <span class="material-symbols-outlined text-[20px]">location_city</span>
            <span class="font-label-lg text-label-lg">Cities</span>
          </a>
        </li> -->
        <!-- Users -->
        <!-- <li>
          <a
            class="flex items-center gap-3 px-margin-x py-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors duration-200 ease-in-out"
            href="#"
          >
            <span class="material-symbols-outlined text-[20px]">group</span>
            <span class="font-label-lg text-label-lg">Users</span>
          </a>
        </li> -->
      </ul>
    </div>
    <div class="mt-auto border-t border-outline-variant pt-stack-sm px-margin-x">
      <div class="flex items-center gap-3 mt-stack-md pb-stack-sm">
        <img
          alt="G8 News Admin Profile"
          class="w-8 h-8 rounded-full object-cover border border-outline-variant"
          data-alt="A small, professional portrait of an administrator in a classic newsroom setting. Soft, natural lighting. Professional corporate aesthetic."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt1eco-3Jft2ec30Sy8pMXHkJYq3HwQCOZ0ObmgVq5uBVpeoCHt37o3prfY1UTFo18ohZKSix-wVrLpPpZDEoiYf_ssNKa2uLlJR7TmOQ8-ENK8xDVStPVfHQomdXevljNAjP73CvgHmcCrV1U0lFeG2f-ELtn8X-qn1QQaQP1GryNV9rToUC6V0pasSGIPTriJZzuNlprY-3IEIZ29Y1JoXgjJf2uN2tDE8feNHZvqAfir67Fho2XyJiC5WKaqk0l22R9dIOrozEV"
        />
        <div class="flex flex-col">
          <span class="font-label-md text-label-md text-on-surface">Admin User</span>
          <span class="font-body-sm text-body-sm text-on-surface-variant text-[10px]"
            >admin@g8news.com</span
          >
        </div>
      </div>
    </div>
  </nav>
</template>
