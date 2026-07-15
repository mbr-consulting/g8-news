<script setup lang="ts">
defineProps<{
  type: 'text' | 'email' | 'password'
  name: string
  label: string
  placeholder?: string
}>()
</script>
<template>
  <div class="w-full">
    <label class="block font-label-lg text-label-lg text-primary mb-2">{{ label }}</label>
    <input
      class="input-field form-focus-ring"
      :name="name"
      :placeholder="placeholder"
      :type="type"
    />
  </div>
</template>
<style scoped>
.form-focus-ring:focus {
  outline: none;
  border-bottom: 2px solid #012d1d;
  background-color: #ffffff;
}
/* Custom Input Styling to match Brand Aesthetic */
.input-field {
  background-color: #f3f4f5;
  border: none;
  border-bottom: 1px solid #c1c8c2;
  padding: 12px 16px;
  width: 100%;
  transition: all 0.2s ease-in-out;
  font-family: 'Work Sans', sans-serif;
}
</style>
