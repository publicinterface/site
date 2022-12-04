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
    <swiper-slide><nuxt-img src="/img/001.png" /></swiper-slide>
    <swiper-slide><nuxt-img src="/img/002.png" /></swiper-slide>
    <swiper-slide><nuxt-img src="/img/003.png" /></swiper-slide>
    <swiper-slide><nuxt-img src="/img/004.png" /></swiper-slide>
    <swiper-slide><nuxt-img src="/img/005.png" /></swiper-slide>
    <swiper-slide><nuxt-img src="/img/006.png" /></swiper-slide>
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
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

