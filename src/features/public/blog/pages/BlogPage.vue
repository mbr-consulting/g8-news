<script setup lang="ts">
import { PinnedPost, PostCard } from '../components'
</script>

<template>
  <main class="flex-grow w-full max-w-container-max mx-auto px-margin-x py-section-padding">
    <!-- Header -->
    <div class="mb-section-padding text-center">
      <h1
        class="font-display-lg text-display-lg text-primary mb-stack-sm md:font-display-lg md:text-display-lg font-headline-lg-mobile text-headline-lg-mobile"
      >
        Últimas do Blog
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
        Análises aprofundadas, opiniões e reportagens especiais sobre economia, política e cultura.
      </p>
    </div>

    <PinnedPost />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-y-stack-lg gap-x-gutter">
      <PostCard
        title="Novo Complexo Empresarial Promete Revitalizar o Centro Financeiro da Cidade"
        description="O projeto arquitetônico inovador foca em espaços de trabalho híbridos e integração com áreas verdes públicas."
        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCTEnt9WTU8u6NAXrX0quJL-1Iur-bPLeSMclTJj10oyXhiSMbaOHjjX60mLhyoQX8ZFNtNsvdVSwcCkvSRL6THqtOdeoAec_aKKpVML6DvDKtNqpTeW2FBqLFVtf0xgXz8NzqVru89xsmPzLDfP63sYKUqqpLMR6IVwd1Q3bh4wfZXO6612yaj61fX8FqRgL_YCc7o9fRFjHTCIIvqOOyYY3Xh-OKKdk362qWkJpxTZCAfAx32VtdyCAlYSVWg0TI-REAKkjlE1OUn"
        category="G8 Construções"
      />

      <PostCard
        title="Reformas Fiscais: O Que Esperar do Novo Pacote de Medidas Anunciado"
        description="Especialistas analisam os possíveis impactos das propostas governamentais para os setores produtivo e de serviços no próximo ano."
        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDqVQrjA4Agk_Zk5UUkv0XNVXK2V24w32csHSXRJRxs4Hx_vvkPAbI0BwI5TgD-0cr87gWGGUF-KYIbVDeRuggFHKeiU0beMXzNCOa8L0gbav_UBnGscS4h-HUikgW8XMWQ3whEyyX2beKhBbfqiomT-qpChS5fmaEYgmBLeOCi-r-Jay3nua0_66bj_tkC9skBQW6lutcXlW889w02QGxMvQ7OaDoHv7aYJO3vWmmu1jc79LnPRKXfgGkttNrZThxbO0AeWcy9NsUM"
        category="Política"
      />

      <PostCard
        title="A Inteligência Artificial Redefinindo a Logística Urbana em Tempo Real"
        description="Como as soluções baseadas em IA estão otimizando rotas de entrega, reduzindo custos e melhorando a eficiência do transporte urbano."
        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAgwOKren_HI5sZki_WoJzy_sDRdhH6WoBa1V7dj0fDqMEGinuuLwcTgAJ0YtVeNaUQZhOtpFvw6ex21XS8QL_YeNldMVkLCglky9fk4pMVSSLsBZsN4bIoSXgd7XrvZw26kRImvATwsDOfdDNwn8gszEhpzx1qgyjDU8aUEvkmTJWzTSfLtpV8El4qLt2pRNOupBhbQ2YqfIP_WJ3FS_KfbOpEk7RF5Qk8axH-QQO8Pv8f7Pd1tBUUWTSqckRxpMN9CBPGrcawQXzZ"
        category="Tecnologia"
      />

      <PostCard
        title="Safra Recorde Impulsiona Exportações e Aquece o Mercado de Câmbio"
        description="A combinação de uma safra recorde e demanda internacional crescente está impulsionando as exportações agrícolas, afetando positivamente o mercado de câmbio."
        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAXm2TD5awN0C4YfAK-57LCRtS1C9Pp8byk-VbkODyTQd0QXKjpQWSnJxuqHbZjp7awCyrVdCJY_BOPwoJliB4uqYjfeFs3lX5EnYHB5XrecKpzjHxgwCSykh54K7LpTe0lPMFh995rTPclEtY4I6_1EDrtor6rpwEC_bPlVRzCn00XwENmXDSjupis-5YUrY9RN3bLKE35uDI7DftNBb1_nS2t6CjqRxiqOreF3fDIu-x6RKxqgr1LlOj9BUgpBTi11IAYaimTVlDU"
        category="Economia"
      />

      <PostCard
        title="A Nova Era do Trabalho Remoto: Tendências e Desafios para Empresas e Profissionais"
        description="Uma análise sobre como o trabalho remoto está moldando a cultura corporativa, produtividade e equilíbrio entre vida pessoal e profissional."
        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDZIGBl1mBHZNZYa2T9bLWYSotPTJHy7OpkJ-a-cqVbch7lWH0D0HEo7EsM62TLso6aTQjHwnRclGD0vtMeX-izM9fbo07v7sFKEUrKtYZ0jrwYxpa2t6ael3hGu_5c-kpPSGQ0BwzxOdPtk15rF8wavn0cIvGfIwHyMKgiudrLld5Ea-4JNES5q7BhyRCPKb2j0W6oBBhXTbUcrDqjwgFtduSUO_9y3qrK7g0YfplZzHFSOiprrl23ORQiP-JtkzvtnCcBgn9ybNRa"
        category="Cultura"
      />

      <PostCard
        title="Mercado Financeiro em Alta: O Impacto das Novas Políticas Econômicas"
        description="Uma análise sobre como as recentes mudanças nas políticas econômicas estão influenciando o mercado financeiro e as decisões de investimento."
        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCa2JjDvkxAyvZlBGevW9avYVkObLw9tLfEfqkUyaqHQl3wHS7wfS3a88U93hw8drX_LGXIgxApnJrjkqcpl5arHoiQQzF_ISu2EPOajZ69cyRytA5MleqD3YofLxmJ88gZkAiINV5BmdxBbx2S5s-GywFjt77M-3M-WHl-pAMdVHgzyWW1HgZAJR8IHIbOJn5_UnAkS0-ISNmMrmrnVTztgaIfh17IQL7FeOZLA_0MRloEu_EAEF-9iIIDbnI3OpR5l-cTNnkTeVjq"
        category="Mercados"
      />
    </div>
    <!-- Load More Button -->
    <div class="mt-section-padding flex justify-center">
      <button
        class="bg-transparent border border-primary text-primary font-label-lg text-label-lg px-8 py-3 rounded hover:bg-surface-container transition-colors"
      >
        Carregar Mais Artigos
      </button>
    </div>
  </main>
</template>
