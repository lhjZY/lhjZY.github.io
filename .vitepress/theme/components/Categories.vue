<script setup lang="ts">
import { withBase } from 'vitepress'
import { ref, computed, onMounted } from 'vue'
import { data as posts } from '../posts.data'

// 当前选中的分类
const currentCategory = ref('')

// 监听 URL hash 变化
onMounted(() => {
  const updateFromHash = () => {
    const hash = window.location.hash.slice(1)
    currentCategory.value = decodeURIComponent(hash)
  }
  
  updateFromHash()
  window.addEventListener('hashchange', updateFromHash)
})

// 选择分类
const selectCategory = (cat: string) => {
  currentCategory.value = cat
  window.location.hash = encodeURIComponent(cat)
}

// 返回分类列表
const goBack = () => {
  currentCategory.value = ''
  window.location.hash = ''
}

// 获取所有分类及其文章数量
const categories = computed(() => {
  const categoryMap: Record<string, number> = {}
  
  posts.forEach(post => {
    if (post.category) {
      categoryMap[post.category] = (categoryMap[post.category] || 0) + 1
    }
  })
  
  return Object.entries(categoryMap)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
})

// 获取当前分类下的文章
const categoryPosts = computed(() => {
  if (!currentCategory.value) return []
  return posts.filter(post => post.category === currentCategory.value)
})

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${month}-${day}`
}
</script>

<template>
  <div class="categories-page">
    <!-- 分类列表 -->
    <div v-if="!currentCategory" class="category-list">
      <a 
        v-for="cat in categories" 
        :key="cat.name" 
        href="#"
        class="category-item"
        @click.prevent="selectCategory(cat.name)"
      >
        <span>{{ cat.name }}</span>
        <span class="category-count">{{ cat.count }}</span>
      </a>
      
      <!-- Empty State -->
      <div v-if="categories.length === 0" class="empty-state">
        <p>暂无分类</p>
      </div>
    </div>
    
    <!-- 分类下的文章列表 -->
    <div v-else class="category-posts">
      <div class="category-header">
        <a href="#" class="back-link" @click.prevent="goBack">← 返回分类</a>
        <h2 class="current-category">{{ currentCategory }}</h2>
        <span class="post-count">共 {{ categoryPosts.length }} 篇文章</span>
      </div>
      
      <ul class="post-list">
        <li v-for="post in categoryPosts" :key="post.url" class="post-item">
          <span class="post-date">{{ formatDate(post.date) }}</span>
          <a :href="withBase(post.url)" class="post-title">{{ post.title }}</a>
        </li>
      </ul>
      
      <!-- Empty State -->
      <div v-if="categoryPosts.length === 0" class="empty-state">
        <p>该分类下暂无文章</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--spacing-md);
  padding: var(--spacing-lg) 0;
}

.category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
  border: var(--border-solid);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  transition: all var(--transition-fast);
  text-decoration: none;
  color: var(--color-text);
  cursor: pointer;
}

.category-item:hover {
  background: var(--color-black);
  color: var(--color-white);
}

.category-count {
  background: var(--color-bg-alt);
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: 0.75rem;
}

.category-item:hover .category-count {
  background: var(--color-white);
  color: var(--color-black);
}

/* Category Posts */
.category-header {
  padding: var(--spacing-lg) 0;
  border-bottom: var(--border-solid);
  margin-bottom: var(--spacing-lg);
}

.back-link {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  text-decoration: none;
  display: inline-block;
  margin-bottom: var(--spacing-sm);
  cursor: pointer;
}

.back-link:hover {
  color: var(--color-accent);
}

.current-category {
  font-family: var(--font-mono);
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 var(--spacing-xs) 0;
}

.post-count {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-secondary);
}

.post-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.post-item {
  display: flex;
  gap: var(--spacing-lg);
  padding: var(--spacing-md) 0;
  border-bottom: var(--border);
}

.post-item:last-child {
  border-bottom: none;
}

.post-date {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  min-width: 60px;
  flex-shrink: 0;
}

.post-title {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--color-text);
  text-decoration: none;
}

.post-title:hover {
  color: var(--color-accent);
}

.empty-state {
  padding: var(--spacing-2xl);
  text-align: center;
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
  grid-column: 1 / -1;
}
</style>
