<template>
  <div class="entertainment">
    <h1 class="title text_red text-center">Досуг и развлечение</h1>
    <div class="entertainment__container">
      <div
        class="entertainment__block"
        v-for="(block, index) in blocks"
        :key="block.id"
      >
        <div
          class="entertainment__flip-box-inner bg-red"
          :class="{ 'bg-gray': index % 2 === 1 }"
        >
          <div class="entertainment__flip-box-front">
            <p class="text-center title_small text_white">{{ block.text }}</p>
          </div>
          <div class="entertainment__flip-box-back">
            <img
              class="entertainment__flip-box-image"
              :src="require(`../assets/images/entertainment/${block.img}`)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blocks: [
        {
          text: "Неформальная обстановка",
          img: "Informal-atmosphere.jpg",
        },
        {
          text: "Сообщество и единомышленники",
          img: "Community.jpg",
        },
        {
          text: "Посвящение",
          img: "Dedication.jpg",
        },
        {
          text: "Интеллектуальные игры",
          img: "Mind-games.jpg",
        },
        {
          text: "Спортивные мероприятия",
          img: "Sports-activities.jpg",
        },
        {
          text: "Походы в горы",
          img: "Hiking.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.entertainment {
  margin-top: 120px;
}
.entertainment__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.entertainment__block {
  position: relative;
  perspective: 1000px;
  margin: 80px 40px 0;
  width: 200px;
  height: 200px;
}
.entertainment__flip-box-inner {
  position: relative;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
}
.entertainment__block:hover .entertainment__flip-box-inner {
  transform: rotateY(180deg);
}
.entertainment__flip-box-front,
.entertainment__flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.entertainment__flip-box-back {
  transform: rotateY(180deg);
}
.entertainment__flip-box-image {
  width: inherit;
  height: inherit;
  border-radius: 10px;
  object-fit: cover;
}
@media (max-width: 2561px) and (min-width: 2151px) {
  .entertainment {
    margin-top: 300px;
  }
  .entertainment__block {
    margin: 180px 70px 0;
    width: 480px;
    height: 480px;
  }
  .entertainment__flip-box-inner {
    border-radius: 40px;
  }
  .entertainment__flip-box-image {
    border-radius: 40px;
  }
}
@media (max-width: 2151px) and (min-width: 1751px) {
  .entertainment {
    margin-top: 200px;
  }
  .entertainment__block {
    margin: 100px 50px 0;
    width: 330px;
    height: 330px;
  }
  .entertainment__flip-box-inner {
    border-radius: 30px;
  }
  .entertainment__flip-box-image {
    border-radius: 30px;
  }
}
@media (max-width: 1751px) and (min-width: 1451px) {
  .entertainment__block {
    width: 265px;
    height: 265px;
  }
  .entertainment__flip-box-inner {
    border-radius: 20px;
  }
  .entertainment__flip-box-image {
    border-radius: 20px;
  }
}
@media (max-width: 1451px) and (min-width: 1416px) {
  .entertainment__block {
    width: 220px;
    height: 220px;
  }
}
@media (max-width: 1023px) {
  .entertainment {
    margin-top: 80px;
  }
  .entertainment__container {
    justify-content: space-evenly;
  }
  .entertainment__block {
    width: 150px;
    height: 150px;
    margin: 40px 20px 0;
  }
}
@media (max-width: 1023px) and (min-width: 856px) {
  .entertainment__block {
    margin: 40px 45px 0;
  }
}
@media (max-width: 477px) and (min-width: 426px) {
  .entertainment__block {
    width: 70%;
  }
}
@media (max-width: 477px) {
  .entertainment__container {
    justify-content: space-around;
  }
}
@media (max-width: 426px) {
  .entertainment {
    margin-top: 60px;
  }
  .entertainment__block {
    width: 120px;
    height: 120px;
    margin: 30px 20px 0;
  }
}
@media (max-width: 417px) {
  .entertainment__block {
    width: 70%;
  }
}
</style>
