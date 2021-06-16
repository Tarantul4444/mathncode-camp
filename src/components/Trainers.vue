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
          v-for="(slide, index) in slides"
          :key="slide.id"
        >
          <div>
            <img
              class="image-max-size trainers__image"
              :src="require(`../assets/images/trainers/${slide.img}`)"
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
          <div class="trainers__pagination">
            <div
              class="circle"
              v-for="(page, key) in slides"
              :key="page.id"
              :class="{ 'bg-gray': index === key }"
            ></div>
          </div>
        </swiper-slide>
        <img
          class="image-max-size trainers__bg-image"
          src="../assets/images/Workspace.png"
        />
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
          name: "Темирлан Сатылханов",
          img: "Temirlan-Satylhanov.jpg",
          trainers: [
            "2019 - International Collegiate Programming Contest World Finalist",
            "2018-2019 Northern Eurasia Finals Top-4",
            "2017 - VK Cup Finalist",
            "2015-2016 ACM ICPC Sub Regional Contest 1st place",
            "2012, 2013 - International Zhautykov Olympiad Bronze Medalist",
            "2013 - Republican Olympiad in Math Silver Medalist",
          ],
        },
        {
          name: "Алимжан Аманов",
          img: "Alimzhan.jpg",
          trainers: [
            "Two mathematical scientific papers",
            "2012 - Bronze Medal in International Zhautikov Math Olympiad",
            "2012 - Bronze Medal in Kazakhstan national Olympiad in Mathematics",
            "2014 - Winner of Middle-Asia Region of  Northeastern European Regional Contest",
            "2014 - Bronze Medal in International Math Competition",
            "2014 - Top 50 at Hackerrank World Cup semi-finals",
            "2016 - Winner of Kazakhstan subregion of Northeastern European Regional Contest",
          ],
        },
        {
          name: "Данияр Закарин",
          img: "Daniyar.jpg",
          trainers: [
            "2018, 2019 - International Olympiad in Informatics Silver Medalist",
            "2019 - International Zhautykov Olympiad Gold Medalist",
            "2019 - Republican Olympiad Gold Medalist",
            "2018-2019 International Eurasian Olympiad Gold Medalist",
            "2018 - TechnoCup Bronze Medalist",
          ],
        },
        {
          name: "Темирлан Байболов",
          img: "Temirlan-Baibolov.jpg",
          trainers: [
            "2020 - International Olympiad in Informatics Silver Medalist",
            "2019 - International Olympiad in Informatics Bronze Medalist",
            "2020 - International Zhautykov Olympiad Gold Medalist",
            "2018, 2019, 2020 - Republican Olympiad Gold Medalist",
            "2021 -  Northern Eurasia Finalist",
            "2017 - Republican Olympiad Bronze Medalist",
            "2019 - International Zhautykov Olympiad Bronze Medalist",
          ],
        },
        {
          name: "Ноэль Мухамеджанов",
          img: "Noel.jpg",
          trainers: [
            "2019 - Eurasian Olympiad in Informatics Silver Medalist",
            "2020 - Almaty Region Olympiad Silver Medalist",
            "2019, 2020 - International Zhautykov Olympiad Participant",
          ],
        },
      ],
      swiperOptions: {
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        loop: true,
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
.trainers__pagination {
  display: flex;
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.circle {
  margin: 0 2px;
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
  .trainers__bg-image {
    border-radius: 40px;
  }
  .trainers__description {
    margin-left: 130px;
  }
  .trainers__pagination {
    margin-bottom: 35px;
  }
  .circle {
    margin: 0 8px;
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
  .trainers__bg-image {
    border-radius: 20px;
  }
  .trainers__description {
    margin-left: 90px;
  }
  .trainers__pagination {
    margin-bottom: 25px;
  }
  .circle {
    margin: 0 4.5px;
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
  }
  .trainers__pagination {
    margin-bottom: 25px;
  }
  .circle {
    margin: 0 3.5px;
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
  .trainers__pagination {
    margin-bottom: 10px;
  }
}
</style>
