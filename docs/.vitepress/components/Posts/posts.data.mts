import { createContentLoader , type ContentData} from 'vitepress'


export default createContentLoader('outputs/**/*.md', {
    includeSrc: false, // 生のマークダウンソースを含めますか?
    render: false,     // レンダリングされた全ページ HTML を含めますか?
    excerpt: false,    // 抜粋を含めますか？
  transform(rawData:ContentData[]) {
    const excludedUrls = ["/outputs/template.html", "/outputs/"]
    // 除外URLでフィルタリング
    const filteredData = rawData
      .filter(page => !excludedUrls.includes(page.url))
      .sort((a, b) => {
        const dateA = new Date(a.frontmatter.date)
        const dateB = new Date(b.frontmatter.date)
        return dateB.getTime() - dateA.getTime()
      })
    return filteredData
  }
})

