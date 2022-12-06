<template>
  <swiper
    :direction="'vertical'"
    :keyboard="{
      enabled: true,
    }"
    :mousewheel="true"
    :modules="modules"
    class="home-swiper"
  >
    <!-- :style="[page.acf.background_image ? { 'background-image': 'url(' + page.acf.background_image + ')' } : {'background': '#000'}, {'opacity': itemOpacity}]" -->
    <swiper-slide :style="{'background-image': 'url(https://via.placeholder.com/1920x1080/09f.png/fff?text=Slide+1', 'background-position': '50% 50%'}"></swiper-slide>
    <swiper-slide :style="{'background-image': 'url(https://via.placeholder.com/1920x1080/6f9ddf.png/fff?text=Slide+2', 'background-position': '50% 50%'}"></swiper-slide>
    <swiper-slide :style="{'background-image': 'url(https://via.placeholder.com/1920x1080/95a3be.png/fff?text=Slide+3', 'background-position': '50% 50%'}"></swiper-slide>
    <swiper-slide :style="{'background-image': 'url(https://via.placeholder.com/1920x1080/ada89e.png/fff?text=Slide+4', 'background-position': '50% 50%'}"></swiper-slide>
    <swiper-slide :style="{'background-image': 'url(https://via.placeholder.com/1920x1080/bfaf7c.png/fff?text=Slide+5', 'background-position': '50% 50%'}"></swiper-slide>
    <swiper-slide :style="{'background-image': 'url(https://via.placeholder.com/1920x1080/d9bc26.png/fff?text=Slide+6', 'background-position': '50% 50%'}"></swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Keyboard, Mousewheel } from "swiper";
// Pagination,
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      // Pagination,
      modules: [Keyboard, Mousewheel],
    };
  },
};
</script>
<style>

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  background-size: cover;
}

</style>

