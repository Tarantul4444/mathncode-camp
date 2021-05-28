<template>
  <div class="join">
    <h1 class="title_small text-center join__title">
      Первый лагерь спортивного программирования в Казахстане
    </h1>
    <p class="text-center join__description">
      Инновационный загородный компьютерный лагерь для школьников.
    </p>
    <img
      class="image-max-size join__image"
      src="../assets/images/Join_code.png"
    />
    <button class="button join__button">Присоединяйтесь</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.join {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 120px;
}
.join__title {
  width: 60%;
}
.join__description {
  margin-top: 12px;
}
.join__image {
  margin: -50px 0;
  width: 100%;
}
.join__button {
  margin-top: 10px;
}
.join__button:hover {
  color: #d90000;
  background: #bdf8f3;
  transition: 0.4s;
}
@media (max-width: 1023px) {
  .join {
    margin-bottom: 60px;
  }
  .join__title {
    font-size: 20px;
  }
  .join__description {
    font-size: 14px;
  }
  .join__image {
    margin: -20px 0;
  }
}
@media (max-width: 426px) {
  .join__title {
    font-size: 16px;
    width: 100%;
  }
  .join__description {
    font-size: 11px;
  }
}
</style>
