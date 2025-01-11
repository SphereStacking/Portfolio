import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Portfolio/',
  title: "Portfolio",
  description: "SphereStackingのポートフォリオサイトです。",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'スキル', link: '/skills/' },
      { text: 'アウトプット', link: '/outputs/' },
      { text: '個人開発', link: '/personal-developments/' },
      { text: 'ワーク', link: '/works/' },
      { text: 'お問い合わせ', link: '/contact/' },
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SphereStacking' },
      { icon: 'x', link: 'https://x.com/SphereStacking' },
      { icon: 'gmail', link: 'mailto:sphere.stacking@gmail.com' },
    ]
  },
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-ES3VF8F3QE' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ES3VF8F3QE');`
    ]
  ]
})

