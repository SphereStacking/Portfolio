import { createContentLoader } from 'vitepress'


export default createContentLoader('outputs/**/*.md', {
    includeSrc: false, // 生のマークダウンソースを含めますか?
    render: false,     // レンダリングされた全ページ HTML を含めますか?
    excerpt: false,    // 抜粋を含めますか？
  transform(rawData) {
    const excludedUrls = ["/outputs/template.html", "/outputs/"]
    
    // 除外URLでフィルタリング
    const filteredData = rawData
      .filter(page => !excludedUrls.includes(page.url))
      .sort((a, b) => {
        const dateA = new Date(a.frontmatter.date)
        const dateB = new Date(b.frontmatter.date)
        return dateB.getTime() - dateA.getTime()
      })
    
    // 年ごとにグループ化し、配列に格納
    const groupedByYearArray = Object.values(
      filteredData.reduce((acc, page) => {
        const year = new Date(page.frontmatter.date).getFullYear()
        if (!acc[year]) {
          acc[year] = { year, contents: [] }
        }
        acc[year].contents.push(page)
        return acc
      }, {})
    ).sort((a, b) => b.year - a.year)  // 年度の降順にソート


    return groupedByYearArray
  }
})
