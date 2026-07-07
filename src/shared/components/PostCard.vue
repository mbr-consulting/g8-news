<script lang="ts" setup>
interface PostProps {
  slug: string
  title: string
  description?: string
  imageUrl: string
  category: string
}

defineProps<PostProps>()
</script>

<template>
  <RouterLink :to="`/post/${slug}`">
    <article
      class="flex flex-col group cursor-pointer border border-surface-variant rounded-lg overflow-hidden hover:bg-surface-container-low transition-colors duration-300"
    >
      <div class="w-full h-48 overflow-hidden">
        <img
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          data-alt="A bright, modern cityscape photograph focusing on new high-rise residential developments under a clear blue sky. The architectural lines are sharp and contemporary, reflecting a booming real estate market. The lighting is crisp, emphasizing the sleek glass facades and urban greenery integrated into the concrete environment."
          :src="imageUrl"
        />
      </div>
      <div class="p-stack-md flex flex-col flex-grow bg-surface-lowest">
        <span
          class="text-primary font-label-md text-label-md uppercase mb-stack-sm tracking-widest"
          >{{ category }}</span
        >
        <h2
          class="font-headline-md text-headline-md text-on-surface mb-stack-sm group-hover:text-primary transition-colors line-clamp-3"
        >
          {{ title }}
        </h2>
        <p
          v-if="description"
          class="font-body-sm text-body-sm text-on-surface-variant mt-auto line-clamp-2"
        >
          {{ description }}
        </p>
      </div>
    </article>
  </RouterLink>
</template>
