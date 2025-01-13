// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { useData } from 'vitepress'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import "../custom.css";

import PostHeader from '@/components/Page/outputs/Partial/PostDetail/PostHeader.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => {
        const { page } = useData()
        if (page.value.relativePath.match(/^outputs\/(?!index.md)/)) {
          return h(PostHeader)
        }
      },
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
