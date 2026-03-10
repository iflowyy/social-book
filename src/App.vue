<template>
  <div class="page">
    <div class="container">

      <header class="site-header">
        <div class="header-icon"></div>
        <div>
          <h1 class="page-title">Social Book</h1>
          <p class="page-sub">Твой личный дневник</p>
        </div>
      </header>

      <div class="add-post-card">
        <AppInput v-model="newPostText" placeholder="Что у тебя сегодня..." @keyup.enter="addPost" />
        <AppButton variant="primary" @click="addPost">Добавить</AppButton>
      </div>

      <div v-if="store.posts.length === 0" class="empty-state">
        Записей пока нет. Создай первую 
      </div>

      <div class="posts-list">
        <PostItem v-for="post in store.posts" :key="post.id" :post="post" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePostsStore } from './stores/posts'
import AppButton from './components/AppButton.vue'
import AppInput from './components/AppInput.vue'
import PostItem from './components/PostItem.vue'

const store = usePostsStore()
const newPostText = ref('')

function addPost() {
  store.addPost(newPostText.value)
  newPostText.value = ''
}
</script>

<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro Display',
               'Helvetica Neue', Arial, sans-serif;
  background: #F5F5F7;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1D1D1F;
}
</style>

<style scoped>
.page {
  min-height: 100vh;
  padding: 52px 20px 80px;
}
.container {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.site-header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 8px;
}
.header-icon { font-size: 36px; line-height: 1; }
.page-title {
  font-size: 28px;
  font-weight: 700;
  color: #1D1D1F;
  letter-spacing: -0.6px;
  line-height: 1.1;
}
.page-sub {
  font-size: 13px;
  color: #86868B;
  margin-top: 3px;
  font-weight: 400;
}
.add-post-card {
  display: flex;
  gap: 10px;
  background: #FFFFFF;
  border-radius: 18px;
  padding: 14px 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 2px 10px rgba(0,0,0,0.04);
  border: 1px solid #E5E5EA;
}
.empty-state {
  text-align: center;
  color: #86868B;
  font-size: 14px;
  padding: 32px 0;
}
.posts-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
