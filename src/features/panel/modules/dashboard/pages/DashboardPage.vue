<script setup lang="ts">
import type { DashboardCardProps } from '@/shared/types'
import DashboardCard from '../components/DashboardCard.vue'
import { PanelTitle } from '@/features/panel/components'
import { AudienceInsight, LastArticles, QuickActions } from '../components'

const dashboardCards: DashboardCardProps[] = [
  {
    icon: 'article',
    title: 'Total de Posts',
    value: 24,
  },
  {
    icon: 'campaign',
    title: 'Anúncios Ativos',
    value: 12,
  },
  {
    icon: 'location_city',
    title: 'Municípios Atendidos',
    value: 78,
  },
  {
    icon: 'group_add',
    title: 'Novos Usuários',
    value: 3,
  },
]
</script>
<template>
  <div class="max-w-container-max mx-auto space-y-stack-lg">
    <PanelTitle title="Número dos últimos 7 dias" />
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
      <DashboardCard
        v-for="(card, index) in dashboardCards"
        :key="index"
        :icon="card.icon"
        :title="card.title"
        :value="card.value"
      />
    </section>

    <div class="grid grid-cols-1 xl:grid-cols-3 gap-gutter">
      <div class="xl:col-span-2 space-y-stack-lg">
        <QuickActions />
        <LastArticles />
      </div>
      <AudienceInsight />
    </div>
  </div>
</template>
