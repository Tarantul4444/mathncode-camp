<template>
  <div class="header">
    <img
      class="header__icon"
      v-show="!isOpen"
      @click="isOpen = true"
      src="../assets/icons/Menu.svg"
    />
    <img
      class="header__icon"
      v-show="isOpen"
      @click="isOpen = false"
      src="../assets/icons/Cancel.svg"
    />
    <div class="header__menu" v-show="isOpen">
      <ul class="header__menu-list">
        <li>О нас</li>
        <li>Обучение</li>
        <li>Тренера</li>
        <li>Даты</li>
        <li>Галерея</li>
      </ul>
      <button class="button header__button">Присоединяйтесь</button>
    </div>
    <img class="header__image" src="../assets/images/MnC_logo.svg" />
    <ul class="header__list">
      <li>О нас</li>
      <li>Обучение</li>
      <li>Тренера</li>
      <li>Даты</li>
      <li>Галерея</li>
    </ul>
    <div class="header__telephone">
      <p>+7(727) 269-54-54</p>
      <p>+7(708)480-78-00</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
.header {
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
  width: 100%;
  left: 0;
  top: 0;
  background: #fff8f4;
}
.header__icon {
  display: none;
}
.header__menu {
  display: none;
}
.header__image {
  width: 140px;
  height: 60px;
}
.header__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__list > li {
  margin: 0 32px;
}
@media (max-width: 1023px) {
  .header {
    padding: 0 10px;
    height: 60px;
  }
  .header__list {
    display: none;
  }
  .header__icon {
    display: block;
    width: 30px;
  }
  .header__menu {
    left: 0;
    top: 60px;
    display: block;
    background: #fff8f4;
    position: absolute;
    width: 60%;
    height: calc(100vh - 60px);
    padding: 30px;
  }
  .header__menu-list {
    display: flex;
    flex-direction: column;
  }
  .header__menu-list > li {
    font-size: 24px;
    padding: 10px 0;
  }
  .header__button {
    margin-top: 10px;
    height: 56px;
    font-size: 14px;
    width: 100%;
    max-width: 230px;
  }
  .header__image {
    position: absolute;
    width: 80px;
    left: 50%;
    transform: translateX(-65%);
  }
  .header__telephone {
    font-size: 12px;
  }
}
@media (max-width: 424px) {
  .header__button {
    font-size: 12px;
  }
}
</style>
