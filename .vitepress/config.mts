import { defineConfig } from "vitepress";
import type { ThemeConfig } from "./theme/types";

/**
 * Blog Theme Config
 *
 * 主题配置项说明：
 * - homeTitle: 首页标题
 * - author: 作者名称
 * - footer: 页脚配置
 */

export default defineConfig({
  // 站点标题（显示在浏览器标签页）
  title: "huanjun",

  // 站点描述（SEO）
  description: "huanjun's personal blog",

  // 多语言配置
  locales: {
    root: {
      label: "中文",
      lang: "zh-CN",
      themeConfig: {
        // 首页标题
        homeTitle: "文章列表",
        nav: [
          { text: "首页", link: "/" },
          { text: "分类", link: "/categories/" },
          { text: "关于", link: "/about/" },
          { text: "项目", link: "/projects/" },
          { text: "归档", link: "/archive/" },
        ],
      } as ThemeConfig,
    },
  },

  themeConfig: {
    // Logo（显示在 header）
    logo: "/header.svg",

    // 站点标题（显示在 header）
    siteTitle: "huanjun",

    // 首页标题（默认值，可被 locale 覆盖）
    homeTitle: "文章列表",

    // 作者信息
    author: "huanjun",

    // 页脚配置
    footer: {
      copyright: "© 2026 huanjun. All rights reserved.",
      links: [{ text: "GitHub", link: "https://github.com/lhjZY" }],
    },

    // 社交链接
    socialLinks: [{ icon: "github", link: "https://github.com/lhjZY" }],
  } as ThemeConfig,

  // Head 配置
  head: [
    // Favicon - 使用 SVG 图标
    ["link", { rel: "icon", type: "image/svg+xml", href: "/workflow.svg" }],

    // Fonts
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
});
