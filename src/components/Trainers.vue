<template>
  <div class="trainers">
    <h1 class="title text_red text-center">Тренерский состав</h1>
    <p class="text-center trainers__text">
      Наши тренера – профессионалы и увлеченные педагоги, которые воодушевляют,
      вдохновляют, обучают и наставляют.
    </p>
    <div class="swiper__wrapper">
      <swiper ref="swiper" class="swiper" :options="swiperOptions">
        <swiper-slide
          class="trainers__container"
          v-for="slide in slides"
          :key="slide.id"
        >
          <div>
            <img
              class="image-max-size trainers__image"
              :src="require(`../assets/images/${slide.img}`)"
            />
            <p class="text-center title_small">{{ slide.name }}</p>
          </div>
          <div class="trainers__description">
            <p class="title_small">Достижения:</p>
            <ul>
              <li v-for="trainer in slide.trainers" :key="trainer.id">
                {{ trainer }}
              </li>
            </ul>
          </div>
        </swiper-slide>
        <img
          class="image-max-size trainers__bg-image"
          src="../assets/images/Workspace.png"
        />
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="swiper-arrow left" @click="prev()"></div>
      <div class="swiper-arrow right" @click="next()"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          name: "Адина Магавина",
          img: "Trainer1.jpg",
          trainers: [
            "Международная Евразийская олимпиада серебро 2012",
            "Республиканская Олимпиада золото 2012, бронза 2011",
            "Полуфиналист чемпионата мира по программированию ACM ICPC",
            "Google I/O, Mountain View, California, USA",
            "Google Conference Grant, Craft Conference, Budapest, Hungary",
          ],
        },
        {
          name: "Хлыновский Кирилл",
          img: "Trainer2.jpg",
          trainers: [
            "Международная Евразийская Олимпиада бронза 2016",
            "Финалист чемпионата мира по программированию ICPC 2019-2020",
          ],
        },
        {
          name: "Лариса Пак",
          img: "Trainer3.jpg",
          trainers: [
            "Преподавательский стаж - 27 лет",
            "Ученики являются призерами городских и областных этапов олимпиад и конкурсов проектов по информатике",
            "Методист материала по логике",
          ],
        },
        {
          name: "Рузана Айшуакова",
          img: "Trainer4.jpg",
          trainers: [
            "Призер III Международной научно-технической конференции студентов, магистрантов и молодых ученых",
            "Реализовала алгоритм постановки медицинского диагноза на основе биохимического анализа крови",
            "Реализация различных клиент-серверных веб и мобильных приложений",
          ],
        },
      ],
      swiperOptions: {
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        effect: "fade",
        speed: 800,
        fadeEffect: { crossFade: true },
      },
    };
  },
  methods: {
    prev() {
      this.$refs.swiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.swiper.$swiper.slideNext();
    },
  },
};
</script>

<style scoped>
.trainers {
  margin-top: 120px;
}
.trainers__text {
  margin: 20px 100px;
}
.trainers__container {
  position: relative;
  border: 2px solid rgba(102, 102, 102, 0.7);
  border-radius: 10px;
  padding: 45px;
  display: flex;
  align-items: center;
}
.trainers__image {
  width: 250px;
  margin-bottom: 10px;
  border-radius: 30px;
}
.trainers__description {
  margin-left: 60px;
}
ul {
  padding: 15px;
  list-style-type: disc;
}
.trainers__bg-image {
  width: 30%;
  border-radius: 10px;
  z-index: -1;
  position: absolute;
  left: 70%;
  top: 0;
  opacity: 0.3;
}
.swiper__wrapper {
  position: relative;
}
.swiper-arrow {
  border: solid rgba(0, 0, 0, 0.7);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 12px;
  cursor: pointer;
  position: absolute;
  top: 50%;
}
.right {
  transform: translateY(-50%) rotate(-45deg);
  right: -50px;
}
.left {
  transform: translateY(-50%) rotate(135deg);
  left: -50px;
}
@media (max-width: 2561px) and (min-width: 2151px) {
  .trainers {
    margin-top: 300px;
  }
  .trainers__text {
    margin: 60px 200px;
  }
  .trainers__container {
    border-width: 4px;
    border-radius: 40px;
    padding: 90px;
  }
  .trainers__image {
    width: 450px;
    margin-bottom: 30px;
  }
  .trainers__bg-image  {
    border-radius: 40px;
  }
  .trainers__description {
    margin-left: 130px;
  }
  .swiper-arrow {
    border-width: 0 7px 7px 0;
    padding: 30px;
  }
  .right {
    right: -80px;
  }
  .left {
    left: -80px;
  }
}
@media (max-width: 2151px) and (min-width: 1751px) {
  .trainers {
    margin-top: 200px;
  }
  .trainers__text {
    margin: 30px 100px;
  }
  .trainers__container {
    border-width: 4px;
    border-radius: 20px;
    padding: 60px;
  }
  .trainers__image {
    width: 350px;
    margin-bottom: 20px;
  }
  .trainers__bg-image  {
    border-radius: 20px;
  }
  .trainers__description {
    margin-left: 90px;
  }
  .swiper-arrow {
    border-width: 0 5px 5px 0;
    padding: 20px;
  }
  .right {
    right: -80px;
  }
  .left {
    left: -80px;
  }
}
@media (max-width: 1751px) and (min-width: 1451px) {
  .trainers__image {
    width: 300px;
    height: 300px;
  }
  .swiper-arrow {
    border-width: 0 4px 4px 0;
    padding: 15px;
  }
}
@media (max-width: 1023px) {
  .trainers {
    margin-top: 60px;
  }
  .trainers__text {
    margin: 15px 50px;
  }
  .trainers__container {
    font-size: 14px;
    padding: 24px;
  }
  .trainers__image {
    width: 200px;
    margin-bottom: 5px;
  }
  ul > li {
    margin: 2px 0;
  }
  .swiper-arrow {
    padding: 10px;
    border-width: 0 2px 2px 0;
  }
  .right {
    right: -25px;
  }
  .left {
    left: -25px;
  }
}
@media (max-width: 575px) {
  .trainers__container {
    flex-direction: column;
  }
  .trainers__description {
    margin: 15px 0 0;
  }
  .trainers__bg-image {
    display: none;
  }
  .left {
    display: none;
  }
  .right {
    display: none;
  }
}
@media (max-width: 436px) {
  .trainers__text {
    margin: 8px 20px;
  }
}
@media (max-width: 426px) {
  .trainers__image {
    width: 150px;
  }
}
</style>
