<script setup lang="ts">
import Header from '@/features/panel/components/Header.vue'
import Menu from '@/features/panel/components/Menu.vue'
</script>

<template>
  <div class="panel-theme">
    <div class="bg-background text-on-background font-body-md h-screen overflow-hidden flex">
      <!-- SideNavBar -->
      <Menu />
      <!-- Main Content Area -->
      <div class="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
        <!-- TopAppBar -->
        <Header />
        <!-- Dashboard Content -->
        <main class="flex-1 overflow-y-auto p-section-padding bg-surface-bright">
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>
