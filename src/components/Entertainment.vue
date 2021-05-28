<template>
  <div class="entertainment">
    <h1 class="title text_red text-center">Досуг и развлечение</h1>
    <div class="entertainment__container">
      <div
        class="entertainment__block bg-red"
        v-for="(block, index) in blocks"
        :key="block.id"
        :class="{ 'bg-gray': index % 2 === 1 }"
      >
        <p class="text-center title_small text_white">{{ block.text }}</p>
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
        },
        {
          text: "Сообщество и единомышленники",
        },
        {
          text: "Посвящение",
        },
        {
          text: "Интеллектуальные игры",
        },
        {
          text: "Спортивные мероприятия",
        },
        {
          text: "Походы в горы",
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
  margin: 80px 40px 0;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 1023px) {
  .entertainment {
    margin-top: 80px;
  }
  .entertainment__block {
    width: 150px;
    height: 150px;
    margin: 40px 20px 0;
  }
  p {
    font-size: 14px;
  }
}
@media (max-width: 1023px) and (min-width: 840px) {
  .entertainment__container {
    justify-content: space-evenly;
  }
}
@media (max-width: 461px) {
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
  p {
    font-size: 11px;
  }
}
</style>
