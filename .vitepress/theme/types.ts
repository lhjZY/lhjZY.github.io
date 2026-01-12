/**
 * huanjun Blog Theme Types
 * 主题配置类型定义
 */

export interface ThemeConfig {
  /** Logo 图片路径 */
  logo?: string
  
  /** 站点标题 */
  siteTitle?: string
  
  /** 首页标题 */
  homeTitle?: string
  
  /** 作者名称 */
  author?: string
  
  /** 导航菜单 */
  nav?: NavItem[]
  
  /** 页脚配置 */
  footer?: FooterConfig
  
  /** 社交链接 */
  socialLinks?: SocialLink[]
}

export interface NavItem {
  text: string
  link: string
}

export interface FooterConfig {
  /** 版权信息 */
  copyright?: string
  
  /** 页脚链接 */
  links?: FooterLink[]
}

export interface FooterLink {
  text: string
  link: string
}

export interface SocialLink {
  icon: 'github' | 'twitter' | 'linkedin' | string
  link: string
}

export interface Post {
  title: string
  url: string
  date: string
  category?: string
  author?: string
  tags?: string[]
  excerpt?: string
  cover?: string
}
