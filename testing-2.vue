<template>
  <div class="app">
    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell">1</div>
      <div class="carousel-cell">2</div>
      <div class="carousel-cell">3</div>
    </flickity>
    <div class="actions">
      <button @click="addElement">Append element</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Flickity from '../components/content/Flickity.vue'

export default defineComponent({
  components: {
    Flickity
  },
  data() {
    return {
      flickityOptions: {
        pageDots: true,
        wrapAround: true,
      }
    }
  },
  methods: {
    addElement() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (this.$refs.flickity as any).append(this.makeFlickityCell())
    },
    makeFlickityCell() {
      const cell = document.createElement('div')
      cell.className = 'carousel-cell'
      cell.textContent = 'Hi'
      return cell
    }
  }
})
</script>

<style scoped>

</style>