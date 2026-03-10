<template>
  <div class="post-card">
    <p class="post-title">{{ post.title }}</p>

    <div class="post-divider" />

    <div class="post-actions">
      <AppButton variant="ghost" @click="toggleComments">
        <span class="btn-icon">💬</span> Комментарии
      </AppButton>
      <span class="comment-count">{{ post.comments.length }} {{ commentWord(post.comments.length) }}</span>
      <div class="post-actions-right">
        <AppButton variant="secondary" @click="openModal">Изменить</AppButton>
        <AppButton variant="danger" @click="store.deletePost(post.id)">Удалить</AppButton>
      </div>
    </div>

    <transition name="slide-fade">
      <div v-if="isShow" class="comments-wrap">
        <div class="comment-add-row">
          <AppInput v-model="newComment" placeholder="Написать комментарий..." @keyup.enter="addComment" />
          <AppButton variant="primary" @click="addComment">Добавить</AppButton>
        </div>

        <div v-if="post.comments.length === 0" class="comments-empty">
          Пока нет комментариев
        </div>

        <div v-for="c in post.comments" :key="c.id" class="comment-item">
          <span class="comment-dot" />
          <AppInput :modelValue="c.text" readonly />
          <AppButton variant="danger" @click="store.deleteComment(post.id, c.id)">Удалить</AppButton>
        </div>

        <div class="hide-row">
          <AppButton variant="muted" @click="toggleComments">Свернуть</AppButton>
        </div>
      </div>
    </transition>

    <PostModal
      v-if="showModal"
      :initialText="post.title"
      @confirm="onConfirm"
      @close="showModal = false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePostsStore } from '../stores/posts'
import AppButton from './AppButton.vue'
import AppInput from './AppInput.vue'
import PostModal from './PostModal.vue'

const props = defineProps({ post: Object })
const store = usePostsStore()

const isShow = ref(false)
const showModal = ref(false)
const newComment = ref('')

function toggleComments() { isShow.value = !isShow.value }
function openModal() { showModal.value = true }
function onConfirm(newText) {
  store.updatePost(props.post.id, newText)
  showModal.value = false
}
function addComment() {
  store.addComment(props.post.id, newComment.value)
  newComment.value = ''
}
function commentWord(n) {
  if (n === 1) return 'комментарий'
  if (n >= 2 && n <= 4) return 'комментария'
  return 'комментариев'
}
</script>

<style scoped>
.post-card {
  background: #FFFFFF;
  border-radius: 18px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.05);
  border: 1px solid #E5E5EA;
  transition: box-shadow 0.2s ease, transform 0.18s ease;
}
.post-card:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.07);
  transform: translateY(-1px);
}
.post-title {
  font-size: 15px;
  color: #1D1D1F;
  line-height: 1.65;
  font-weight: 400;
  margin: 0 0 16px;
  -webkit-font-smoothing: antialiased;
}
.post-divider {
  height: 1px;
  background: #E5E5EA;
  margin-bottom: 14px;
}
.post-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.btn-icon { font-size: 13px; }
.comment-count {
  font-size: 13px;
  color: #86868B;
  font-weight: 400;
  flex: 1;
}
.post-actions-right {
  display: flex;
  gap: 8px;
  margin-left: auto;
}
.comments-wrap {
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #F5F5F7;
  border-radius: 14px;
  padding: 14px;
  border: 1px solid #E5E5EA;
}
.comment-add-row {
  display: flex;
  gap: 8px;
  align-items: center;
}
.comment-item {
  display: flex;
  gap: 8px;
  align-items: center;
}
.comment-dot {
  width: 6px; height: 6px;
  background: #007AFF;
  border-radius: 50%;
  flex-shrink: 0;
}
.comments-empty {
  font-size: 13px;
  color: #86868B;
  text-align: center;
  padding: 8px 0;
}
.hide-row { margin-top: 2px; }

.slide-fade-enter-active { transition: all 0.22s ease; }
.slide-fade-leave-active { transition: all 0.16s ease; }
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
