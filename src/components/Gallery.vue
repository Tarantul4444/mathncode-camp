<template>
  <div class="gallery">
    <h1 class="title text_red text-center">Галерея</h1>
    <div class="thumb-example">
      <swiper
        class="swiper gallery-top"
        :options="swiperOptionTop"
        ref="swiperTop"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          v-for="photo in gallery"
          :key="photo.id"
          :style="{
            backgroundImage:
              'url(' + require(`../assets/images/gallery/${photo}`) + ')',
          }"
        ></swiper-slide>
      </swiper>
      <swiper
        class="swiper gallery-thumbs"
        @swiper="setThumbSwiper"
        :options="swiperOptionThumbs"
        ref="swiperThumbs"
        @slideChange="onThumbnailChange"
      >
        <swiper-slide
          v-for="photo in gallery"
          :key="photo.id"
          :style="{
            backgroundImage:
              'url(' + require(`../assets/images/gallery/${photo}`) + ')',
          }"
        ></swiper-slide>
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
      gallery: [
        "Photo1.jpg",
        "Photo2.jpg",
        "Photo3.jpg",
        "Photo4.jpg",
        "Photo5.jpg",
        "Photo6.jpg",
        "Photo7.jpg",
        "Photo8.jpg",
        "Photo9.jpg",
        "Photo10.jpg",
        "Photo11.jpg",
        "Photo12.jpg",
        "Photo13.jpg",
        "Photo14.jpg",
        "Photo15.jpg",
        "Photo16.jpg",
        "Photo17.jpg",
        "Photo18.jpg",
        "Photo19.jpg",
        "Photo20.jpg",
        "Photo21.jpg",
        "Photo22.jpg",
        "Photo23.jpg",
        "Photo24.jpg",
        "Photo25.jpg",
        "Photo26.jpg",
        "Photo27.jpg",
        "Photo28.jpg",
        "Photo29.jpg",
        "Photo30.jpg",
        "Photo31.jpg",
        "Photo32.jpg",
        "Photo33.jpg",
        "Photo34.jpg",
        "Photo35.jpg",
        "Photo36.jpg",
        "Photo37.jpg",
        "Photo38.jpg",
        "Photo39.jpg",
        "Photo40.jpg",
        "Photo41.jpg",
        "Photo42.jpg",
        "Photo43.jpg",
        "Photo44.jpg",
        "Photo45.jpg",
        "Photo46.jpg",
        "Photo47.jpg",
        "Photo48.jpg",
        "Photo49.jpg",
        "Photo50.jpg",
        "Photo51.jpg",
      ],
    };
  },
  methods: {
    setThumbSwiper(swiper) {
      this.thumbSwiper = swiper;
    },
    onThumbnailChange(val) {
      this.$refs.swiperTop.$swiper.slideTo(val.activeIndex);
    },
    onSlideChange(val) {
      this.$refs.swiperThumbs.$swiper.slideTo(val.activeIndex);
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
@media (max-width: 2561px) and (min-width: 2151px) {
  .gallery {
    margin-top: 300px;
  }
  .thumb-example {
    height: 900px;
    margin-top: 120px;
  }
  .swiper-slide {
    border-radius: 40px;
  }
  .gallery-thumbs {
    padding: 60px 0 20px;
    height: 45%;
  }
  .gallery-thumbs .swiper-slide {
    border-radius: 40px;
  }
}
@media (max-width: 2151px) and (min-width: 1751px) {
  .gallery {
    margin-top: 200px;
  }
  .thumb-example {
    height: 640px;
    margin-top: 80px;
  }
  .swiper-slide {
    border-radius: 25px;
  }
  .gallery-thumbs {
    padding: 40px 0 20px;
    height: 45%;
  }
  .gallery-thumbs .swiper-slide {
    border-radius: 25px;
  }
}
@media (max-width: 1751px) and (min-width: 1451px) {
  .thumb-example {
    height: 540px;
  }
  .swiper-slide {
    border-radius: 15px;
  }
  .gallery-thumbs {
    padding: 25px 0 10px;
    height: 40%;
  }
  .gallery-thumbs .swiper-slide {
    border-radius: 15px;
  }
}
@media (max-width: 1023px) {
  .gallery {
    margin-top: 65px;
  }
  .thumb-example {
    height: 350px;
    margin-top: 25px;
  }
  .gallery-thumbs {
    padding: 20px 0 5px;
  }
}
@media (max-width: 426px) {
  .gallery {
    margin-top: 50px;
  }
  .thumb-example {
    height: 250px;
    margin-top: 20px;
  }
  .gallery-thumbs {
    height: 30%;
    padding: 10px 0 5px;
  }
}
</style>
