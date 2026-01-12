/**
 * huanjun Blog Theme
 * 
 * A minimalist VitePress theme inspired by U.S. Graphics Company design.
 * 
 * Features:
 * - Clean black & white design with red accent
 * - Responsive layout
 * - Auto-generated post list, archives, and categories
 * - Medium-zoom for images
 * - Multi-language support
 * 
 * @author huanjun
 * @license MIT
 */

import type { Theme } from 'vitepress'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import Layout from './Layout.vue'
import './styles/main.css'

// Export types for theme configuration
export type { ThemeConfig, NavItem, FooterConfig, FooterLink, SocialLink, Post } from './types'

const theme: Theme = {
  Layout,
  enhanceApp({ app }) {
    // Register global components here if needed
  },
  setup() {
    const route = useRoute()
    
    const initZoom = () => {
      // Add zoom effect to images in article content
      mediumZoom('.article-content img, .post-excerpt img', {
        background: 'rgba(0, 0, 0, 0.9)'
      })
    }
    
    onMounted(() => {
      initZoom()
    })
    
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  }
}

export default theme
