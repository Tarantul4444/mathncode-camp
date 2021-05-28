<template>
  <div class="dates">
    <h1 class="title text_red text-center">Даты лагеря</h1>
    <div class="dates__container">
      <div class="bg-red dates__block">
        <p class="text-center text_white">5 июля - 15 июля 2021 год</p>
        <h2 class="text-center text_white title_small dates__cost">
          50.000 тг
        </h2>
        <button class="button dates__button">Подать заявку</button>
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
export default {};
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
</style>
