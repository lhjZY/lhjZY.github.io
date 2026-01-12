<script setup lang="ts">
import { withBase } from 'vitepress'
import { computed } from 'vue'
import { data as posts } from '../posts.data'

// 按年份分组文章
const postsByYear = computed(() => {
  const groups: Record<string, typeof posts> = {}
  
  posts.forEach(post => {
    const year = new Date(post.date).getFullYear().toString()
    if (!groups[year]) {
      groups[year] = []
    }
    groups[year].push(post)
  })
  
  // 按年份降序排序
  const sortedYears = Object.keys(groups).sort((a, b) => parseInt(b) - parseInt(a))
  
  return sortedYears.map(year => ({
    year,
    posts: groups[year]
  }))
})

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${month}-${day}`
}
</script>

<template>
  <div class="archive-page">
    <div v-for="group in postsByYear" :key="group.year" class="archive-year">
      <h2 class="archive-year-title">{{ group.year }}</h2>
      <ul class="archive-posts">
        <li v-for="post in group.posts" :key="post.url" class="archive-post-item">
          <span class="archive-post-date">{{ formatDate(post.date) }}</span>
          <a :href="withBase(post.url)" class="archive-post-title">{{ post.title }}</a>
        </li>
      </ul>
    </div>
    
    <!-- Empty State -->
    <div v-if="postsByYear.length === 0" class="empty-state">
      <p>暂无文章</p>
    </div>
  </div>
</template>

<style scoped>
.archive-year {
  margin-bottom: var(--spacing-2xl);
}

.archive-year:last-child {
  margin-bottom: 0;
}

.archive-year-title {
  font-family: var(--font-mono);
  font-size: 1.25rem;
  font-weight: 700;
  padding: var(--spacing-md) var(--spacing-lg);
  border: var(--border-solid);
  background: var(--color-bg-alt);
  margin: 0;
}

.archive-posts {
  list-style: none;
  border: var(--border-solid);
  border-top: none;
  margin: 0;
  padding: 0;
}

.archive-post-item {
  display: flex;
  gap: var(--spacing-lg);
  padding: var(--spacing-md) var(--spacing-lg);
  border-bottom: var(--border);
}

.archive-post-item:last-child {
  border-bottom: none;
}

.archive-post-date {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  min-width: 60px;
  flex-shrink: 0;
}

.archive-post-title {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--color-text);
  text-decoration: none;
}

.archive-post-title:hover {
  color: var(--color-accent);
}

.empty-state {
  padding: var(--spacing-2xl);
  text-align: center;
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
}
</style>
