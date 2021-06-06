<template>
  <div class="dates">
    <h1 class="title text_red text-center">Даты лагеря</h1>
    <div class="dates__container">
      <div class="bg-red dates__block">
        <p class="text-center text_white">2 августа - 15 августа 2021 год</p>
        <h2 class="text-center text_white title_small dates__cost">
          50.000 тг
        </h2>
        <button class="button dates__button" @click="openModal">Подать заявку</button>
      </div>
      <p class="text-center dates__description">
        Наш камп - это чистый воздух, горные прогулки, интересные квесты,
        различные мастер классы, творческие лаборатории, спортивные состязания!
        Ну и самое главное - это две недели полного погружения в мир
        олимпиадного программирования с лучшими тренерами Казахстана!
      </p>
      <img
        src="../assets/images/Mail.png"
        class="image-max-size dates__image"
      />
    </div>
  </div>
</template>

<script>
import { EventBus } from "../main.js";

export default {
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    openModal() {
      this.showModal = true,
      EventBus.$emit("boolean", this.showModal)
    }
  }
};
</script>

<style scoped>
.dates {
  margin: 120px 20px 0;
}
.dates__container {
  position: relative;
  margin-top: 40px;
  border: 2px solid rgba(102, 102, 102, 0.7);
  border-radius: 10px;
  padding: 45px;
  display: flex;
  align-items: center;
}
.dates__block {
  width: 200px;
  height: 200px;
  border-radius: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dates__cost {
  margin-top: 5px;
}
.dates__button {
  margin-top: 12px;
  width: 150px;
  height: 35px;
  background: rgba(255, 255, 255, 0.8);
  color: black;
  border-radius: 15px;
}
.dates__button:hover {
  color: #d90000;
  background: white;
  transition: 0.4s;
}
.dates__description {
  margin: 0 40px 0 60px;
}
.dates__image {
  width: 30%;
  z-index: -1;
  position: absolute;
  bottom: 0;
  left: 70%;
}
@media (max-width: 2561px) and (min-width: 2151px) {
  .dates {
    margin: 300px 40px 0;
  }
  .dates__container {
    border-width: 4px;
    margin-top: 90px;
    border-radius: 40px;
    padding: 90px;
  }
  .dates__block {
    width: 500px;
    height: 500px;
    border-radius: 40px;
    padding: 70px;
  }
  .dates__cost {
    margin-top: 20px;
  }
  .dates__button {
    margin-top: 25px;
    width: 480px;
    height: 150px;
    border-radius: 40px;
    font-size: 55px;
  }
  .dates__description {
    margin: 0 0 0 120px;
  }
}
@media (max-width: 2151px) and (min-width: 1751px) {
  .dates {
    margin: 200px 40px 0;
  }
  .dates__container {
    border-width: 4px;
    margin-top: 60px;
    border-radius: 20px;
    padding: 60px;
  }
  .dates__block {
    width: 320px;
    height: 320px;
    border-radius: 40px;
    padding: 30px;
  }
  .dates__cost {
    margin-top: 10px;
  }
  .dates__button {
    margin-top: 15px;
    width: 260px;
    height: 80px;
    border-radius: 40px;
    font-size: 30px;
  }
  .dates__description {
    margin: 0 60px 0 90px;
  }
}
@media (max-width: 1751px) and (min-width: 1451px) {
  .dates__block {
    width: 100%;
    max-width: 295px;
    height: 230px;
  }
  .dates__button {
    font-size: 20px;
    width: 200px;
    height: 45px;
  }
}
@media (max-width: 1023px) {
  .dates {
    margin: 60px 10px 0;
  }
  .dates__container {
    margin-top: 25px;
    border: 2px solid rgba(102, 102, 102, 0.7);
    border-radius: 10px;
    padding: 25px;
    display: flex;
    align-items: center;
  }
  .dates__block {
    width: 150px;
    height: 150px;
    border-radius: 20px;
    padding: 15px;
  }
  .dates__button {
    margin-top: 8px;
    font-size: 14px;
    width: 130px;
    height: 35px;
  }
  .dates__description {
    margin: 0 25px 0 30px;
  }
}
@media (max-width: 601px) {
  .dates__image {
    display: none;
  }
}
@media (max-width: 531px) {
  .dates__container {
    flex-direction: column;
  }
  .dates__description {
    margin: 25px 0 0;
  }
  .dates__block {
    width: 60%;
  }
}
@media (max-width: 426px) {
  .dates__container {
    padding: 15px;
  }
  .dates__block {
    height: 120px;
    border-radius: 18px;
    padding: 10px;
  }
  .dates__description {
    margin-top: 15px;
  }
  .dates__button {
    margin-top: 8px;
    font-size: 11px;
    width: 100px;
    height: 30px;
  }
}
</style>
