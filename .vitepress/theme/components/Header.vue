<script setup lang="ts">
import { useData, useRoute, withBase } from "vitepress";
import { computed } from "vue";

const { theme } = useData();
const route = useRoute();

const nav = computed(() => {
  return theme.value.nav || [];
});

const isActive = (link: string) => {
  const path = route.path;
  if (link === "/") {
    return path === link || path === "";
  }
  return path.startsWith(link);
};
</script>

<template>
  <header class="site-header">
    <!-- Logo Row with Colorful Bar -->
    <div class="header-logo-row">
      <a href="/" class="site-logo"> huanjun </a>
      <div class="header-bar">
        <img :src="withBase('/header.svg')" alt="Header decoration" />
      </div>
    </div>

    <!-- Navigation Row -->
    <nav class="main-nav">
      <a
        v-for="item in nav"
        :key="item.link"
        :href="withBase(item.link)"
        class="nav-item"
        :class="{ active: isActive(item.link) }"
      >
        {{ item.text }}
      </a>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  background: var(--color-bg);
}

.header-logo-row {
  display: flex;
  align-items: center;
  padding: 0 var(--spacing-lg);
}

.site-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--color-text);
  white-space: nowrap;
  flex-shrink: 0;
}

.header-bar {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.header-bar img {
  width: 100%;
  height: 10px;
  display: block;
  object-fit: cover;
}

.main-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-lg);
  flex-wrap: wrap;
}

.nav-item {
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: 0.875rem;
  padding: var(--spacing-xs) var(--spacing-md);
  border: var(--border-solid);
  background: var(--color-bg);
  transition: all var(--transition-fast);
  position: relative;
  text-align: center;
  box-shadow: 2px 2px #bbb;
}

.nav-item::before {
  content: "";
  position: absolute;
  left: 6px;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background-color: var(--color-accent);
  border-radius: 50%;
  opacity: 0;
  transition: opacity var(--transition-fast);
}

/* hover: 背景变黑 */
.nav-item:hover {
  background: var(--color-black);
  color: var(--color-white);
}

/* active: 显示红色圆点 */
.nav-item.active::before {
  opacity: 1;
}
</style>
