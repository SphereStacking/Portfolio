<script lang="ts" setup>
import { computed } from 'vue'
export type IconsOption = {
  icons: {
    name: string,
    class?: string,
  }[],
}

type Props = {
  options: IconsOption
}
const iconLengthClassMap = {
    1: { item: 'text-7xl', container: '' },
    2: { item: 'text-6xl', container: 'flex-col gap-1 py-6' },
    3: { item: 'text-5xl', container: 'flex-wrap gap-2 p-2 py-8' },
    4: { item: 'text-5xl', container: 'flex-wrap gap-1 p-2 py-8' },
}

const props = defineProps<Props>()
const computedIconClasses = computed(() => {
    return iconLengthClassMap[props.options.icons.length] ?? ''
}
)
</script>

<template>
  <div
    class="my-auto flex size-full flex-wrap items-center justify-around"
    :class="computedIconClasses.container"
  >
    <iconify-icon 
      v-for="(icon, index) in props.options.icons" 
      :key="`${index}-${icon.name}`"
      :icon="icon.name"
      :class="[computedIconClasses.item, icon.class]" 
    />
  </div>
</template>

