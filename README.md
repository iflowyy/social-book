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

### 4. Сборка для продакшена
```bash
npm run build
```

## Публикация на GitHub Pages

### Ветка `main` — исходный код
```bash
git init
git add .
git commit -m "init: social-book"
git branch -M main
git remote add origin https://github.com/ВАШ_ЮЗЕРНЕЙМ/social-book.git
git push -u origin main
```

### Ветка `gh-pages` — задеплоить сайт

1. Добавить в `vite.config.js`:
```js
export default defineConfig({
  plugins: [vue()],
  base: '/social-book/',  // название репозитория
})
```

2. Собрать и задеплоить:
```bash
npm run build
npm install -D gh-pages
npx gh-pages -d dist
```

3. В настройках репозитория GitHub → Settings → Pages → Source: `gh-pages` ветка.

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
