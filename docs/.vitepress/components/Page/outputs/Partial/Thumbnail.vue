<script setup lang="ts">

import ThumbnailIcon, { type IconsOption } from './ThumbnailIcon.vue'
import ThumbnailImage, { type ImageOption } from './ThumbnailImage.vue'

export type ThumbnailProps =
  | { type: 'icons'; options: IconsOption }
  | { type: 'image'; options: ImageOption }

type Props = {
  thumbnail: ThumbnailProps
}

const props = defineProps<Props>()

</script>
<template>
  <div>
    <ThumbnailIcon
      v-if="props.thumbnail.type === 'icons'"
      :options="props.thumbnail.options"
    />
    <ThumbnailImage
      v-else-if="props.thumbnail.type === 'image'"
      :options="props.thumbnail.options"
    />
  </div>
</template>

