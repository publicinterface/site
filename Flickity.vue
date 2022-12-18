<template>
  <div ref="root" class="flickity">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import Flickity from 'flickity'

export default defineComponent({
  props: {
    options: Object,
  },
  setup(props) {
    let flickity: typeof Flickity | null = null
    const root = ref<HTMLElement | null>(null)

    onMounted(() => flickity = new Flickity(root.value as HTMLElement, props.options))
    onUnmounted(() => flickity?.destroy())

    return {
      root,
      append(element: HTMLElement) {
        flickity?.append(element)
        flickity?.select(-1)
      },
    }
  },
})
</script>

<style scoped>
@import '~flickity/dist/flickity.css';

.flickity .carousel {
  background: #EEE;
  margin-bottom: 40px;
}
.flickity::v-deep .carousel-cell {
  height: 200px;
  width: 25%;
  margin: 0 10px;
  background: #6C6;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}
</style>