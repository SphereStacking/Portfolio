<script setup lang="ts">
import { format, parse } from "@formkit/tempo"
import { withBase } from 'vitepress'
import { computed } from 'vue'
import Tags from './Partial/Tags.vue'
import Thumbnail, { type ThumbnailProps  } from './Partial/Thumbnail.vue'
type Props = {
  data: {
    frontmatter: {
      title: string,
      description: string,
      tags: string[],
      date: string,
      thumbnail: ThumbnailProps,
    },
    url: string,
  },
}

const props = defineProps<Props>()
const date = computed(() => format(parse(props.data.frontmatter.date), "YYYY年MM月DD日"));

</script>

<template>
  <div class="group flex flex-row overflow-hidden rounded-xl border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-teal-200">
    <Thumbnail
      :thumbnail="props.data.frontmatter.thumbnail"
      class="w-40"
    />
    <div class="flex w-full flex-col px-6 py-4">
      <span class="flex items-center gap-1 text-xs">
        <iconify-icon icon="mdi:calendar" />
        {{ date }}
      </span>
      <div class="text-xl font-bold">
        {{ props.data.frontmatter.title }}
      </div>
      <div class="h-20 text-base text-gray-700">
        {{ props.data.frontmatter.description }}
      </div>
      <div class="flex w-full items-center justify-between gap-1 text-xs">
        <Tags :tags="props.data.frontmatter.tags" />
        <div class="overflow-hidden">
          <div class="translate-x-4  transition-transform duration-300 group-hover:translate-x-0">
            <a
              :href="withBase(props.data.url)"
              class="flex items-center"
            >
              Read more >>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
