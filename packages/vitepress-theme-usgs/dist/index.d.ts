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
import type { Theme } from 'vitepress';
import './styles/main.css';
export * from './types';
export { default as Layout } from './Layout.vue';
export { default as Header } from './components/Header.vue';
export { default as Footer } from './components/Footer.vue';
export { default as Article } from './components/Article.vue';
declare const theme: Theme;
export default theme;
