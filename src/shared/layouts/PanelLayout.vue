<script setup lang="ts">
import { PanelHeader, PanelMenu } from '@/features/panel/components'
</script>

<template>
  <div class="panel-theme">
    <div class="bg-background text-on-background font-body-md h-screen overflow-hidden flex">
      <PanelMenu />
      <div class="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
        <PanelHeader />
        <main class="flex-1 overflow-y-auto p-8 bg-surface-bright">
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>
