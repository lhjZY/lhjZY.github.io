/**
 * vitepress-theme-usgs
 * 
 * A minimalist VitePress theme inspired by U.S. Graphics Company design.
 * 
 * Features:
 * - Clean black & white design with red accent
 * - Responsive layout
 * - Configurable via themeConfig
 * - Medium-zoom for images
 * - Multi-language support
 * 
 * @license MIT
 */

import type { Theme } from 'vitepress'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import Layout from './Layout.vue'
import './styles/main.css'

// Export types
export * from './types'

// Export components for customization
export { default as Layout } from './Layout.vue'
export { default as Header } from './components/Header.vue'
export { default as Footer } from './components/Footer.vue'
export { default as Article } from './components/Article.vue'

const theme: Theme = {
  Layout,
  enhanceApp({ app }) {
    // Users can register their own components
  },
  setup() {
    const route = useRoute()
    
    const initZoom = () => {
      mediumZoom('.article-content img, .post-excerpt img', {
        background: 'rgba(0, 0, 0, 0.9)'
      })
    }
    
    onMounted(() => initZoom())
    
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}

export default theme
