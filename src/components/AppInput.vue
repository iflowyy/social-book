<template>
  <input
    class="app-input"
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps({ modelValue: String, placeholder: String })
defineEmits(['update:modelValue'])
</script>

<style scoped>
.app-input {
  width: 100%;
  padding: 9px 14px;
  border: 1px solid #D2D2D7;
  border-radius: 12px;
  font-size: 14px;
  background: #FFFFFF;
  color: #1D1D1F;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.18s, box-shadow 0.18s;
  font-family: inherit;
  -webkit-font-smoothing: antialiased;
}
.app-input::placeholder { color: #86868B; }
.app-input:focus {
  border-color: #007AFF;
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.14);
}
.app-input[readonly] {
  background: #F5F5F7;
  color: #3a3a3c;
  cursor: default;
  border-color: #E5E5EA;
}
</style>
