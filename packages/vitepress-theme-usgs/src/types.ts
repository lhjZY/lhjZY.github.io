/**
 * Theme Configuration Types
 */

export interface ThemeConfig {
  /** Logo image path */
  logo?: string
  
  /** Site title displayed in header */
  siteTitle?: string
  
  /** Home page title */
  homeTitle?: string
  
  /** Author name */
  author?: string
  
  /** Navigation menu items */
  nav?: NavItem[]
  
  /** Footer configuration */
  footer?: FooterConfig
  
  /** Social links */
  socialLinks?: SocialLink[]
  
  /** Container max width (default: 840px) */
  containerMaxWidth?: string
  
  /** Accent color (default: #ed1c24) */
  accentColor?: string
}

export interface NavItem {
  text: string
  link: string
}

export interface FooterConfig {
  /** Copyright text */
  copyright?: string
  
  /** Footer links */
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
