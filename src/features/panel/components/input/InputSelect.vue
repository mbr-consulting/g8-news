<script setup lang="ts">
defineProps<{
  label: string
  name: string
  value?: string
  options?: Array<{ value: string; label: string }>
}>()
</script>
<template>
  <div class="w-full flex flex-col gap-stack-sm">
    <label class="font-label-md text-label-md text-on-surface-variant" for="tipo">{{
      label
    }}</label>
    <div class="relative">
      <select
        class="input-signature w-full px-4 py-3 font-body-md text-body-md text-on-surface appearance-none pr-10 cursor-pointer"
        :id="name"
        :name="name"
      >
        <option value="">.: SELECIONE :.</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
        <!-- <option value="publicacao">Publicação Padrão</option>
        <option value="editorial">Editorial / Opinião</option> -->
      </select>
      <span
        class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant"
        >arrow_drop_down</span
      >
    </div>
  </div>
</template>
<style lang="css" scoped>
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
