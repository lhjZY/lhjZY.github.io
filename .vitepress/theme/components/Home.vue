<script setup lang="ts">
import { withBase, useData } from 'vitepress'
import { computed } from 'vue'
import { data as posts } from '../posts.data'

const { theme } = useData()

// 从配置获取首页标题
const homeTitle = computed(() => {
  return theme.value.homeTitle || '文章列表'
})

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}
</script>

<template>
  <div class="home-page">
    <!-- Page Title -->
    <section class="page-title-section">
      <h1 class="page-title">{{ homeTitle }}</h1>
      <div class="title-underline"></div>
    </section>

    <!-- Post List -->
    <div class="post-list">
      <article v-for="post in posts" :key="post.url" class="post-card">
        <!-- Post Title -->
        <header class="post-header">
          <h2 class="post-title">
            <a :href="withBase(post.url)">{{ post.title }}</a>
          </h2>
        </header>
        
        <!-- Dashed Separator -->
        <div class="post-separator"></div>
        
        <!-- Post Body: 左文字右图片 -->
        <div class="post-body" :class="{ 'has-cover': post.cover }">
          <!-- 左侧：文字内容 -->
          <div class="post-content">
            <div v-if="post.excerpt" class="post-excerpt" v-html="post.excerpt"></div>
            <a :href="withBase(post.url)" class="post-read-more">
              阅读更多 →
            </a>
          </div>
          
          <!-- 右侧：封面图片 -->
          <div v-if="post.cover" class="post-cover">
            <a :href="withBase(post.url)">
              <img :src="post.cover" :alt="post.title" />
            </a>
          </div>
        </div>
      </article>
      
      <!-- Empty State -->
      <div v-if="!posts || posts.length === 0" class="empty-state">
        <p>暂无文章</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.post-card {
  padding: var(--spacing-lg) 0;
  border-bottom: var(--border-solid);
}

.post-card:last-child {
  border-bottom: none;
}

.post-header {
  margin-bottom: var(--spacing-xs);
}

.post-title {
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
}

.post-title a {
  color: var(--color-text);
  text-decoration: none;
}

.post-title a:hover {
  color: var(--color-accent);
}

.post-meta {
  display: flex;
  gap: var(--spacing-md);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-sm);
}

.post-category {
  padding: 2px 8px;
  border: 1px solid var(--color-border-light);
  background: var(--color-bg-alt);
}

.post-separator {
  height: 1px;
  background: repeating-linear-gradient(
    90deg,
    var(--color-border) 0px,
    var(--color-border) 4px,
    transparent 4px,
    transparent 8px
  );
  margin: var(--spacing-sm) 0;
}

.post-body {
  display: flex;
  gap: var(--spacing-xl);
}

.post-body.has-cover {
  align-items: flex-start;
}

.post-body.has-cover .post-content {
  flex: 1;
  min-width: 0;
}

.post-content {
  flex: 1;
}

.post-cover {
  flex: 0 0 300px;
  max-width: 300px;
}

.post-cover img {
  width: 100%;
  height: auto;
  display: block;
  transition: opacity var(--transition-fast);
}

.post-cover img:hover {
  opacity: 0.9;
}

.post-excerpt {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
}

.post-read-more {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  padding: var(--spacing-xs) var(--spacing-md);
  border: var(--border-solid);
  background: var(--color-black);
  color: var(--color-white);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.post-read-more:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
}

.empty-state {
  padding: var(--spacing-2xl);
  text-align: center;
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
}

/* Responsive */
@media (max-width: 768px) {
  .post-body {
    flex-direction: column;
  }
  
  .post-cover {
    flex: none;
    max-width: 100%;
    order: -1; /* 移动端图片在上方 */
    margin-bottom: var(--spacing-md);
  }
}
</style>

