import { SitemapStream } from 'sitemap'
import { createWriteStream, mkdirSync, existsSync } from 'fs'
import { resolve } from 'path'
import { SiteConfig } from 'vitepress'

interface SitemapOptions {
  hostname: string
}

export function SitemapPlugin(options: SitemapOptions) {
  const links: { url: string }[] = []
  const excludePattern = /404\.html$/
  const indexPattern = /((^|\/)index)?\.md$/
  let VPConfig: SiteConfig

  return {
    name: 'vitepress-plugin-sitemap',
    enforce: 'pre',
    configResolved(config) {
      if (VPConfig) {
        return
      }
      VPConfig = config.vitepress
      for (const page of VPConfig.pages) {
        if (!excludePattern.test(page)) {
          const url = `${options.hostname}${page.replace(indexPattern, '$2')}`
          links.push({ url })
          console.log(`Sitemap: Added URL ${url}`)
        }
      }
      console.log('Sitemap: Generating sitemap.xml...')

      const sitemap = new SitemapStream({ hostname: options.hostname })
      const sitemapPath = resolve(VPConfig.outDir, 'sitemap.xml')

      // 出力ディレクトリが存在するか確認し、存在しない場合は作成
      const outDir = resolve(VPConfig.outDir)
      if (!existsSync(outDir)) {
        mkdirSync(outDir, { recursive: true })
        console.log(`Sitemap: Created directory ${outDir}`)
      }

      const sitemapStream = createWriteStream(sitemapPath)
      sitemap.pipe(sitemapStream)
      links.forEach((link) => sitemap.write(link))
      sitemap.end()

      sitemapStream.on('finish', () => {
        console.log(`Sitemap: sitemap.xml generated at ${sitemapPath}`)
      })

      sitemapStream.on('error', (error) => {
        console.error('Sitemap: Failed to generate sitemap.xml', error)
      })
    }
  }
}
