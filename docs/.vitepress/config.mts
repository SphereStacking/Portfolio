import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

// プラグインのインポート
import { SitemapPlugin } from './plugins/sitemap'
import { RSSPlugin } from './plugins/rss'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Portfolio/',
  title: "SphereStacking.com",
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
      { icon: 'amazon', link: 'https://www.amazon.jp/hz/wishlist/ls/1KO31I7A13QGJ?ref_=wl_share' },
    ],

    footer: {
      copyright: 'Copyright © 2025-present <a href="https://github.com/SphereStacking">SphereStacking</a>'
    },

    // 検索機能 https://vitepress.dev/reference/default-theme-search
    search: {
      provider: 'local'
    }
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
    ],
    [
      'script',
      { async: '', src: 'https://code.iconify.design/iconify-icon/2.3.0/iconify-icon.min.js' }
    ],
    [
      'link',
      { rel: 'alternate', type: 'application/rss+xml', title: 'RSS Feed', href: '/rss.xml' }
    ],
  ],
  vite: {
    plugins: [
      // 詳細については https://github.com/antfu/unplugin-auto-import#configuration を参照してください
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
          /\.mdx$/, // .mdx
        ],
        imports: [
          'vue',
          '@vueuse/head',
          '@vueuse/core',
        ],
        dirs: [
          // パスは Vitepress の srcDir からの相対パスである必要があります
          '.vitepress/composable',
        ],
        vueTemplate: true,
        eslintrc: {
          enabled: true, // ESLint 設定ファイルの自動生成を有効にする
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
      }),

      // 詳細については https://github.com/antfu/unplugin-vue-components#configuration を参照してください
      Components({
        // パスは Vitepress の srcDir からの相対パス
        dirs: ['.vitepress/components'],

        // コンポーネントの有効なファイル拡張子
        extensions: ['vue'],

        // マークダウンで使用されているコンポーネントを自動インポートして登録
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.mdx?/],
      }),
      SitemapPlugin({
        hostname: 'https://spherestacking.github.io/Portfolio/'
      }),
      // RSSPlugin({
      //   targetPath: 'outputs',
      //   hostname: 'https://spherestacking.github.io/Portfolio/', // 必要に応じてホスト名を変更
      //   title: "Sphere Stacking",
      //   description: "Sphere Stacking",
      //   id: "https://spherestacking.github.io/Portfolio/",
      //   link: "https://spherestacking.github.io/Portfolio/",
      //   language: "ja",
      //   favicon: "https://spherestacking.github.io/Portfolio/favicon.ico",
      // })
    ],
    resolve: {
      alias: {
        /* 詳細については https://vitejs.dev/config/shared-options.html#resolve-alias を参照してください */
        // このファイルからの相対パス
        '@': fileURLToPath(new URL('./', import.meta.url)),
      },
    },
  },
})

