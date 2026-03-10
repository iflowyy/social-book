<template>
  <button :class="['app-btn', `app-btn--${variant}`]" v-bind="$attrs" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script setup>
defineProps({ variant: { type: String, default: 'primary' } })
defineEmits(['click'])
</script>

<style scoped>
.app-btn {
  padding: 8px 18px;
  border: none;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
  font-family: inherit;
  letter-spacing: -0.1px;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
}
.app-btn:active { transform: scale(0.96); opacity: 0.88; }

/* Добавить — System Blue */
.app-btn--primary {
  background: #007AFF;
  color: #fff;
}
.app-btn--primary:hover { background: #0071eb; }

/* Удалить — System Red */
.app-btn--danger {
  background: #FF3B30;
  color: #fff;
}
.app-btn--danger:hover { background: #e5342a; }

/* Изменить — Deep Black */
.app-btn--secondary {
  background: #1D1D1F;
  color: #fff;
}
.app-btn--secondary:hover { background: #3a3a3c; }

/* Комментарии — мягкий серый */
.app-btn--ghost {
  background: #F5F5F7;
  color: #1D1D1F;
  border: 1px solid #E5E5EA;
}
.app-btn--ghost:hover { background: #EBEBEF; }

/* Подтвердить — System Green */
.app-btn--success {
  background: #34C759;
  color: #fff;
}
.app-btn--success:hover { background: #2eb350; }

/* Свернуть / Закрыть */
.app-btn--muted {
  background: transparent;
  color: #86868B;
  border: 1px solid #D2D2D7;
}
.app-btn--muted:hover { background: #F5F5F7; color: #1D1D1F; }
</style>
