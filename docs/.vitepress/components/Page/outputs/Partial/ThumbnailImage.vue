<script lang="ts" setup>
export type ImageOption = {
  image: string,
  alt: string,
  containerClass?: string,
}

type Props = {
  options: ImageOption
}

const props = defineProps<Props>()
</script>

<template>
  <div
    :class="[
      'size-full object-cover',
      props.options.containerClass,
    ]"
  >
    <img
      :src="props.options.image"
      :alt="props.options.alt"
      class="size-full object-cover"
    >
  </div>
</template>
