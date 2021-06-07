<template>
  <transition name="modal-fade">
    <div class="modal" @click.stop="$emit('close')">
      <div class="modal__wrapper">
        <div class="modal__head">
          <img class="modal__image" src="../assets/images/MnC_logo.svg" />
          <img
            src="../assets/icons/Cancel.svg"
            class="modal__cancel"
            @click="closeModal"
          />
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfZdP4IQGKytT1MmUehIGAeSTU_ul-eYx0vVLxHaW2ptV1bEQ/viewform?embedded=true"
          frameborder="0"
          class="modal__iframe"
          >Загрузка…</iframe
        >
      </div>
    </div>
  </transition>
</template>

<script>
import { EventBus } from "../main.js";

export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    closeModal() {
      EventBus.$emit("boolean", this.showModal);
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  z-index: 10000;
  align-items: center;
  justify-content: center;
}
.modal__head {
  display: flex;
  justify-content: space-between;
  padding: 0 10px 10px;
}
.modal__image {
  width: 140px;
}
.modal__cancel {
  margin-right: 40px;
  width: 40px;
}
.modal__wrapper {
  display: flex;
  flex-direction: column;
  background: #fff1e8;
  border-radius: 20px;
  padding: 30px;
}
.modal__iframe {
  height: 70vh;
  width: 640px;
}
/* Animations */
.modal-fade-enter-active {
  transition: all 0.5s ease;
}
.modal-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
/* Medias */
@media (max-width: 2561px) and (min-width: 1921px) {
  .modal__head {
    padding: 0 30px 50px;
  }
  .modal__image {
    width: 300px;
  }
  .modal__cancel {
    width: 100px;
  }
  .modal__iframe {
    width: 1000px;
  }
}
@media (max-width: 1921px) and (min-width: 1521px) {
  .modal__head {
    padding: 0 10px 30px;
  }
  .modal__image {
    width: 200px;
  }
  .modal__cancel {
    width: 50px;
  }
  .modal__iframe {
    width: 900px;
  }
}
@media (max-width: 1023px) {
  .modal__image {
    width: 80px;
  }
  .modal__cancel {
    width: 30px;
  }
  .modal__iframe {
    height: 70vh;
    width: 60vw;
  }
}
@media (max-width: 651px) {
  .modal__wrapper {
    padding: 20px;
  }
}
@media (max-width: 580px) {
  .modal__iframe {
    height: calc(100vh - 80px);
    width: calc(100vw - 30px);
  }
}
</style>
