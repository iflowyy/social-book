import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref([
    {
      id: 1,
      title: 'Сегодня было замечательное предложение пойти поужинать этим вечером. Главное, чтобы погода была преимущественно теплой.',
      comments: [
        { id: 1, text: 'Самый яркий комментарий в этом посте' },
        { id: 2, text: 'Один из бессмысленный комментарий в этом посте' }
      ]
    },
    {
      id: 2,
      title: 'Краткосрочное вымышленное преломление может выполнять особую роль в пространстве главной роли игрока',
      comments: [
        { id: 1, text: 'Очень научно и непонятно' }
      ]
    }
  ])

  let nextPostId = 3
  let nextCommentId = 10

  function addPost(title) {
    if (!title.trim()) return
    posts.value.push({ id: nextPostId++, title: title.trim(), comments: [] })
  }

  function deletePost(postId) {
    posts.value = posts.value.filter(p => p.id !== postId)
  }

  function updatePost(postId, newTitle) {
    const post = posts.value.find(p => p.id === postId)
    if (post) post.title = newTitle
  }

  function addComment(postId, text) {
    if (!text.trim()) return
    const post = posts.value.find(p => p.id === postId)
    if (post) post.comments.push({ id: nextCommentId++, text: text.trim() })
  }

  function deleteComment(postId, commentId) {
    const post = posts.value.find(p => p.id === postId)
    if (post) post.comments = post.comments.filter(c => c.id !== commentId)
  }

  return { posts, addPost, deletePost, updatePost, addComment, deleteComment }
})
