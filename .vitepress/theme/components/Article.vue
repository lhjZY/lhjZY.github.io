<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'
import { Content } from 'vitepress'

const { frontmatter, page } = useData()

const articleMeta = computed(() => ({
  date: frontmatter.value.date || '',
  category: frontmatter.value.category || '',
  tags: frontmatter.value.tags || [],
  author: frontmatter.value.author || 'huanjun'
}))

const formatDate = (dateStr: string) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <article class="article-container">
    <!-- Article Header -->
    <header v-if="articleMeta.date" class="article-header">
      <div class="article-meta">
        <span v-if="articleMeta.date">{{ formatDate(articleMeta.date) }}</span>
        <span v-if="articleMeta.category">· {{ articleMeta.category }}</span>
        <span v-if="articleMeta.author">· {{ articleMeta.author }}</span>
      </div>
    </header>

    <!-- Article Content -->
    <div class="article-content">
      <Content />
    </div>

    <!-- Article Tags -->
    <footer v-if="articleMeta.tags.length > 0" class="article-footer">
      <div class="article-tags">
        <span class="tag-label">标签：</span>
        <a 
          v-for="tag in articleMeta.tags" 
          :key="tag" 
          :href="`/tags/${tag}`"
          class="article-tag"
        >
          {{ tag }}
        </a>
      </div>
    </footer>
  </article>
</template>

<style scoped>
.article-footer {
  margin-top: var(--spacing-2xl);
  padding-top: var(--spacing-lg);
  border-top: var(--border);
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-sm);
}

.tag-label {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

.article-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: var(--spacing-xs) var(--spacing-sm);
  border: var(--border-solid);
  background: var(--color-bg);
  transition: all var(--transition-fast);
}

.article-tag:hover {
  background: var(--color-black);
  color: var(--color-white);
}
</style>
