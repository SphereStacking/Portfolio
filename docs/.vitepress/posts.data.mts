import { createContentLoader , type ContentData} from 'vitepress'

export default createContentLoader('outputs/**/*.md', {
    includeSrc: false, // 生のマークダウンソースを含めますか?
    render: false,     // レンダリングされた全ページ HTML を含めますか?
    excerpt: false,    // 抜粋を含めますか？
  transform(rawData:ContentData[]) {
    const excludedUrls = ["/outputs/Template/", "/outputs/"]
    // 除外URLでフィルタリング
    const filteredData = rawData
      .filter(page => !excludedUrls.includes(page.url))
      .sort((a, b) => {
        const dateA = new Date(a.frontmatter.created_at)
        const dateB = new Date(b.frontmatter.created_at)
        return dateB.getTime() - dateA.getTime()
      })
    return filteredData
  }
})

