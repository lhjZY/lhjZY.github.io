# huanjun Blog 使用文档

这是一个基于 **VitePress** 构建的个人博客项目，采用自定义主题设计，灵感来自 U.S. Graphics Company 的复古风格。

---

## 📁 项目结构

```
blog/
├── .vitepress/
│   ├── config.mts          # VitePress 配置文件
│   └── theme/               # 自定义主题
│       ├── index.ts         # 主题入口
│       ├── Layout.vue       # 布局组件
│       ├── components/      # 组件目录
│       │   ├── Header.vue   # 页头导航
│       │   ├── Footer.vue   # 页脚
│       │   ├── Home.vue     # 首页组件
│       │   └── Article.vue  # 文章页组件
│       └── styles/
│           └── main.css     # 全局样式
├── posts/                   # 📝 文章存放目录
│   └── welcome.md           # 示例文章
├── about/                   # 关于页面
├── categories/              # 分类页面
├── projects/                # 项目页面
├── archive/                 # 归档页面
├── en/                      # 英文版内容
├── public/                  # 静态资源目录
│   └── header.svg           # 彩色条装饰
├── index.md                 # 首页入口
└── package.json
```

---

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173` 即可预览网站。

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

---

## ✍️ 如何写文章

### 1. 创建新文章

在 `posts/` 目录下创建一个新的 `.md` 文件：

```bash
# 示例
posts/my-first-post.md
posts/2024/learning-vue.md
```

### 2. 添加 Frontmatter

每篇文章的开头需要添加 **YAML Frontmatter** 来定义元数据：

```markdown
---
title: 文章标题
date: 2024-12-30
category: 技术
author: huanjun
tags:
  - VitePress
  - Blog
  - Vue
---

# 这是文章的正文内容

开始写作吧！
```

### 3. Frontmatter 字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `title` | String | ✅ | 文章标题，会显示在列表和页面中 |
| `date` | Date | ✅ | 发布日期，格式：`YYYY-MM-DD` |
| `category` | String | ❌ | 文章分类，如：技术、生活、随笔 |
| `author` | String | ❌ | 作者名称 |
| `tags` | Array | ❌ | 标签列表 |

### 4. 文章示例

```markdown
---
title: 我的 Vue 3 学习笔记
date: 2024-12-30
category: 技术
author: huanjun
tags:
  - Vue
  - 前端
  - JavaScript
---

# Vue 3 学习笔记

## Composition API

Vue 3 引入了 Composition API，它提供了更灵活的代码组织方式...

## 响应式系统

使用 `ref` 和 `reactive` 来创建响应式数据：

\`\`\`javascript
import { ref, reactive } from 'vue'

const count = ref(0)
const state = reactive({ name: 'Vue 3' })
\`\`\`

## 总结

Vue 3 是一个非常棒的框架！
```

---

## 🌐 多语言支持

项目支持中英文双语：

- **中文内容**：放在根目录（如 `posts/`, `about/`）
- **英文内容**：放在 `en/` 目录下（如 `en/posts/`, `en/about/`）

### 添加英文文章

```bash
# 在 en/posts/ 目录下创建
en/posts/my-english-post.md
```

---

## ⚙️ 配置说明

编辑 `.vitepress/config.mts` 来自定义网站：

### 基础配置

```typescript
export default defineConfig({
  // 站点标题（显示在浏览器标签页）
  title: "你的网站名称",
  
  // 站点描述（SEO）
  description: "网站描述",
  
  // 如果部署到子路径，设置 base
  // base: '/your-repo-name/',
})
```

### 主题配置

```typescript
themeConfig: {
  // Logo（显示在 header）
  logo: '/header.svg',
  
  // 站点标题（显示在 header）
  siteTitle: 'huanjun',
  
  // 首页标题
  homeTitle: '文章列表',
  
  // 作者信息
  author: 'huanjun',
  
  // 导航菜单
  nav: [
    { text: '首页', link: '/' },
    { text: '分类', link: '/categories/' },
    { text: '关于', link: '/about/' },
    { text: '归档', link: '/archive/' }
  ],
  
  // 页脚配置
  footer: {
    copyright: '© 2024 huanjun. All rights reserved.',
    links: [
      { text: 'GitHub', link: 'https://github.com/huanjun' },
      { text: 'RSS', link: '/feed.xml' }
    ]
  },
  
  // 社交链接
  socialLinks: [
    { icon: 'github', link: 'https://github.com/yourname' }
  ]
}
```

### Favicon 配置

在 `head` 中配置网站图标：

```typescript
head: [
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
]
```

将图标文件放在 `public/` 目录下。

### 多语言配置

```typescript
locales: {
  root: {
    label: '中文',
    lang: 'zh-CN',
    themeConfig: {
      homeTitle: '文章列表',
      nav: [/* 中文导航 */]
    }
  },
  en: {
    label: 'English',
    lang: 'en',
    link: '/en/',
    themeConfig: {
      homeTitle: 'Posts',
      nav: [/* 英文导航 */]
    }
  }
}
```

---

## 🎨 自定义样式

### 修改主题颜色

编辑 `.vitepress/theme/styles/main.css` 中的 CSS 变量：

```css
:root {
  --color-bg: #ffffff;           /* 背景色 */
  --color-text: #1a1a1a;         /* 文字颜色 */
  --color-accent: #ed1c24;       /* 强调色（红色） */
  --color-border: #1a1a1a;       /* 边框颜色 */
  --font-mono: 'IBM Plex Mono';  /* 等宽字体 */
}
```

### 修改布局

编辑 `.vitepress/theme/Layout.vue` 来自定义页面布局。

---

## 📦 部署

### 部署到 GitHub Pages

1. 在 `config.mts` 中设置 `base`（如果部署到子路径）：

```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

2. 构建并推送到 `gh-pages` 分支。

### 部署到 Vercel / Netlify

直接连接 Git 仓库，选择 VitePress 框架即可自动构建。

---

## 📝 常用命令速查

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 构建生产版本 |
| `npm run preview` | 预览构建结果 |

---

## 💡 小贴士

1. **热更新**：开发模式下，修改文件会自动刷新页面
2. **图片资源**：将图片放在 `public/` 目录下，然后使用 `/image.png` 引用
3. **Markdown 增强**：支持在 Markdown 中使用 Vue 组件
4. **SEO 友好**：frontmatter 中的 `title` 和 `description` 会自动生成 meta 标签

---