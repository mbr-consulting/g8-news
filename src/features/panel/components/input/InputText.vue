<script setup lang="ts">
defineProps<{
  name: string
  label: string
  placeholder?: string
}>()
</script>
<template>
  <div>
    <label class="block font-label-md text-label-md text-on-surface-variant mb-1" :for="name"
      >{{ label }}</label
    >
    <input
      class="block w-full border-0 border-b border-outline bg-surface-container-low focus:ring-0 focus:border-primary font-body-md text-body-md text-on-surface px-4 py-2 transition-colors"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      type="text"
    />
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

