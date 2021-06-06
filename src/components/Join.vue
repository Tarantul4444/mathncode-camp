<template>
  <div class="join">
    <h1 class="title_small text-center join__title">
      Первый лагерь спортивного программирования в Казахстане
    </h1>
    <p class="text-center join__description">
      Инновационный загородный компьютерный лагерь для школьников.
    </p>
    <img class="join__image" src="../assets/images/Join_code.png" />
    <button class="button join__button" @click="openModal">
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
    }
  },
  methods: {
    openModal() {
      this.showModal = true,
      EventBus.$emit("boolean", this.showModal)
    },
  },
};
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
@media (max-width: 2561px) and (min-width: 2151px) {
  .join {
    margin-bottom: 300px;
  }
  .join__description {
    margin-top: 30px;
  }
  .join__image {
    margin: -90px 0;
  }
}
@media (max-width: 2151px) and (min-width: 1751px) {
  .join {
    margin-bottom: 200px;
  }
  .join__description {
    margin-top: 20px;
  }
  .join__image {
    margin: -80px 0;
  }
}
@media (max-width: 1023px) {
  .join {
    margin-bottom: 60px;
  }
  .join__image {
    margin: -20px 0;
  }
}
@media (max-width: 1023px) and (min-width: 651px) {
  .join__image {
    margin: -35px 0 0;
  }
  .join__button {
    margin: -30px 0 0;
  }
}
@media (max-width: 426px) {
  .join__title {
    width: 100%;
  }
}
@media (max-width: 395px) {
  .join__button {
    font-size: 12px;
  }
}
@media (max-width: 360px) {
  .join__button {
    width: 150px;
  }
}
</style>
