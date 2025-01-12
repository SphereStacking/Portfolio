<script setup>
import { data as contents } from '@/posts.data.mts'
import { computed } from 'vue'

const groupedByYearArray = computed(() => {
  const groupedByYearArray = Object.values(
    contents.reduce((acc, page) => {
      const year = new Date(page.frontmatter.created_at).getFullYear()
      if (!acc[year]) {
          acc[year] = { year, contents: [] }
        }
        acc[year].contents.push(page)
        return acc
      }, {})
    ).sort((a, b) => b.year - a.year)  // 年度の降順にソート
  return groupedByYearArray
})

</script>


<template>
  <div class="flex flex-col gap-8">
    <div
      v-for="(post, index) in groupedByYearArray"
      :key="index"
    >
      <div class="mb-2 text-2xl font-bold">
        {{ post.year }}
      </div>
      <div class=" flex flex-col gap-6">
        <PostCard
          v-for="content in post.contents"
          :key="content.url"
          :data="content"
        />
      </div>
    </div>  
  </div>
</template>
