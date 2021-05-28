<template>
  <div class="aims">
    <h1 class="text-center text_red title">Наши цели</h1>
    <div class="aims__container">
      <div class="aims__container__block" v-for="aim in aims" :key="aim.id">
        <p class="text-center">{{ aim.small_title }}</p>
        <h1 class="text-center title_small aims__title">{{ aim.title }}</h1>
        <ul v-if="Array.isArray(aim.text)">
          <li v-for="item in aim.text" :key="item.id">{{ item }}</li>
        </ul>
        <p v-else>{{ aim.text }}</p>
      </div>
    </div>
    <img
      class="image-max-size aims__image"
      src="../assets/images/Computer.png"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      aims: [
        {
          small_title: "Изучить",
          title: "Алгоритмы и структуры данных",
          text:
            "Мы знакомим ребят с ключевыми алгоритмами, структурами данных и математикой, необходимых для решения олимпиадных задач. За время смены каждый школьник изучает как минимум 11 тем и решает хотя бы 55 задач.",
        },
        {
          small_title: "Прокачать",
          title: "Мягкие навыки",
          text: [
            "- Принятие решений",
            "- Терпение",
            "- Внимательность",
            "- Сила воли",
            "- Эмпатия и эмоциональный интеллект",
            "- Многозадачность",
            "- Умение работать в команде",
          ],
        },
        {
          small_title: "Приобрести",
          title: "Новых друзей",
          text:
            "Мы верим, что настоящие знания можно получать только с удовольствием. Поэтому мы будем не только учиться, но и отдыхать, дружить и проводить самые запоминающиеся каникулы в жизни.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.aims {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 120px;
}
.aims__container {
  display: flex;
  margin-top: 60px;
}
.aims__container__block {
  width: 100%;
  margin: 0 18px;
}
.aims__title {
  margin: 10px 0 8px;
}
.aims__image {
  width: 50%;
  margin-top: 20px;
}
ul {
  list-style-type: none;
}
@media (max-width: 1023px) {
  .aims {
    margin-bottom: 60px;
  }
  .aims__container {
    margin-top: 30px;
  }
  .aims__container__block {
    font-size: 14px;
    margin: 0 9px;
  }
  .aims__image {
    margin-top: 10px;
  }
}
@media (max-width: 426px) {
  .aims__container {
    flex-direction: column;
    margin: 0;
  }
  p {
    font-size: 11px;
  }
  .aims__container__block {
    margin: 0;
  }
  .text-center {
    font-family: Montserrat-Bold;
    margin-top: 20px;
  }
  .aims__title {
    margin: 0 0 5px;
  }
  ul > li {
    text-align: center;
    font-size: 11px;
  }
  .aims__image {
    width: 200px;
  }
}
</style>
