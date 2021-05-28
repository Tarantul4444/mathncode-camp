<template>
  <div class="gallery">
    <h1 class="title text_red text-center">Галерея</h1>
    <div class="thumb-example">
      <!-- swiper1 -->
      <swiper
        class="swiper gallery-top"
        :options="swiperOptionTop"
        ref="swiperTop"
      >
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper
        class="swiper gallery-thumbs"
        @swiper="setThumbSwiper"
        :options="swiperOptionThumbs"
        ref="swiperThumbs"
      >
        <swiper-slide class="slide-1"></swiper-slide>
        <swiper-slide class="slide-2"></swiper-slide>
        <swiper-slide class="slide-3"></swiper-slide>
        <swiper-slide class="slide-4"></swiper-slide>
        <swiper-slide class="slide-5"></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Thumbs } from "swiper/core";
SwiperCore.use([Navigation, Thumbs]);
export default {
  data() {
    return {
      thumbSwiper: null,
      swiperOptionTop: {
        thumbs: {
          swiper: this.thumbSwiper,
        },
        loop: true,
        loopedSlides: 5,
        spaceBetween: 10,
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5,
        spaceBetween: 20,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
    };
  },
  methods: {
    setThumbSwiper(swiper) {
      this.thumbSwiper = swiper;
    },
  },
};
</script>
<style scoped>
.gallery {
  margin-top: 130px;
}
.thumb-example {
  height: 480px;
  margin-top: 50px;
}
.swiper-slide {
  background-size: cover;
  background-position: center;
  border-radius: 10px;
}
.slide-1 {
  background-image: url("../assets/images/gallery/Photo1.jpg");
}
.slide-2 {
  background-image: url("../assets/images/gallery/Photo2.jpg");
}
.slide-3 {
  background-image: url("../assets/images/gallery/Photo3.jpg");
}
.slide-4 {
  background-image: url("../assets/images/gallery/Photo4.jpg");
}
.slide-5 {
  background-image: url("../assets/images/gallery/Photo5.jpg");
}
.gallery-top {
  height: 80%;
  width: 100%;
}
.gallery-thumbs {
  height: 35%;
  box-sizing: border-box;
  padding: 30px 0 10px;
}
.gallery-thumbs .swiper-slide {
  border-radius: 10px;
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
</style>
