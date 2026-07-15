<script setup lang="ts">
defineProps<{
  label: string
  name: string
  value?: string
}>()
</script>
<template>
  <div class="w-full flex flex-col gap-stack-sm">
    <label class="font-label-md text-label-md text-on-surface-variant" for="name">{{
      label
    }}</label>
    <div class="relative">
      <input
        class="input-signature w-full px-4 py-3 font-body-md text-body-md text-on-surface"
        :id="name"
        :name="name"
        :value="value"
        type="datetime-local"
      />
    </div>
  </div>
</template>
<style scoped>
.input-signature {
  background-color: #f3f4f5;
  border: none;
  border-bottom: 1px solid #c1c8c2;
  border-radius: 0.125rem 0.125rem 0 0;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;
}
.input-signature:focus {
  outline: none;
  border-bottom: 2px solid #012d1d;
  background-color: #ffffff;
}
</style>
