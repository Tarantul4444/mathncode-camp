<template>
  <div class="modal" @click.stop="$emit('close')">
    <div class="modal__wrapper">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfZdP4IQGKytT1MmUehIGAeSTU_ul-eYx0vVLxHaW2ptV1bEQ/viewform?embedded=true"
        frameborder="0"
        class="modal__iframe"
        >Загрузка…</iframe
      >
    </div>
  </div>
</template>

<script>
export default {};
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
.modal__wrapper {
  background: #fff1e8;
  border-radius: 20px;
  padding: 30px;
}
.modal__iframe {
    height: 80vh;
    width: 640px;
}
</style>
