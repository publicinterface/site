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
    <swiper-slide :style="{'background-image': 'url(https://via.placeholder.com/1920x1080/09f.png/fff?text=Slide+1', 'background-position': '50% 50%'}">
      <header class="homepage-header">
        <ul class="caps homepage-article"><li>PROGRAM</li><li>Sunday, Dec 11, 2022</li></ul>
        <h2>Title of project</h2>
        <p>Some text about the project</p>
      </header>
    </swiper-slide>
    <swiper-slide :style="{'background-image': 'url(https://via.placeholder.com/1920x1080/6f9ddf.png/fff?text=Slide+2', 'background-position': '50% 50%'}">
      <header class="homepage-header">
        <ul class="caps homepage-article"><li>PROGRAM</li><li>Sunday, Dec 11, 2022</li></ul>
        <h2>Title of project</h2>
        <p>Some text about the project</p>
      </header>
    </swiper-slide>
    <swiper-slide :style="{'background-image': 'url(https://via.placeholder.com/1920x1080/95a3be.png/fff?text=Slide+3', 'background-position': '50% 50%'}">
      <header class="homepage-header">
        <ul class="caps homepage-article"><li>PROGRAM</li><li>Sunday, Dec 11, 2022</li></ul>
        <h2>Title of project</h2>
        <p>Some text about the project</p>
      </header>
    </swiper-slide>
    <swiper-slide :style="{'background-image': 'url(https://via.placeholder.com/1920x1080/ada89e.png/fff?text=Slide+4', 'background-position': '50% 50%'}">
      <header class="homepage-header">
        <ul class="caps homepage-article"><li>PROGRAM</li><li>Sunday, Dec 11, 2022</li></ul>
        <h2>Title of project</h2>
        <p>Some text about the project</p>
      </header>
    </swiper-slide>
    <swiper-slide :style="{'background-image': 'url(https://via.placeholder.com/1920x1080/bfaf7c.png/fff?text=Slide+5', 'background-position': '50% 50%'}">
      <header class="homepage-header">
        <ul class="caps homepage-article"><li>PROGRAM</li><li>Sunday, Dec 11, 2022</li></ul>
        <h2>Title of project</h2>
        <p>Some text about the project</p>
      </header>
    </swiper-slide>
    <swiper-slide :style="{'background-image': 'url(https://via.placeholder.com/1920x1080/d9bc26.png/fff?text=Slide+6', 'background-position': '50% 50%'}">
      <header class="homepage-header">
        <ul class="caps homepage-article"><li>PROGRAM</li><li>Sunday, Dec 11, 2022</li></ul>
        <h2>Title of project</h2>
        <p>Some text about the project</p>
      </header>
    </swiper-slide>
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

.homepage-header {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,.3);

  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
}

.caps {
  text-transform: uppercase;
  letter-spacing: .05em;
  line-height: 1.19;
  font-size: 1.6rem;
  font-size: 1rem;
  -webkit-font-smoothing: auto;
}

ul.homepage-article {
  list-style: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}

ul.homepage-article li {
  display: inline-block;
  margin: 0 0.6em;
}

</style>

