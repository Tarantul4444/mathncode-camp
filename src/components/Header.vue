<template>
  <div class="header">
    <transition name="header__burger-fade">
    <img
      class="header__icon"
      v-show="!isOpen"
      @click="isOpen = true"
      src="../assets/icons/Menu.svg"
    />
    </transition>
    <transition name="header__cancel-fade">
    <img
      class="header__icon"
      v-show="isOpen"
      @click="isOpen = false"
      src="../assets/icons/Cancel.svg"
    />
    </transition>
    <transition name="slide-fade">
      <div class="header__menu" v-show="isOpen">
        <ul class="header__menu-list">
          <li><a href="#" v-scroll-to="'#about'">О нас</a></li>
          <li><a href="#" v-scroll-to="'#education'">Обучение</a></li>
          <li><a href="#" v-scroll-to="'#trainers'">Тренера</a></li>
          <li><a href="#" v-scroll-to="'#dates'">Даты</a></li>
          <li><a href="#" v-scroll-to="'#gallery'">Галерея</a></li>
        </ul>
        <button class="button header__button" @click="openModal">Присоединяйтесь</button>
      </div>
    </transition>
    <transition name="blackout-fade">
      <div v-show="isOpen" class="blackout"></div>
    </transition>
    <img class="header__image" src="../assets/images/MnC_logo.svg" />
    <ul class="header__list">
      <li><a href="#" v-scroll-to="'#about'">О нас</a></li>
      <li><a href="#" v-scroll-to="'#education'">Обучение</a></li>
      <li><a href="#" v-scroll-to="'#trainers'">Тренера</a></li>
      <li><a href="#" v-scroll-to="'#dates'">Даты</a></li>
      <li><a href="#" v-scroll-to="'#gallery'">Галерея</a></li>
    </ul>
    <div class="header__telephone">
      <p>+7(727) 269-54-54</p>
      <p>+7(708)480-78-00</p>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../main.js";

export default {
  data() {
    return {
      isOpen: false,
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
.header {
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
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
  height: auto;
}
.header__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__list > li {
  margin: 0 32px;
}
.header__button:hover {
  color: #d90000;
  background: #bdf8f3;
  transition: 0.4s;
}
/* Animations */
.slide-fade-enter-active, .blackout-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active, .blackout-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to,
.blackout-fade-enter {
  transform: translateX(-10px);
  opacity: 0;
}
.blackout-fade-leave-to {
  opacity: 0;
}
.header__burger-fade-enter-active, .header__cancel-fade-enter-active {
  transition: all .4s ease;
  transition-delay: 0.4s;
}
.header__burger-fade-leave-active, .header__cancel-fade-leave-active  {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.header__burger-fade-enter, .header__burger-fade-leave-to,
.header__cancel-fade-enter, .header__cancel-fade-leave-to {
  opacity: 0;
}
/* Medias */
@media (max-width: 2561px) and (min-width: 2151px) {
  .header {
    padding: 40px 28px;
  }
  .header__image {
    width: 300px;
  }
  .header__list > li {
    margin: 0 40px;
  }
}
@media (max-width: 2151px) and (min-width: 1751px) {
  .header {
    padding: 30px 22px;
  }
  .header__image {
    width: 200px;
  }
  .header__list > li {
    margin: 0 40px;
  }
}
@media (max-width: 1751px) and (min-width: 1451px) {
  .header {
    padding: 24px 18px;
  }
  .header__image {
    width: 160px;
    height: auto;
  }
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
    display: flex;
    flex-direction: column;
    background: #fff8f4;
    position: absolute;
    width: 60%;
    height: calc(100vh - 60px);
    padding: 30px;
    z-index: 1000;
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
    padding: 12px 16px;
    font-size: 14px;
    width: 100%;
    max-width: 230px;
    margin-top: auto;
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
  .blackout {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.7);
  }
}
@media (max-width: 395px) {
  .header__button {
    font-size: 12px;
  }
}
@media (max-width: 360px) {
  .header__button {
    padding: 0;
  }
}
</style>
