<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { computed, provide } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Article from './components/Article.vue'

const { frontmatter, page, theme } = useData()
const route = useRoute()

// Provide theme config to child components
provide('themeConfig', theme)

const isHome = computed(() => {
  const path = route.path
  return path === '/' || path.endsWith('/en/') || path === '/en'
})

const pageTitle = computed(() => {
  if (isHome.value) return theme.value.homeTitle || ''
  return frontmatter.value.title || page.value.title || ''
})
</script>

<template>
  <div class="layout">
    <div class="site-container">
      <Header />
      
      <main class="main-content">
        <!-- Page Title Section -->
        <section v-if="pageTitle" class="page-title-section">
          <h1 class="page-title">{{ pageTitle }}</h1>
          <div class="title-underline"></div>
        </section>

        <!-- Content Area - Users provide their own content via slots or Content component -->
        <div class="content-wrapper">
          <slot>
            <Article />
          </slot>
        </div>
      </main>

      <Footer />
    </div>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-xl) var(--spacing-lg);
}

.site-container {
  width: 100%;
  max-width: var(--container-max, 840px);
  background: var(--color-bg);
  border: var(--border-solid);
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - var(--spacing-xl) * 2);
}

.page-title-section {
  padding: var(--spacing-md) var(--spacing-lg);
}

.content-wrapper {
  padding: 0 var(--spacing-lg);
}

.main-content {
  flex: 1;
}
</style>
