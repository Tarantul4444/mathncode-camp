<template>
  <div class="features">
    <h1 class="title text_red text-center">Почему M&C Camp?</h1>
    <div
      class="features__container"
      v-for="feature in features"
      :key="feature.id"
    >
      <div class="features__info">
        <h1>{{ feature.title }}</h1>
        <p class="features__text">{{ feature.text }}</p>
      </div>
      <img
        class="features__image"
        :src="require(`../assets/images/${feature.img}`)"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: "ПОДГОТОВКА К ОЛИМПИАДАМ",
          text:
            "Всю смену ребенок будет изучать алгоритмы и структуры данных, практиковать навыки решения идейных задач. К нам приезжают сильные школьники со всех регионов страны, чтобы углубить и улучшить свои знания, пройти усиленную подготовку к олимпиадам.",
          img: "Features_dev_1.png",
        },
        {
          title: "УРОВЕНЬ ОБУЧЕНИЯ",
          text:
            "В M&C Camp сильнейший тренерский состав, который включает в себя тренеров школьной олимпийской сборной страны, членов жюри республиканских и международных соревнований по программированию. Так же тренера являются действующими олимпиадниками, которые продолжают олимпиадную карьеру в университетах, участвуя в крупных чемпионатах мира.",
          img: "Features_dev_2.png",
        },
        {
          title: "ВЕСЕЛО И УВЛЕКАТЕЛЬНО",
          text:
            "В лагере M&C обучение проходит именно так, как нужно школьникам-олимпиадникам - лекции по теории, контесты для практики, разборы задач. Помимо учебы - много движения, спортивных мероприятий и активного отдыха на свежем воздухе.",
          img: "Features_dev_3.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.features {
  margin-bottom: 120px;
}
.features__container {
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.features__info {
  width: 60%;
}
.features__image {
  width: 40%;
  margin-left: 40px;
}
.features__text {
  margin-top: 10px;
}
@media (max-width: 2561px) and (min-width: 2151px) {
  .features {
    margin-bottom: 300px;
  }
  .features__container {
    margin-top: 150px;
  }
  .features__image {
    width: 50%;
    margin-left: 90px;
  }
  .features__text {
    margin-top: 30px;
  }
}
@media (max-width: 2151px) and (min-width: 1751px) {
  .features {
    margin-bottom: 200px;
  }
  .features__container {
    margin-top: 120px;
  }
  .features__image {
    margin-left: 60px;
  }
  .features__text {
    margin-top: 20px;
  }
}
@media (max-width: 1023px) {
  .features {
    margin-bottom: 60px;
  }
  .features__container {
    margin-top: 30px;
  }
  .features__image {
    width: 40%;
    margin: 15px 0 0;
  }
}
@media (max-width: 651px) {
  .features__container {
    flex-direction: column;
    justify-content: none;
    align-items: center;
  }
  .features__info {
    width: 80%;
  }
}
@media (max-width: 426px) {
  .features {
    margin-bottom: 40px;
  }
  .features__info {
    width: 100%;
  }
  .features__image {
    margin: 15px 0 0;
    width: 60%;
  }
}
</style>
