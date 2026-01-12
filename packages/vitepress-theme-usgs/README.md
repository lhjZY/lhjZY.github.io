# vitepress-theme-usgs

A minimalist VitePress theme inspired by U.S. Graphics Company design.

## Features

- 🎨 Clean black & white design with red accent
- 📱 Responsive layout
- ⚙️ Fully configurable via `themeConfig`
- 🔍 Medium-zoom for images
- 🌐 Multi-language support

## Installation

```bash
pnpm add vitepress-theme-usgs
```

## Usage

### Basic Setup

In your `.vitepress/theme/index.ts`:

```ts
import Theme from 'vitepress-theme-usgs'
import 'vitepress-theme-usgs/styles'

export default Theme
```

### Configuration

In your `.vitepress/config.ts`:

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Blog',
  description: 'My personal blog',
  
  themeConfig: {
    // Logo in header
    logo: '/logo.svg',
    
    // Site title in header
    siteTitle: 'My Blog',
    
    // Home page title
    homeTitle: 'Posts',
    
    // Author name
    author: 'Your Name',
    
    // Navigation
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Archive', link: '/archive/' }
    ],
    
    // Footer
    footer: {
      copyright: '© 2024 Your Name',
      links: [
        { text: 'GitHub', link: 'https://github.com/yourname' }
      ]
    }
  }
})
```

### Custom Home Page

Create your own home page component:

```ts
// .vitepress/theme/index.ts
import Theme, { Layout } from 'vitepress-theme-usgs'
import 'vitepress-theme-usgs/styles'
import MyHome from './components/MyHome.vue'

export default {
  ...Theme,
  Layout: () => h(Layout, null, {
    default: () => h(MyHome)
  })
}
```

### Posts Data Loader

Create a data loader for your posts:

```ts
// .vitepress/theme/posts.data.ts
import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  excerpt: '<!--more-->',
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        date: frontmatter.date,
        excerpt
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  }
})
```

## Customization

### CSS Variables

Override CSS variables in your own styles:

```css
:root {
  --color-accent: #0066cc;
  --container-max: 960px;
}
```

## License

MIT
