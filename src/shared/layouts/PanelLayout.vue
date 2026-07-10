<script setup lang="ts">
import Header from '@/features/panel/components/Header.vue'
import Menu from '@/features/panel/components/Menu.vue'
</script>

<template>
  <div class="panel-theme">
    <div class="bg-background text-on-background font-body-md h-screen overflow-hidden flex">
      <Menu />
      <div class="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
        <Header />
        <main class="flex-1 overflow-y-auto p-8 bg-surface-bright">
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>
