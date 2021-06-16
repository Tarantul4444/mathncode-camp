<template>
  <div class="enrollment">
    <h1 class="title text_red text-center enrollment__title">Зачисление</h1>
    <div class="enrollment__container">
      <p
        class="text-center enrollment__block"
        v-for="enroll in enrollment"
        :key="enroll.id"
      >
        {{ enroll }}
      </p>
    </div>
    <img src="../assets/images/Team.png" class="enrollment__image" />
    <button class="button enrollment__button" @click="openModal">
      Присоединяйтесь
    </button>
  </div>
</template>

<script>
import { EventBus } from "../main.js";

export default {
  data() {
    return {
      showModal: false,
      enrollment: [
        "Условием для поступления в М&С camp является выполненная вступительная работа, состоящая из 20 задач различного уровня.",
        "Сроки вступительной работы 24 июня - 8 июля.",
        "Распределение по уровням и группам осуществляется по результатам данной работы.",
        "В течение лагеря ребенок может быть переведен на уровень выше/ниже, в зависимости от его успеваемости в обучении.",
      ],
    };
  },
  methods: {
    openModal() {
      (this.showModal = true), EventBus.$emit("boolean", this.showModal);
    },
  },
};
</script>

<style scoped>
.enrollment {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 120px 20px 0;
}
.enrollment__container {
  margin: 0 100px;
}
.enrollment__title {
  margin-bottom: 30px;
}
.enrollment__block {
  margin: 0 20px 5px;
}
.enrollment__image {
  margin-top: 40px;
  width: 70%;
}
.enrollment__button {
  margin-top: 40px;
}
.enrollment__button:hover {
  color: #d90000;
  background: #bdf8f3;
  transition: 0.4s;
}
@media (max-width: 2561px) and (min-width: 2151px) {
  .enrollment {
    margin: 300px 40px 0;
  }
  .enrollment__title {
    margin-bottom: 80px;
  }
  .enrollment__block {
    margin: 0 30px 16px;
  }
  .enrollment__image {
    margin-top: 90px;
  }
  .enrollment__button {
    margin-top: 90px;
  }
}
@media (max-width: 2151px) and (min-width: 1751px) {
  .enrollment {
    margin: 200px 40px 0;
  }
  .enrollment__title {
    margin-bottom: 45px;
  }
  .enrollment__block {
    margin: 0 20px 8px;
  }
  .enrollment__image {
    margin-top: 60px;
  }
  .enrollment__button {
    margin-top: 60px;
  }
}
@media (max-width: 1023px) {
  .enrollment {
    margin: 60px 10px 0;
  }
  .enrollment__container {
    margin: 0 50px;
  }
  .enrollment__title {
    margin-bottom: 15px;
  }
  .enrollment__block {
    margin: 0 0 4px;
  }
  .enrollment__image {
    margin-top: 25px;
  }
  .enrollment__button {
    margin-top: 25px;
  }
}
@media (max-width: 601px) {
  .enrollment__container {
    margin: 0;
  }
}
@media (max-width: 426px) {
  .enrollment {
    margin: 50px 0 0;
  }
  .enrollment__title {
    margin-bottom: 15px;
  }
  .enrollment__block {
    margin: 0 0 3px;
  }
  .enrollment__image {
    margin-top: 15px;
  }
  .enrollment__button {
    margin-top: 15px;
  }
}
@media (max-width: 395px) {
  .enrollment__button {
    font-size: 12px;
  }
}
@media (max-width: 360px) {
  .enrollment__button {
    width: 150px;
  }
}
</style>
