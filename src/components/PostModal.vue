<template>
  <Teleport to="body">
    <div class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-box">
        <div class="modal-header">
          <h3 class="modal-title">Редактировать запись</h3>
          <button class="modal-close-x" @click="$emit('close')" aria-label="Закрыть">✕</button>
        </div>
        <textarea class="modal-textarea" v-model="localText" />
        <div class="modal-actions">
          <AppButton variant="muted" @click="$emit('close')">Закрыть</AppButton>
          <AppButton variant="success" @click="onConfirm">Подтвердить</AppButton>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import AppButton from './AppButton.vue'

const props = defineProps({ initialText: String })
const emit = defineEmits(['confirm', 'close'])
const localText = ref(props.initialText)

function onConfirm() { emit('confirm', localText.value) }
</script>

<style scoped>
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex; align-items: center; justify-content: center;
  z-index: 999;
}
.modal-box {
  background: #FFFFFF;
  border-radius: 20px;
  padding: 24px;
  width: 460px;
  max-width: 92vw;
  box-shadow: 0 24px 60px rgba(0,0,0,0.16), 0 4px 12px rgba(0,0,0,0.08);
  display: flex; flex-direction: column; gap: 16px;
  border: 1px solid #E5E5EA;
  animation: pop-in 0.24s cubic-bezier(0.34, 1.28, 0.64, 1);
}
@keyframes pop-in {
  from { transform: scale(0.90); opacity: 0; }
  to   { transform: scale(1);    opacity: 1; }
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.modal-title {
  font-size: 17px;
  font-weight: 600;
  color: #1D1D1F;
  letter-spacing: -0.3px;
  -webkit-font-smoothing: antialiased;
}
.modal-close-x {
  background: #F5F5F7;
  border: none;
  width: 28px; height: 28px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 11px;
  color: #86868B;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.15s, color 0.15s;
  font-family: inherit;
}
.modal-close-x:hover { background: #E5E5EA; color: #1D1D1F; }
.modal-textarea {
  width: 100%; height: 130px;
  border: 1px solid #D2D2D7;
  border-radius: 14px;
  padding: 12px 14px;
  font-size: 14px;
  resize: vertical;
  box-sizing: border-box;
  outline: none;
  font-family: inherit;
  color: #1D1D1F;
  background: #FFFFFF;
  line-height: 1.65;
  transition: border-color 0.18s, box-shadow 0.18s;
  -webkit-font-smoothing: antialiased;
}
.modal-textarea::placeholder { color: #86868B; }
.modal-textarea:focus {
  border-color: #007AFF;
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.14);
}
.modal-actions {
  display: flex; gap: 10px; justify-content: flex-end;
}
</style>
