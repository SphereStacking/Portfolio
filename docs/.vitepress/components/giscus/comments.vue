<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter, title } = useData()
</script>

<template>
  <div v-if="frontmatter.comments !== false" :key="title" class="giscus">
    <div :key="title" class="giscus">
      <component
        :is="'script'"
        src="https://giscus.app/client.js"
        data-repo="SphereStacking/Portfolio"
        data-repo-id="R_kgDONn9SpQ"
        data-category="Announcements"
        data-category-id="DIC_kwDONn9Spc4Cl_kb"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="transparent_dark"
        data-lang="ja"
        data-loading="lazy"
        crossorigin="anonymous"
        async
      />
    </div>
  </div>
</template>
