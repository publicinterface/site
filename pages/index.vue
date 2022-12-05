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
    <swiper-slide><nuxt-img src="https://via.placeholder.com/1920x1080/09f.png/fff?text=Slide+1" /></swiper-slide>
    <swiper-slide><nuxt-img src="https://via.placeholder.com/1920x1080/6f9ddf.png/fff?text=Slide+2" /></swiper-slide>
    <swiper-slide><nuxt-img src="https://via.placeholder.com/1920x1080/95a3be.png/fff?text=Slide+3" /></swiper-slide>
    <swiper-slide><nuxt-img src="https://via.placeholder.com/1920x1080/ada89e.png/fff?text=Slide+4" /></swiper-slide>
    <swiper-slide><nuxt-img src="https://via.placeholder.com/1920x1080/bfaf7c.png/fff?text=Slide+5" /></swiper-slide>
    <swiper-slide><nuxt-img src="https://via.placeholder.com/1920x1080/d9bc26.png/fff?text=Slide+6" /></swiper-slide>
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

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>

