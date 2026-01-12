<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

interface FooterLink {
  text: string
  link: string
}

const { theme } = useData()
const currentYear = new Date().getFullYear()

// 从配置获取页脚信息
const footerConfig = computed(() => theme.value.footer || {})
const copyright = computed(() => {
  return footerConfig.value.copyright || `© ${currentYear} All rights reserved.`
})
const links = computed<FooterLink[]>(() => footerConfig.value.links || [])
</script>

<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-copyright">
        {{ copyright }}
      </div>
      <div v-if="links.length > 0" class="footer-links">
        <template v-for="(link, index) in links" :key="link.link">
          <a :href="link.link" target="_blank" rel="noopener">{{ link.text }}</a>
          <span v-if="index < links.length - 1">·</span>
        </template>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: var(--border-solid);
  padding: var(--spacing-lg);
  margin-top: auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-secondary);
}

.footer-links {
  display: flex;
  gap: var(--spacing-sm);
}

.footer-links a {
  color: var(--color-text-secondary);
  text-decoration: none;
}

.footer-links a:hover {
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: var(--spacing-sm);
    text-align: center;
  }
}
</style>
