import { createContentLoader } from 'vitepress'

export interface Post {
  title: string
  url: string
  date: string
  category?: string
  author?: string
  tags?: string[]
  excerpt?: string
  cover?: string  // 封面图片
}

declare const data: Post[]
export { data }

// 从 HTML 中提取第一张图片
function extractFirstImage(html: string): { image: string | null; text: string } {
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/i
  const match = html.match(imgRegex)
  
  if (match) {
    const image = match[1]
    // 移除图片标签，保留纯文本
    const text = html.replace(imgRegex, '').trim()
    return { image, text }
  }
  
  return { image: null, text: html }
}

// 将相对路径转换为绝对路径
function resolveImagePath(imagePath: string, postUrl: string): string {
  // 如果已经是绝对路径，直接返回
  if (imagePath.startsWith('/') || imagePath.startsWith('http')) {
    return imagePath
  }
  
  // 处理相对路径 ./xxx 或 xxx
  const cleanPath = imagePath.replace(/^\.\//, '')
  
  // 获取文章所在目录
  // postUrl 格式如: /posts/hello-vitepress/ 或 /posts/welcome.html
  let baseDir = postUrl
  if (postUrl.endsWith('.html')) {
    // 单文件结构: /posts/welcome.html -> /posts/
    baseDir = postUrl.substring(0, postUrl.lastIndexOf('/') + 1)
  } else if (!postUrl.endsWith('/')) {
    baseDir = postUrl + '/'
  }
  
  return baseDir + cleanPath
}

// 支持两种结构: posts/*.md 和 posts/*/index.md
export default createContentLoader(['posts/*.md', 'posts/*/index.md'], {
  excerpt: '<!--more-->',
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => {
        const { image, text } = extractFirstImage(excerpt || '')
        
        // 转换图片路径为绝对路径
        const cover = image ? resolveImagePath(image, url) : undefined
        
        return {
          title: frontmatter.title || 'Untitled',
          url: url,
          date: frontmatter.date ? formatDate(frontmatter.date) : '',
          category: frontmatter.category || '',
          author: frontmatter.author || '',
          tags: frontmatter.tags || [],
          excerpt: text,
          cover: cover
        }
      })
      .sort((a, b) => {
        // Sort by date descending (newest first)
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })
  }
})

function formatDate(date: string | Date): string {
  const d = new Date(date)
  return d.toISOString().split('T')[0]
}
