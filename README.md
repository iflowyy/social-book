# Формулировка задания
Сверстать макет Social Book по Figma. Реализовать дневник постов с комментариями, с возможностью добавлять, редактировать и удалять посты и комментарии. Использовать Vue 3 + Pinia + Composition API.  

# Social Book

Дневник постов с комментариями - учебный проект на Vue 3 + Pinia.

## Стек
- **Vue 3** (Composition API)
- **Pinia** (хранилище)
- **Vite** (сборщик)

## Запуск проекта

### 1. Установить Node.js
Скачать с https://nodejs.org (версия 18+ или 20+)

### 2. Установить зависимости
```bash
npm install
```

### 3. Запустить dev-сервер
```bash
npm run dev
```

Открыть в браузере: http://localhost:5173



## Структура проекта
```
src/
  stores/
    posts.js        # Pinia хранилище
  components/
    AppButton.vue   # Кастомная кнопка
    AppInput.vue    # Кастомный инпут
    PostItem.vue    # Карточка поста
    PostModal.vue   # Модальное окно редактирования
  App.vue           # Корневой компонент
  main.js           # Точка входа
```

